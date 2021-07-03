const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'avatar',
    description: 'Shows a users avatar',
    usage: 'avatar <@user>',
    aliases: ['av'],
    run: async (message, args, client, prefix, botdev) => {
        let target = message.mentions.members.first();
        if (!target) target = message.member;

        const avatar = target.user.avatarURL({
            dynamic: true,
            format: 'png'
        });

        const webp = target.user.avatarURL({
            dynamic: true,
            format: 'webp'
        });
        const png = target.user.avatarURL({
            dynamic: true,
            format: 'png'
        });
        const jpg = target.user.avatarURL({
            dynamic: true,
            format: 'jpg'
        });

        const embed = new Discord.MessageEmbed()
            .setTitle(`${target.user.username}'s avatar`)
            .setDescription(`**[PNG](${png})** | **[JPG](${jpg})** | **[WEBP](${webp})**`)
            .setImage(avatar)
            .setFooter(message.guild.name, message.guild.iconURL())
            .setColor('RANDOM')

        message.channel.send(embed);
    }
}