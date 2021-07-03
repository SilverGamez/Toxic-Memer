module.exports.run = async (client) => {
    console.log(
        `[INFO] Loading bot libaries..`
    )
    setTimeout(() => {
        console.log(
            `[INFO] Libaries loaded    
[INFO] Bot is online`
        )
    }, 2000)

    setInterval(() => {
        client.user.setPresence({
            status: 'online',
            activity: {
                name: `with money 💸 | -help | ${client.guilds.cache.size} guilds`,
                type: 'PLAYING'
            }
        });
    }, 5000)
}