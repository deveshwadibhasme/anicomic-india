const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendMail = require("./mailer");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Define Schema
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
  cv: {},
  date: { type: Date, default: Date.now }
});
const Applicants = mongoose.models.Applicants || mongoose.model("Applicants", ApplicantsSchema);

module.exports = Applicants;

app.post('/add-applicants', async (req, res) => {
  try {
    const { firstName, lastName, phone, email, country, city, address, position, message, cv } = req.body;
    const newApplicants = new Applicants({firstName, lastName, phone, email, country, city, address, position, message, cv });
    console.log(req.body);
    await newApplicants.save();

    return res.status(201).json({ success: true, message: "Applicants recorded!", data: newApplicants });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
})

// API to send an email
app.post("/send-email", async (req, res) => {
  const { name, email, phone, service, company, message } = req.body;

  if (!name || !email || !phone || !company || !message) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    await sendMail(name, email, phone, service, company, message);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
