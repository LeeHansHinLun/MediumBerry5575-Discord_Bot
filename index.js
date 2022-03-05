const Discord = require("discord.js")

const TOKEN = "OTQ4NDI1Mzc5OTUyMDc4ODgw.Yh7n9w.kw2uRPtNF_Gj-6s0R9-isH6d8Jg"

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