exports.run = async (bakery, msg) => {
	const m = await msg.channel.send("Pinging...")
	m.edit("Pong!", {embed: {
		color: 0xFB83C4,
		description: `🏓 Pong! \`${m.createdTimestamp - msg.createdTimestamp}\`ms
		💓 Websocket: \`${bakery.ws.ping}\`ms`
	}})
}

exports.help = {
	aliases: [],
	name: "ping",
	description: "Check bot latency.",
	usage: "ping",
	example: "ping"
}