// pages/api/delete-account.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    try {
      // Create a Nodemailer transporter.
      // Here, we use Gmail as an example. Adjust as needed.
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER, // For example, this can be 'growinfaith.js@gmail.com'
          pass: process.env.EMAIL_PASS, // Your email password or app-specific password
        },
      });

      // Configure the email options.
      const mailOptions = {
        from: process.env.EMAIL_USER, // This will be your sender address.
        to: 'growinfaith.js@gmail.com', // Hardcoded target email address.
        subject: 'Account Deletion Request',
        text: `A deletion request was submitted for the account associated with the email: ${email}`,
      };

      // Send the email.
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: 'Deletion request email sent successfully.' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
