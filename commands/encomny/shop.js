const Discord = require('discord.js');
const db = require('quick.db');
const embed = require('../../handlers/functions/embedCreator');

module.exports = {
    name: 'shop',
    description: 'Shows the shop',
    usage: 'shop',
    aliases: ['store'],
    run: async (message, args, client, prefix, botdev) => {
        const description = `
[-buy rod] Fishing rod 🎣 [10,000]: Lets you use the fish command.
[-buy shovel] Shovel <:shovel:850986474463952917> [50,000] Lets you use the dig command.
[-buy shotgun] Shotgun <:shotgun:853773836000034819> [75,000] Lets you use the hunt command.
[-buy laptop] Laptop 💻 [100,000] Lets you use the postmeme command.
[-buy vip] V.I.P 🎖️ [1,000,00]: Make more money for commands, Special badge.
`;
        embed(message, 'Items in shop', 'RANDOM', description);
    }
}