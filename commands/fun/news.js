const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'news',
    description: 'Show you an article or news',
    category: 'fun',
    execute(message) {

        let news = message.content.split('racoondev news').join("")

        if (news == '') {
            message.channel.send("C'est vide zebi")
        } else {

            fetch(`https://newsapi.org/v2/everything?q=${news}&from=2020-09-22&to=2020-09-22&sortBy=popularity&apiKey=3646c09c747e424fb89b70f22ab3a384`,
            ).then((response) => {
                return response.json();
            }).then((response) => {
                if (response.success == 'false')
                    return message.channel.send('An error has occurred');

                const i = Math.floor((Math.random() * response.articles.length));

                const newsEmbed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setAuthor('RacoonBot')
                    .setTitle(response.articles[i].title)
                    .setDescription(response.articles[i].description)
                    .addField('Article URL', response.articles[i].url, false)
                    .setThumbnail(response.articles[i].urlToImage)
                    .addField('published At', response.articles[i].publishedAt, true)
                    .addField('Author', response.articles[i].author, true)

                message.channel.send(newsEmbed);
            });
        }
    }
}