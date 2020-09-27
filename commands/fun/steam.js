const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'steam',
    description: 'Share stats for a steam user',
    category: 'fun',
    execute(message) {
        // 76561198034572288
        let steamSearch = message.content.split('racoondev steam').join("")

        if (steamSearch == '') {
            message.reply("Invalid steamID!");
        } else {
            fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=51A077A7E3AAED89CDD9946AE5560A4C&steamids=${steamSearch}`)
                .then((response) => {
                    return response.json();
                }).then((response) => {

                    if (response.response.players[0].communityvisibilitystate == 1) {
                        var stateProfile = 'Private';
                    }
                    if (response.response.players[0].communityvisibilitystate == 3) {
                        var stateProfile = 'Public';
                    }

                    // if (response.response.players[0].loccountrycode == '' && response.response.players[0].locstatecode == '' && response.response.players[0].loccityid == ''){
                    //
                    // }

                    let unix_timestamp = response.response.players[0].lastlogoff;
                    // Create a new JavaScript Date object based on the timestamp
                    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                    var dateLogoff = new Date(unix_timestamp * 1000);
                    // Hours part from the timestamp
                    var hours = dateLogoff.getHours() + 1;
                    // Minutes part from the timestamp
                    var minutes = "0" + dateLogoff.getMinutes();
                    // Seconds part from the timestamp
                    var seconds = "0" + dateLogoff.getSeconds();
                    // Will display time in 10:30:23 format
                    var lastlogoffTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

                    const unixTime = response.response.players[0].timecreated;
                    const dateCreatedat = new Date(unixTime*1000);

                    const steamEmbed = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setTitle(response.response.players[0].personaname)
                        .setDescription(response.response.players[0].realname)
                        .setURL(response.response.players[0].profileurl)
                        .addField('SteamID', response.response.players[0].steamid, false)
                        .addField('Profile visibility', stateProfile, false)
                        .addField('Country code', response.response.players[0].loccountrycode, true)
                        .addField('State code', response.response.players[0].locstatecode, true)
                        .addField('City code', response.response.players[0].loccityid, true)
                        .addField('Last logoff', lastlogoffTime, false)
                        .addField('Created at', dateCreatedat, false)
                     .setThumbnail(response.response.players[0].avatarfull)

                message.channel.send(steamEmbed);
            })
        }
    }
}