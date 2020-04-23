const Database = require('better-sqlite3');
const db = new Database('././src/Bakery.db');

class EconomyFunctions {

	static init(userID) {
		const row = db.prepare("SELECT * FROM users WHERE id=?;").get(userID)
		if(!row) { 
			return db.prepare("INSERT INTO users (id, money, badges, daily, optout) VALUES (?, ?, ?, ?, ?);").run(userID, 0, "[]", 0, 0)
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

	static get(userID, request) {
		const row = db.prepare("SELECT * FROM users WHERE id=?;").get(userID)
		
		// TODO: Change this to a switch block
		if(request === "daily") { // request is basically the data we are requesting for (daily time, balance whatever)
			return row.daily;
		} else if (request === "money") { 
			return row.money;
		}
	}

	static give(userID, amount) {
		const row = db.prepare("SELECT * FROM users WHERE id=?;").get(userID)
		db.prepare("REPLACE INTO users (id, money, badges, daily, optout) VALUES (?, ?, ?, ?, ?);").run(userID, amount, row.badges, row.daily, row.optout)
		return;
	}

	static daily(userID) {
		const row = db.prepare("SELECT * FROM users WHERE id=?;").get(userID)
		db.prepare("REPLACE INTO users (id, money, badges, daily, optout) VALUES (?, ?, ?, ?, ?);").run(userID, row.money + 500, row.badges, Date.now(), row.optout)
		return;
	}
}

module.exports = EconomyFunctions;