const Discord = require("discord.js")

class BakeryClient extends Discord.Client {
	constructor(options) {
		super(options)

		this.log = new (require("./BakeryLogger.js"))()
		this.config = require("../../config.json")
	}
}

module.exports = BakeryClient;