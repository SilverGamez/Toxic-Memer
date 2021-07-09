const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'beg',
    description: 'Beg for coins!',
    usage: 'beg',
    run: async (message, args, client, prefix, botdev) => {
        let randomAmount = Math.floor(Math.random() * 2500) + 1;

        const vip = db.fetch(`items-vip-${message.author.id}`);
        if (vip === true) randomAmount = Math.floor(Math.random() * 5000) + 1;

        const randomText = [
            `No coins for you :P`,
            `Aww, Take ${randomAmount} coins :)`,
            `Fine little begger, take ${randomAmount} coins and get a life`,
            `Go beg to someone else`,
            `Im going broke these days, i only have ${randomAmount * 2}. You can have half of it :)`,
            `Take ${randomAmount} coins and frick off.`,
            `Shooo little pest, take this ${randomAmount} with you`,
            `Look at my purse, it has ${randomAmount}. Want it? Take it!`,
            `Just get a damm job! Oh, i forgot you have no money! Just take ${randomAmount} and get a job.`,
            `Never gonna give you coins.`,
            `💰 Money, Money, Money. Oh no, i dropped ${randomAmount}!`,
            `Never not gonna give you coins, ${randomAmount}.`,
            `You begged on the streets and found ${randomAmount * 2}. To bad you lost half of it.`,
            `I only give money to friends.`,
            `Poor begger! Take ${randomAmount} :)`,
            `*Bang*, *Bang*. Take this non exisiting coin`,
            `Fineee you dumb begger. I'll give you ${randomAmount}`,
            `Look at this ${randomAmount * 2}, to bad you only get half of it`,
            `You found ${randomAmount * 4} in the old lady's purse. She wacked you and you ran off with a quarter of it.`,
            `You begged for 24 hours. And made ${randomAmount} you somehow duplicated it. I wonder how?`
        ];
        const people = [
            'Your mum',
            'Grandma rich',
            'Rick Astley',
            'Toxic Memer',
            'Trump',
            'Obama',
            'Dream',
            'Grandpa poor',
            'Rich brother',
            'Yourself in 5 years',
            'SilverGamez',
            'Dr Rich',
            'Your friend',
            'Mickey mouse',
            'Dabigburger',
            'Bob the builder',
            'Joe mama',
            'Impostor',
            'Alien joe',
            '* Nobody *',
            'MelonChunk'
        ];

        if (db.get(`beg-timer-${message.author.id}`) === true) return message.channel.send('You are on cooldown! You can only use this command every 5 seconds.');
        const number = Math.floor(Math.random() * randomText.length) + 0;
        const number2 = Math.floor(Math.random() * people.length) + 0;

        const embed = new Discord.MessageEmbed()
            .setTitle(people[number2])
            .setDescription(randomText[number])
            .setColor('RANDOM')
            .setFooter(message.guild.name, message.guild.iconURL())
        message.channel.send(embed);

        if (randomText[number] === 'No coins for you :P') return;
        if (randomText[number] === 'Go beg to someone else') return;
        if (randomText[number] === 'Never gonna give you coins.') return;
        if (randomText[number] === 'I only give money to friends.') return;
        if (randomText[number] === '*Bang*, *Bang*. Take this non exisiting coin') return;
        if (randomText[number] === `You begged for 24 hours. And made ${randomAmount} you somehow duplicated it. I wonder how?`) randomAmount = randomAmount * 2

        db.add(`purse-${message.author.id}`, randomAmount);

        db.set(`beg-timer-${message.author.id}`, true);
        setTimeout(() => {
            db.set(`beg-timer-${message.author.id}`, false);
        }, 5000);
    }
}