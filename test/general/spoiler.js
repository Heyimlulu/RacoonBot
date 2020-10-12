/*
module.exports = {
    name: 'spoiler',
    description: 'Replace every letter in your text with letter spoiler!',
    execute(message, args) {
        let text = args.text;
        if (!text)
            return;

        text = text.split('').join('||||');

        // Send the final text
        message.delete();
        return message.channel.send('||' + text + '||');
    },
};

 */