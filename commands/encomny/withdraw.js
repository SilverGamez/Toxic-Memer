const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'withdraw',
    description: 'Withdraw coins out of your bank',
    usage: 'withdraw <amount>',
    aliases: ['with'],
    run: async (message, args, client, prefix, botdev) => {
        const bankMoney = db.get(`bank-${message.author.id}`);

        let amount = args[0];
        if (amount > bankMoney) return message.channel.send('You dont have enough todo that');
        if (!amount) return message.channel.send('Please add an amount to withdraw');

        if (args[0] === 'all') amount = db.get(`bank-${message.author.id}`);

        db.subtract(`bank-${message.author.id}`, amount);
        db.add(`purse-${message.author.id}`, amount);
        message.channel.send(`Withdrew ${amount} coins`);
    }
}