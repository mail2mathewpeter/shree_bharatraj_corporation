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

### Flask Backend (Python) – Alternative to Node

You can run the backend using Flask for simpler deployment.

1) Create a virtual environment and install dependencies:

```bash
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
```

2) Copy `env.example` to `.env` and set:

```ini
SMTP_HOST=...
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
RECIPIENT_EMAIL=...
PORT=5000
NODE_ENV=development
```

3) Start Flask API:

```bash
python server/app.py
```

Endpoints:
- POST `/api/send-email`
- GET `/api/health`
- POST `/api/test-email` (disabled in production)

Frontend should point `REACT_APP_API_URL` to the Flask URL (e.g., `http://localhost:5000`).

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

### Vercel (Frontend + Serverless API)

This project includes serverless API functions for email sending under `api/`. It is ready for Vercel deployment.

Files used by Vercel:
- `vercel.json` – rewrites for API and SPA routing
- `api/health.js` – health check endpoint
- `api/send-email.js` – sends contact emails via Nodemailer
- `api/test-email.js` – test email endpoint (disabled in production)
- `api/_lib/emailTemplates.js` – shared email templates

Required environment variables (set in Vercel → Project → Settings → Environment Variables):
- `SMTP_HOST` (e.g. smtp.gmail.com)
- `SMTP_PORT` (e.g. 587)
- `SMTP_USER` (email/account username)
- `SMTP_PASS` (app password or SMTP password)
- `RECIPIENT_EMAIL` (destination for contact form messages)
- `NODE_ENV` = `production`

Deploy steps:
1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel, click New Project → Import the repo.
3. Build command: `npm run build` (auto-detected for Create React App). Output directory: `build`.
4. Add the environment variables for Production and Preview.
5. Deploy. The SPA will be served, and API will be available at `/api/*`.

Local testing with Vercel CLI (optional):
```
npm i -g vercel
vercel dev
```
Then open http://localhost:3000 and check http://localhost:3000/api/health

## Support

For technical support or questions about the website, please contact the development team.

---

**Shree Bharatraj Corporation** - Delivering Industrial Excellence Since 1989
