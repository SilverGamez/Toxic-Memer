const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: 'dig',
  description: 'Dig dig dig for coins',
  usage: 'dig',
  run: async (message, args, client, prefix, botdev) => {
    let random = Math.floor(Math.random() * 10000) + 1;

    let vipFind = db.get(`items-vip-${message.author.id}`);
    if (vipFind === true) random = Math.floor(Math.random() * 15000) + 1;

    let timeout = 300000;

    let wait = await db.fetch(`dig-wait-${message.author.id}`);
    let shovel = db.get(`items-shovel-${message.author.id}`);
    if (!shovel) return message.channel.send(`You have to buy a shovel!`);


    if (wait !== null && timeout - (Date.now() - wait) > 0) {

      message.channel.send(`You have already used this command in the last 5 minutes.`);
    } else {


      message.channel.send(`<:shovel:850986474463952917> You dug and found ${random} coins`);

      await db.add(`purse-${message.author.id}`, random)
      await db.set(`dig-wait-${message.author.id}`, Date.now());
    }
  }
}