const express = require('express');
const router = express.Router();
var chalk = require('chalk');
const Userscheme = require('../models/userModel');
var mongoose = require('mongoose');
var db = mongoose.model('UserDB')



router.post('/login', (req, res, next) => {
    var email = req.body.email;
    var passwd = req.body.passwd;
    console.log(email, passwd);


    // if (email == "SAASC@DFCF.COM" && passwd == "SCSCACASCX") {

    //     res.status(200).json({ "status": "Authentcated" });
    //     console.log("Authed")
    // } else {
    //     res.status(301).json({ "status": "Error in password" });
    //     console.log("Not Authed")
    // }

    db.find({ "role": "admin" }, (err, docs) => {
        if (!err) {
            for (var i = 0; i < docs.length; i++) {
                user = docs[i]
                    // res.json(user["email"])
                if (email == user["email"] && passwd == user["passwd"]) {
                    res.status(200).json({ "status": "Authinticated" });
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