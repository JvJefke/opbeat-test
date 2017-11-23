const DocsHelper = require("../../helpers/docs");

module.exports = (req, res, next) => {
	DocsHelper(req.swaggerData)
		.then((response) => {
			res.send(response);
		})
		.catch(next);
};
