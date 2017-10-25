// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'app/public')));

// List of users:
var users = [
	{
		ownerName: "Antionette",
		ownerScore: 10,
		dogName: "Buster",
		dogBreed: "Labrador",
		dogSize: "Large",
	},
	{
		ownerName: "Yijun",
		ownerScore: 10,
		dogName: "Chin",
		dogBreed: "Shih Tzu",
		dogSize: "Small",
	},
	{
		ownerName: "Mathew",
		ownerScore: 12,
		dogName: "Coco",
		dogBreed: "Beagle",
		dogSize: "Medium",
	},
	{
		ownerName: "Bill",
		ownerScore: 12,
		dogName: "Bella",
		dogBreed: "Yorkshire Terrier",
		dogSize: "Small",
	},
	{
		ownerName: "Louisa",
		ownerScore: 12,
		dogName: "Rocky",
		dogBreed: "Dachshund",
		dogSize: "Medium",
	},
	{
		ownerName: "Alexandra",
		ownerScore: 12,
		dogName: "Lola",
		dogBreed: "Chihuahua",
		dogSize: "Small",
	},
	{
		ownerName: "Bethany",
		ownerScore: 12,
		dogName: "Sam",
		dogBreed: "German Shepherd",
		dogSize: "Large",
	},
	{
		ownerName: "Abbey",
		ownerScore: 12,
		dogName: "Teddy",
		dogBreed: "Pug",
		dogSize: "Small",
	},
	{
		ownerName: "Emilio",
		ownerScore: 12,
		dogName: "Winston",
		dogBreed: "Golden Retriever",
		dogSize: "Large",
	},
	{
		ownerName: "James",
		ownerScore: 12,
		dogName: "Oliver",
		dogBreed: "Boxer",
		dogSize: "Medium",
	},	
]

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/friends", function(req, res) {
	res.json(users)
});

app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});