const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'deposit',
    description: 'Deposits coins to the bank',
    usage: 'deposit <amount/all>',
    aliases: ['dep'],
    run: async (message, args, client, prefix, botdev) => {
        const bankMoney = db.get(`purse-${message.author.id}`);

        let amount = args[0];
        if (amount > bankMoney) return message.channel.send('You dont have enough todo that');
        if (!amount) return message.channel.send('Please add an amount to deposit');

        if (args[0] === 'all') amount = db.get(`purse-${message.author.id}`);

        db.subtract(`purse-${message.author.id}`, amount);
        db.add(`bank-${message.author.id}`, amount);
        message.channel.send(`Deposited ${amount} coins`);
    }
}