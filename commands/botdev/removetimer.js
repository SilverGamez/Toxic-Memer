const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'removetimer',
    description: 'Removes a timer if it stops working for whatever reason',
    usage: 'removetimer <timer>',
    run: async(message, args, client, prefix, botdev) => {
        if(message.author.id === botdev){
            const timer = args[1];

    const user = message.mentions.members.first();
    if(!user) return message.channel.send('Whos timer are you reseting?');

    if(timer === 'beg'){
        db.delete(`beg-timer-${user.id}`);
        message.channel.send(`Removed beg timer for ${user.user.username}`);
    } else if(timer === 'work'){
        db.delete(`work-cooldown-${user.id}`);
        message.channel.send(`Removed work timer for ${user.user.username}`);
    } else if(timer === 'daily'){
        db.delete(`daily-${user.id}`);
        message.channel.send(`Removed daily timer for ${user.user.username}`);
    } else if(timer === 'fish'){
        db.delete(`fishing-${user.id}.wait`);
        message.channel.send(`Removed fish timer for ${user.user.username}`);
    } else if(timer === 'rob'){
        db.delete(`rob-${message.guild.id}-${user.id}`);
        message.channel.send(`Removed rob timer for ${user.user.username}`);
    } else if(timer === 'pm'){
        db.delete(`pm-wait-${user.id}`);
        message.channel.send(`Removed rob timer for ${user.user.username}`);
    } else if(timer === 'hunt'){
        db.delete(`hunt-cooldown-${user.id}`);
        message.channel.send(`Removed hunt timer for ${user.user.username}`);
    } 
    else return message.channel.send('That is not a valid timer');
        }
    }
}