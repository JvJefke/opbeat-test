const config = require(process.env.PWD + "/config");
const expect = require("chai").expect;
const supertest = require("supertest");

// API setup
const api = supertest("http://localhost:" + config.server.port + "/");

// Start the application
require(process.env.PWD + "/server/app.js");

describe("Server status route", () => {
	it("Should return the server status", function(done) {
		api
			.get("status")
			.then((response) => {
				expect(response.statusCode).to.be.equal(200);
				expect(response.body).to.have.property("success");
				expect(response.body.success).to.be.a("boolean");
				expect(response.body.success).to.be.true;
				done();
			})
			.catch(done);
	});
});
