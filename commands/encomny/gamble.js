const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'gamble',
    description: 'Gamble your coins to get x2, x3 or loose it all!',
    usage: 'gamble <amount>',
    run: async (message, args, client, prefix, botdev) => {
        let gambledCoins = args[0];
        let amount = Math.floor(Math.random() * 5) + 1;

        if(!gambledCoins || gambledCoins === 0) return message.channel.send('You gambled 0 coins and won a big fat nothing. Mabye add some coins next time');
        if(isNaN(gambledCoins)) return message.channel.send('"Amount" is not a number.');
        if (db.get(`purse-${message.author.id}`) < gambledCoins) return message.channel.send('You cant bet more than you have in your purse!');

        db.subtract(`purse-${message.author.id}`, gambledCoins);

        if (amount === 1 || amount === 2 || amount === 5) {
            const embed = new Discord.MessageEmbed()
                .setTitle('You lost!')
                .setDescription(`You gambled ${gambledCoins} and lost it all!`)
                .setColor('RED')

            message.channel.send(embed).then(m => m.react('<a:crossAnimated:860809773612138496>'))
        } else if (amount === 3) {
            const embed = new Discord.MessageEmbed()
                .setTitle('You won x2!')
                .setDescription(`You gambled ${gambledCoins} and won ${gambledCoins * 2}`)
                .setColor('YELLOW')

            db.add(`purse-${message.author.id}`, gambledCoins * 2);
            message.channel.send(embed).then(m => m.react('<a:giveawayAnimated:860808001879408691>'))
        } else if (amount === 4) {
            const embed = new Discord.MessageEmbed()
                .setTitle('You won x3!!!')
                .setDescription(`You gambled ${gambledCoins} and WON ${gambledCoins * 3}`)
                .setColor('GREEN')

            db.add(`purse-${message.author.id}`, gambledCoins * 3);
            message.channel.send(embed).then(m => m.react('<a:giveawayAnimated:860808001879408691>'))
        }
    }
}