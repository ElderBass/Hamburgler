// var express = require('express');
// var burger = require('../models/burger.js');
// var orm = require('../config/orm.js')


// //I think my routes go here???

// app.get("/", function(req, res) {
//     orm.selectAll(req, res);
// })

// app.post('/', function(req, res) {
//     console.log(req.body.burger);
//     orm.insertOne(req, res);
// })

// app.put('/api/:id', function(req, res) {
//     orm.updateOne(req, res);
// })


var express = require("express");

//this method is part of express which allows us to set up 'get', 'post', and 'put' routes
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/", function(req, res) {
    burger.insertOne("burger_name", [req.body.burger], function(result) {

        res.redirect('/');
        //res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
            devoured: 1
        }, condition,
        function(result) {

            res.status(200).end();
        }
    );
});

// Export routes for server.js to use.
module.exports = router;