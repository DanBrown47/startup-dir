const port = 3000;


var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var chalk = require('chalk');

var app = express();
const route = require('./routes/route');

app.get('/', (req, res) => {
    return res.send('Working');
})

app.listen(port, (req, res, next) => {
    console.log(chalk.green("[+] Server Listening on: " + port));
})