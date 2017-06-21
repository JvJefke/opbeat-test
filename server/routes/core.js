require("rootpath")();
const config = require("config");

const CoreController = require("server/controllers/core");

module.exports = (app) => {
	/**
	 * @swagger
	 * /status:
	 *   get:
	 *     description: Status call of the server
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: success
	 *         description: Success boolean
	 *         in: body
	 *         required: true
	 *         type: boolean
	 *       - name: version
	 *         description: App version
	 *         in: body
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: OK
	 */
	app.route("/status").get(CoreController.status);

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
		app.route("/docs").get(CoreController.docs);
	}
};
