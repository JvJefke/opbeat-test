require("rootpath")();
let config = require("config");
const expect = require("chai").expect;
const supertest = require("supertest");

// API setup
const api = supertest("http://localhost:" + config.server.port + "/");

// Start the application
let app = require("server/app.js");

describe("Server docs route", () => {
	describe("Disabled config", () => {
		it("Should return the fallback message because the docs are disabled by default", function(done) {
			api
				.get("docs")
				.then((response) => {
					expect(response.statusCode).to.be.equal(200);
					expect(response.text).to.be.equal("This is the fallback route.");
					done();
				})
				.catch(done);
		});
	});
	describe("Enabled config", () => {
		before((done) => {
			// Check if the docs route was required
			if (require.cache[process.env.PWD + "/server/routes/docs.js"]) {
				// Delete the docs route
				delete require.cache[process.env.PWD + "/server/routes/docs.js"];
				// Set the docs flag to true
				config.state.docs = true;
				// Require docs routes again, now WITH the routes
				require("server/routes/docs")(app);
			}

			// Manipulate the rotuer stack
			app._router.stack.forEach((route, index) => {
				if (route && route.hasOwnProperty("route") && route.route && route.route.hasOwnProperty("path")) {
					// Check for the fallback route
					if (Array.isArray(route.route.path) && route.route.path[0] === "/" && route.route.path[1] === "/*") {
						// Move item to last position
						app._router.stack.splice(index, 1);
						app._router.stack.push(route);
					}
				}
			});

			done();
		});

		it("Should return the HTML docs because the docs flag is enabled", function(done) {
			api
				.get("docs")
				.then((response) => {
					expect(response.statusCode).to.be.equal(200);
					expect(response).to.have.property("headers");
					expect(response.headers).to.be.an("object");
					expect(response.headers).to.have.property("content-type");
					expect(response.headers["content-type"]).to.be.contain("text/html");
					done();
				})
				.catch(done);
		});

		it("Should return the JSON docs because the docs flag is enabled", function(done) {
			api
				.get("docs/json")
				.then((response) => {
					expect(response.statusCode).to.be.equal(200);
					expect(response).to.have.property("headers");
					expect(response.headers).to.be.an("object");
					expect(response.headers).to.have.property("content-type");
					expect(response.headers["content-type"]).to.be.contain("application/json");
					done();
				})
				.catch(done);
		});
	});
});
