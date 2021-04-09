const port = 3000;


var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var chalk = require('chalk');


var app = express();
app.use(cors());
app.use(bodyParser.json());

const route = require('./routes/route');
const user = require('./routes/user');
const admin = require('./routes/admin');
const manager = require('./routes/manager');

// Mongoose Connectivity

mongoose.connect('mongodb://localhost:27017/startupdir', { useNewUrlParser: true });

//Return
mongoose.connection.on('connected', () => {
    console.log(chalk.green("[+] Connected to database"))
});

mongoose.connection.on('error', (err) => {
    if (err) {
        console.log(chalk.red(err));
    }

});

// app.use('/api', route);
app.use('/user', user);
app.use('/admin', admin);
app.use('/manager', manager)


app.get('/', (req, res) => {
    return res.send('Working but Its just API area');
})

app.listen(port, (req, res, next) => {
    console.log(chalk.green("[+] Server Listening on: " + port));
})