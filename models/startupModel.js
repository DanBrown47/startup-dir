const mongoose = require('mongoose');

const StartupSchema = mongoose.Schema({
    company_name: {
        type: String,
        unique: true
    },
    organization: {
        type: String,
    },
    location: {
        type: String,
    },
    gstin: {
        type: String,
    },
    growth: {
        type: String
    },
    websites: {
        type: String
    },
    company_owner: {
        type: String
    },
    upi_id: {
        type: String
    },
    approved: {
        type: String
    }
})

const StartupDB = module.exports = mongoose.model('StartupDB', StartupSchema)