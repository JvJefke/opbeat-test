require("rootpath")();
const config = require("config");
const expect = require("chai").expect;
const supertest = require("supertest");

// API setup
const api = supertest("http://localhost:" + config.server.port + "/");

// Start the application
require("server/app.js");

describe("Server fallback route", () => {
	it("Should return the fallback route message", function(done) {
		api
			.get("gibberish")
			.then((response) => {
				expect(response).to.be.an("object");
				expect(response).to.have.property("text", "This is the fallback route.");
				done();
			});
	});
});
