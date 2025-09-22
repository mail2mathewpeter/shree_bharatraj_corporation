const nodemailer = require('nodemailer');
const { getEmailTemplate, getAcknowledgmentTemplate } = require('./_lib/emailTemplates');

// Reuse a single transporter across invocations when possible
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
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, company, phone, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required'
      });
    }

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
      to: process.env.RECIPIENT_EMAIL,
      subject: `🔔 New Contact Form Submission from ${name}`,
      html: getEmailTemplate(name, email, company, phone, message, timestamp),
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}\n\nReceived on: ${timestamp}\nVia Shree Bharatraj Corporation Website Contact Form`
    };

    const info = await transport.sendMail(mailOptions);

    // Send acknowledgment to the user (fire-and-forget)
    const ackMail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: '✅ We received your enquiry - Shree Bharatraj Corporation',
      html: getAcknowledgmentTemplate(name, message),
      text: `Thank you, ${name}!\n\nWe have received your enquiry and will get back to you within 24 hours.\n\nYour message:\n${message}\n\nWhat happens next?\n1. Our team reviews your enquiry\n2. We prepare a personalized response\n3. You receive our detailed response within 24 hours\n\n---\nShree Bharatraj Corporation\nExcellence in Business Solutions\n\nThis is an automated acknowledgment email.\nPlease do not reply to this email address.`
    };
    transport.sendMail(ackMail).catch(() => {});

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
      error: error?.message || String(error)
    });
  }
};


