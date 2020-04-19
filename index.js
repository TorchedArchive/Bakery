const Discord = require("discord.js")
const Bakery = require("./src/Structures.js")
const bakery = new Bakery.Client()
const fs = require("fs")
require("dotenv").config()

bakery.commands = new Discord.Collection()
bakery.aliases = new Discord.Collection()

fs.readdirSync(__dirname + "/commands/").forEach((folder) => {
    let c = 0;
    fs.readdirSync(__dirname + `/commands/${folder}`).filter(file => file.endsWith('.js')).forEach((f) => {
        const cmd = f.slice(0, -3)
        try {
            let props = require(`./commands/${folder}/${f}`)
            bakery.commands.set(props.help.name, props)
            if(props.help.aliases) props.help.aliases.forEach(alias => {
                bakery.aliases.set(alias, props.help.name)
            })
            bakery.log.commands(`Successfully loaded ${cmd}.`)
            c++
        } catch (err) {
            const trace = err.stack.toString().split("\n").slice(0, 3).join("\n")
            bakery.log.error(`An error occured while trying to load ${cmd}\n${trace}`)
            bakery.log.commands(`Could not load the command ${cmd}.`)
        }
    })
    bakery.log.commands(`Loaded ${c} commands.\n`)
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
            bakery.log.events(`Successfully loaded event ${_event}.`)
            loadednum++
        } catch(err) {
            const trace = err.stack.toString().split("\n").slice(0, 3).join("\n")
            bakery.log.error(`An error occured while trying to load ${_event}\n${trace}`)
            bakery.log.events(`Could not load the event ${_event}.`)
        }
    }
    bakery.log.events(`Successfully loaded ${loadednum} events.\n`)
} catch(err) {
    console.log(err)
}

bakery.login(process.env.TOKEN)