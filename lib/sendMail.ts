import nodemailer from "nodemailer";

const sendMail = async (options: {
  subject: string;
  to: string;
  text: any;
}) => {
  try {
    // 1) Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: Number(process.env.MAILTRAP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USER, // generated ethereal user
        pass: process.env.MAILTRAP_PASSWORD, // generated ethereal password
      },
    });

    // 2) Define the email options
    const mailOptions = {
      from: `inOgital Web Form <info@inogital.com>`,
      to: options.to,
      subject: options.subject,
      text: options.text,
    };

    // 3) Actually send the email
    await transporter.sendMail(mailOptions);
    return 'ok'
  } catch (error) {
    console.error("Error occurred while sending email", error);
    return `err`
  }
};

export default sendMail;
