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
            client.guilds.cache.forEach(guild => guild.leave());
        }
})

client.login(settings.token)
