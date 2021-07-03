const { defaultPrefix, botdev } = require('../config.json');
const db = require('quick.db');
const xp = require('../handlers/functions/xp');

module.exports.run = async (client, message) => {
    if (message.author.bot) return;
    if (!message.guild) return;

    let prefix = db.get(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = defaultPrefix

    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);

    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) {
        setTimeout(() => {
            let disable = db.get(`disabled_command-${cmd}-${message.guild.id}`);
            if (disable === true) return message.channel.send('This command has been disabled by an admin!');

            db.add(`user_${message.author.id}_commands`, 1);
            command.run(message, args, client, prefix, botdev, cmd);
            xp(message);
        }, 50)
    }
}