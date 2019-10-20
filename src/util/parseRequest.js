const { WEIGHING } = require('./../controllers/Persona');

const getWeighingFromRequest = request => {
	if (request.query && request.query.weighing) {
		return request.query.weighing;
	} else {
		return WEIGHING.AVERAGE;
	}
};

module.exports = {
	getWeighingFromRequest
};
