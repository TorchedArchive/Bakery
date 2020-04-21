const Database = require('better-sqlite3');
const db = new Database('././src/Bakery.db');

exports.run = async (bakery, msg) => {
	if(!bakery.economy.hasBakery(msg.author.id)) return bakery.economy.init(msg.author.id)
}

exports.help = {
	aliases: ["bal", "$"],
	name: "balance",
	description: "See the amount of money you have.",
	usage: "balance [@user]",
	example: "balance"
}