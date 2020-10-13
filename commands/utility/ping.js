const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Ping the bot!',
    category: 'utility',
    execute(message) {

        var ping = Date.now() - message.createdTimestamp + " ms";
        // message.channel.send("🏓 Your ping is " + `${ping}`);

        const Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Pong 🏓')
            .setDescription("Your ping is " + `${ping}`)
            .setTimestamp()

        message.channel.send(Embed);
    }
};