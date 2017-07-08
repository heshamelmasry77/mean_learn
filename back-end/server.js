/**
 * Created by heshamelmasry on 2017/07/03.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var database;
// the name of it
var Message = mongoose.model('Message', {
    msg: String
});

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});


// end point to get messages
app.get('/api/message', GetMessages);

// creating an end point
app.post('/api/message', function (req, res) {
    console.log(req.body);
    var message = new Message(req.body);
    message.save();
    res.status(200);
});


function GetMessages(req, res) {
    Message.find({}).exec(function (err, result) {
        res.send(result);
    });
}

mongoose.connect("mongodb://localhost:27017/testOne", function (err, db) {
    if (!err) {
        console.log("database connected");
    }
});

var server = app.listen(5000, function () {
    console.log('listening to port', server.address().port);
});