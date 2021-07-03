const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'hunt',
    description: 'Hunt in the woods for animals or coins',
    usage: 'hunt',
    run: async (message, args, client, prefix, botdev) => {
        let timeout = 300000;
        let wait = db.get(`hunt-cooldown-${message.author.id}`);

        if (wait !== null && timeout - (Date.now() - wait) > 0) {

            message.channel.send(`You have already used this command in the last 5 minutes.`);

        } else {
            let randomCoins = Math.floor(Math.random() * 15000) + 1;

            let vip = db.get(`items-vip-${message.author.id}`);
            if (vip == true) randomCoins = Math.floor(Math.random() * 20000) + 1;

            let phrases = [
                `You searched the woods and found ${randomCoins}`,
                `You decided to search the woods and you found ${randomCoins}`,
                `You found ${randomCoins} searching in the woods`
            ]

            let index = Math.floor(Math.random() * 3) + 1;

            let shotgun = db.get(`items-shotgun-${message.author.id}`);
            if (shotgun == null) return message.channel.send('You need to buy a shot gun for this command :)');


            message.channel.send(phrases[index]);
            db.add(`purse-${message.author.id}`, randomCoins);
            await db.set(`hunt-cooldown-${message.author.id}`, Date.now());
        }
    }
}