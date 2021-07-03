const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: 'rob',
  description: 'Rob a user like a nasty boi',
  usage: 'rob <@user>',
  run: async (message, args, client, prefix, botdev) => {
    let randomAmount = Math.floor(Math.random() * 5000) + 1;

    const vip = db.fetch(`items-vip-${message.author.id}`);
    if (vip === true) randomAmount = Math.floor(Math.random() * 10000) + 1;
    let user =
      message.mentions.users.first() ||
      message.guild.members.cache.get(args[0])

    if (!user) return message.channel.send('Who are you robbing dumbo');

    let targetuser = await db.fetch(`purse-${user.id}`);
    let author = await db.fetch(`rob-${message.guild.id}-${message.author.id}`);
    let author2 = await db.fetch(`purse-${message.author.id}`);



    let timeout = 300000;

    if (author !== null && timeout - (Date.now() - author) > 0) {

      let timeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`You have already robbed someone in the past 5 minutes`);
      message.channel.send(timeEmbed)

    } else {

      let moneyEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`You need at least 5,000 coins in your wallet to rob someone`);


      if (author2 < 5000) {
        return message.channel.send(moneyEmbed)
      }

      let moneyEmbed2 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`${user.username} does not have anything you can rob`);

      if (targetuser <= 0 || targetuser === null) {
        return message.channel.send(moneyEmbed2)
      }

      let authorembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`You cannot rob yourself!`);

      if (user.id === message.author.id) {
        return message.channel.send(authorembed)
      }

      let embed = new Discord.MessageEmbed()
        .setDescription(`You robbed ${user} and got away with ${randomAmount} coins`)
        .setColor("RANDOM")

      message.channel.send(embed)

      user.send(`${message.author} has robbed you in **${message.guild.name}**! They robbed ${randomAmount} coins`)

      await db.subtract(`money-purse-${user.id}`, randomAmount);
      await db.add(`money-purse-${message.author.id}`, randomAmount);
      await db.set(`rob-${message.guild.id}-${message.author.id}`, Date.now());

    }
  }
}