var connection = require('./connection.js');


var orm = {
    selectAll: function(req, res) {
        connection.query("SELECT * FROM burgers", function(err, data) {
            if (err) throw err;
            res.render('index', { burgers: data });
        })
    },

    insertOne: function(req, res) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger], function(err, result) {
            if (err) throw err;

            res.redirect("/");
        });
    },
    //this might have to be an 'on-click' function that we'll have to make for all of the buttons in our HTML page.
    updateOne: function(req, res) {
        //let choice = need to grab the id of whatever burger's button is clicked
        connection.query(`UPDATE burgers SET devoured = 1 WHERE id = ?`, [req.params.id], function(err, data) {
            if (err) {
                return res.status(500).end();
            } else if (data.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
        })
    }
}
module.exports = orm;