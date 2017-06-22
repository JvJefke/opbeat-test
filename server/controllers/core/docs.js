require("rootpath")();
const DocsHelper = require("server/helpers/docs");

module.exports = (req, res) => {
	DocsHelper()
		.then((response) => {
			res.send(response);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};
