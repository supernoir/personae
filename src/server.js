const { app, PORT, HOST } = require('./app');

app.listen(PORT, HOST, null, () => {
	process.stdout.write(`Service running | port ${PORT} | host ${HOST}\n`);
});
