const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'doge',
    description: "Translate the user's text in a funny lanuguage",
    category: 'fun',
    execute(message) {

        let toTranslate = message.content.split('racoon doge').join("")

        fetch(`https://api.funtranslations.com/translate/doge.json?text=${toTranslate}`).then((response) => {
            return response.json();
        }).then((response) => {
            try {
                const translationEmbed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setAuthor('RacoonBot')
                    .setTitle('Translation')
                    .addField('Text to translate', `${toTranslate}`, false)
                    .addField('Doge Language', response.contents.translated, false)

                message.channel.send(translationEmbed);
            } catch {
                message.channel.send('No input specified or too Many Requests.')
            }
        })
    }
}