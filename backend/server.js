const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const sendMail = require("./middleware/mailer");
const Applicants = require('./models/applicant');
const upload = require('./config/multer');
const uploadToCloudinary = require('./middleware/uploadToStream');
const Registration = require("./models/registration");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = ['http://localhost:5173', 'https://anicomic.in', 'https://anicomic-dummy.netlify.app'];
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());



mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));


app.post('/add-applicants', upload.single("resume"), async (req, res) => {
  const { firstName, lastName, phone, email, country, city, address, position, message } = req.body;
  const { originalname } = req.file
  if (!req.file) {
    return res.status(400).json({
      message: "No File Uploaded"
    })
  }
  const fileBuffer = req.file.buffer;
  const fileName = req.originalname.replace(' ', '-').replace(".pdf", "-") + Date.now() + '.pdf';

  try {

    const cloudinaryResult = await uploadToCloudinary(fileBuffer, fileName);

    if (!cloudinaryResult || !cloudinaryResult.secure_url) {
      return res.status(500).json({ message: "Cloudinary upload failed" });
    }

    // ✅ MongoDB Save
    const newApplicants = new Applicants({
      firstName, lastName, phone, email, country, city, address, position, message,
      resume: originalname,
      resumeFilePath: cloudinaryResult.secure_url
    });

    await newApplicants.save();

    return res.status(200).json({ message: "Upload successful!", url: cloudinaryResult.secure_url });
  } catch (error) {
    console.error("❌ Upload failed:", error);
    return res.status(500).json({ message: "Upload failed", error: error.message });
  }
}
)

app.post('/register', upload.single('file'), async (req, res) => {
  const {
    fullName,
    phone,
    email,
    dob,
    qualification,
    internship,
    institution,
  } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: 'Payment screenshot is required.' });
  }

  const fileBuffer = req.file.buffer;
  const fileName = req.file.originalname.replace(' ', '-').split(".")[0] + Date.now() + '.png';

  try {
     const cloudinaryResult = await uploadToCloudinary(fileBuffer, fileName);

    if (!cloudinaryResult || !cloudinaryResult.secure_url) {
      return res.status(500).json({ message: "Cloudinary upload failed" });
    }

    const registration = new Registration({
      fullName,
      phone,
      email,
      dob,
      qualification,
      internship,
      screenshotPath: cloudinaryResult.secure_url,
      institution,
    });

    await registration.save();

    return res.status(200).json({ message: 'Registration saved to database!' });
  } catch (err) {
    console.error('Error saving to DB:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});


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

app.get('/applicants-list', async function (req, res) {
  try {
    const applicants = await Applicants.find({});
    res.status(200).json({ success: true, applicants });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error retrieving applicants", error: err.message });
  }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
