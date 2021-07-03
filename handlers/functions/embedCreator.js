const {
    MessageEmbed
} = require("discord.js")

module.exports = async (message, title, colour, description) => {
    const embed = new MessageEmbed()
        .setTitle(title)
        .setColor(colour)
        .setDescription(description)
        .setFooter(message.guild.name, message.guild.iconURL())

    message.channel.send(embed);
}