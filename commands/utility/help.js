const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Help!',
    execute(message, args) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#FFCE00')
            .setTitle('Commands list')
            //.setAuthor('racoon bot#4764', 'https://cdn.discordapp.com/avatars/734426328002068481/6f46b18e9e16e51b17dc4249671be091.png?size=128', 'https://discord.com/')
            .addField('racoon fact', 'Some value here', true)
            .addField('racoon image', 'Some value here', true)
            .addField('racoon say', 'Some value here', true)
            .addField('racoon help', 'Some value here', true)
            .addField('racoon info', 'Some value here', true)
            .addField('racoon ping', 'Some value here', true)
            .setThumbnail('https://cdn.discordapp.com/avatars/734426328002068481/6f46b18e9e16e51b17dc4249671be091.png?size=128')

        message.channel.send(Embed);
    },
};