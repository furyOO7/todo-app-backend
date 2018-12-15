var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var cors = require('cors')
var todo = require('./todocontroller.js');
app.use(cors());
app.use('/todo', todo);
module.exports = app;
