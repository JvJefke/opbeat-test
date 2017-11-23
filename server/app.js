// Check if environment is configured and valid
require("./helpers/environment")(process.env);

const app = require("express")();
const config = require(process.cwd() + "/config");

// Init global middleware
require("./middleware/global")(app);

// Init routes
require("./routes/")(app);

// Set fallback for errors
app.use(require("./middleware/errorHandler"));

// Init server
app.listen(config.server.port, () => {
	console.log(`Server listening at port ${config.server.port}, running in ${process.env.NODE_ENV} mode.`); // eslint-disable-line no-console
});

module.exports = exports = app;
