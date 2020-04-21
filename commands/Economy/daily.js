exports.run = (bakery, msg) => {
	if(!bakery.economy.hasBakery(msg.author.id)) {
		msg.channel.send({embed: {
			color: 0xFA3764,
			description: "Looks like you don't own a bakery! Start one with `bakery start`!"
		}})
	} else {
		const cooldown = 86400 // 24h in seconds
		const time = (Date.now() - bakery.economy.get(msg.author.id, "daily")) / 1000
		
		if(time < cooldown) return msg.channel.send({embed: {
			color: 0xFA3764,
			description: "You already collected your daily for the day! Wait a while longer."
		}})

		bakery.economy.daily(msg.author.id)
		msg.channel.send({embed: {
			color: 0xFB83C4,
			description: `You have earned $500 from the daily and you now have $${bakery.economy.get(msg.author.id, "money")}.`
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