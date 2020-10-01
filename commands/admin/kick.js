module.exports = (client) => {
    client.on('message', message => {

        if (message.author.bot) return;

        if (message.content.startsWith("racoon kick ")) {
            if (message.member.hasPermission("KICK_MEMBERS")) {
                if (message.mentions.members.first()) {
                    try {
                        message.mentions.members.first().kick().then((member) => {
                            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
                        })
                    } catch {
                        message.reply("I do not have permissions to kick");
                    }
                }
            } else {
                message.reply("You do not have permissions to kick");
            }
        }
    })
}