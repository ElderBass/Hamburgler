var express = require("express");
var exphbs = require("express-handlebars");

var orm = require('./config/orm.js');

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var PORT = process.env.PORT || 8080;


app.get("/", function(req, res) {
    orm.selectAll(req, res);
})


app.post('/', function(req, res) {
    console.log(req.body.burger);
    orm.insertOne(req, res);
})

//let devourBtn = document.body.querySelectorAll('.devourBtn');


//devourBtn.on('click', function() {
app.post('/', function(req, res) {
        orm.updateOne(req, res);
    })
    //})

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
})