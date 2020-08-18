const Discord = require('discord.js');

module.exports = {
    name: 'info',
    description: 'Info!',
    execute(message) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#800080')
            .setTitle('Informations')
            .setDescription('Racoon bot made with 💛 by Ｙｕｋｉ#0001')
            /*
            .setDescription('Made with 💛 by Ｙｕｋｉ#0001')
            .addField('racoon bot by Ｙｕｋｉ#0001', 'You can find it here at the [Racoon Bot Repository](https://github.com/Heyimlulu/racoon-bot)', true)
             */
            .setTimestamp()

        message.channel.send(Embed);
    },
};