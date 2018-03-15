const get = require("lodash.get");

const errorHandler = (err) => {
	let statusCode;
	let msg = "";

	// If the err name is defined, we should not check for our own custom errors
	if (err.name && err.name !== "Error" && err.name !== "ValidationError") {
		statusCode = 400;
		msg = `${err.name} occured. See the stack for more information.`;

		return { statusCode, msg, stack: err.stack.split(/\r?\n/) };
	}

	// Get the correct message
	switch (err.message) {
		case "OBJECT_VALIDATION_FAILED":
			statusCode = 400;
			msg = get(err, "validation.details", []).map(detail => {
				return {
					err: detail.message,
				};
			});
			break;
		case "ERR_CREATING_DOCS":
			statusCode = 400;
			msg = "Unable to create the docs.";
			break;
		case "MISSING_AUTHORIZATION":
			statusCode = 401;
			msg = "Not authorized.";
			break;
		case "ITEM_NOT_FOUND":
			statusCode = 404;
			msg = "Item not found.";
			break;

		default:
			statusCode = 500;
			msg = err.message || "Something unexpected happened.";
	}

	return { statusCode, msg };
};

module.exports = errorHandler;
