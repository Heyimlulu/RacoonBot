const Discord = require('discord.js');

module.exports = {
    name: 'haha',
    description: 't!',
    category: 'owner',
    execute(message) {

        if (message.author.id !== '265896171384340480') {
            message.reply(`You did not have permissions to run that command!`);
            return;
        }

        /*
        message.channel.send('Please wait...').then((msg) => {
            setTimeout(() => {
                msg.edit('haha'); // Edit the "Please wait..." message
            }, 2000);
        })

         */

        message.channel.send('Please wait...').then((msg) => {
            setTimeout(() => {
                const Embed = new Discord.MessageEmbed();
                msg.delete(); // Delete previous message
                Embed.setColor("RANDOM")
                    .setTitle(`Hello World`)
                    .setTimestamp()
                message.channel.send(Embed); // Send new message
            }, 2000); // Wait 2 seconds before editing message
        })

    },
};