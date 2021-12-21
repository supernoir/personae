const nationalities = require('../data/nationalities.json')
const profession = require('../data/professions.json')
const sexualities = require('../data/sexualities.json')
const genderidentities = require('../data/genderidentities.json')
const dndClasses = require('../data/dnd-classes.json')
const dndRaces = require('../data/dnd-races.json')
const util = require('../util/getRandom')

// Define constants
const WEIGHING = {
	AVERAGE: 'average',
	REDUCED: 'reduced',
	BOOSTED: 'boosted'
}
const DEFAULT_MIN_AGE = 6
const DEFAULT_MAX_AGE = 99

class Persona {
	constructor(weighing) {
		this.weighing = weighing
	}
	getNationality() {
		try {
			const randomNationality = util.getRandom(0, nationalities.length)
			return nationalities[randomNationality]
		} catch (err) {
			return err
		}
	}

	getSexuality() {
		try {
			const randomSexuality = util.getRandom(0, sexualities.length)
			return sexualities[randomSexuality]
		} catch (err) {
			return err
		}
	}

	getProfession() {
		try {
			const randomProfession = util.getRandom(0, profession.length)
			return profession[randomProfession]
		} catch (err) {
			return err
		}
	}

	getGenderIdentity() {
		try {
			let spec = genderidentities.map(identity => identity.weight)
			const generateWeightedRandom = util.getWeightedRandom(spec)
			const weightedRandomIdentity = generateWeightedRandom()
			const defaultRandomIdentity = util.getRandom(0, genderidentities.length)

			return {
				unweighted: genderidentities[defaultRandomIdentity],
				weighted: genderidentities[weightedRandomIdentity]
			}
		} catch (err) {
			return err
		}
	}

	getAge(min = DEFAULT_MIN_AGE, max = DEFAULT_MAX_AGE) {
		try {
			const randomAge = util.getRandom(min, max)
			return randomAge
		} catch (err) {
			return err
		}
	}

	generatePersona() {
		return {
			nationality: this.getNationality(),
			sexuality: this.getSexuality(),
			gender: this.getGenderIdentity(),
			age: this.getAge(),
			profession: this.getProfession()
		}
	}

	getDndRace() {
		try {
			const randomDndRace = util.getRandom(0, dndRaces.length)
			return dndRaces[randomDndRace]
		} catch (err) {
			return err
		}
	}

	getDndClass() {
		try {
			const randomDndClass = util.getRandom(0, dndClasses.length)
			return dndClasses[randomDndClass]
		} catch (err) {
			return err
		}
	}	

	generateCharacter() {
		return {
			race: this.getDndRace(),
			class: this.getDndClass(),
		}
	}

	/**
 * 
 * batchGernatePersona
 * @param {*} count 
 * @param {*} specs 
 */
	generateBatchPersonae(count, specs = []) {
		let batchPersona = []
		for (let i = 0; i <= count; i++) {
			batchPersona.push(this.generatePersona())
		}
		return batchPersona
	}
}

module.exports = {
	Persona,
	WEIGHING
}
