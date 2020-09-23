const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'doge',
    description: "Translate the user's text in a funny lanuguage",
    category: 'fun',
    execute(message) {

        let toTranslate = message.content.split('racoondev doge').join("")

        fetch(`https://api.funtranslations.com/translate/doge.json?text=${toTranslate}`).then((response) => {
            return response.json();
        }).then((response) => {

            if(response.error.code == '429') {
                message.channel.send('Too Many Requests: Rate limit of 5 requests per hour exceeded. Please wait for 1 hour before using that command.')
            } else {

                const translationEmbed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setAuthor('RacoonBot')
                    .setTitle('Translation')
                    .addField('Text to translate', `${toTranslate}`, false)
                    .addField('Doge Language', response.contents.translated, false)

                message.channel.send(translationEmbed);
            }
        })
    }
}