const Discord = require('discord.js');

module.exports = {
    name: 'role',
    description: 'A role utility command!!',
    category: 'utility',
    execute(message, args) {

        var prefix = 'racoon';

        if (message.content === `${prefix} role`) {
            const InfoEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setAuthor('RacoonBot')
                .setTitle('Role informations')
                .setDescription('DISCLAIMER : The add role command will not work with blank space. Add an underscore if you want longer role')
                .addField('racoon role create Role_name #Hex_Color [<= example: #111000]', 'Create new role')
                .addField('racoon role delete Role_name', 'Delete existing role')
                .addField('racoon role add Role_name', 'Add role to user')
                .addField('racoon role remove Role_name', 'Remove role to user')
            message.channel.send(InfoEmbed)
        }  else {

            // Check if the user has ADMINISTRATOR permission
            //if (!message.member.permissions.has("ADMINISTRATOR")) message.channel.send(`You did not have administror permission!, ${message.author.username}`)

            // Create role to server
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
                    return
                }
                // Check if the role has a color
                if (!rColor) {
                    message.channel.send('You did not specify a color for your role!')
                    return
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
                    .setTitle('New role assigned!')
                    .setDescription(`${message.author.tag} has created the role "${rName}"\n with Hex color code: ${rColor}`)
                    .setColor(rColor)

                // Send the MessageEmbed
                message.channel.send(Embed)
            }

            // Delete role from server.
            // REQUIRE MANAGE ROLE PERMISSION
            else if (args[0].toLowerCase() == 'delete') {
                if (message.content === `${prefix} role delete`){
                    message.channel.send('You did not specify a role!')
                    return
                } else {
                    if (!message.member.hasPermission("MANAGE_ROLES")) message.channel.send("You do not have manage roles permission!")

                    const roleDelete = message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(r => r.name == args[1])

                    if (!roleDelete) return message.channel.send("Couldn't delete that role!")

                    // Check if the role name is specified
                    if (!roleDelete) message.channel.send('You did not specify the name of the role you want to delete!')
                    // Delete the role
                    roleDelete.delete();
                    const EmbedDelete = new Discord.MessageEmbed()
                        .setTitle('Deleted role!')
                        .setDescription(`${message.author.tag} has deleted the role "${roleDelete.name}"`)

                    message.channel.send(EmbedDelete)
                }
            }

            // Add role to user
            else if (args[0].toLowerCase() == 'add') {
                if (message.content === `${prefix} role add`){
                    message.channel.send('You did not specify a role!')
                    return
                } else {
                    const roleAdd = message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(r => r.name == args[1])

                    if (!roleAdd) return message.channel.send("Couldn't assign that role!")

                    if (message.guild.member(message.author).roles.cache.has(roleAdd.id)) {
                        message.channel.send(`You already have that role! ${message.author.tag}`)
                    } else {
                        message.guild.member(message.author).roles.add(roleAdd);
                        const EmbedDelete = new Discord.MessageEmbed()
                            .setTitle('Role added!')
                            .setDescription(`${message.author.tag} has been received the role "${roleAdd.name}"`)

                        message.channel.send(EmbedDelete)
                    }
                }
            }

            // Remove role to user
            else if (args[0].toLowerCase() == 'remove') {
                if (message.content === `${prefix} role remove`){
                    message.channel.send('You did not specify a role!')
                    return
                } else {
                    const roleremove = message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(r => r.name == args[1])

                    if (!roleremove) return message.channel.send("Couldn't remove that role!")

                    if (message.guild.member(message.author).roles.cache.has(roleremove.id)) {
                        message.guild.member(message.author).roles.remove(roleremove);
                        const EmbedDelete = new Discord.MessageEmbed()
                            .setTitle('Role removed!')
                            .setDescription(`${message.author.tag} has been removed the role "${roleremove.name}"`)

                        message.channel.send(EmbedDelete)
                    } else {
                        message.channel.send(`You did not have that role! ${message.author.tag}`)
                    }
                }
            }
        }
    }
}