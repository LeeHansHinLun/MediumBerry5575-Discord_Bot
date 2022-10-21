const Discord = require("discord.js")

const TOKEN = "DISCORD_BOT_TOKEN_HERE"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hello")
    }
    if (message.content == "Hi") {
        message.reply("Hello")
    }
    if (message.content == "Bye") {
        message.reply("ByeBye")
    }
    if (message.content == "bye") {
        message.reply("ByeBye")
    }
})

client.login(TOKEN)
