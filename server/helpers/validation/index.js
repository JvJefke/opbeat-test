const Joi = require("joi");
const curry = require("lodash.curry");

const presets = require("./presets");

const validator = (preset, onFailError, source) => {
	const validation = Joi.validate(source, preset.schema, preset.options);

	if (validation.error) {
		throw new Error(onFailError);
	}
	// Return value from validation, for casting etc
	return validation.value;
};

module.exports = {
	validator: curry(validator),
	presets,
};
