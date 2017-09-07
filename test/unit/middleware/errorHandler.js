const expect = require("chai").expect;

const errorHandler = require(process.cwd() + "/server/middleware/errorHandler");

describe("Error handler middleware", () => {
	it("Should skip if there is no error", function(done) {
		errorHandler(null, null, null, (err) => {
			expect(err).to.be.undefined;
			done();
		});
	});

	it("Should return a custom error message", function(done) {
		const err = {
			message: "Custom error message",
		};
		const req = {};
		const res = {
			status: (statusCode) => {
				expect(statusCode).to.be.equal(500);
				return {
					json: (body) => {
						expect(body).to.be.an("object");
						expect(body).to.have.property("err");
						expect(body.err).to.be.equal(err.message);
						done();
					},
				};
			},
		};
		const next = require(process.cwd() + "/server/middleware/errorHandler");

		errorHandler(err, req, res, next);
	});

	it("Should do nothing when the headers are already sent", function(done) {
		const err = "Some error message";
		const req = {};
		const res = {
			headersSent: true,
			status: (statusCode) => {
				expect(statusCode).to.be.equal(500);
				return {
					json: (body) => {
						expect(body).to.be.an("object");
						expect(body).to.have.property("err");
						expect(body.err).to.be.equal(err.message);
						done();
					},
				};
			},
		};
		const next = require(process.cwd() + "/server/middleware/errorHandler");

		let result = errorHandler(err, req, res, next);

		expect(result).to.be.undefined;

		done();
	});
});
