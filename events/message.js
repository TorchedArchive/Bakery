module.exports = (bakery, msg) => {
    if (msg.channel.type === 'dm') return;
    let prefix = "bakery ";
    if (!msg.content.toLowerCase().startsWith(prefix) || msg.author.bots) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = bakery.commands.get(commandName) || bakery.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;
    
    try {
        return command.run(bakery, msg, args);
    } catch (err) {
        return console.error(err);
    }
}