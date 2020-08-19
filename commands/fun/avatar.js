const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Get your own or someone else avatar!',
    category: 'fun',
    execute(message) {

        // Display the menu in a MessageEmbed
        const Embed = new Discord.MessageEmbed()
        const roles = []
            if(!message.mentions.users.first()) {
                message.member.roles.cache.forEach(role=>{
                    roles.push(role.name)
                })
                Embed.setTitle(`This is you! ${message.author.tag}`)
                Embed.setDescription(`Roles: ${roles}`)
                Embed.setImage(message.author.displayAvatarURL())
                //Embed.setThumbnail(message.author.displayAvatarURL())
                Embed.setColor("RANDOM")
                message.channel.send(Embed)
            }
            else
            {
                const User = message.mentions.users.first()
                Embed.setTitle(`${User.tag}'s avatar`)
                Embed.setImage(User.displayAvatarURL())
                //Embed.setThumbnail(User.displayAvatarURL())
                Embed.setColor("RANDOM")
                message.channel.send(Embed)
            }
    },
};