module.exports = {
	state: {
		test: false,
		production: false,
		docs: false,
	},
	server: {
		environments: [ // Available environments
			"local",
			"test",
			"development",
			"acceptance",
			"production",
		],
		cookies: {
			maxAge: 1000 * 60 * 60 * 24 * 30,
			name: "MySession",
			secret: "My$€cr€T",
		},
	},
};
