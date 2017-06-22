require("rootpath")();
const DocsHelper = require("server/helpers/docs");

module.exports = (req, res, next) => {
	DocsHelper()
		.then((response) => {
			res.send(response);
		})
		.catch(next);
};
