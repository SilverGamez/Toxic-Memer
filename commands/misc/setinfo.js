const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'setinfo',
    description: 'Sets your info when you use profile command',
    usage: 'setinfo <info about you>',
    run: async (message, args, client, prefix, botdev) => {
        if (!args[0]) return message.channel.send('You need to set a text to be your info');

        const bio = args.join(" ");
        db.set(`user_${message.author.id}_bio`, bio);
        message.channel.send('Info set!');
    }
}