const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Displays the list of commands for the bot.',
    category: 'utility',
    execute(message) {

        const helpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Commands list')
            .addField('fun', '- avatar\n- cuteometer\n- love\n- imgur')
            .addField('general', '- fact\n')
            .addField('utility', '- help\n- info\n- ping\n- role\n- server\n- uptime\n- userinfo')

        message.channel.send(helpEmbed)
    },
};