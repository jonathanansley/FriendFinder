var friends = require("../data/friends.js");

module.exports = function (app) {

	console.log('This is from apiRoutes.js module.exports');

	// app.get("/api/friends", function(req, res) {
	app.get("/api/friends", (req, res)=>{
		res.json(friends);
	}); // end of app.get for /api/friends

	app.post("/api/friends", function(req, res) {

		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		// Take result of user's survey POST and parse it.
		var userData 	= req.body;
		var userScores	= userData.scores;

		console.log(userScores);

		// Calculate difference between scores from user and scores from database
		var totalDifference = 0;

		// Loop through all the friend possibilities in database.
		for (var i = 0; i < friends.length; i++) {

			console.log(friends[i]);
			totalDifference = 0;

			// Loop through scores of each friend
			for (var j = 0; j < friends[i].scores[j]; j++) {

				// Calculate difference between scores and add them up
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
				//???
				// totalDifference = 10;
				console.log('totalDifference = ' + totalDifference);

				// If sum of differences is
				// less than differences of current "best match"
				if (totalDifference <= bestMatch.friendDifference) {

						// Reset best match to new friend.
						bestMatch.name				= friends[i].name;
						bestMatch.photo				= friends[i].photo;
						bestMatch.friendDifference	= totalDifference;
				} // end of if totalDifference statement
			} // end of loop through friend scores
		} // end of loop through all the friend possibilities

		// Save user's data to database AFTER the check.
		friends.push(userData);

		// Return JSON with user's bestMatch.
		// It will be used by HTML.
		res.json(bestMatch);
	});
	// 	} // end of anonymous function for /api/friends
	// ); // end of app.post("/api/friends"
} // end of module.exports function
