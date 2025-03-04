const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
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
            to: 'info@anicomic.in',
            subject: `Enquiry for ${service || 'Service'}`,
            html: `
        <html>
        <body style="font-family: Arial, sans-serif; text-align: left; background-color:#111;color:white;">
            <h1>Company : ${company}</h1>
            <h2>Service : ${service}</h2>
            <h2>Name : ${name}</h2>
            <h2>Email : ${email}</h2>
            <h2>Phone : ${phone}</h2>
            <p>Message : ${message}</p>
        </body>
        </html>
      `,
        };

        await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully!");
    } catch (error) {
        console.error("❌ Error sending email:", error);
    }
};

module.exports = sendMail;