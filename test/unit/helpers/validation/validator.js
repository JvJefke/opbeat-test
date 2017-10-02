const expect = require("chai").expect;
const proxyquire = require("proxyquire");
const Joi = require("Joi");
const ValidationHelper = proxyquire(process.cwd() + "/server/helpers/validation", {
	"./presets": {
		check: {
			schema: Joi.object().keys({
				key: Joi.string().required().valid(["value"]),
			}),
			options: {},
		},
	},
});

describe("Validator helper", () => {
	it("Should throw a custom error when the object is not valid", function(done) {
		const obj = {};

		expect(function() {
			ValidationHelper.validator(ValidationHelper.presets.check, "DEFINED_ERROR", obj);
		}).to.throw(Error, "DEFINED_ERROR");

		done();
	});

	it("Should return the source when the object is valid", function(done) {
		const obj = {
			key: "value",
		};
		const validation = ValidationHelper.validator(ValidationHelper.presets.check, "DEFINED_ERROR", obj);

		expect(validation).to.be.an("object");
		expect(validation).to.have.property("key");
		expect(validation.key).to.be.equal(obj.key);

		done();
	});
});
