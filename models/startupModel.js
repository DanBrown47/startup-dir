const mongoose = require('mongoose');

const StartupSchema = mongoose.Schema({
        company_name: {
            type: String,
            required: true,
            unique: true
        },
        organization: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        growth: {
            type: String
        },
        GSTIN: {
            type: String
        },
        company_admin: {
            type: String
        }
    })
    // Increase complexity later

const StartupDB = module.exports = mongoose.model('StartupDB', StartupSchema)