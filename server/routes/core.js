const CoreController = require("../controllers/core");

module.exports = (app) => {
	/**
	 * @swagger
	 * /status:
	 *   get:
	 *     description: Status call of the server
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: OK
	 *         schema:
	 *          type: object
	 *          properties:
	 *            status:
	 *              type: boolean
	 *            version:
	 *              type: string
	 */
	app.route("/status").get(CoreController.status);
	app.route("/status-error").get(CoreController.statusError);
};
