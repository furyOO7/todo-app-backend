var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());


/*app.get('/get', function (req, res) {

    res.send('hello');
})*/

var todo = require('./todocontroller.js');
app.use('/todo', todo);
module.exports = app;
