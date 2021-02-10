var express = require("express");
var exphbs = require("express-handlebars");

var routes = require('./controllers/burgers_controller.js')

//var orm = require('./config/orm.js');

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/assets'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var PORT = process.env.PORT || 8080;

app.use(routes)

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
})