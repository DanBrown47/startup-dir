const express = require('express');
const router = express.Router();
var chalk = require('chalk');
const Userscheme = require('../models/userModel');
const StartupSchema = require('../models/startupModel'); // should do


router.post('/add', (req, res, next) => {
    let newUser = new Userscheme({
        user_name: req.body.user_name,
        full_name: req.body.full_name,
        passwd: req.body.passwd,
        email: req.body.email
    });

    newUser.save((err, user) => {
        if (err) {
            res.json({ msg: err });
            console.log(chalk.red("[-] Error While adding stuff to DB", err))
        } else {
            res.json({ msg: 'Added User to DB' })
            console.log(chalk.green("[+] User added to Database"))
        }
    })
})

router.get('/all', (req, res, next) => {
    StartupSchema.find({ "approved": "1" }, (err, startups) => {
        res.json(startups);
        console.log(chalk.green("[+] Retrived all startups for manager"))
    })
})
module.exports = router;