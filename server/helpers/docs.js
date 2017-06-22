require("rootpath")();
const glob = require("glob");
const swaggerJSDoc = require("swagger-jsdoc");
const prettySwag = require("pretty-swag");
const packageJson = require("package.json");

// Set options for Swagger
const options = {
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

// Set config for Swagger UI
const config = {
	format: "singleFile",
	markdown: true,
	fixedNav: true,
	autoTags: true,
	noDate: true,
	collapse: {
		path: false,
		method: true,
		tool: true,
	},
	theme: {
		default: "blue",
		GET: "blue",
		POST: "indigo",
		DELETE: "red",
		PUT: "amber",
	},
};

module.exports = () => {
	return new Promise((resolve, reject) => {
		prettySwag.run(swaggerJSDoc(options), null, config, (err, data) => {
			if (err) { // Something went wrong while creating the docs
				reject(err);
			} else { // Everything is fine, send html
				resolve(data);
			}
		});
	});
};
