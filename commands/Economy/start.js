exports.run = (bakery, msg) => {
	if(bakery.economy.hasBakery(msg.author.id)) return msg.channel.send({embed: {
		color: 0xFA3764,
		description: "Seems as though you already own a bakery..."
	}})
	bakery.economy.init(msg.author.id)
	msg.channel.send({embed: {
		color: 0xFB83C4,
		description: "Your bakery has now been founded!"
	}})
}

exports.help = {
	aliases: ["init"],
	name: "start",
	description: "Starts up a new bakery.",
	usage: "start",
	examples: "start"
}