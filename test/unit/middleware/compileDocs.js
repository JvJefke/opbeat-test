const expect = require("chai").expect;
const compileDocs = require(process.cwd() + "/server/middleware/compileDocs");

describe("Compile Swagger JSON middleware", () => {
	it("Should pass swaggerData on the req object if succeeded", (done) => {
		const req = {};
		const res = {};

		compileDocs(req, res, (err) => {
			expect(err).to.be.undefined;
			expect(req.swaggerData).to.exist;
			done();
		});
	});
});
