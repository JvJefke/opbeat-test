const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const session = require("./session");

module.exports = (app) => {
	// Init cookie parser
	app.use(cookieParser());

	// Init body parser
	app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
	app.use(bodyParser.json({ limit: "50mb", keepExtensions: true }));

	// Load express session settings
	app.use(session);

	// Using helmet to make app more secure
	app.use(helmet.xssFilter());
	app.use(helmet.noSniff());
	app.use(helmet.ieNoOpen());
	app.use(helmet.hidePoweredBy());
};
