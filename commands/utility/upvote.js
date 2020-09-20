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
            .setTimestamp()
            .setFooter('💛 Thanks for the upvote', message.author.displayAvatarURL());

        message.channel.send(UpvoteEmbed);
    },
};