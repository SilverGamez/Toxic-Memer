const { Client, Collection, Message } = require("discord.js");
const { token } = require("./config.json")

const client = new Client({
    disableEveryone: true
});

require('discord-buttons')(client);
require('discord-slider')(client);


// Collections
client.commands = new Collection();
client.aliases = new Collection();


["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login(token);