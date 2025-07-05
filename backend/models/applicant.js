const mongoose = require("mongoose");
require('dotenv').config();

const ApplicantsSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  country: String,
  city: String,
  address: String,
  position: String,
  message: String,
  resume: String,
  resumeFilePath: String,
  date: { type: Date, default: Date.now }
});
const Applicants = mongoose.model("Applicants", ApplicantsSchema);

module.exports = Applicants;