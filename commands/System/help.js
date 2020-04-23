exports.run = (bakery, msg, args) => {
	if(!args[0]) {
		const cmds = bakery.commands.map(c => c.help.name)
		msg.channel.send(cmds.join(", "))
	}
}

exports.help = {
	aliases: ["commands"],
	name: "help",
	description: "Look at all available commands.",
	usage: "help [command]",
	example: "help ping"
}