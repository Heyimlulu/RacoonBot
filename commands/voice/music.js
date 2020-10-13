const config = require("../../json/config.json");
const ytdl = require('ytdl-core');

const queue = new Map();

module.exports = (client) => {
    client.on('message', async message => {

        const serverQueue = queue.get(message.guild.id);

        if (message.content.startsWith(`${config.prefix}play`)) {
            execute(message, serverQueue);
            return;
        } else if (message.content.startsWith(`${config.prefix}skip`)) {
            skip(message, serverQueue);
            return;
        } else if (message.content.startsWith(`${config.prefix}stop`)) {
            stop(message, serverQueue);
            return;
        }
    });
}

async function execute(message, serverQueue) {
    const args = message.content.split(`${config.prefix}play`);

    console.log(args);

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
        return message.channel.send(
            "You need to be in a voice channel to play music!"
        );
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send(
            "I need the permissions to join and speak in your voice channel!"
        );
    }

    const songInfo = await ytdl.getInfo(args[1]);
    const song = {
        title: songInfo.title,
        url: songInfo.video_url
    };

    if (!serverQueue) {
        const queueContruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };

        queue.set(message.guild.id, queueContruct);

        queueContruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueContruct.connection = connection;
            play(message.guild, queueContruct.songs[0]);
        } catch (err) {
            console.log(err);
            queue.delete(message.guild.id);
            return message.channel.send(err);
        }
    } else {
        serverQueue.songs.push(song);
        return message.channel.send(`${song.title} has been added to the queue!`);
    }
}

function skip(message, serverQueue) {
    if (!message.member.voice.channel)
        return message.channel.send("You have to be in a voice channel to stop the music!");
    if (!serverQueue)
        return message.channel.send("There is no song that I could skip!");
    serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
    if (!message.member.voice.channel)
        return message.channel.send("You have to be in a voice channel to stop the music!");
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection
        .play(ytdl(song.url, { quality: "highest" }))
        .on("finish", () => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`Start playing: **${song.title}**`);
}

        /*
        if (message.content === `${config.prefix}play`) {

            // Join the same voice channel of the author of the message
            if (message.member.voice.channel) {
                const voiceChannel = message.member.voice.channel;

                if (!voiceChannel) {
                    return message.reply('Please join a voice channel first!');
                }

                voiceChannel.join().then(voiceChannel => {
                    // Play a ReadableStream
                    const stream = ytdl('https://www.youtube.com/watch?v=zhf1pIl007o', { filter: 'audioonly' });
                    const dispatcher = voiceChannel.play(stream);

                    dispatcher.on('finish', () => voiceChannel.leave());
                })

            }
        }

         */