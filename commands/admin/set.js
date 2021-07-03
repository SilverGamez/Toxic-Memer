const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'setconfig',
    description: 'Sets a channel/role for config',
    usage: 'set <prefix/enableCommand/disableCommand> <value>',
    aliases: ['set'],
    run: async (message, args, client, prefix, botdev) => {
        const list = args[0];

        if (!args[0]) {
            return message.channel.send('That doesnt exist! Please select from: \`prefix, enableCommand, disableCommand\`');
        }

        if (list === 'prefix') {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                return message.channel.send("You are not allowed or do not have permission to change prefix")
            }

            if (!args[1]) {
                return message.channel.send("Please give the prefix that you want to set")
            }

            if (args[2]) {
                return message.channel.send("You can not set prefix a double argument")
            }

            if (args.join("") === '-' || args.join(" ") === 'reset') {
                db.delete(`prefix_${message.guild.id}`)
                return await message.channel.send("Reseted Prefix 👍")
            }

            if (args[1].length > 3) {
                return message.channel.send("You can not send prefix more than 3 characters")
            }

            db.set(`prefix_${message.guild.id}`, args[1])
            await message.channel.send(`👍 Seted Bot Prefix to ${args[1]}`)
        } else if (list === 'disableCommand') {
            const cmd = args[1];

            if (!message.member.hasPermission("ADMINISTRATOR")) {
                return message.channel.send("You are not allowed to disable or enable commands!")
            }

            if (!cmd) return message.channel.send('What command are you disabling?');

            function enableCommand(message, cmd) {
                let alreadyDisabled = db.get(`disabled_command-${cmd}-${message.guild.id}`);
                if (alreadyDisabled === true) return message.channel.send('That command is already disabled!');

                db.set(`disabled_command-${cmd}-${message.guild.id}`, true);
                message.channel.send(`👍 Disabled comamnd. To reenable the command, type \`${prefix}set enable ${cmd}\``);
            }

            if (cmd === 'balance' || 'bal') {
                enableCommand(message, cmd);
            } else if (cmd === 'beg') {
                enableCommand(message, cmd);
            } else if (cmd === 'buy') {
                enableCommand(message, cmd);
            } else if (cmd === 'daily') {
                enableCommand(message, cmd);
            } else if (cmd === 'deposit' || 'dep') {
                enableCommand(message, cmd);
            } else if (cmd === 'eval') {
                enableCommand(message, cmd);
            } else if (cmd === 'exec' || 'execute') {
                enableCommand(message, cmd);
            } else if (cmd === 'fish') {
                enableCommand(message, cmd);
            } else if (cmd === 'inventory' || 'inv') {
                enableCommand(message, cmd);
            } else if (cmd === 'reborn') {
                enableCommand(message, cmd);
            } else if (cmd === 'removetimer') {
                enableCommand(message, cmd);
            } else if (cmd === 'rob') {
                enableCommand(message, cmd);
            } else if (cmd === 'sell') {
                enableCommand(message, cmd);
            } else if (cmd === 'addmoney') {
                enableCommand(message, cmd);
            } else if (cmd === 'share' || 'gift') {
                enableCommand(message, cmd);
            } else if (cmd === 'shop') {
                enableCommand(message, cmd);
            } else if (cmd === 'withdraw' || 'with') {
                enableCommand(message, cmd);
            } else if (cmd === 'work') {
                enableCommand(message, cmd);
            } else if (cmd === 'rank' || 'level') {
                enableCommand(message, cmd);
            } else if (cmd === 'profile') {
                enableCommand(message, cmd);
            } else if (cmd === 'dig') {
                enableCommand(message, cmd);
            } else if (cmd === 'setbio') {
                enableCommand(message, cmd);
            } else if (cmd === 'postmeme' || 'pm') {
                enableCommand(message, cmd);
            } else if (cmd === 'avatar' || 'av') {
                enableCommand(message, cmd);
            } else if (cmd === 'hunt') {
                enableCommand(message, cmd);
            } else return message.channel.send('That command doesnt exist');
        } else if (list === 'enableCommand') {
            const cmd = args[1];

            if (!message.member.hasPermission("ADMINISTRATOR")) {
                return message.channel.send("You are not allowed to disable or enable commands!")
            }

            if (!cmd) return message.channel.send('What command are you enabling?');

            function enableCommand(message, cmd) {
                let alreadyDisabled = db.get(`disabled_command-${cmd}-${message.guild.id}`);
                if (alreadyDisabled === null) return message.channel.send('That command is already enabled!');

                db.delete(`disabled_command-${cmd}-${message.guild.id}`);
                message.channel.send(`👍 Enabled command. To disable the command, type \`${prefix}set disable ${cmd}\``);
            }

            if (cmd === 'balance' || 'bal') {
                enableCommand(message, cmd);
            } else if (cmd === 'beg') {
                enableCommand(message, cmd);
            } else if (cmd === 'buy') {
                enableCommand(message, cmd);
            } else if (cmd === 'daily') {
                enableCommand(message, cmd);
            } else if (cmd === 'deposit' || 'dep') {
                enableCommand(message, cmd);
            } else if (cmd === 'eval') {
                enableCommand(message, cmd);
            } else if (cmd === 'exec' || 'execute') {
                enableCommand(message, cmd);
            } else if (cmd === 'fish') {
                enableCommand(message, cmd);
            } else if (cmd === 'inventory' || 'inv') {
                enableCommand(message, cmd);
            } else if (cmd === 'reborn') {
                enableCommand(message, cmd);
            } else if (cmd === 'removetimer') {
                enableCommand(message, cmd);
            } else if (cmd === 'rob') {
                enableCommand(message, cmd);
            } else if (cmd === 'sell') {
                enableCommand(message, cmd);
            } else if (cmd === 'addmoney') {
                enableCommand(message, cmd);
            } else if (cmd === 'share' || 'gift') {
                enableCommand(message, cmd);
            } else if (cmd === 'shop') {
                enableCommand(message, cmd);
            } else if (cmd === 'withdraw' || 'with') {
                enableCommand(message, cmd);
            } else if (cmd === 'work') {
                enableCommand(message, cmd);
            } else if (cmd === 'rank' || 'level') {
                enableCommand(message, cmd);
            } else if (cmd === 'profile') {
                enableCommand(message, cmd);
            } else if (cmd === 'dig') {
                enableCommand(message, cmd);
            } else if (cmd === 'setbio') {
                enableCommand(message, cmd);
            } else if (cmd === 'postmeme' || 'pm') {
                enableCommand(message, cmd);
            } else if (cmd === 'avatar' || 'av') {
                enableCommand(message, cmd);
            } else if (cmd === 'hunt') {
                enableCommand(message, cmd);
            } else return message.channel.send('That command doesnt exist');
        }
    }
}