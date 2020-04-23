const Database = require('better-sqlite3');
const db = new Database('././src/Bakery.db');

exports.run = (bakery, msg, args) => {
	const rows = db.prepare("SELECT * FROM users order by money desc limit 10;").get()
	console.log(rows)
}

exports.help = {
	aliases: [],
	name: "leaderboard",
	description: "See the top people with the best Bakery.",
	usage: "leaderboard [board]",
	example: "leaderboard server"
}