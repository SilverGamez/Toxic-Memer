const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'help',
    description: 'Shows all the commands with a description',
    usage: 'help',
    aliases: ['h'],
    run: async (message, args, client, prefix, botdev) => {
        if (!args[0]) {

            //\`${prefix}\`:

            const curreny = new Discord.MessageEmbed()
                .setTitle('Curreny commands')
                .setColor('RANDOM')
                .setAuthor(`You can get more info about a command with ${prefix}help <command>`, client.user.avatarURL())
                .setDescription(`\`${prefix}balance <@user (optional)>\`: Shows your balance.
        \`${prefix}beg\`: Beg for some coins.
        \`${prefix}buy <item>\`: Buy items from the shop.
        \`${prefix}daily\`: Get a daily 10,000 coins.
        \`${prefix}deposit <amount/all>\`: Depoists your coins to your bank.
        \`${prefix}dig\`: Dig for lots of coins!
        \`${prefix}fish\`: Fish for coins.
        \`${prefix}hunt\`: Hunt for coins.
        \`${prefix}inventory\`: Shows your inventory.
        \`${prefix}postmeme\`: Lets you post a meme and make money.
        \`${prefix}reborn\`: You lose all your items and coins.
        \`${prefix}rob <user>\`: Rob your friends!
        \`${prefix}sell <item>\`: Sells an item.
        \`${prefix}share <user> <amount>\`: Shares money with friends.
        \`${prefix}shop\`: Shows the shop
        \`${prefix}withdraw <amount/all>\`: Withdraw money from you bank to your purse.
        \`${prefix}work\`: Work for a job and make money.
        \`${prefix}addmoney <@user> <amount>\`: Adds a users amount of coins (**BOTDEV ONLY**)
        \`${prefix}removetimer <@user> <timer>\`: Removes a timer (**BOTDEV ONLY**)
        \`${prefix}gamble <amount>\`: Gamble money for a change to win 2x, 3x or loose it all!`)

                .setFooter('Page 1 of 5')

            const botdevE = new Discord.MessageEmbed()
                .setTitle('Botdev commands')
                .setColor('RANDOM')
                .setAuthor(`You can get more info about a command with ${prefix}help <command>`, client.user.avatarURL())
                .setDescription(`\`${prefix}eval <code>\`: Runs code
        \`${prefix}exec <command>\`: Sends code to the terminal
        \`${prefix}reload <command>\`: Lets you reload a command`)
                .setFooter('Page 2 of 5')

            const misc = new Discord.MessageEmbed()
                .setTitle('Misc commands')
                .setColor('RANDOM')
                .setAuthor(`You can get more info about a command with ${prefix}help <command>`, client.user.avatarURL())
                .setDescription(`\`${prefix}help <command>\`: This menu.
        \`${prefix}rank @user\`: Shows your level
        \`${prefix}profile @user\`: Shows your profile (level, coins, ect)
        \`${prefix}setinfo <info>\`: Sets your info
        \`${prefix}invite\`: Invites the bot`)
                .setFooter('Page 3 of 5')

            const config = new Discord.MessageEmbed()
                .setTitle('Configuration commands')
                .setColor('RANDOM')
                .setAuthor(`You can get more info about a command with ${prefix}help <command>`, client.user.avatarURL())
                .setDescription(`\`${prefix}setconfig <prefix/enableCommand/disableCommand> <channel_id/role_id/prefix>\`: Lets you change the config!
        \`${prefix}config\`: Shows all the servers config!`)
                .setFooter('Page 4 of 5')

            const music = new Discord.MessageEmbed()
                .setTitle('Musical commands')
                .setColor('RANDOM')
                .setAuthor(`You can get more info about a command with ${prefix}help play`, client.user.avatarURL())
                .setDescription(`\`${prefix}play <music name or link>\`: Plays music!
        \`${prefix}skip\`: Skips a song!
        \`${prefix}leave\`: Makes the bot leave the voice channel`)
                .setFooter('Page 5 of 5')

            const embeds = [
                curreny,
                botdevE,
                misc,
                config,
                music
            ]
            message.channel.createSlider(message.author.id, embeds, '▶️', '◀️');
        } else {
            const command = await client.commands.get(args[0]);

            if (!command) return message.channel.send('That command doesnt exist!');

            let aliases;
            if (!command.aliases) aliases = 'There is no aliases'
            if (command.aliases) aliases = command.aliases


            const embed = new Discord.MessageEmbed()
                .setTitle(`Help for ${command.name}`)
                .addField('Name', command.name)
                .addField('Description', command.description || 'There is no description for this command, weird!')
                .addField('Usage', command.usage || `There is no usage for this command, try ${prefix}${command.name}`)
                .addField('Aliases', `${aliases}`)
                .setColor('RANDOM')
                .setFooter(message.guild.name, message.guild.iconURL())
            message.channel.send(embed);
        }
    }
}