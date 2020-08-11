module.exports = {
    name: 'fact',
    description: 'Facts!',
    execute(message, args) {
        var facts = [
            'Do you know raccoons have some of the most dexterous hands in nature?',
            'Raccoons are among the rare species that have actually benefited from the spread of humans.',
            'There are six raccoon species native to North and South America.',
            'Do you know racoons can be found across the globe?'];
        var fact = facts[Math.floor(Math.random()*facts.length)];
        message.channel.send(fact)
    },
};