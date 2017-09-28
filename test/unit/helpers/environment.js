require("rootpath")();
const expect = require("chai").expect;
const EnvironmentHelper = require("server/helpers/environment");

describe("Environment helper", () => {
	it("Should throw an error when NODE_ENV is not defined", function(done) {
		const env = {};

		expect(() => {
			EnvironmentHelper(env);
		}).to.throw(Error, "Config validation error: child \"NODE_ENV\" fails because [\"NODE_ENV\" is required]");

		done();
	});

	it("Should throw an error when NODE_ENV is not valid", function(done) {
		const env = {
			NODE_ENV: "invalid",
		};

		expect(() => {
			EnvironmentHelper(env);
		}).to.throw(Error, /(Config validation error: child "NODE_ENV" fails because \["NODE_ENV" must be one of \[)(.*?\])(\])/);

		done();
	});

	it("Should do not throw an error when the env is valid", function(done) {
		const env = {
			NODE_ENV: "test",
		};

		expect(() => {
			EnvironmentHelper(env);
		}).to.not.throw(Error);

		done();
	});
});
