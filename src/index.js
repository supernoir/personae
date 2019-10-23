const express = require('express');
const app = express();
const PROTOCOL = 'http';
const PORT = 8080 | process.env.port;
const HOST = '0.0.0.0';
const mockPersonae = require('./data/mockPersonae.json');
const { Persona } = require('./controllers/Persona.js');
const { getWeighingFromRequest } = require('./util/parseRequest');

app.get('/', (req, res) => {
	res.json({
		type   : 'service',
		name   : 'Personae',
		desc   : 'A service providing random, diverse personas',
		version: '0.0.1'
	});
});

app.get('/personae/mock', (req, res) => {
	res.json({
		personae: mockPersonae
	});
});

app.get('/personae/random', (req, res) => {
	let currentWeighing = getWeighingFromRequest(req);
	let persona = new Persona(currentWeighing);

	res.json({
		persona : persona.generatePersona(),
		weighing: currentWeighing
	});
});

app.get('/personae/random/gender', (req, res) => {
	let currentWeighing = getWeighingFromRequest(req);
	let persona = new Persona(currentWeighing);
	res.json({
		persona : persona.getGenderIdentity(),
		weighing: currentWeighing
	});
});

app.get('/personae/random/nationality', (req, res) => {
	let currentWeighing = getWeighingFromRequest(req);
	let persona = new Persona(currentWeighing);
	res.json({
		persona : persona.getGenderIdentity(),
		weighing: currentWeighing
	});
});

app.get('/personae/random/sexuality', (req, res) => {
	let currentWeighing = getWeighingFromRequest(req);
	let persona = new Persona(currentWeighing);
	res.json({
		persona : persona.getSexuality(),
		weighing: currentWeighing
	});
});

module.exports = {
	app,
	PORT,
	HOST,
	PROTOCOL
};
