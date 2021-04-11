const express = require('express');
const router = express.Router();
var chalk = require('chalk');
const Userscheme = require('../models/userModel');
const StartupSchema = require('../models/startupModel');
var mongoose = require('mongoose');
var db = mongoose.model('UserDB');
const jwt = require('jsonwebtoken');



router.post('/login', (req, res, next) => {
    var email = req.body.email;
    var passwd = req.body.passwd;
    console.log(email, passwd);
    db.find({ "role": "admin" }, (err, docs) => {
        if (!err) {
            for (var i = 0; i < docs.length; i++) {
                user = docs[i]
                    // res.json(user["email"])
                if (email == user["email"] && passwd == user["passwd"]) {
                    let payload = { subject: email + passwd }
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({ token });
                    console.log(chalk.green("[+] Authenticated"));
                    var auth_sts = true;
                    break;
                } else {
                    console.log(chalk.red("Not here"));
                    auth_sts = false;
                }
            }

            if (auth_sts == false) {
                console.log(chalk.red("[X] Not Authenticated"))
                res.status(401).json({ "status": "Username or  password is wrong" })
            }

        }
    })
})


router.get('/user', (req, res, next) => {
    Userscheme.find(function(err, users) {
        res.json(users);
        console.log(chalk.green("[+] Retrived all users for admin"))
    })
})


router.get('/approve/:company_name', (req, res) => {
    console.log(req)
    var comp_name = req.params.company_name;
    console.log(comp_name)
    res.json({ "status": "ok" })
})

router.get('/all', (req, res, next) => {

    StartupSchema.find((err, startups) => {
        res.json(startups);
        console.log(chalk.green("[+] Retrived all startups for admin"))
    })
})
module.exports = router;