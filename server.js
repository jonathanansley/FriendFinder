// 10:13 - unable to get localhost:3000/api/friends to work




const express = require('express');
let app = express();
const bodyParser = require('body-parser')

let PORT = process.env.PORT || 3000;

// Create application / JSON parser
var jsonParser = bodyParser.json()

const path = require('path')

// Create application / x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false})

// let tableData = require("./data/tables.js")
// let waitListData = require("./data/waitList.js")


// app.use(bodyParser.json());

// Parse and HTML body into a string.
app.use(bodyParser.text({type: 'text/html'}));

app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// app.use(express.static('public'))

// Front Page
// app.get("/", (req, res)=>{
//   res.sendFile(path.join(__dirname, "/public/home.html"))
// })

// Tables
// app.get("/tables", (req, res)=>{
//   res.sendFile(path.join(__dirname, "/public/tables.html"))
// })

// Reservation
// app.get("/reserve", (req, res)=>{
//   res.sendFile(path.join(__dirname, "/public/reserve.html"))
// })

// TABLES JSON
// app.post("/api/tables", (req, res)=>{
//   if (tableData.length < 5){
//     tableData.push(req.body)
//     res.json(true);
//   } else {
//     waitListData.push(req.body)
//     res.json(false);
//   }

// })

// app.get("/api/tables", (req, res)=>{
//   res.json(tableData)
// })

// WAITLIST JSON
// app.get("/api/waitlist", (req, res)=>{
//   res.json(waitListData)
// })


app.listen(PORT, ()=>{
  console.log("Server started on PORT: ", PORT);
})
