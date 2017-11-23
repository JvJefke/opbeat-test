const expect = require("chai").expect;

const errorHandler = require(process.cwd() + "/server/helpers/errorHandler");

describe("Error handler helper", () => {
	it("Should return an error with stack", (done) => {
		const err = new TypeError("ERR_CREATING_DOCS");
		const result = errorHandler(err);

		expect(result).to.be.an("object");
		expect(result).to.have.property("statusCode", 400);
		expect(result).to.have.property("msg", "TypeError occured. See the stack for more information.");
		expect(result).to.have.property("stack");

		done();
	});

	it("Should return the error for creating docs", (done) => {
		const err = new Error("ERR_CREATING_DOCS");
		const result = errorHandler(err);

		expect(result).to.be.an("object");
		expect(result).to.have.property("statusCode", 400);
		expect(result).to.have.property("msg", "Unable to create the docs.");

		done();
	});

	it("Should return the missing authorization error", (done) => {
		const err = new Error("MISSING_AUTHORIZATION");
		const result = errorHandler(err);

		expect(result).to.be.an("object");
		expect(result).to.have.property("statusCode", 401);
		expect(result).to.have.property("msg", "Not authorized.");

		done();
	});

	it("Should return the item not found error", (done) => {
		const err = new Error("ITEM_NOT_FOUND");
		const result = errorHandler(err);

		expect(result).to.be.an("object");
		expect(result).to.have.property("statusCode", 404);
		expect(result).to.have.property("msg", "Item not found.");

		done();
	});

	it("Should return the default error", (done) => {
		const err = "Random error";
		const result = errorHandler(err);

		expect(result).to.be.an("object");
		expect(result).to.have.property("statusCode", 500);
		expect(result).to.have.property("msg", "Something unexpected happened.");

		done();
	});

	it("Should return the thrown error when not known", (done) => {
		const err = new Error("Random error");
		const result = errorHandler(err);

		expect(result).to.be.an("object");
		expect(result).to.have.property("statusCode", 500);
		expect(result).to.have.property("msg", "Random error");

		done();
	});
});