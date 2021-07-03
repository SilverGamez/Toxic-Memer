const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'postmeme',
    description: 'Posts a meme and make money',
    usage: 'postmeme',
    aliases: ['pm'],
    run: async (message, args, client, prefix, botdev) => {
        let timeout = 300000;

        let wait = await db.fetch(`pm-wait-${message.author.id}`);
        if (wait !== null && timeout - (Date.now() - wait) > 0) {

            message.channel.send(`You have already used this command in the last 5 minutes.`);
        } else {
            let randomAmount = Math.floor(Math.random() * 20000) + 1;

            let vip = db.get(`items-vip-${message.author.id}`);
            if (vip !== null) randomAmount = Math.floor(Math.random() * 25000) + 1;

            let laptop = db.get(`items-laptop-${message.author.id}`);
            if (laptop == null) return message.channel.send('You dont have a laptop!');

            let querys = [
                `Your meme got a decent reponse online. You get **${randomAmount}** from the ads.`,
                `Your meme got a decent reponse online. You get **${randomAmount}** from the ads.`,
                `Your meme got a decent reponse online. You get **${randomAmount}** from the ads.`,
                `Your meme got a decent reponse online. You get **${randomAmount}** from the ads.`,
                `Your meme got a decent reponse online. You get **${randomAmount}** from the ads.`,
                `Your meme got a decent reponse online. You get **${randomAmount}** from the ads.`,
                `Everyone **hates** your meme. You get **0** lol sucks to be you`
            ];
            const number = Math.floor(Math.random() * querys.length) + 1;

            let filter = (n) => n.author.id === message.author.id;
            message.channel.send(`${message.author} __What type of meme do you want to post to reddit?__
        \`f\` ■  Fresh Meme
        \`r\` ■  Reposted Meme
        \`i\` ■  Intellectual Meme
        \`c\` ■  Copypasta
        \`k\` ■  Kind Meme`);
            message.channel
                .awaitMessages(filter, {
                    max: 1,
                    time: 60000
                })
                .then(async (collect) => {
                    const content = collect.first().content.toLowerCase();

                    if (content === 'f') {
                        message.channel.send(querys[number]);

                        if (querys[number] === 'Everyone **hates** your meme. You get **0** lol sucks to be you') return;

                        db.add(`purse-${message.author.id}`, randomAmount);
                    } else if (content === 'r') {
                        message.channel.send(querys[number]);

                        if (querys[number] === 'Everyone **hates** your meme. You get **0** lol sucks to be you') return;

                        db.add(`purse-${message.author.id}`, randomAmount);
                    } else if (content === 'i') {
                        message.channel.send(querys[number]);

                        if (querys[number] === 'Everyone **hates** your meme. You get **0** lol sucks to be you') return;

                        db.add(`purse-${message.author.id}`, randomAmount);
                    } else if (content === 'c') {
                        message.channel.send(querys[number]);

                        if (querys[number] === 'Everyone **hates** your meme. You get **0** lol sucks to be you') return;

                        db.add(`purse-${message.author.id}`, randomAmount);
                    } else if (content === 'k') {
                        message.channel.send(querys[number]);

                        if (querys[number] === 'Everyone **hates** your meme. You get **0** lol sucks to be you') return;

                        db.add(`purse-${message.author.id}`, randomAmount);
                    }
                });
            await db.set(`pm-wait-${message.author.id}`, Date.now());
        }
    }
}