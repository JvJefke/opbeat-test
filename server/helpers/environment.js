const ValidationHelper = require("./validation");

module.exports = (env) => {
	ValidationHelper.validator(ValidationHelper.presets.nodeEnvironment, "NODE_ENV_NOT_VALID", env);
};
