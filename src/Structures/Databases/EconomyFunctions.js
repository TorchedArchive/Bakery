const Database = require('better-sqlite3');
const db = new Database('././src/Bakery.db');

class EconomyFunctions {
	constructor() {}

	static init(userID) {
		const row = db.prepare("SELECT * FROM users WHERE id=?;").get(userID)
		if(!row) { 
			return db.prepare("INSERT INTO users (id, money, badges) VALUES (?, ?, ?);").run(userID, 0, "[]")
		} else {
			return;
		}
	}

	static hasBakery(userID) {
		const row = db.prepare("SELECT * FROM users WHERE id=?;").get(userID)
		if(!row) {
			return false;
		} else {
			return true;
		}
	}

	static get(userID) {
		const row = db.prepare("SELECT * FROM users WHERE id=?;").get(userID)
		if(!row) {
			return false;
		} else {
			return row.money
		}
	}
}

module.exports = EconomyFunctions;