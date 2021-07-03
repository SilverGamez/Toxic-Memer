const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'addmoney',
    description: 'Lets botdev add money',
    usage: 'addmoney <@user> <amount>',
    run: async (message, args, client, prefix, botdev) => {
        if (message.author.id === botdev) {
            const user = message.mentions.members.first();
            const amount = args[1];

            if (!user) return message.channel.send('You need to add a user');
            if (!amount) return message.channel.send('You need to add an amount');

            db.add(`purse-${user.id}`, amount);
            message.channel.send(`Added ${amount} to ${user.user.username}'s purse`);
        } else return;
    }
}