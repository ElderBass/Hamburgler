var express = require('express');
var burger = require('../models/burger.js');
var orm = require('../config/orm.js')


//I think my routes go here???

app.get("/", function(req, res) {
    orm.selectAll(req, res);
})

app.post('/', function(req, res) {
    console.log(req.body.burger);
    orm.insertOne(req, res);
})