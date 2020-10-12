const Discord = require('discord.js');
const config = require("./json/config.json");
const fs = require('fs');
const client = new Discord.Client();

// import admin commands
const welcome = require('./commands/admin/welcome');
const leave = require('./commands/admin/leave');
const kick = require('./commands/admin/kick');
const ban = require('./commands/admin/ban');

// JSON file for activities status
const playingJSON = require('./json/playing.json');
const streamingJSON = require('./json/streaming.json');

// ===================================== Discord Collection ===================================== //

client.commands = new Discord.Collection();

const commandFilesFun = fs.readdirSync('./commands/fun').filter(file => file.endsWith('.js'));
for (const file of commandFilesFun) {
    const command = require(`./commands/fun/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

const commandFilesUtility = fs.readdirSync('./commands/utility').filter(file => file.endsWith('.js'));
for (const file of commandFilesUtility) {
    const command = require(`./commands/utility/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

const commandFilesGeneral = fs.readdirSync('./commands/general').filter(file => file.endsWith('.js'));
for (const file of commandFilesGeneral) {
    const command = require(`./commands/general/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

const commandFilesAdmin = fs.readdirSync('./commands/admin').filter(file => file.endsWith('.js'));
for (const file of commandFilesAdmin) {
    const command = require(`./commands/admin/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

// ==================================== On bot start ==================================== //

client.on('ready', () => {

    // Send stats to the console
    console.log('===========[ READY ]===========');
    console.log(`\x1b[32mLogged in as \x1b[34m${client.user.tag}\x1b[0m! (\x1b[33m${client.user.id}\x1b[0m)`)
    console.log(`Ready to serve in \x1b[33m${client.channels.cache.size}\x1b[0m channels on \x1b[33m${client.guilds.cache.size}\x1b[0m servers, for a total of \x1b[33m${client.users.cache.size}\x1b[0m users.`);
    console.log('===========[ READY ]===========');

    welcome(client);
    leave(client);
    kick(client);
    ban(client);

    setInterval(() => {
        let activityTypes = ['PLAYING','STREAMING']
        let randomType = activityTypes[Math.floor((Math.random()*activityTypes.length))]

        if (randomType == 'PLAYING'){

            // set var for playingJSON file
            var playing = playingJSON;

            let activity = playing[Math.floor(Math.random()*(playing.length - 1) + 1)];
            client.user.setActivity(activity, {type: "PLAYING"});
        } else if (randomType == 'STREAMING') {

            // set var for streamingJSON file
            var streaming = streamingJSON;

            let activity = streaming[Math.floor(Math.random()*(streaming.length - 1) + 1)];
            client.user.setActivity(activity, {type: "STREAMING", url: "https://www.twitch.tv/RacoonBot_", name: "RacoonBot_ on Twitch"});
        }
    }, 1800000) // <-- run this every 30 minutes
});

// ================================= On message received ================================= //

client.on('message', message => {

    if (message.content === `${config.prefix}list`) {
        try {
            const statsEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Bot stats')
                .setAuthor('RacoonBot')
                .addField('Servers', client.guilds.cache.size, false)
                .addField('Channels', client.channels.cache.size, false)
                .addField('Users', client.users.cache.size, false)

            message.channel.send(statsEmbed);
        } catch (error) {
            // handle failure of any Promise rejection inside here
            console.log(error);
        }
    }

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
    console.log(message.content);

});

// ======================================= Bot logon ======================================= //

client.login(config.token);
