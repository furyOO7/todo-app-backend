var mysql = require('mysql');
var connection = {
    host: "192.168.1.80",
    user: "root",
    password: "pass",
    database: 'mtest'
}

function dbconnect() {
    var db = mysql.createConnection(connection);
    db.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });

    return db;
}
module.exports = dbconnect();
