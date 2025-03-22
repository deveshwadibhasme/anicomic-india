const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

// Function to send email
const sendMail = async (name, email, phone, service, company, message) => {
    try {
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: "info@anicomic.in",
            subject: `Enquiry for ${service || "Service"}`,
            html: `<body style="font-family: Arial, sans-serif; background-color: #111; color: white; margin: 0; padding: 20px;">
    <div style="max-width: 600px; margin: auto; text-align: center; border: 1px solid #444; padding: 20px; border-radius: 8px;">
        <h1 style="margin-bottom: 10px; font-size: 24px; color: #f2a900;">${company}</h1>
        <h2 style="margin-bottom: 10px; font-size: 20px; color: #f2f2f2;">${service}</h2>
        <p style="font-size: 18px; color: #ddd;"><strong>Name:</strong> ${name}</p>
        <p style="font-size: 18px; color: #ddd;"><strong>Email:</strong> ${email}</p>
        <p style="font-size: 18px; color: #ddd;"><strong>Phone:</strong> ${phone}</p>
        <p style="font-size: 16px; color: #bbb; margin-top: 20px;"><strong>Message:</strong> ${message}</p>
    </div>
</body>`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully!", info.response);
    } catch (error) {
        console.error("❌ Error sending email:", error.message, error.response);
    }
};

module.exports = sendMail;
