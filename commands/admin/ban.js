module.exports = (client) => {
    client.on('message', message => {

        if (message.author.bot) return;

        if (message.content.startsWith("racoon ban ")) {
            if (message.member.hasPermission("BAN_MEMBERS")) {
                if (message.mentions.members.first()) {
                    try {
                        message.mentions.members.first().ban().then((member) => {
                            message.channel.send(":wave: " + member.displayName + " has been successfully banned :point_right: ");
                        })
                    } catch {
                        message.reply("I do not have permissions to ban");
                    }
                }
            } else {
                message.reply("You do not have permissions to ban");
            }
        }
    })
}