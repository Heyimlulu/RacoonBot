const Discord = require('discord.js');

module.exports = {
    name: 'role',
    description: 'A role utility command!!',
    category: 'utility',
    execute(message, args) {
        // Check if the user has ADMINISTRATOR permission
        if (!message.member.permissions.has("ADMINISTRATOR")) message.channel.send(`You are not admin, ${message.author.username}`)

        // Create a role
        if (args[0].toLowerCase() == 'create') {
            let rName = message.content.split('racoon role create').join("")
            let rColor;
            args.forEach(arg => {
                if (arg.startsWith("#")) {
                    rColor = arg
                }
            })

            // Check if the role has a name
            if (!rName) {
                message.channel.send('You did not specify a name for your role!')
            }
            // Check if the role has a color
            if (!rColor) {
                message.channel.send('You did not specify a color for your role!')
            }

            // Check if the color got a correct Hex Color Code
            if (rColor >= 16777215) message.channel.send(`That hex color range was too big!`)
            if (rColor <= 0) message.channel.send(`That hex color range was too small`)
            rName = rName.replace(`${rColor}`, ``)

            // Create the role with the user's value
            const rNew = message.guild.roles.create({
                data: {
                    name: rName,
                    color: rColor,
                }
            })

            // Display the new created role in a MessageEmbed
            const Embed = new Discord.MessageEmbed()
                .setTitle('New role!')
                .setDescription(`${message.author.username} has created the role "${rName}"\n with Hex color code: ${rColor}\n with ID: ${rNew.id}`)
                .setColor(rColor)

            // Send the MessageEmbed
            message.channel.send(Embed)
        }
        // Delete a role
        /*
        else if (args[0].toLowerCase()=='delete'){
            const roleDelete = message.guild.roles.cache.get(args[1])||message.guild.roles.cache.find(r => r.name == args[1])
            if(!roleDelete) message.channel.send('You did not specify the name of the role you want to delete!')
            roleDelete.delete();
            const EmbedDelete = new Discord.MessageEmbed()
                .setTitle('Deleted role!')
                .setDescription(`${message.author.username} has deleted the role "${roleDelete.name}"\n with ID: ${roleDelete.id}\n with Hex color: ${roleDelete.color}`)
        }

         */
    }
}