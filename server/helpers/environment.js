const ValidationHelper = require("./validation");

module.exports = (env) => {
	// Set default environment to `local` if missing
	env.NODE_ENV = env.NODE_ENV || "local";

	const validation = ValidationHelper.validator(ValidationHelper.presets.nodeEnvironment, "NODE_ENV_NOT_VALID", env);

	if (validation instanceof Error) {
		throw new Error(`Config validation error: ${validation.message}.`);
	}
};
