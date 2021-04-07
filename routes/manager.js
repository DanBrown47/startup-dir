const express = require('express');
const router = express.Router();
var chalk = require('chalk');
const StartupSchema = require('../models/startupModel'); // should do


router.post('/add', (req, res, next) => {
    let newCompany = new StartupSchema({
        company_name: req.body.company_name,
        organization: req.body.organization,
        location: req.body.location,
        staff: req.body.staff,
        growth: req.body.growth,
        gstin: req.body.gstin,
        websites: req.body.websites,
        company_owner: req.body.company_owner,
        upi_id: req.body.upi_id,
        approved: req.body.approved
    });

    console.log(newCompany)
    newCompany.save((err, startups) => {
        if (err) {
            res.json({ msg: err });
            console.log(chalk.red("[-] Error While adding stuff to DB", err))
        } else {
            res.json({ msg: 'Added Company to DB' })
            console.log(chalk.green("[+] Company added to Database"))
        }
    })
})

// router.post('/update', (req,res,next)=>{

// })

module.exports = router;