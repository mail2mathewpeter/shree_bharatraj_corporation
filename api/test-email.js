const nodemailer = require('nodemailer');
const { getEmailTemplate } = require('./_lib/emailTemplates');

let transporter;
function getTransporter() {
  if (transporter) return transporter;
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  return transporter;
}

module.exports = async (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).json({ success: false, message: 'Test endpoint not available in production' });
  }
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const testData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      company: 'Test Company Pvt Ltd',
      phone: '+91 98765 43210',
      message: 'This is a test message to verify the email template design and functionality.'
    };

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const transport = getTransporter();
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: '🧪 Test Email - Template Preview',
      html: getEmailTemplate(testData.name, testData.email, testData.company, testData.phone, testData.message, timestamp)
    };

    const info = await transport.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Test email sent successfully', messageId: info.messageId, testData });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to send test email', error: error?.message || String(error) });
  }
};


