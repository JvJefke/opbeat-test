const ErrorHelper = require("../helpers/errorHandler");

const errorHandler = (err, req, res, next) => {
	// Check if there is an error
	if (!err) {
		next();
	}

	// Check if the error is of type string
	// If so, "convert" it to an error
	if (typeof err === "string") {
		err = new Error(err);
	}

	// Do not send multiple responses
	if (res.headersSent) {
		return;
	}

	let { statusCode, msg } = ErrorHelper(err);

	// Return response
	res.status(statusCode).json({
		err: msg,
	});
};

module.exports = errorHandler;
