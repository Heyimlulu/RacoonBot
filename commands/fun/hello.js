module.exports = {
    name: 'hello',
    description: 'Hello!',
    execute(message, args) {
        message.reply('Good morning!');
    },
};