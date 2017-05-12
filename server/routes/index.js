require("rootpath")();
const glob = require("glob");

module.exports = (app) => {
	const routes = glob.sync("server/routes/!(index).js");

	routes.forEach(route => {
		require(route)(app);
	});

	// Fallback route
	app.route(["/", "/*"]).all((req, res) => {
		res.send("This is the fallback route.");
	});
};
