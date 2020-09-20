const Discord = require('discord.js');

module.exports = {
    name: 'userinfo',
    description: 'Display info box for a user!',
    execute(message) {
        if(!message.mentions.users.first()) {
            const userInfo = new Discord.MessageEmbed()
                .setAuthor('RacoonBot')
                .setTitle('User info')
                .setColor("RANDOM")
                .setThumbnail(message.author.displayAvatarURL())
                // Display the full username and Discriminator is for the user discord number
                .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
                .addField("ID", message.author.id)
                .addField("Created at", message.author.createdAt)
            message.channel.send(userInfo)
        }
        else
        {
            // Display the avatar info for the mentioned user
            const mentionUser = message.mentions.users.first()
            const mentionUserinfo = new Discord.MessageEmbed()
                .setAuthor('RacoonBot')
                .setTitle('User info')
                .setColor("RANDOM")
                .setThumbnail(mentionUser.displayAvatarURL())
                .addField("Full Username", `${mentionUser.tag}`)
                .addField("ID", mentionUser.id)
                .addField("Created at", mentionUser.createdAt)
            message.channel.send(mentionUserinfo)
        }
    },
};