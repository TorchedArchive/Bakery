const Discord = require("discord.js")
const bakery = new Discord.Client()
const fs = require("fs")
require("dotenv").config()

bakery.commands = new Discord.Collection()
bakery.aliases = new Discord.Collection()

fs.readdirSync(__dirname + "/commands/").forEach((folder) => {
    fs.readdirSync(__dirname + `/commands/${folder}`).filter(file => file.endsWith('.js')).forEach((f) => {
        try {
            let props = require(`./commands/${folder}/${f}`)
            bakery.commands.set(props.help.name, props)
            if(props.help.aliases) props.help.aliases.forEach(alias => {
            bakery.aliases.set(alias, props.help.name)
        })
        } catch (err) {
            console.log(`Command ${f} failed to load`)
        }
    })
})

try {
    let files = fs.readdirSync("./events/")
    files = files.filter(f => f.split(".").pop() === "js")
    if(files.length === 0) {
        console.log("There are no events to load.\n\n")
        return;
    }

    let loadednum = 0
    for(let i = 0; i < files.length; i++) {
        const _event = files[i].slice(0, -3)
        try {
            const event = require(`./events/${files[i]}`)
            bakery.on(files[i].slice(0, -3), event.bind(null, bakery))
            console.log(`Successfully loaded event ${_event}.`)
            loadednum++
        } catch(err) {
            const trace = err.stack.toString().split("\n").slice(0, 3).join("\n")
            console.log(`An error occured while trying to load ${_event}\n${trace}`)
            console.log(`Could not load the event ${_event}.`)
        }
    }
    console.log(`Successfully loaded ${loadednum} events.\n`)
} catch(err) {
    console.log(err)
}

bakery.login(process.env.TOKEN)