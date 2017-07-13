const expect = require("chai").expect;

const errorHandler = require(process.env.PWD + "/server/helpers/errorHandler");

describe("Error handler helper", () => {
	it("Should return an error with stack", function(done) {
		const err = new TypeError("ERR_CREATING_DOCS");
		const result = errorHandler(err);

		expect(result).to.be.an("object");
		expect(result).to.have.property("statusCode");
		expect(result.statusCode).to.be.equal(400);
		expect(result).to.have.property("msg");
		expect(result.msg).to.be.equal("TypeError occucerd. See the stack for more information.");
		expect(result).to.have.property("stack");

		done();
	});

	it("Should return the error for creating docs", function(done) {
		const err = new Error("ERR_CREATING_DOCS");
		const result = errorHandler(err);

		expect(result).to.be.an("object");
		expect(result).to.have.property("statusCode");
		expect(result.statusCode).to.be.equal(400);
		expect(result).to.have.property("msg");
		expect(result.msg).to.be.equal("Unable to create the docs.");
		expect(result).to.not.have.property("stack");

		done();
	});

	it("Should return the missing authorization error", function(done) {
		const err = new Error("MISSING_AUTHORIZATION");
		const result = errorHandler(err);

		expect(result).to.be.an("object");
		expect(result).to.have.property("statusCode");
		expect(result.statusCode).to.be.equal(401);
		expect(result).to.have.property("msg");
		expect(result.msg).to.be.equal("Not authorized.");
		expect(result).to.not.have.property("stack");

		done();
	});

	it("Should return the item not found error", function(done) {
		const err = new Error("ITEM_NOT_FOUND");
		const result = errorHandler(err);

		expect(result).to.be.an("object");
		expect(result).to.have.property("statusCode");
		expect(result.statusCode).to.be.equal(404);
		expect(result).to.have.property("msg");
		expect(result.msg).to.be.equal("Item not found.");
		expect(result).to.not.have.property("stack");

		done();
	});

	it("Should return the default error", function(done) {
		const err = "Random error";
		const result = errorHandler(err);

		expect(result).to.be.an("object");
		expect(result).to.have.property("statusCode");
		expect(result.statusCode).to.be.equal(500);
		expect(result).to.have.property("msg");
		expect(result.msg).to.be.equal("Something unexpected happened.");
		expect(result).to.not.have.property("stack");

		done();
	});

	it("Should return the thrown error when not known", function(done) {
		const err = new Error("Random error");
		const result = errorHandler(err);

		expect(result).to.be.an("object");
		expect(result).to.have.property("statusCode");
		expect(result.statusCode).to.be.equal(500);
		expect(result).to.have.property("msg");
		expect(result.msg).to.be.equal("Random error");
		expect(result).to.not.have.property("stack");

		done();
	});
});
