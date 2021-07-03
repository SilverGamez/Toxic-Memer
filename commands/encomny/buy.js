const Discord = require('discord.js');
const db = require('quick.db');
const embed = require('../../handlers/functions/embedCreator');

module.exports = {
    name: 'buy',
    description: 'Buy an item from the shop',
    usage: 'buy <item>',
    run: async (message, args, client, prefix, botdev) => {
        let user = message.author;
        let author = db.fetch(`purse-${user.id}`);

        switch (args[0]) {
            case 'rod':
                const descriptionR = "You need 10,000 coins in your purse to buy this item!";
                if (author < 10000) return embed(message, 'You dont have enough', 'RANDOM', descriptionR);

                let iffish = await db.get(`items-rod-${user.id}`);
                if (iffish !== null) {
                    if (iffish.rod > 0) return message.channel.send("You already have a fishing rod!");
                }
                //await client.db.fetch(`fish_${message.guild.id}_${user.id}`)
                await db.add(`items-rod-${message.author.id}`, 1);
                await db.set(`fishing-${user.id}.fish`, [])

                let Embed7 = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(` Purchased a Fishing rod For 10,000 Coins`);

                await db.subtract(`purse-${message.author.id}`, 10000)
                message.channel.send(Embed7)
                break;

            case 'vip':
                let vip;
                const hasVip = db.fetch(`items-vip-${message.author.id}`);
                if (hasVip === true) {
                    vip = true;
                    return message.channel.send('You are already vip!');
                }
                if (hasVip === null) {
                    if (author < 1000000) return embed(message, 'You dont have enough', 'RANDOM', "You need 1,000,000 in your purse to buy vip!");
                    vip = false;
                    db.set(`items-vip-${message.author.id}`, true);
                    db.subtract(`purse-${message.author.id}`, 1000000)
                    embed(message, '', 'RANDOM', 'You purchased vip for 1,000,000 coins!')
                }
                break;

            case 'shovel':
                const descriptionS = "You need 50,000 in your purse to buy this item!";
                if (author < 50000) return embed(message, 'You dont have enough', 'RANDOM', descriptionS);

                let shovel = await db.get(`items-shovel-${user.id}`);
                if (shovel !== null) {
                    if (shovel > 0) return message.channel.send("You already have a shovel!");
                }

                await db.add(`items-shovel-${message.author.id}`, 1);
                await db.subtract(`purse-${user.id}`, 50000);
                embed(message, '', 'RANDOM', 'Purchased a shovel for 50,000 coins');
                break;

            case 'laptop':
                const descriptionL = "You need 100,000 in your purse to buy this item!";
                if (author < 100000) return embed(message, 'You dont have enough', 'RANDOM', descriptionL);

                let laptop = await db.get(`items-laptop-${user.id}`);
                if (laptop !== null) {
                    if (laptop > 0) return message.channel.send("You already have a laptop!");
                }

                await db.add(`items-laptop-${user.id}`, 1);
                await db.subtract(`purse-${user.id}`, 100000);
                embed(message, '', 'RANDOM', 'Purchased a laptop for 100,000 coins');
                break;

            case 'shotgun':
                const descriptionSG = "You need 75,000 in your purse to buy this item!";
                if(author < 75000) return embed(message, 'Dont have enough', 'RANDOM', descriptionSG);

                let shotgun = await db.get(`items-shotgun-${user.id}`);
                if(shotgun !== null){
                    if(shotgun > 0) return message.channel.send('You already have a shotgun!');
                }

                await db.add(`items-shotgun-${user.id}`, 1);
                await db.subtract(`purse-${user.id}`, 75000);
                embed(message, '', 'RANDOM', 'Purchased a shotgun for 75,000 coins')
        }
    }
}