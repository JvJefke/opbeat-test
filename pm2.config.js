const packageJson = require("./package.json");

/* eslint-disable camelcase */
module.exports = {
	apps: [{
		name: packageJson.name,
		script: "./index.js",
		watch: false,
		instances: 2,
		exec_mode: "cluster",
		log_date_format: "YYYY-DD-MM HH:mm:ss.SSS",
		env: {
			NODE_ENV: "local",
		},
		env_development: {
			NODE_ENV: "development",
		},
		env_staging: {
			NODE_ENV: "staging",
		},
		env_production: {
			NODE_ENV: "production",
		},
	}],
};
