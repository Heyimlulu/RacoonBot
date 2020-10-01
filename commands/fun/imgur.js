const fetch = require('node-fetch');

module.exports = {
    name: 'imgur',
    description: 'Send some images from imgur!',
    category: 'fun',
    execute(message) {

        let imgurSearch = message.content.split('racoon imgur').join("")

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

                const i = Math.floor((Math.random() * response.data.length));

                message.channel.send(`**${response.data[i].title}**\n${response.data[i].link}`);
            });
        }
    },
};