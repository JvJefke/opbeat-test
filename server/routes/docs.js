const config = require(`${process.cwd()}/config`);

const DocsMiddleware = require("../middleware/compileDocs");
const DocsController = require("../controllers/docs");

module.exports = (app) => {
	if (config.state.docs) { // Only allow docs if configured
		/**
		 * @swagger
		 * /docs:
		 *   get:
		 *     description: Documentation of all API's
		 *     produces:
		 *       - text/html
		 *     responses:
		 *       200:
		 *         description: OK
		 */
		app.route("/docs").get(DocsMiddleware, DocsController.html);

		/**
		 * @swagger
		 * /docs/json:
		 *   get:
		 *     description: Documentation of all API's in JSON format
		 *     produces:
		 *       - application/json
		 *     responses:
		 *       200:
		 *         description: OK
		 */
		app.route("/docs/json").get(DocsMiddleware, DocsController.json);
	}
};
