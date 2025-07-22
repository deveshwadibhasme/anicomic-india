const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    institution: {
        type: String,
    },
    screenshotPath: {
        type: String,
        required: true,
    },
    internship:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Registration = mongoose.model('Registration', RegistrationSchema);
module.exports = Registration
