const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Displays the list of commands for the bot.',
    category: 'utility',
    execute(message) {

        const helpEmbed = new Discord.MessageEmbed()
            .setAuthor('RacoonBot')
            .setColor("RANDOM")
            .setTitle('Commands list')
            .addField('admin', '- ban\n- kick')
            .addField('fun', '- cuteometer\n- giphy\n- imgur\n- love\n- reddit\n- steam')
            .addField('general', '- advice\n- fact\n- sayd')
            .addField('utility', '- info\n- ping\n- role\n- serverinfo\n- stats\n- upvote\n- userinfo')

        message.channel.send(helpEmbed)
    },
};