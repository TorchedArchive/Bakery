const Database = require('better-sqlite3');
const db = new Database('././src/Bakery.db');

class EconomyFunctions {
	constructor() {}

	static init(userID) {
		const row = db.prepare("SELECT * FROM users WHERE id=?;").get(userID)
		if(!row) { 
			return db.prepare("INSERT INTO users (id, money, badges, daily) VALUES (?, ?, ?, ?);").run(userID, 0, "[]", 0)
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
		return row.money;
	}

	static give(userID, amount) {
		const row = db.prepare("SELECT * FROM users WHERE id=?;").get(userID)
		db.prepare("REPLACE INTO users (id, money, badges, daily) VALUES (?, ?, ?, ?);").run(userID, amount, row.badges, row.daily)
		return;
	}

	static daily(userID) {
		const row = db.prepare("SELECT * FROM users WHERE id=?;").get(userID)
		db.prepare("REPLACE INTO users (id, money, badges, daily) VALUES (?, ?, ?, ?);").run(userID, 500, row.badges, Date.now())
		return;
	}
}

module.exports = EconomyFunctions;