// We cannot require `config` because this requires the environment config
// And we are checking if the environment config is valid... :)
const generalConfig = require(process.cwd() + "/config/general");
const Joi = require("joi");

module.exports = (env) => {
	// Validate env
	const schema = Joi.object().keys({
		NODE_ENV: Joi.string().required().valid(generalConfig.server.environments),
	});

	ValidationHelper.validator(ValidationHelper.presets.nodeEnvironment, "NODE_ENV_NOT_VALID", env);
};
