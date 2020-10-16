const Discord = require('discord.js');
const help = require('../../json/help.json');

module.exports = {
    name: 'help',
    description: 'Displays the list of commands for the bot.',
    category: 'utility',
    execute(message) {

        const helpEmbed = new Discord.MessageEmbed()
            .setAuthor('RacoonBot')
            .setColor("RANDOM")
            .setTitle('Help commands list')
            .addField('⚡ Admin commands', '~', false) // Admin commands
            .addField(`${help.admin.ban.name}`, `${help.admin.ban.description}\n *E.g. ${help.admin.ban.example}*`, true)
            .addField(`${help.admin.unban.name}`, `${help.admin.unban.description}\n *E.g. ${help.admin.unban.example}*`, true)
            .addField(`${help.admin.kick.name}`, `${help.admin.kick.description}\n *E.g. ${help.admin.kick.example}*`, true)
            .addField('🎉 Fun commands', '~', false) // Fun commands
            .addField(`${help.fun.cute.name}`, `${help.fun.cute.description}\n *E.g. ${help.fun.cute.example}*`, true)
            .addField(`${help.fun.giphy.name}`, `${help.fun.giphy.description}\n *E.g. ${help.fun.giphy.example}*`, true)
            .addField(`${help.fun.imgur.name}`, `${help.fun.imgur.description}\n *E.g. ${help.fun.imgur.example}*`, true)
            .addField(`${help.fun.love.name}`, `${help.fun.love.description}\n *E.g. ${help.fun.love.example}*`, true)
            .addField(`${help.fun.reddit.name}`, `${help.fun.reddit.description}\n *E.g. ${help.fun.reddit.example}*`, true)
            .addField(`${help.fun.steam.name}`, `${help.fun.steam.description}\n *E.g. ${help.fun.steam.example}*`, true)
            .addField('📝 General commands', '~', false) // General commands
            .addField(`${help.general.advice.name}`, `${help.general.advice.description}`, true)
            .addField(`${help.general.fact.name}`, `${help.general.fact.description}`, true)
            .addField(`${help.general.sayd.name}`, `${help.general.sayd.description}\n *E.g. ${help.general.sayd.example}*`, true)
            .addField('🔩 Utility commands', '~', false) // Utility commands
            .addField(`${help.utility.feedback.name}`, `${help.utility.feedback.description}\n *E.g. ${help.utility.feedback.example}*`, true)
            .addField(`${help.utility.info.name}`, `${help.utility.info.description}`, true)
            .addField(`${help.utility.ping.name}`, `${help.utility.ping.description}`, true)
            .addField(`${help.utility.role.name}`, `${help.utility.role.description}`, true)
            .addField(`${help.utility.serverinfo.name}`, `${help.utility.serverinfo.description}`, true)
            .addField(`${help.utility.stats.name}`, `${help.utility.stats.description}`, true)
            .addField(`${help.utility.upvote.name}`, `${help.utility.upvote.description}`, true)
            .addField(`${help.utility.userinfo.name}`, `${help.utility.userinfo.description}\n *E.g. ${help.utility.userinfo.example}*`, true)
            .addField('~', '~', true)

        //message.author.send(helpEmbed); // Send a dm to the user
        //message.reply("I've sent you a DM with the commands list details.");

        message.channel.send(helpEmbed);
    },
};