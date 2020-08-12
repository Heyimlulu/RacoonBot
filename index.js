const Discord = require('discord.js');
//const client = new Discord();
const config = require("./config");
const fs = require('fs');

const client = new Discord.Client();
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

/*
const commandFilesOwner = fs.readdirSync('./commands/owner').filter(file => file.endsWith('.js'));
for (const file of commandFilesOwner) {
    const command = require(`./commands/owner/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

 */

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)

    var activities = [
        'Thief Simulator | my prefix is: racoon',
        'Stealing food | my prefix is: racoon',
        'Getting caught from stealing food | my prefix is: racoon'];
    var activity = activities[Math.floor(Math.random()*activities.length)];

    client.user.setActivity(activity);
});


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
});

client.login(config.token);