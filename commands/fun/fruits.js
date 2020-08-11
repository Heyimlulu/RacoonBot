module.exports = {
    name: 'fruit',
    description: 'Fruit!',
    execute(message, args) {
        message.react('🍎');
        message.react('🍊');
        message.react('🍇');
    },
};