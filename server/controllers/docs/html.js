require("rootpath")();
const DocsHelper = require("server/helpers/docs");

module.exports = (req, res, next) => {
	DocsHelper(req.swaggerData)
		.then((response) => {
			res.send(response);
		})
		.catch(next);
};
