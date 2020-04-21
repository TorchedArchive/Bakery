
class BakeryLogger {
	static commands(msg) {
		console.log(`[Commands] ${msg}`)
	}

	static events(msg) {
		console.log(`[Events] ${msg}`)
	}

	static shard(id, msg) {
		console.log(`[Shard #${id}] ${msg}`)
	}

	static error(msg) {
		console.error(`[Error] ${msg}`)
	}

	static db(msg) {
		console.log(`[DB] ${msg}`)
	}
}

module.exports = BakeryLogger;