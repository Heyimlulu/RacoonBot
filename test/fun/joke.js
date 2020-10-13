const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'joke',
    description: 'Mr Racoon will tell you a random joke!',
    category: 'fun',
    execute(message) {

        fetch("https://sv443.net/jokeapi/v2/joke/Any").then((response) => {
            return response.json();
        }).then((response) => {
            const adviceEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setAuthor('RacoonBot')
                .setTitle('Random joke')
                .addField('Category', response.category, false)
                .addField('Joke', response.joke, false)

            message.channel.send(adviceEmbed);
        })
    }
}