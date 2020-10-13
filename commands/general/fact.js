const racoonFacts = require('../../json/racoonFacts.json');

module.exports = {
    name: 'fact',
    description: 'Show some racoon facts',
    execute(message) {
        var fact = racoonFacts[Math.floor(Math.random()*racoonFacts.length)];
        message.channel.send(fact)
    },
};

// https://fungenerators.com/random/facts/animal/raccoon