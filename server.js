const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const path = require('path');

let PORT = process.env.PORT || 3000;

// Create application / x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false})

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));

// parse some custom thing into a buffer
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));

// Parse and HTML body into a string.
app.use(bodyParser.text({type: 'text/html'}));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, ()=>{
  console.log("Server started on PORT: ", PORT);
});
