const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'reborn',
    description: 'You reborn and lose all your items',
    usage: 'reborn',
    aliases: ['restart'],
    run: async (message, args, client, prefix, botdev) => {
        let filter = (n) => n.author.id === message.author.id;

        message.channel.send('Are you sure you want to reborn? You lose all your items. This is **permant**');
        message.channel
            .awaitMessages(filter, {
                max: 1,
                time: 60000
            })
            .then(async (collect) => {
                const content = collect.first().content.toLowerCase();
                if (content === 'yes') {
                    db.delete(`purse-${message.author.id}`);
                    db.delete(`bank-${message.author.id}`);
                    db.delete(`items-vip-${message.author.id}`);
                    db.delete(`items-rod-${message.author.id}`);
                    db.delete(`items-shovel-${message.author.id}`);
                    db.delete(`items-laptop-${message.author.id}`);
                    db.delete(`items-shotgun-${message.author.id}`);
                    message.channel.send('You have been reborned!');
                } else {
                    message.channel.send('Cancelled');
                }
            })
    }
}