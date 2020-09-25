const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'reddit',
    description: 'Search thread from reddit!',
    category: 'fun',
    execute(message) {

        let redditSearch = message.content.split('racoon reddit').join('').trim()
        
        if (redditSearch == '') {
            message.channel.send("No subreddit specified!");
        } else {
            fetch('https://www.reddit.com/r/' + redditSearch + '.json?limit=100').then((response) => {
                return response.json();
            }).then((response) => {
                if (response.error == 404)
                    return message.channel.send('Not a valid subreddit');

                if (response.data.dist == 0)
                    return message.channel.send('Not a valid subreddit');

                let i = Math.floor((Math.random() * response.data.children.length));

                if (response.data.children[i].data.over_18 == true && !message.channel.nsfw)
                    return message.channel.send('No nsfw');

                const redditEmbed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(response.data.children[i].data.title)
                    .setDescription(response.data.children[i].data.selftext)
                    .setURL('https://reddit.com' + response.data.children[i].data.permalink)
                    .setImage(response.data.children[i].data.url_overridden_by_dest)
                    .setFooter(`/r/${response.data.children[i].data.subreddit} | ⬆ ${response.data.children[i].data.ups} 🗨 ${response.data.children[i].data.num_comments}`);

                message.channel.send(redditEmbed);
            });
        }
    },
};