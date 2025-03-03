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
        <body style="font-family: Arial, sans-serif; text-align: center;">
            <h2>Name : ${name}</h2>
            <h1>Service : ${service}</h1>
            <p>Email : ${email}</p>
            <p>Phone : ${phone}</p>
            <p>Company : ${company}</p>
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