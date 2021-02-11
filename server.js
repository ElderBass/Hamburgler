//requiring our express and handlebars dependencies
var express = require("express");
var exphbs = require("express-handlebars");

//bringing in our routes from the controller file
var routes = require('./controllers/burgers_controller.js')

//these next lines of code basically establish express and handlebars for full utilization in this application
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//allow express to use our static files in the public folder ie the script.js and css
app.use(express.static('public'));

//establish our port for the server
var PORT = process.env.PORT || 8080;

//telling our server to use the routes from our controller.js
app.use(routes)

//have our server start listening for clients
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
})