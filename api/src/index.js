var express = require('express');
var config = require('./config');

// Connecting to the database
var Connection = require('./models/connection');
Connection.prototype.connect();

// Express App
var app = module.exports = express();
require('./dispatcher')(app);

// Starting the server
var server = app.listen(3200, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
