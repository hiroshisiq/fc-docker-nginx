var connection = require('./db');

var People = function(people) {
    this.name = people.name
}

People.create = function(name, result) {
    connection.query(`INSERT INTO people (name) VALUES (${name});`, function (err, res) {
        if(err) {
            console.log(`insert error: ${err}`);
            result(err, null);
        } else{
            console.log(`inserted id: ${res.insertId}`);
            result(null, res.insertId);
        }
    })    
}

People.findAll = function(result) {
    connection.query('SELECT * FROM people;', function(err, rows) {
        if (err) {
            console.log(`select all error: ${err}`);
            result(err, null);
        } else {
            console.log('select all successfuly.');
            result(null, rows);
        }
    });
}

module.exports = People;