const logger = {
	norm: function (text) {
		console.log(text);
	},
	info: function (text) {
		console.log("[INFO] " + text);
	},
	warn: function (text) {
		console.log("[WARN] " + text);
	},
	error: function (text) {
		console.log("[ERROR] " + text);
	}
};

export { logger }
