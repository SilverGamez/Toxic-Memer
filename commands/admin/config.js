const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'config',
    description: 'Shows the config in this server',
    usage: 'config',
    aliases: ['c'],
    run: async (message, args, client, prefixa, botdev) => {
        let prefix = db.get(`prefix_${message.guild.id}`);
        let disabledComamnds = db.all().filter(e => e.ID.startsWith('disabled_command') && e.ID.endsWith(message.guild.id)).map(e => e.ID.split('-')[1])

        if (prefix === null) prefix = '-';
        if (disabledComamnds === null) disabledComamnds= 'No disabled commands'


        const embed = new Discord.MessageEmbed()
            .setTitle('Server Config')
            .setColor('RANDOM')
            .addField(`Prefix`, prefix, true)
            .addField(`Disabled comamnds`, `${disabledComamnds.join(', ')}\nYou can disable a command using \`${prefixa}setconfig disable <command>\``, true)
            .setFooter(`Server Config for ` + message.guild.name, message.guild.iconURL())

        message.channel.send(embed)


    }
}