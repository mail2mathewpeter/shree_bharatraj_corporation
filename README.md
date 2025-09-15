# Shree Bharatraj Corporation Website

A modern, responsive website for Shree Bharatraj Corporation built with React and Node.js.

## Features

- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Contact Form**: SMTP-enabled contact form for inquiries
- **Product Catalog**: Comprehensive product showcase with detailed information
- **Client Showcase**: Dynamic client logo slider
- **Modern UI**: Beautiful gradients, animations, and professional styling

## Setup Instructions

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
npm install nodemailer cors express dotenv
```

### 2. Configure SMTP Email

1. Copy the example environment file:
   ```bash
   cp env.example .env
   ```

2. Edit `.env` file with your SMTP credentials:
   ```env
   # SMTP Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   
   # Recipient Email (where contact form emails will be sent)
   RECIPIENT_EMAIL=info@shreebharatraj.com
   
   # Server Configuration
   PORT=5000
   ```

### 3. Gmail SMTP Setup

For Gmail SMTP, you'll need to:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this app password in your `.env` file

### 4. Run the Application

**Terminal 1 - Start the Backend Server:**
```bash
npm run server
```

**Terminal 2 - Start the React App:**
```bash
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## SMTP Configuration Options

### Gmail (Recommended)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Custom SMTP Server
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-password
```

## Project Structure

```
shree-bharatraj-corporation/
├── public/
│   ├── attachments/          # Background images
│   ├── imagesclient/         # Client logos
│   └── pics/                 # Product images
├── src/
│   └── App.js               # Main React component
├── server/
│   └── server.js            # Node.js backend with SMTP
├── package.json
├── env.example              # Environment variables template
└── README.md
```

## Contact Form Features

- **Real-time validation**: Form validates input as you type
- **Loading states**: Shows spinner while sending
- **Success/Error feedback**: Clear messages for user feedback
- **Email formatting**: Professional HTML email templates
- **Spam protection**: Basic validation and error handling

## Deployment

### Frontend (React)
Deploy to services like:
- Vercel
- Netlify
- GitHub Pages

### Backend (Node.js)
Deploy to services like:
- Heroku
- Railway
- DigitalOcean
- AWS EC2

Make sure to set environment variables in your deployment platform.

## Support

For technical support or questions about the website, please contact the development team.

---

**Shree Bharatraj Corporation** - Delivering Industrial Excellence Since 1989
