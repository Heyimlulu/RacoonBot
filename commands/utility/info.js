const Discord = require('discord.js');

module.exports = {
    name: 'info',
    description: 'Send some informations about the developer',
    execute(message) {

        const attachment = new Discord.MessageAttachment('./images/racoon-is-for-me.jpg', 'racoon-is-for-me.jpg');

        const Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Information')
            .setDescription(`RacoonBot made with 💛 by <@265896171384340480>`)
            .attachFiles(attachment)
            .setImage('attachment://racoon-is-for-me.jpg')
            .setTimestamp()

        message.channel.send(Embed);
    },
};