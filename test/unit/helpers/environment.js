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

	it("Should see if the `local` environment is valid", function(done) {
		const env = {
			NODE_ENV: "local",
		};

		expect(() => {
			EnvironmentHelper(env);
		}).to.not.throw(Error);

		done();
	});

	it("Should see if the `test` environment is valid", function(done) {
		const env = {
			NODE_ENV: "test",
		};

		expect(() => {
			EnvironmentHelper(env);
		}).to.not.throw(Error);

		done();
	});

	it("Should see if the `development` environment is valid", function(done) {
		const env = {
			NODE_ENV: "development",
		};

		expect(() => {
			EnvironmentHelper(env);
		}).to.not.throw(Error);

		done();
	});

	it("Should see if the `staging` environment is valid", function(done) {
		const env = {
			NODE_ENV: "staging",
		};

		expect(() => {
			EnvironmentHelper(env);
		}).to.not.throw(Error);

		done();
	});

	it("Should see if the `production` environment is valid", function(done) {
		const env = {
			NODE_ENV: "production",
		};

		expect(() => {
			EnvironmentHelper(env);
		}).to.not.throw(Error);

		done();
	});
});
