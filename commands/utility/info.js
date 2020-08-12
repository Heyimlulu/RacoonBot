const Discord = require('discord.js');

module.exports = {
    name: 'info',
    description: 'Info!',
    execute(message, args) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#800080')
            .setTitle('Information')
            .setAuthor('racoon bot#4764', 'https://cdn.discordapp.com/avatars/734426328002068481/6f46b18e9e16e51b17dc4249671be091.png?size=128', 'https://discord.com/')
            .setDescription("I'm a multifunction bot")

        message.channel.send(Embed);
    },
};