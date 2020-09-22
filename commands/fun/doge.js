/*
const fetch = require('node-fetch');

module.exports = {
    name: 'doge',
    description: 'Translate the user^s text in a funny lanuguage',
    category: 'fun',
    execute(message, args) {

        fetch(`https://api.funtranslations.com/translate/doge.json?text=${args}`).then((response) => {
            return response.json();
        }).then((response) => {
            message.channel.send(response.contents.translated);
        })
    }
}

 */