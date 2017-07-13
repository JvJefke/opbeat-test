const glob = require("glob");
const packageJson = require(process.env.PWD + "/package.json");
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: packageJson.name,
			version: packageJson.version,
		},
	},
	apis: glob.sync("server/routes/*.js", {
		absolute: true,
	}),
};

module.exports = (req, res, next) => {
	req.swaggerData = swaggerJSDoc(swaggerOptions);
	next();
};
