const Discord = require('discord.js');
const db = require('quick.db');
const embed = require('../../handlers/functions/embedCreator');
 
module.exports = {
    name: 'sell',
    description: 'You can sell your items',
    usage: 'sell <item>',
    run: async (message, args, client, prefix, botdev) => {
        const item = args[0];

        if (item === 'rod') {
            const description = 'You dont own any rods!';
            const rod = db.get(`items-rod-${message.author.id}`);

            if (rod < 1) return embed(message, 'Dont have item', 'RED', description);

            db.subtract(`items-rod-${message.author.id}`, 1);
            db.add(`purse-${message.author.id}`, 9000)
            embed(message, 'Item sold', 'RANDOM', 'You sold your fishing rod for 9,000 coins');
        } else if (item === 'vip') {
            const description = 'You dont own vip!';
            const vip = db.get(`items-vip-${message.author.id}`);

            if (vip < 1) return embed(message, 'Dont have item', 'RED', description);

            db.delete(`items-vip-${message.author.id}`);
            db.add(`purse-${message.author.id}`, 950000)
            embed(message, 'Item sold', 'RANDOM', 'You sold your vip for 950,000');
        } else if (item === 'shovel') {
            const description = 'You dont own any shovels!';
            const vip = db.get(`items-shovel-${message.author.id}`);

            if (vip < 1) return embed(message, 'Dont have item', 'RED', description);

            db.delete(`items-shovel-${message.author.id}`);
            db.add(`purse-${message.author.id}`, 49000)
            embed(message, 'Item sold', 'RANDOM', 'You sold your shovel for 49,000');
        } else if (item === 'laptop') {
            const description = 'You dont own any laptops!';
            const vip = db.get(`items-laptop-${message.author.id}`);

            if (vip < 1) return embed(message, 'Dont have item', 'RED', description);

            db.delete(`items-laptop-${message.author.id}`);
            db.add(`purse-${message.author.id}`, 99000)
            embed(message, 'Item sold', 'RANDOM', 'You sold your laptop for 99,000');
        } else if(item === 'shotgun'){
            const description = 'You dont own any shotguns!';
            const vip = db.get(`items-shotgun-${message.author.id}`);

            if (vip < 1) return embed(message, 'Dont have item', 'RED', description);

            db.delete(`items-shotgun-${message.author.id}`);
            db.add(`purse-${message.author.id}`, 74000)
            embed(message, 'Item sold', 'RANDOM', 'You sold your shotgun for 74,000');
        } 
    }
}