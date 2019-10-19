const express = require('express');
const app = express();
const PORT = 8080 | process.env.port;
const HOST = '0.0.0.0';
const mockPersonae = require('./data/mockPersonae.json');
const { generatePersona } = require('./controllers/persona');

app.get('/', (req, res) => {
	res.json({
		type   : 'service',
		name   : 'Personae',
		desc   : 'A service providing random, diverse personas',
		version: '0.0.1'
	});
});

app.get('/personae', (req, res) => {
	res.json({
		personae: mockPersonae
	});
});

app.get('/personae/random', (req, res) => {
	res.json({
		persona: generatePersona()
	});
});

app.listen(PORT, HOST);
process.stdout.write(`Service running | port ${PORT} | host ${HOST}\n`);
