const Discord = require('discord.js');
const db = require('quick.db');
const embed = require('../../handlers/functions/embedCreator');

module.exports = {
    name: 'profile',
    description: 'Shows a users profile',
    usage: 'profile <@user>',
    run: async (message, args, client, prefix, botdev) => {
        const user = message.mentions.members.first() || message.member;

        let purseBal = db.get(`purse-${user.id}`);
        let bankBal = db.get(`bank-${user.id}`);
        let level = db.get(`guild_${message.guild.id}_level_${user.id}`);
        let xp = db.get(`guild_${message.guild.id}_xp_${user.id}`);
        let commands = db.get(`user_${user.id}_commands`);
        let xpNeeded = level * 500 + 500;
        let admin = false;
        let botdeva = false;
        let bio = db.get(`user_${user.id}_bio`);

        if (purseBal === null) purseBal = 0;
        if (bankBal === null) bankBal = 0;
        if (level === null) level = 0;
        if (xp === null) xp = 0;
        if (commands === null) commands = 0;
        if (user.hasPermission("ADMINISTRATOR")) admin = true;
        if (user.id === '737862913309540413') botdeva = true;
        if (bio === null) bio = `None. You can set yours with \`${db.get(`prefix_${message.guild.id}`) || '-'}setinfo <info>\``;


        const description =
            `**Set information:**
${bio}

**Balance:**

Purse: ${purseBal} coins
Bank: ${bankBal} coins

**Level:**

Level: ${level}
XP: ${xp}

**General:**

Ran: ${commands} commands
Admin: ${admin}
Botdev: ${botdeva}`;
        embed(message, `${user.user.username}'s profile`, 'RANDOM', description);
    }
}