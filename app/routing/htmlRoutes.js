var path = require("path");

module.exports = function (app) {

	console.log('This is from htmlRoutes.js module.exports');

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	}); // end of app.get for /survey

	// generic URL will send user to home page
	// *** not working
	// app.get(function(req, res) {
	app.get("/home", function(req, res) {
	// app.get("/", (req, res)=>{
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	}); // end of app.get for /home

} // end of module.exports function