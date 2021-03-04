const express = require('express');
const router = express.Router();
var chalk = require('chalk');
const Userscheme = require('../models/userModel');

router.get('/user', (req, res, next) => {
    Userscheme.find(function(err, contacts) {
        res.json(contacts);
        console.log(chalk.green("[+] Retrived all users for admin"))
    })
})
module.exports = router;