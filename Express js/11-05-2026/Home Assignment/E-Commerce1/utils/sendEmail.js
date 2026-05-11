const nodemailer = require("nodemailer");

const sendEmail = async (email, otp) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("EMAIL_USER and EMAIL_PASS must be set in .env");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });

  await transporter.verify();

  return await transporter.sendMail({
    from: `ECOMMERCE <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'OTP Verification',
    text: `Your OTP is: ${otp}`
  });
};

module.exports = sendEmail;

