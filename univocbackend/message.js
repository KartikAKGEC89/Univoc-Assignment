const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phnumber: {
        type: Number,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    school: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
    },{ timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);