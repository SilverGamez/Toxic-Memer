const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'work',
    description: 'Work to make money',
    usage: 'work',
    run: async(message, args, client, prefix, botdev) => {
      let user = message.author;
      let author = await db.fetch(`work-cooldown-${user.id}`)
  
      let timeout = 300000;
      
      if (author !== null && timeout - (Date.now() - author) > 0) {
      
          let timeEmbed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`You have already worked recently in the past 5 minutes.`);
          message.channel.send(timeEmbed)
        } else {
  
          let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic']
  
          let result = Math.floor((Math.random() * replies.length));
          let amount = Math.floor(Math.random() * 10000) + 1;
          let embed1 = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`You worked as a ${replies[result]} and earned ${amount} coins`);
          message.channel.send(embed1)
          
          db.add(`purse-${user.id}`, amount)
          db.set(`work-cooldown-${user.id}`, Date.now())
      };
    }
}