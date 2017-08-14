var path = require("path");

module.exports = function (app) {

	console.log('This is from htmlRoutes.js module.exports');

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	}); // end of app.get for /survey

	// generic URL will send user to home page
	// app.use(function(req, res) {
	app.use((req, res)=>{
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	}); // end of app.get for /home

} // end of module.exports function