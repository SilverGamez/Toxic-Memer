const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'setbio',
    description: 'Sets a bio when you use profile command',
    usage: 'setbio <bio>',
    run: async (message, args, client, prefix, botdev) => {
        if (!args[0]) return message.channel.send('You need to set a text to be your bio');

        const bio = args.join(" ");
        db.set(`user_${message.author.id}_bio`, bio);
        message.channel.send('Bio set!');
    }
}