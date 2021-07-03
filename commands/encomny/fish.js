const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: 'fish',
  description: 'Fish up for coins',
  usage: 'fish',
  run: async (message, args, client, prefix, botdev) => {
    let randomAmount = Math.floor(Math.random() * 5000) + 1;
    let user = message.author;
    let timeout = 300000;

    let rod = await db.get(`items-rod-${user.id}`);
    let wait = await db.fetch(`fishing-${user.id}.wait`);


    if (!rod) return message.channel.send(`You have to buy a fishing rod!`);


    if (wait !== null && timeout - (Date.now() - wait) > 0) {

      message.channel.send(`You have already used this command in the last 5 minutes.`);

    } else {
      const vip = db.fetch(`items-vip-${message.author.id}`);
      if (vip === true) {
        randomAmount = Math.floor(Math.random() * 10000) + 1;
      }


      message.channel.send(`🎣 You fished and found ${randomAmount} coins`);

      await db.add(`purse-${message.author.id}`, randomAmount)
      await db.set(`fishing-${user.id}.wait`, Date.now());
    }
  }
}