const express = require('express');
let app = express();
const bodyParser = require('body-parser')

let PORT = process.env.PORT || 3000;

// Create application / JSON parser
var jsonParser = bodyParser.json()

const path = require('path')

// Create application / x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false})

// Parse and HTML body into a string.
app.use(bodyParser.text({type: 'text/html'}));

app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// app.use(express.static('public'))

app.listen(PORT, ()=>{
  console.log("Server started on PORT: ", PORT);
})
