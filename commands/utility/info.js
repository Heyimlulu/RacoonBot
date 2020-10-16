const Discord = require('discord.js');

module.exports = {
    name: 'info',
    description: 'Send some informations about the developer',
    execute(message) {
        const Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Information')
            .setDescription(`RacoonBot made with 💛 by Yuki 💜#0001`)
            .setTimestamp()

        message.channel.send(Embed);
    },
};