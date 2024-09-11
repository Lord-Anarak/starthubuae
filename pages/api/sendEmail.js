import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create a transporter with Hostinger SMTP settings
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // Hostinger SMTP server
      port: 465, // TLS port
      secure: false, // True for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your Hostinger email
        pass: process.env.EMAIL_PASS, // Your Hostinger email password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: "afrarpro95@gmail.com", // Receiver email address
      subject: `Contact Form Submission from ${name}`,
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error sending email." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
