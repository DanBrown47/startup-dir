const express = require('express');
const router = express.Router();
var chalk = require('chalk');
const Userscheme = require('../models/userModel');
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
                    console.log(chalk.green("Authentucated"));
                    var auth_sts = true;
                    break;
                } else {
                    console.log(chalk.red("Not here"));
                    auth_sts = false;
                }
            }

            if (auth_sts == false) {
                res.status(200).json({ "status": "Username or  password is wrong" })
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
module.exports = router;