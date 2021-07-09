const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: 'daily',
  description: 'Claim your daily reward',
  usage: 'daily',
  run: async (message, args, client, prefix, botdev) => {
    let user = message.author;

    let timeout = 86400000;
    let amount = 10000;

    const hasVip = db.get(`items-vip-${message.author.id}`);
    if (hasVip === true) {
      amount = 15000;
    }

    let daily = await db.fetch(`daily-${user.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {

      let timeEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`You've already collected your daily reward in the past 24 hours`);
      message.channel.send(timeEmbed)
    } else {
      let moneyEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`You've collected your daily reward of ${amount} coins`);
      message.channel.send(moneyEmbed)
      db.add(`purse-${user.id}`, amount)
      db.set(`daily-${user.id}`, Date.now())


    }
  }
}