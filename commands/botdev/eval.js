const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'eval',
    description: 'Lets a botdev eval code',
    usage: 'eval <code>',
    run: async(message, args, client, prefix, botdev) => {
        if(message.author.id === botdev){
            const code = args.join(" ");
            try{
                eval(code);
            } catch (error) {
                message.channel.send('Error!');
                message.channel.send(`${error}`);
            }
        }
    }
}