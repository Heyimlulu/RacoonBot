const Discord = require('discord.js');

module.exports = {
    name: 'upvote',
    description: 'Send a link to vote for my bot!',
    execute(message) {

        const UpvoteEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Vote for my bot')
            .setAuthor(message.author.username)
            .setDescription('You can vote for my bot if you think it is awesome!')
            .addField('top.gg', 'https://top.gg/bot/.../vote')
            .addField('Discordbotlist.com', 'https://discordbotlist.com/bots/.../upvote')
            .setTimestamp()
            .setFooter('Thanks for the upvote', message.author.displayAvatarURL());

        message.channel.send(UpvoteEmbed);
    },
};