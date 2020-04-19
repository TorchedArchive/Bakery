module.exports = (bakery, msg) => {
	if(msg.author.bot) return;
	if(msg.content === "hi") {
		msg.channel.send("hello")
	}
}