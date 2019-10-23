const { app, PORT, HOST } = require('./index');

app.listen(PORT, HOST, null, () => {
	process.stdout.write(`Service running | port ${PORT} | host ${HOST}\n`);
});
