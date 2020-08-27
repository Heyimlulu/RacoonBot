module.exports = {
    name: 'kill',
    description: 'Shutdown the bot.',
    category: 'owner',
    execute(message) {

        console.log('\x1b[31m\x1b[47m\x1b[5mSHUTING DOWN!!!!!\x1b[0m');
        message.channel.send('k bye thx', { files: ['https://cdn.discordapp.com/attachments/532980995767533568/553656409452183552/bad_things_happen_to_good_people.jpg']});
        console.log('\x1b[31m\x1b[47m\x1b[5mSHUTING DOWN!!!!!\x1b[0m');
        process.exit();
    },
};