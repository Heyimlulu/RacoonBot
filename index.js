const Discord = require('discord.js');
//const client = new Discord(); <-- old const
const config = require("./json/config.json");
const fs = require('fs');
const WS = require('./ws/ws')
const client = new Discord.Client();

// JSON file for activities status
const playingJSON = require('./json/playing.json');
const streamingJSON = require('./json/streaming.json');

client.commands = new Discord.Collection();

// ================================================================================================ //

// Create Websocket instance with token you set in config.json file,
// port 5665 and passing the discord client instance
// locahost:5665/?token='your-token-here'
var ws = new WS(config.ws.token, config.ws.port, client)

// ===================================== Discord Collection ===================================== //

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

const commandFilesOwner = fs.readdirSync('./commands/owner').filter(file => file.endsWith('.js'));
for (const file of commandFilesOwner) {
    const command = require(`./commands/owner/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

// ==================================== On bot start ==================================== //

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)

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
            client.user.setActivity(activity, {type: "STREAMING", url: "https://www.twitch.tv/Heyimyuki_", name: "Heyimyuki_ on Twitch"});
        }
    }, 600000) // <-- run this every 10 minutes
});

// ================================= On message received ================================= //

client.on('message', message => {
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
