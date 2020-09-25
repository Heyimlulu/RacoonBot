const fetch = require('node-fetch');

module.exports = {
    name: 'giphy',
    description: 'Send some animated images from giphy!',
    category: 'fun',
    execute(message) {

        let giphySearch = message.content.split('racoon giphy').join("")

        if (giphySearch == '') {
            message.reply("You did not specified anything!");
        } else {
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=ui3ZqsloOOlzo7mcfjhWcwOc89vgo9u0&q=${giphySearch}`).then((response) => {
                return response.json();
            }).then((response) => {
                if (response.success == 'false')
                    return message.channel.send('An error has occurred');

                const i = Math.floor((Math.random() * response.data.length));

                message.channel.send(`**${response.data[i].title}**\n${response.data[i].url}`);
            });
        }
    },
};