class BakeryUtils {
	static parseTime(s) {
		let ms = s % 1000;
		s = (s - ms) / 1000;
		let secs = s % 60;
		s = (s - secs) / 60;
		let mins = s % 60;
		let hours = (s - mins) / 60;

		if (hours.toString().length === 1) hours = `0${hours}`;
		if (mins.toString().length === 1) mins = `0${mins}`;
		if (secs.toString().length === 1) secs = `0${secs}`;

		return `${hours}:${mins}:${secs}`;
	}
}

module.exports = BakeryUtils;