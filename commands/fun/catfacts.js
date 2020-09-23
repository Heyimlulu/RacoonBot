const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'catfacts',
    description: 'Share some facts about cats!',
    category: 'fun',
    execute(message) {

        fetch('https://cat-fact.herokuapp.com/facts',
        ).then((response) => {
            return response.json();
        }).then((response) => {
            if (response.success == 'false')
                return message.channel.send('An error has occurred');

            const i = Math.floor((Math.random() * response.all.length));

            const catfactsEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setAuthor('RacoonBot')
                .setTitle('Random cat facts')
                .setDescription(response.all[i].text)

            message.channel.send(catfactsEmbed);
        });
    },
};