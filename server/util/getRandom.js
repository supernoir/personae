const getRandom = (min, max) => Math.ceil(Math.random() * (max - min) + min);

/**
 * Based on stackoverflow.com/questions/8435183/generate-a-weighted-random-number
 */
const getWeightedRandom = specification => {
	let table = [];
	for (let i in specification) {
		for (let j = 0; j < specification[i] * 10; j++) {
			table.push(i);
		}
	}
	return () => {
		return table[Math.floor(Math.random() * table.length)];
	};
};

module.exports = {
	getRandom,
	getWeightedRandom
};
