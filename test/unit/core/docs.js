require("rootpath")();
const expect = require("chai").expect;
const DocsHelper = require("server/helpers/docs");

describe("Docs helper", () => {
	it("Should return an error because no Swagger JSON was given", function(done) {
		DocsHelper()
			.then((response) => {
				expect(response).to.be.undefined;
				done();
			})
			.catch((err) => {
				expect(err.message).to.be.equal("ERR_CREATING_DOCS");
				done();
			});
	});

	it("Should return html because the Swagger JSON is valid", function(done) {
		const swagger = {
			info: {
				title: "nodejs-boilerplate",
				version: "1.0.0-alpha.1",
			},
			swagger: "2.0",
			paths: {},
		};

		DocsHelper(swagger)
			.then((response) => {
				expect(response).to.contain("<html>");
				done();
			})
			.catch((err) => {
				expect(err).to.be.undefined;
				done();
			});
	});
});
