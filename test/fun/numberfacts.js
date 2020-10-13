const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'tacos',
    description: 'Mr Racoon will show you some randome tacos recipe!',
    category: 'fun',
    execute(message) {

        fetch("http://numbersapi.com/").then((response) => {
            return response.json();
        }).then((response) => {
            const tacosEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setAuthor('RacoonBot')
                .setTitle(response.shell.name)
                .setDescription(response.shell.recipe)

            message.channel.send(tacosEmbed);
        })
    }
}