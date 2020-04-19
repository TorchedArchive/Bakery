module.exports = (bakery, msg) => {
    if (msg.channel.type === 'dm') return;
    if (msg.author.bot) return;
    const prefixes = [`<@!${bakery.user.id}>`, `<@${bakery.user.id}>`, "bakery ", "b "]
    let prefix = false
    let mssg = msg.content.toLowerCase() || msg.content.toUpperCase()
    for(let pref of prefixes) {
        if (mssg.startsWith(pref)) prefix = pref;
    }

    if (!prefix) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = bakery.commands.get(commandName) || bakery.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;
    
    try {
        return command.run(bakery, msg, args);
    } catch (err) {
        return bakery.log.error(err);
    }
}