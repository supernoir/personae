const nationalities = require('./../data/nationalities.json');
const sexualities = require('./../data/sexualities.json');
const genderidentities = require('./../data/genderidentities.json');
const util = require('../util/getRandom');

// Define constants
const DEFAULT_MIN_AGE = 6;
const DEFAULT_MAX_AGE = 99;

const getNationality = () => {
	try {
		const randomNationality = util.getRandom(0, nationalities.length);
		return nationalities[randomNationality];
	} catch (err) {
		return err;
	}
};

const getSexuality = () => {
	try {
		const randomSexuality = util.getRandom(0, sexualities.length);
		return sexualities[randomSexuality];
	} catch (err) {
		return err;
	}
};

const getGenderIdentity = () => {
	try {
		const randomGenderIdentity = util.getRandom(0, genderidentities.length);
		return genderidentities[randomGenderIdentity];
	} catch (err) {
		return err;
	}
};

const getAge = (min = DEFAULT_MIN_AGE, max = DEFAULT_MAX_AGE) => {
	try {
		const randomAge = util.getRandom(min, max);
		return randomAge;
	} catch (err) {
		return err;
	}
};

const generatePersona = () => {
	return {
		nationality: getNationality(),
		sexuality  : getSexuality(),
		gender     : getGenderIdentity(),
		age        : getAge()
	};
};

module.exports = {
	generatePersona
};
