const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'ping',
    description: 'Ping the bot!',
    execute(message) {

        /*
        const msg = message.channel.send('Pinging...');

        msg.edit(`Pong!\nLatency is ${Math.floor(msg.createdAt - message.createdAt)}ms\nAPI Latency is ${Math.round(client.ping)}ms`);
        */

        /*
        // It sends the user "Pinging"
        message.channel.send("Pinging...").then(m =>{
            // The math thingy to calculate the user's ping
            var ping = m.createdTimestamp - message.createdTimestamp;

            // Basic embed
            var embed = new Discord.MessageEmbed()
                .setAuthor(`Your ping is ${ping}`)
                .setColor("Your Color")

            // Then It Edits the message with the ping variable embed that you created
            m.edit(embed)
        });

         */

        message.channel.send('Pong!');
    },
};