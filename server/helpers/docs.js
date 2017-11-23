const prettySwag = require("pretty-swag");

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
		PATCH: "orange",
	},
};

module.exports = (swaggerData) => {
	return new Promise((resolve, reject) => {
		prettySwag.run(swaggerData, null, config, (err, data) => {
			if (err) { // Something went wrong while creating the docs
				reject(new Error("ERR_CREATING_DOCS"));
			} else { // Everything is fine, send html
				resolve(data);
			}
		});
	});
};
