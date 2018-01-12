const packageJson = require("./package.json");

module.exports = {
	apps: [{
		name: packageJson.name,
		script: "./index.js",
		watch: false,
		instances: 2,
		exec_mode: "cluster", // eslint-disable-line camelcase
		log_date_format: "YYYY-DD-MM HH:mm:ss.SSS", // eslint-disable-line camelcase
		env: {
			NODE_ENV: "local",
		},
		env_development: { // eslint-disable-line camelcase
			NODE_ENV: "development",
		},
		env_staging: { // eslint-disable-line camelcase
			NODE_ENV: "staging",
		},
		env_production: { // eslint-disable-line camelcase
			NODE_ENV: "production",
		},
	}],
};
