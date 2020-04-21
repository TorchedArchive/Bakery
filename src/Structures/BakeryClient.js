const Discord = require("discord.js")

class BakeryClient extends Discord.Client {
	constructor(options) {
		super(options)

		this.log = require("./BakeryLogger.js")
		this.config = require("../../config.json")
		this.economy = require("./Databases/EconomyFunctions.js")
	}
}

module.exports = BakeryClient;