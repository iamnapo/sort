module.exports = {
	files: [
		"tests/main.test.js",
		...(process.version.startsWith("v10") ? [] : ["tests/module.test.mjs"]),
	],
};
