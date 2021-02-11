//import our orm object
var orm = require('../config/orm.js');

//this file is very similar to the orm, just putting some methods into an object that we'll export to our controller file to be routed
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;