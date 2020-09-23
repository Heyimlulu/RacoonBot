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
            .addField('fun', '- advice\n- catfacts\n- doge\n- cuteometer\n- love\n- imgur')
            .addField('general', '- fact\n')
            .addField('utility', '- help\n- info\n- ping\n- role\n- serverinfo\n- stats\n- uptime\n- upvote\n- userinfo')

        message.channel.send(helpEmbed)
    },
};