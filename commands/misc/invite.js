const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'invite',
    description: 'Invites the bot',
    usage: 'invite',
    run: async(message, args, client, prefix, botdev) => {
        message.channel.send('Click this link to invite me: https://dsc.gg/toxic-memer');
    }
}