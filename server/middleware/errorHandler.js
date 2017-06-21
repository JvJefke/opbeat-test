module.exports = function(err, req, res, next) {  // eslint-disable-line no-unused-vars
	if (!res.headersSent) {
		res.status(500).json({
			err: (err.message ? err.message : "Something unexpected happened."),
		});
		return;
	}
};
