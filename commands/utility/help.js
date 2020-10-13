const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Displays the list of commands for the bot.',
    category: 'utility',
    execute(message) {

        const helpEmbed = new Discord.MessageEmbed()
            .setAuthor('RacoonBot')
            .setColor("RANDOM")
            .setTitle('Help commands list')
            .addField('⚡\u2000Admin commands', '~ ⚠ Ban and kick members permissions required', false) // Admin commands
            .addField('ban', 'Ban the user from a server\n*E.g. racoon ban @baduser*', true)
            .addField('kick', 'Kick the user from a server\n*E.g. racoon kick @baduser*', true)
            .addField('🎉\u2000Fun commands', '~', false) // Fun commands
            .addField('cuteometer', 'Tell a user how cute he is\n*E.g. racoon cute @user*', true)
            .addField('giphy', 'Send some random gif from giphy\n*E.g. racoon giphy dog*', true)
            .addField('imgur', 'Send some random images from imgur\n*E.g. racoon imgur cat*', true)
            .addField('love', 'Tell a user the love he has to another person\n*E.g. racoon love @user*', true)
            .addField('reddit', 'Send random images from the subreddit you choose\n*E.g. racoon reddit subredditName*', true)
            .addField('steam', "Send stats for a steam user\n*E.g. racoon steam userSteamid*", true)
            .addField('📝\u2000General commands', '~', false) // General commands
            .addField('advice', 'Send some random advices', true)
            .addField('fact', 'Send some random racoon facts', true)
            .addField('sayd', 'Write something you want the bot to repeat\n*E.g. racoon sayd Hello world!*', true)
            .addField('🔩\u2000Utility commands', '~', false) // Utility commands
            .addField('info', 'Send some informations about the author', true)
            .addField('ping', 'Ping the bot', true)
            .addField('role', 'Display the autorole commands help', true)
            .addField('serverinfo', 'Send some information about the server', true)
            .addField('stats', 'Show some stats about the bot', true)
            .addField('upvote', 'Send a link to vote for my bot', true)
            .addField('userinfo', 'Show info about a user\n*E.g. racoon userinfo @user*', true)

        //message.author.send(helpEmbed); // Send a dm to the user
        //message.reply("I've sent you a DM with the commands list details.");

        message.channel.send(helpEmbed);
    },
};