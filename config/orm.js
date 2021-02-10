// var connection = require('./connection.js');


// var orm = {
//     selectAll: function(req, res) {
//         connection.query("SELECT * FROM burgers", function(err, data) {
//             if (err) throw err;
//             res.render('index', { burgers: data });
//         })
//     },

//     insertOne: function(req, res) {
//         connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger], function(err, result) {
//             if (err) throw err;

//             res.redirect("/");
//         });
//     },
//     //this might have to be an 'on-click' function that we'll have to make for all of the buttons in our HTML page.
//     updateOne: function(req, res) {
//         //let choice = need to grab the id of whatever burger's button is clicked
//         connection.query(`UPDATE burgers SET devoured = 1 WHERE id = ?`, [req.params.id], function(err, data) {
//             if (err) {
//                 return res.status(500).end();
//             } else if (data.changedRows === 0) {

//                 return res.status(404).end();
//             }
//         })
//     }
// }
// module.exports = orm;

var connection = require('./connection.js');


function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}
var orm = {
    selectAll: function(tableInput, cb) {
        var query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function(err, data) {
            if (err) throw err;
            //res.render('index', { burgers: data });
            cb(data)
        })
    },

    insertOne: function(table, columns, values, cb) {
        var query = "INSERT INTO " + table;

        query += " (";
        query += columns.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(values.length);
        query += ") ";

        console.log(query);

        connection.query(query, values, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //this might have to be an 'on-click' function that we'll have to make for all of the buttons in our HTML page.
    updateOne: function(table, colVals, condition, cb) {
        var query = "UPDATE " + table;

        query += " SET ";
        query += objToSql(colVals);
        query += " WHERE ";
        query += condition;


        connection.query(query, function(err, data) {
            if (err) throw err;

            cb(data);
        })
    }
}
module.exports = orm;