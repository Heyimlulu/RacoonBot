module.exports = {
    name: 'leave',
    description: 'Leave!',
    execute(message) {

        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voice.channel) {
            const connection = message.member.voice.channel.leave();
        } else {
            message.reply('You need to join a voice channel first!');
        }
    },
};