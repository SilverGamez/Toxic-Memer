const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'balance',
    description: 'Shows a users balance',
    usage: 'balance <@user>',
    aliases: ['bal'],
    run: async (message, args, client, prefix, botdev) => {
        let user = message.mentions.members.first();
        if (!user) user = message.author

        let purseBalance = db.get(`purse-${user.id}`);
        let bankBalance = db.get(`bank-${user.id}`);

        if (purseBalance === null) purseBalance = '0';
        if (bankBalance === null) bankBalance = '0';

        let findVip = db.get(`items-vip-${user.id}`);
        let vip = false;
        if (findVip === true) vip = true;

        const embed = new Discord.MessageEmbed()
            .setTitle('Balance')
            .setDescription(`\🎖️ VIP: ${vip}\n\nPurse: ${purseBalance} coins\nBank: ${bankBalance} coins`)
            .setColor('RANDOM')
            .setFooter(message.guild.name, message.guild.iconURL())

        message.channel.send(embed);
    }
}