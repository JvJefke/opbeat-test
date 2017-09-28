const errorHandler = (err) => {
	let statusCode;
	let msg = "";

	// Get the correct message
	switch (err.message) {
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
