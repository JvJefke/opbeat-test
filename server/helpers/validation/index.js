const Joi = require("joi");
const curry = require("lodash.curry");

const presets = require("./presets");

const validator = (preset, onFailError, source) => {
	const validation = Joi.validate(source, preset.schema, preset.options);

	// process._rawDebug("=================================");
	// process._rawDebug("validation", validation);
	// process._rawDebug("=================================");
	if (validation.error) {
		return new Error(onFailError);
	}
	return source;
};

module.exports = {
	validator: curry(validator),
	presets,
};
