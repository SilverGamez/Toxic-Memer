const Discord = require('discord.js');
const db = require('quick.db');
const embed = require('../../handlers/functions/embedCreator');

module.exports = {
    name: 'inventory',
    description: 'Shows your inventory',
    usage: 'inventory',
    aliases: ['inv'],
    run: async (message, args, client, prefix, botdev) => {
        const user = message.author;

        let fishing_rod = db.get(`items-rod-${user.id}`);
        let vip = db.get(`items-vip-${message.author.id}`);
        let shovel = db.get(`items-shovel-${user.id}`);
        let laptop = db.get(`items-laptop-${message.author.id}`);
        let shotgun = db.get(`items-shotgun-${user.id}`);

        if (fishing_rod === null) fishing_rod = 0;
        if (vip === null) vip = false;
        if (shovel === null) shovel = 0;
        if (laptop === null) laptop = 0;
        if (shotgun === null) shotgun = 0;

        const description = `
🎣 Fishing Rod: ${fishing_rod}
🎖️ VIP: ${vip}
<:shovel:850986474463952917> Shovel: ${shovel}
💻 Laptop: ${laptop}
<:shotgun:853773836000034819> Shotgun: ${shotgun}
`;

        embed(message, 'Inventory', 'RANDOM', description)
    }
}