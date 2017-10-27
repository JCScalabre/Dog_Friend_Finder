var userData = require("../data/friends.js");

module.exports = function(app) {

	app.get("/api/users", function(req, res) {
		res.json(userData);
	});

	app.post("/api/add", function(req, res) {
		userData.push(req.body);
		console.log(userData[0].answers);
		console.log(req.body.answers);
		res.json({hello: "this stuff"});
	});
};