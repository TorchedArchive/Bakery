exports.run = (bakery, msg) => {
	if(!bakery.economy.hasBakery(msg.author.id)) {
		msg.channel.send({embed: {
			color: 0xFA3764,
			description: "Looks like you don't own a bakery! Start one with `bakery start`!"
		}})
	} else {
		bakery.economy.daily(msg.author.id)
		msg.channel.send({embed: {
			color: 0xFB83C4,
			description: `You have earned $500 from the daily and you now have $${bakery.economy.get(msg.author.id)}.`
		}})
	}
}

exports.help = {
	aliases: [],
	name: "daily",
	description: "Collect the daily money of $500.",
	usage: "daily",
	example: "daily"
}