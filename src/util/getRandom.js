const getRandom = (min, max) => Math.ceil(Math.random() * (max - min) + min);

const getWeightedRandom = weighting => {
	let table = [];

	for (let i in weighting) {
		for (let j = 0; j < weighting[i] * 10; j++) {
			table.push(i);
		}
	}
	return function() {
		return table[Math.floor(Math.random() * table.length)];
	};
};

//const testRand = getWeightedRandom({ 0: 0.8, 1: 0.1, 2: 0.1 });

module.exports = {
	getRandom,
	getWeightedRandom
};
