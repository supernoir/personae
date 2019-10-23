const supertest = require('supertest');
const request = require('supertest');
const { app, PORT, HOST, PROTOCOL } = require('./index');
const TEST_AGENT = `${PROTOCOL || 'http'}://${HOST || 'localhost'}:${PORT || process.env.PORT}`;
const server = supertest.agent(TEST_AGENT);

const TEST_WEIGHING = 'average';

describe('Personae API', () => {
	test('should be up and reachable', () => {
		request(app).get('/').then(response => {
			expect(response.statusCode).toBe(200);
		});
	});

	describe('GET /personae/random', () => {
		it('should retrieve a random persona', () => {
			request(app).get('/personae/random').send({ weighing: TEST_WEIGHING }).then(response => {
				expect(response.statusCode).toBe(200);
			});
		});
	});

	describe('GET /personae/random/nationality', () => {
		it('should be reachable', () => {
			request(app).get('/personae/random/nationality').send({ weighing: TEST_WEIGHING }).then(response => {
				expect(response.statusCode).toBe(200);
			});
		});
		it('should retrieve a random nationality', () => {
			request(app).get('/personae/random/nationality').send({ weighing: TEST_WEIGHING }).then(response => {
				expect(response.body).toHaveProperty('weighing', TEST_WEIGHING);
			});
		});
	});

	describe('GET /personae/random/sexuality', () => {
		it('should retrieve a random sexuality', () => {
			request(app).get('/personae/random/sexuality').send({ weighing: TEST_WEIGHING }).expect('Content-type', /json/).expect(200);
		});
	});
	describe('GET /personae/random/gender', () => {
		it('should retrieve a random gender', () => {
			request(app).get('/personae/random/gender').send({ weighing: TEST_WEIGHING }).expect('Content-type', /json/).expect(200);
		});
	});
	describe('GET /personae/random/age', () => {
		it('should retrieve a random age', () => {
			request(app).get('/personae/random/age').send({ weighing: TEST_WEIGHING }).expect('Content-type', /json/).expect(200);
		});
	});
});
