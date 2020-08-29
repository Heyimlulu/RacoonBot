const Discord = require('discord.js');

module.exports = {
    name: 'love',
    description: `Calculate the love you have to another person.`,
    category: 'owner',
    execute(message) {

        if (message.author.id !== '265896171384340480') {
            message.channel.send(`Sorry, you can't do that ${message.author.tag}.`)
            return

        } else {
            if (message.mentions.users.first()) {
                const love = Math.random() * 100
                const loveIndex = Math.floor(love / 10)
                const loveLevel = '💖'.repeat(loveIndex) + '💔'.repeat(10 - loveIndex)

                const User = message.mentions.users.first()
                const loveEmbed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle('Love')
                    .addField(`**${message.author.tag}** loves **${User.tag}** this much`, `💟 ${Math.floor(love)}%\n\n${loveLevel}`)
                    .setThumbnail(User.displayAvatarURL())

                message.channel.send(loveEmbed)
            } else {
                message.channel.send('You did not specified a user!')
            }
        }
    },

};