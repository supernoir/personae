const nationalities = require("./../data/nationalities.json")
const sexualities = require("./../data/sexualities.json")
const genderidentities = require("./../data/genderidentities.json")
const util = require("../util/getRandom")

const getNationality =() => {
        try {
            const randomNationality = util.getRandom(0, nationalities.length);
            return nationalities[randomNationality]
        } catch (err) {
            return err
        }
    }

const getSexuality =() => {
        try {
            const randomSexuality = util.getRandom(0, sexualities.length);
            return sexualities[randomSexuality]
        } catch (err) {
            return err
        }
    }

const getGenderIdentity =() => {
        try {
            const randomGenderIdentity = util.getRandom(0, genderidentities.length);
            return genderidentities[randomGenderIdentity]
        } catch (err) {
            return err
        }
    }

const generatePersona = () => {
        return {
            nationality: getNationality(),
            sexuality: getSexuality(),
            gender: getGenderIdentity()
        }
    }

module.exports = {
    generatePersona
}