const Discord = require("discord.js")

class BakeryClient extends Discord.Client {
	constructor(options) {
		super(options)

		this.log = require("./BakeryLogger.js")
		this.utils = require("./BakeryUtils.js")
		this.economy = require("./Databases/EconomyFunctions.js")
		this.config = require("../../config.json")
	}
}

module.exports = BakeryClient;