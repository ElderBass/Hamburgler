var connection = require('./connection.js');

function selectAll(req, res) {
    connection.query("SELECT * FROM burgers", function(err, data) {
        if (err) throw err;
        res.render('index', { burgers: data });
    })
}

function insertOne(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger], function(err, result) {
        if (err) throw err;

        res.redirect("/");
    });
}
//this might have to be an 'on-click' function that we'll have to make for all of the buttons in our HTML page.
function updateOne(req, res) {
    //let choice = need to grab the id of whatever burger's button is clicked
    connection.query(`UPDATE burgers SET devoured = 1 WHERE id = ${this.id} `)
}

module.exports = { selectAll, insertOne, updateOne };