const Discord = require('discord.js');

module.exports = {
    name: 'upvote',
    description: 'Send a link to vote for my bot!',
    execute(message) {

        const UpvoteEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Vote for my bot')
            .setAuthor('RacoonBot')
            .setDescription('You can vote for my bot if you like it!')
            // .addField('top.gg', 'https://top.gg/bot/.../vote')
            .addField('Discordbotlist.com', 'https://discordbotlist.com/bots/racoonbot/upvote')
            .setImage('https://lh3.googleusercontent.com/proxy/jO7O_alsGy8r3uDQpJIOVxQDUjsM1Kk5C4K3PCRRQV1_Tfml2ky2-C2fbI_m444SlnnT8AQbkwx4FQPO2gZAl612sUHgCgzWxcgAwtdHIQ1YbfFdDrCyJNIYwDMqD1NlWK9JAjl504G0Wepg3zI_uygwjAmu8wPYEFI')
            .setTimestamp()
            .setFooter('💛 Thanks for the upvote', message.author.displayAvatarURL());

        message.channel.send(UpvoteEmbed);
    },
};