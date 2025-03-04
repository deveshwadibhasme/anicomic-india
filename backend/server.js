const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendMail = require("./mailer");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// API to send an email
app.post("/send-email", async (req, res) => {
  const { name, email, phone, service, company, message} = req.body;

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
