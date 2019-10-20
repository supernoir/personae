const supertest = require('supertest');
const { PORT, HOST, PROTOCOL } = require('./index');
const TEST_AGENT = `${PROTOCOL || 'http'}://${HOST || 'localhost'}:${PORT || process.env.PORT}`;
const server = supertest.agent(TEST_AGENT);

const TEST_WEIGHING = 'average';

describe('Personae API', () => {
	describe('GET /', () => {
		it('should be up and reachable', async done => {
			await server.get('/').expect('Content-type', /json/);
			await server.get('/').expect(200);
			done();
		});
	});
	describe('GET /personae/random', () => {
		it('should retrieve a random persona', done => {
			server.get('/personae/random/').send({ weighing: TEST_WEIGHING }).expect('Content-type', /json/).expect(200);
			done();
		});
	});
	describe('GET /personae/random/nationality', () => {
		it('should retrieve a random nationality', done => {
			server.get('/personae/random/nationality').send({ weighing: TEST_WEIGHING }).expect('Content-type', /json/).expect(200);
			done();
		});
	});
	describe('GET /personae/random/sexuality', () => {
		it('should retrieve a random sexuality', done => {
			server.get('/personae/random/sexuality').send({ weighing: TEST_WEIGHING }).expect('Content-type', /json/).expect(200);
			done();
		});
	});
	describe('GET /personae/random/gender', () => {
		it('should retrieve a random gender', done => {
			server.get('/personae/random/gender').send({ weighing: TEST_WEIGHING }).expect('Content-type', /json/).expect(200);
			done();
		});
	});
	describe('GET /personae/random/age', () => {
		it('should retrieve a random age', done => {
			server.get('/personae/random/age').send({ weighing: TEST_WEIGHING }).expect('Content-type', /json/).expect(200);
			done();
		});
	});
});
