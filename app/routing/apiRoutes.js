var friends = require("../data/friends.js");

module.exports = function (app) {
	console.log('hey');
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});
} // end of module.exports function

app.post("/api/friends", function(req, res) {
	
	var bestMatch = {
		name: "",
		photo: "",
		friendDifference: 1000
	};

} // end of anonymous function for /api/friends

	); // end of app.post("/api/friends"