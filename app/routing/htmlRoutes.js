var path = require("path");

var htmlRoutes = function(app) {

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.get("/result", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/result.html"));
	});

	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
}

module.exports = htmlRoutes;