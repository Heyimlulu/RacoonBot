const fetch = require('node-fetch');
const config = require("../../json/config.json");

module.exports = {
    name: 'imgur',
    description: 'Send some random images from imgur!',
    category: 'fun',
    execute(message) {

        let imgurSearch = message.content.split(`${config.prefix}imgur`).join("")

        if (imgurSearch == '') {
            message.reply("Invalid search argument");
        } else {
            fetch(`https://api.imgur.com/3/gallery/search/viral/top/0?q=${imgurSearch}`, {
                headers: {'Authorization': 'Client-ID b4b6b4e0f8b1631'},
            }).then((response) => {
                return response.json();
            }).then((response) => {
                if (response.success == 'false')
                    return message.channel.send('An error has occurred');

                message.channel.send('Please wait...').then((msg) => {
                    setTimeout(() => {
                        const i = Math.floor((Math.random() * response.data.length));
                        msg.delete(); // Delete previous message
                        message.channel.send(`**${response.data[i].title}**\n${response.data[i].link}`); // Edit from the previous message
                    }, 2000);
                });

                /*
                const i = Math.floor((Math.random() * response.data.length));

                message.channel.send(`**${response.data[i].title}**\n${response.data[i].link}`);

                 */
            });
        }
    },
};