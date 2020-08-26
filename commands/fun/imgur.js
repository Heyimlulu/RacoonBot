/*
const fetch = require('node-fetch');

module.exports = {
    name: 'imgur',
    description: 'Send some racoon images from imgur!',
    category: 'fun',
    execute(message) {

        fetch('https://api.imgur.com/3/tags', {
            headers: { 'Authorization': 'Client-ID b4b6b4e0f8b1631' },
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if (response.success == 'false')
                return message.channel.send('An error has occurred');

            const i = Math.floor((Math.random() * response.data.length));

            message.channel.send(`**${response.data[i]}**\n${response.data[i]}`);
        });
    },
};

 */