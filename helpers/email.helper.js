import nodemailer from "nodemailer";
import errors from "./error.helper.js";

import dotenv from "dotenv";

dotenv.config();

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
    }
});

const sendMail = async (emailTo, subject, body) => {
    try {
        const email = {
            from: SMTP_USER,
            to: emailTo,
            subject: subject,
            text: body
        };

        await transporter.sendMail(email);
    } catch (error) {
        console.log(error);
        errors.sendEmailError();
    }
};

export default sendMail;