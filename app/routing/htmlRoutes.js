//var path = require("path");

module.exports = function (app) {

	console.log('This is from htmlRoutes.js module.exports');

	// This is just an example of working code.
	// app.get("/api/friends", function(req, res) {
	// 	res.json(friends);
	// }); // end of app.get

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname + "../public/survey.html"));
	}); // end of app.get for /survey

	// generic URL will send user to home page
	// app.get(function(req, res) {
	// 	res.sendFile(path.join(__dirname + "/../public/home.html"));
	// })

	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	}); // end of app.get for /home

} // end of module.exports function