require("rootpath")();
const DocsHelper = require("server/helpers/docs");

module.exports = (req, res, next) => {
	res.status(200).json(req.swaggerData);
};
