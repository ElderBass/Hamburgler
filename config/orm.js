//require our connection to the database here since we will be making queries to the DB in this file
var connection = require('./connection.js');

//'helper' function that does exactly what it says and prints questions marks equal to the number passed into the function
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
//this is a 'helper' function for turning any object we pass into it into an array, which we need for our 'insert' method
function objToSql(ob) {
    var arr = [];

    //loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        //check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            //if the string has spaces, add quotations (Krabby Patty => 'Krabby Patty')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    //translate array of strings to a single comma-separated string
    return arr.toString();
}
//wrap up all of our DB queries into one object that we'll export at the end
var orm = {
        //method for selecting all the burgers in our database, which takes a table name and a callback function as parameters
        selectAll: function(tableInput, cb) {
            //set up the query string that we'll pass into the query
            var query = "SELECT * FROM " + tableInput + ";";
            //query the database for our relevant data, then run a callback function
            connection.query(query, function(err, data) {
                if (err) throw err;
                //pass the data from our query into the callback function to be used in the models
                cb(data)
            })
        },
        //method for inserting a new burger into our database
        insertOne: function(table, columns, values, cb) {
            //the query string is more complicated here, since we need it to be flexible in case we were to pass in data for multiple columns and mutliple values for those columns
            var query = "INSERT INTO " + table;

            query += " (";
            query += columns.toString();
            query += ") ";
            query += "VALUES (";
            query += printQuestionMarks(values.length);
            query += ") ";
            //make the query to the database, which will look something like INSERT INTO burgers (columns) VALUES (??), and the values are passed in
            connection.query(query, values, function(err, result) {
                if (err) {
                    throw err;
                }
                //pass the result from the query into our callback function to be used in the model
                cb(result);
            });
        },
        //the update method for changing the value of 'devoured' for a specific burger in our burgers table
        updateOne: function(table, colVals, condition, cb) {
            //similar setup to the 'insert' method above
            var query = "UPDATE " + table;

            query += " SET ";
            query += objToSql(colVals);
            query += " WHERE ";
            query += condition;

            //the query will look like UPDATE burgers SET colVals WHERE condition
            connection.query(query, function(err, data) {
                if (err) throw err;

                cb(data);
            })
        }
    }
    //export this object to be used by our model
module.exports = orm;