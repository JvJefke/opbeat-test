const joi = require("joi");

// Validate required environment variables like NODE_ENV
const schema = joi.object({
	NODE_ENV: joi.any()
		.valid([
			"local",
			"development",
			"test",
		])
		.required(),
}).unknown()
	.required();

const { error } = joi.validate(process.env, schema);

if (error) {
	throw new Error(`Config validation error: ${error.message}`);
}
