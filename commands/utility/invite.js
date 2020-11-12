const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Get the invite link for the bot.',
    execute(message) {

        const attachment = new Discord.MessageAttachment('./images/racoonbot-banner.png', 'racoonbot-banner.png');

        const inviteEmbed = new Discord.MessageEmbed()
            .setAuthor('RacoonBot')
            .setColor("RANDOM")
            .setTitle("You can add me from here")
            .setURL('https://discord.com/api/oauth2/authorize?client_id=734426328002068481&permissions=268696823&scope=bot')
            .attachFiles(attachment)
            .setImage('attachment://racoonbot-banner.png')

        message.channel.send(inviteEmbed);
    },
};