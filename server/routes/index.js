const glob = require("glob");

module.exports = (app) => {
	glob.sync("./server/routes/!(index).js", {
		absolute: true,
	}).forEach(route => {
		require(route)(app);
	});

	// Fallback route
	app.route(["/", "/*"]).all((req, res) => {
		res.send("This is the fallback route.");
	});
};
