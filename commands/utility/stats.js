const Discord = require('discord.js');
// const version = require('discord.js');
const os = require('os');

module.exports = {
    name: 'stats',
    description: 'Show stats about the bot',
    category: 'utility',
    execute(message) {

        const bytesToSize = (bytes) => {
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if (bytes == 0) return '0 Byte';
            const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
        };

        const statsEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Bot stats')
            .setAuthor('RacoonBot')
            .addField('Ram usage', `${bytesToSize(process.memoryUsage().heapUsed)}/${bytesToSize(os.totalmem)}`, false)
            .addField('CPU', `${os.cpus()[0].model} (${os.cpus().length} core)`, false)
            // .addField('CPU architecture', `${os.arch()}`)
            .addField('OS', `${os.platform()} ${os.release()}`, false)
            // .addField('OS', `${os.version()}`, true)
            .addField('Nodejs version', process.version, false)
            // .addField('Discord.js version', version, true)
            .setTimestamp();

        message.channel.send(statsEmbed);

    }
};