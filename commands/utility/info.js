const Discord = require('discord.js');

module.exports = {
    name: 'info',
    description: 'Show some informations about the bot!',
    execute(message) {
        const Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Informations')
            .setDescription('RacoonBot made with 💛 by Ｙｕｋｉ#0001')
            .setTimestamp()

        message.channel.send(Embed);
    },
};