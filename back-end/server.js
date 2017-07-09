/**
 * Created by heshamelmasry on 2017/07/03.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var database;

var auth = require('./controllers/auth');
var message = require('./controllers/message');

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});


// end point to get messages
app.get('/api/message', message.get);

// creating an end point
app.post('/api/message', message.post);

app.post('/auth/register', auth.register);


mongoose.connect("mongodb://localhost:27017/testOne", function (err, db) {
    if (!err) {
        console.log("database connected");
    }
});

var server = app.listen(5000, function () {
    console.log('listening to port', server.address().port);
});