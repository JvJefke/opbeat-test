require("rootpath")();
const expect = require("chai").expect;
const EnvironmentHelper = require("server/helpers/environment");

describe("Environment helper", () => {
	it("Should throw an error when NODE_ENV is not valid", function(done) {
		const env = {
			NODE_ENV: "invalid",
		};

		expect(function() {
			EnvironmentHelper(env);
		}).to.throw(Error, "NODE_ENV_NOT_VALID");

		done();
	});

	it("Should do not throw an error when the env is valid", function(done) {
		const env = {
			NODE_ENV: "test",
		};

		expect(function() {
			EnvironmentHelper(env);
		}).to.not.throw(Error);

		done();
	});

	it("Should set the environment to the default environment when missing", function(done) {
		const env = {};

		EnvironmentHelper(env);

		expect(process.env.NODE_ENV).to.be.a("string");
		expect(process.env.NODE_ENV).to.be.equal("test");
		done();
	});
});
