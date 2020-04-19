const Discord = require("discord.js")
const bakery = new Discord.Client()
const fs = require("fs")
require("dotenv").config()
bakery.commands = new Discord.Collection()
bakery.aliases = new Discord.Collection()

fs.readdirSync(__dirname + "/../commands/").forEach((folder) => {
    fs.readdirSync(__dirname + `/../commands/${folder}`).filter(file => file.endsWith('.js')).forEach((f) => {
        try {
            let props = require(`../commands/${folder}/${f}`);
            bakery.commands.set(props.help.name, props);
            if(props.help.aliases) props.help.aliases.forEach(alias => {
            bakery.aliases.set(alias, props.help.name);
        });
        } catch (err) {
            console.log(`Command ${f} failed to load`);
        }
    });
});

bakery.login(process.env.TOKEN)