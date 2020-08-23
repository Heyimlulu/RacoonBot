const Discord = require('discord.js');

module.exports = {
    name: 'menu',
    description: 'Give you a random menu!',
    category: 'fun',
    execute(message) {
        var plats = [
            'Salade (au choix)',
            'Sandwich',
            'Taboulet',
            'Croissant',
            'Pizza'];
        var plat = plats[Math.floor(Math.random()*plats.length)];

        var boissons = [
            'Coca-Cola',
            'Coca-Cola Zero',
            'Redbull',
            'Ovomaltine',
            'Eau plate'];
        var boisson = boissons[Math.floor(Math.random()*boissons.length)];

        var desserts = [
            'Biscuits Ovomaltine',
            'Chips'];
        var dessert = desserts[Math.floor(Math.random()*desserts.length)];


        // Display the menu in a MessageEmbed
        // Display the menu for the actual user
        const Embed = new Discord.MessageEmbed()
        if(!message.mentions.users.first()) {
            Embed.setColor("RANDOM")
                .setTitle(`Voici votre menu du jour! ${message.author.tag}`)
                .setDescription('Spécial Coop')
                .addField('Plat principal', plat, false)
                .addField('Boisson', boisson, false)
                .addField('Dessert', dessert, false)
                .setTimestamp()
        }
        else
        {
            // Display the menu for the mentioned user
            const User = message.mentions.users.first()
            Embed.setColor("RANDOM")
                .setTitle(`Voici le menu du jour pour ${User.tag}`)
                .setDescription('Spécial Coop')
                .addField('Plat principal', plat, false)
                .addField('Boisson', boisson, false)
                .addField('Dessert', dessert, false)
                .setTimestamp()
        }

        message.channel.send(Embed);
    },
};