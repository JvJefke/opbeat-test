// Check if environment is configured and valid
require("./helpers/environment")(process.env);

const app = require("express")();
const config = require(`${process.cwd()}/config`);

const opbeat = require("opbeat").start({
	appId: "09355542ad",
	organizationId: "91682734c4c44025bf0547a58fad465b",
	secretToken: "affc51fc33e5f190d4dec1c3ce9d30e82dfb0b0e",
	instrument: false,
});

// Add the Opbeat middleware after your regular middleware

// Init global middleware
require("./middleware/global")(app);

// Init routes
require("./routes/")(app);

app.use(opbeat.middleware.express());
// Set fallback for errors
// app.use(require("./middleware/errorHandler"));

// Init server
app.listen(config.server.port, () => {
	console.log(`Server listening at port ${config.server.port}, running in ${process.env.NODE_ENV} mode.`); // eslint-disable-line no-console
});

module.exports = exports = app;
