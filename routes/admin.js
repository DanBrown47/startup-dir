const express = require('express');
const router = express.Router();
var chalk = require('chalk');
const Userscheme = require('../models/userModel');
var mongoose = require('mongoose');
var db = mongoose.model('UserDB')



router.post('/login', (req, res, next) => {
    var username = req.body.username;
    var passwd = req.body.passwd;

    db.find({ "role": "admin" }, (err, docs) => {
        if (!err) {
            for (var i = 0; i < docs.length; i++) {
                user = docs[i]
                    // res.json(user["user_name"])
                if (username == user["user_name"]) {
                    console.log("User Found")
                    if (passwd == user["passwd"]) {
                        res.status(200).json({ "status": "Authinticated" })
                        res.redirect('/')
                        var authed = true;
                    } else {
                        res.status(401).json({ "status": "Password is wrong" })

                    }
                } else {
                    res.status(401).json({ "message": "User not Found" })
                }
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