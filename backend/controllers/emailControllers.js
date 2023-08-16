const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.TO_EMAIL, // generated ethereal user
        pass: process.env.SMTP_PASSWORD, // generated ethereal password
    },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
    const { fname, email, phone, message } = req.body;
    console.log(fname, email, phone, message);

    var mailOptions = {
        from: email,
        to: process.env.TO_EMAIL,
        subject: "Mail from Interia webpage user",
        text: "Name: " + fname + "\nPhone: " + phone + "\nEmail ID: " + email + "\nMessage: " + message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully!");
        }
    });
});

module.exports = { sendEmail };