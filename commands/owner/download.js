const Discord = require('discord.js');
const fs = require('fs')
const youtubedl = require('youtube-dl')

const config = require('../../json/config.json');

module.exports = {
    name: 'download',
    description: 'Download videos from a youtube url',
    category: "owner",
    execute(message) {

        if (message.author.id !== '265896171384340480') {
            message.reply(`You did not have permissions to run that command!`);
            return;
        }

        let ytdlUrl = message.content.split(`${config.prefix}download`).join("").trim(); // Listen to user's input

        if (!ytdlUrl) {
            return message.reply('Which video do you want to download?');
        }

        const video = youtubedl(`${ytdlUrl}`,
            // Optional arguments passed to youtube-dl.
            ['--format=18'],
            // Additional options can be given for calling `child_process.execFile()`.
            { cwd: __dirname })

        try {
            // Will be called when the download starts.
            video.on('info', function (info) {

                const ytdlEmbed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`Your video "${info.title}" is ready!`)
                    .setURL(info.url)
                    .setImage(info.thumbnail)
                    .setTimestamp()

                message.channel.send(ytdlEmbed);

                //message.channel.send("Here's your video!", {files: ['./video.mp4']}); // Insert the previously created file on channel
            })

            //video.pipe(fs.createWriteStream('./video.mp4')) // Will create a new file called video.mp4 on root directory
        } catch (e) {
            console.log(e);
        }

    },
};