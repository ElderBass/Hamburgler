//need express for this file since we need to establish the server routes in this file, which needs express
var express = require("express");

//this method is part of express which allows us to set up 'get', 'post', and 'put' routes
var router = express.Router();

//we'll also need the burger.js 'model' and the methods contain therein
var burger = require("../models/burger.js");

//get route for the 'main' page of the app
router.get("/", function(req, res) {
    //call the method from the burger.js file for selecting all of the burgers in our database, then execute the cb function
    burger.selectAll(function(data) {
        var burgerObject = {
            burgers: data
        };
        //render the 'index.handlebars' page with the data from our burgers table
        res.render("index", burgerObject);
    });
});
//the 'post' route for posting new burgers into the main menu screen
router.post("/", function(req, res) {
    //call the insert method from burger.js, passing in the burger_name column, our burger input from the form, and a callback function
    burger.insertOne("burger_name", [req.body.burger], function(result) {

        //basically just refreshes the page with the new burger now added 
        res.redirect('/');

    });
});
//route for updated a burger from !devoured to devoured
router.put("/api/burgers/:id", function(req, res) {
    //this is a string which we will pass into the 'update' method below, to be used as the WHERE designation for the database query
    var condition = "id = " + req.params.id;

    //call the update method from the burger.js file
    burger.updateOne({
            devoured: 1
        }, condition,
        function(result) {
            //just sending back an affirmative message to the client
            res.status(200).end();
        }
    );
});

//export routes for server.js to use.
module.exports = router;