const ValidationHelper = require("./validation");

module.exports = (env) => {
	// Set default environment to `local` if missing
	env.NODE_ENV = env.NODE_ENV || "local";

	ValidationHelper.validator(ValidationHelper.presets.nodeEnvironment, "NODE_ENV_NOT_VALID", env);
};
