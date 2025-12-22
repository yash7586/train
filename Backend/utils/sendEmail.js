import nodemailer from "nodemailer";

const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  await transporter.sendMail({
    from: `"Website Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.PROVIDER_EMAIL,
    subject: "📩 New Form Submission",
    text: `
New Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message || "N/A"}
    `,
    replyTo: data.email,
  });
};

export default sendEmail;