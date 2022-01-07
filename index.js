const Discord = require("discord.js-self");

const client = new Discord.Client();
const settings = require("./settings.json");
const input = require("input")

client.on("ready", async() => {
    console.log(`
            ███████╗██╗  ██╗ ██████╗     ██╗     ███████╗ █████╗ ██╗   ██╗███████╗██████╗ 
            ██╔════╝╚██╗██╔╝██╔═══██╗    ██║     ██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗
            █████╗   ╚███╔╝ ██║   ██║    ██║     █████╗  ███████║██║   ██║█████╗  ██████╔╝
            ██╔══╝   ██╔██╗ ██║   ██║    ██║     ██╔══╝  ██╔══██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
            ███████╗██╔╝ ██╗╚██████╔╝    ███████╗███████╗██║  ██║ ╚████╔╝ ███████╗██║  ██║
            ╚══════╝╚═╝  ╚═╝ ╚═════╝     ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝                                                          
    `)
                                                                                                      
 
    const readyOrNot = await input.text("Are you ready to start (y / n): ")
    if(readyOrNot === "y" || "Y") {
        if (client.guild.id === settings.whitelistedServers) {
            return
        } else {
            client.guilds.cache.forEach(guild => guild.leave());
        }
    } else {
        console.log("Stopped Tool")
    }
})

client.login(settings.token)