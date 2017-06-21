const Joi = require("joi");

module.exports = (env) => {
	// Validate env
	const schema = Joi.object().keys({
		NODE_ENV: Joi.string().required().valid([
			"local",
			"development",
			"test",
		]),
	});

	const { error } = Joi.validate(env, schema, {
		allowUnknown: true,
	});

	if (error) {
		throw new Error(`Config validation error: ${error.message}`);
	}
};
