const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
        user_name: {
            type: String,
            required: true
        },
        full_name: {
            type: String,
            required: true
        },
        passwd: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String
        }
    })
    // Increase complexity later

const UserDB = module.exports = mongoose.model('UserDB', UserSchema)