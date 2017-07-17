/**
 * Created by heshamelmasry on 2017/07/03.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var checkAuthenticated = require('./services/checkAuthenticated');
var cors = require('./services/cors');

var database;

var auth = require('./controllers/auth');
var message = require('./controllers/message');

//Middleware
app.use(bodyParser.json());
app.use(cors);


//Requests
// end point to get messages
app.get('/api/message', message.get);

// creating an end point
app.post('/api/message', checkAuthenticated, message.post);

app.post('/auth/register', auth.register);

//Connection
mongoose.connect("mongodb://localhost:27017/testOne", function (err, db) {
    if (!err) {
        console.log("database connected");
    }
});

var server = app.listen(5000, function () {
    console.log('listening to port', server.address().port);
});