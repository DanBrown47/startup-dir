const express = require('express');
const router = express.Router();
const Usersw = require('../models/userModel')

router.post('/add', (req, res, next) => {
    console.log(req.body)
    let newUser = new Usersw({
        user_name: req.body.user_name,
        full_name: req.body.full_name,
        passwd: req.body.passwd,
        email: req.body.email
    });

    newUser.save((err, user) => {
        if (err) {
            res.json({ msg: err });
        } else {
            res.json({ msg: 'Added User to DB' })
        }
    })
})

router.get('/all', (req, res, next) => {

})
module.exports = router;