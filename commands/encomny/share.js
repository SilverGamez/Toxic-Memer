const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'share',
    description: 'Share coins with your friends',
    usage: 'share <@user> <amount>',
    aliases: ['gift'],
    run: async (message, args, client, prefix, botdev) => {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) return message.channel.send('That user doesnt exist!');
        if (user.id === message.author.id) return message.channel.send('You cannot give coins to your self dumbo!');

        let amount = args[1];
        if (!amount) return message.channel.send('Please add an amount to share!');
        if(isNaN(amount)) return message.channel.send('That isnt a number');

        if (amount > db.get(`purse-${message.author.id}`)) return message.channel.send('You cant give more money that you have in your purse!');

        db.subtract(`purse-${message.author.id}`, amount);
        db.add(`purse-${user.id}`, amount);

        message.channel.send(`Gave ${user} ${amount} coins`);
    }
}