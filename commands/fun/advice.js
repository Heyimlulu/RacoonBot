const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'advice',
    description: 'Mr Racoon will tell you random advice!',
    category: 'fun',
    execute(message) {

        fetch("http://api.adviceslip.com/advice").then((response) => {
            return response.json();
        }).then((response) => {
            const adviceEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setAuthor('RacoonBot')
                .setTitle('Random advice')
                .setDescription(response.slip.advice)

            message.channel.send(adviceEmbed);
        })
    }
}