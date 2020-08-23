const Discord = require('discord.js');

module.exports = {
    name: 'userinfo',
    description: 'Display info box for a user!',
    execute(message) {
        const UserInfo = new Discord.MessageEmbed()

        if(!message.mentions.users.first()) {
            UserInfo.setAuthor(message.author.username)
                .setDescription("This is the user's info")
                .setColor("RANDOM")
                .setThumbnail(message.author.displayAvatarURL())
                // Display the full username
                // Discriminator is for the user discord number
                .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
                .addField("ID", message.author.id)
                .addField("Created at", message.author.createdAt)
            message.channel.send(UserInfo)
        }
        else
        {
            // Display the avatar info for the mentioned user
            const User = message.mentions.users.first()
            UserInfo.setAuthor(User.username)
                .setDescription("This is the user's info")
                .setColor("RANDOM")
                .setThumbnail(User.displayAvatarURL())
                .addField("Full Username", `${User.tag}`)
                .addField("ID", User.id)
                .addField("Created at", User.createdAt)
            message.channel.send(UserInfo)
        }
    },
};