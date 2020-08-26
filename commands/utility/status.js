const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'status',
    description: 'Change the status of the bot.',
    category: 'utility',
    execute(message) {

        if (!message.content.startsWith('racoon2') || message.author.bot) return;

        const args = message.content.slice('racoon2'.length).trim().split(' ');
        const command = args.shift().toLowerCase();

        if (command === 'status') {
            if (!args.length) {
                return message.channel.send(`You did not specify a name for the status, ${message.author}!`);
            } else {

                client.user.setActivity(args, {type: "PLAYING"});
                message.channel.send(`Status have been set to ${args}`);

                //message.channel.send(`Command name: ${command}\nArguments: ${args}`);
            }
        }
    },
};