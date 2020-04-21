exports.run = async (bakery, msg) => {
	if(!bakery.economy.hasBakery(msg.author.id)) {
		msg.channel.send({embed: {
			color: 0xFA3764,
			description: "Looks like you don't own a bakery! Start one with `bakery start`!"
		}})
	} else {
		msg.channel.send({embed: {
			color: 0xFB83C4,
			description: "This command is still in testing."
		}})
	}
}

exports.help = {
	aliases: ["bal", "$"],
	name: "balance",
	description: "See the amount of money you have.",
	usage: "balance [@user]",
	example: "balance"
}