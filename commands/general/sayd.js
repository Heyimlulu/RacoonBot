const config = require('../../json/config.json');

module.exports = {
    name: 'sayd',
    description: 'Type something you want the bot to repeat',
    execute(message) {

        let sayd = message.content.split(`${config.prefix}sayd`).join("").trim();

        if (!sayd) {
            return message.reply('');
        }

        message.delete();
        message.channel.send(sayd);
    },
};