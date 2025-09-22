const escapeLineBreaks = (text) => {
  if (!text) return '';
  return String(text).replace(/\n/g, '<br>');
};

function getEmailTemplate(name, email, company, phone, message, timestamp) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Enquiry</title>
</head>
<body style="margin: 0; padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa;">
    <div style="max-width: 650px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
            <div style="background-color: rgba(255,255,255,0.15); display: inline-block; padding: 12px 24px; border-radius: 25px; margin-bottom: 20px;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">📧 New Contact Enquiry</h1>
            </div>
            <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 16px; font-weight: 300;">Shree Bharatraj Corporation</p>
        </div>

        <div style="padding: 30px;">
            <div style="background: linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%); border: 1px solid #e1e8ff; border-radius: 10px; padding: 25px; margin-bottom: 25px; position: relative;">
                <div style="position: absolute; top: -10px; left: 25px; background-color: #667eea; color: white; padding: 5px 15px; border-radius: 15px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Contact Details</div>
                <div style="margin-top: 10px;">
                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <span style="color: #ffffff; font-size: 18px;">👤</span>
                        </div>
                        <div>
                            <p style="margin: 0; color: #6b7280; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</p>
                            <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 600;">${name}</p>
                        </div>
                    </div>

                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <span style="color: #ffffff; font-size: 18px;">✉️</span>
                        </div>
                        <div>
                            <p style="margin: 0; color: #6b7280; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</p>
                            <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 600;">${email}</p>
                        </div>
                    </div>

                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #f59e0b, #d97706); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <span style="color: #ffffff; font-size: 18px;">🏢</span>
                        </div>
                        <div>
                            <p style="margin: 0; color: #6b7280; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Company</p>
                            <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 600;">${company || 'Not provided'}</p>
                        </div>
                    </div>

                    <div style="display: flex; align-items: center;">
                        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #8b5cf6, #7c3aed); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <span style="color: #ffffff; font-size: 18px;">📱</span>
                        </div>
                        <div>
                            <p style="margin: 0; color: #6b7280; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</p>
                            <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 600;">${phone || 'Not provided'}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style="background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 10px; padding: 25px; position: relative;">
                <div style="position: absolute; top: -10px; left: 25px; background-color: #1f2937; color: white; padding: 5px 15px; border-radius: 15px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message Content</div>
                <div style="margin-top: 15px;">
                    <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
                        <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7;">${escapeLineBreaks(message)}</p>
                    </div>
                </div>
            </div>

            <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; padding: 12px 30px; border-radius: 25px; font-weight: 600; font-size: 14px; margin: 0 10px 10px 0;">📧 Reply to ${name}</a>
                ${phone ? `<a href="tel:${phone}" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; text-decoration: none; padding: 12px 30px; border-radius: 25px; font-weight: 600; font-size: 14px; margin: 0 10px 10px 0;">📞 Call Now</a>` : ''}
            </div>

            <div style="text-align: center; padding: 20px; background-color: #f8fafc; border-radius: 8px; border: 1px dashed #d1d5db;">
                <p style="margin: 0; color: #6b7280; font-size: 13px; font-weight: 500;"><span style="display: inline-block; margin-right: 10px;">🕐</span>Received on: ${timestamp}</p>
                <p style="margin: 5px 0 0 0; color: #9ca3af; font-size: 11px;">Via Shree Bharatraj Corporation Website Contact Form</p>
            </div>
        </div>

        <div style="background-color: #1f2937; padding: 25px; text-align: center;">
            <div style="margin-bottom: 15px;">
                <h3 style="color: #ffffff; margin: 0 0 10px 0; font-size: 18px; font-weight: 600;">Shree Bharatraj Corporation</h3>
                <p style="color: #9ca3af; margin: 0; font-size: 14px; line-height: 1.5;">Excellence in Business Solutions</p>
            </div>
            <div style="border-top: 1px solid #374151; padding-top: 15px;">
                <p style="color: #6b7280; margin: 0; font-size: 12px;">This email was automatically generated from your website contact form.<br>Please respond to this enquiry at your earliest convenience.</p>
            </div>
        </div>
    </div>
</body>
</html>`;
}

function getAcknowledgmentTemplate(name, message) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You - Shree Bharatraj Corporation</title>
</head>
<body style="margin: 0; padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
        <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">✅ Thank You, ${name}!</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 15px 0 0 0; font-size: 16px;">We've received your enquiry</p>
        </div>
        <div style="padding: 40px 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                    <span style="color: white; font-size: 32px;">📨</span>
                </div>
                <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 24px; font-weight: 600;">Your Message Has Been Received</h2>
                <p style="color: #6b7280; margin: 0; font-size: 16px; line-height: 1.6;">Thank you for contacting us. Our team will review your enquiry and get back to you within 24 hours.</p>
            </div>
            <div style="background-color: #f0fdfa; border: 1px solid #a7f3d0; border-radius: 10px; padding: 25px; margin: 25px 0;">
                <h3 style="color: #065f46; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">📝 Your Message Summary:</h3>
                <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981;">
                    <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.7;">${escapeLineBreaks(message)}</p>
                </div>
            </div>
            <div style="background-color: #f8fafc; border-radius: 10px; padding: 25px; text-align: center;">
                <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">What Happens Next?</h3>
                <div style="text-align: left; max-width: 400px; margin: 0 auto;">
                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                        <div style="width: 36px; height: 36px; background: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <span style="color: #ffffff; font-size: 16px; font-weight: 700; line-height: 1; width: 100%; text-align: center;">1</span>
                        </div>
                        <p style="margin: 0; color: #374151; font-size: 14px;">Our team reviews your enquiry</p>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                        <div style="width: 36px; height: 36px; background: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <span style="color: #ffffff; font-size: 16px; font-weight: 700; line-height: 1; width: 100%; text-align: center;">2</span>
                        </div>
                        <p style="margin: 0; color: #374151; font-size: 14px;">We prepare a personalized response</p>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <div style="width: 36px; height: 36px; background: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <span style="color: #ffffff; font-size: 16px; font-weight: 700; line-height: 1; width: 100%; text-align: center;">3</span>
                        </div>
                        <p style="margin: 0; color: #374151; font-size: 14px;">You receive our detailed response within 24 hours</p>
                    </div>
                </div>
            </div>
        </div>
        <div style="background-color: #1f2937; padding: 30px; text-align: center;">
            <h3 style="color: #ffffff; margin: 0 0 10px 0; font-size: 20px; font-weight: 600;">Shree Bharatraj Corporation</h3>
            <p style="color: #9ca3af; margin: 0 0 20px 0; font-size: 14px;">Excellence in Business Solutions</p>
            <div style="border-top: 1px solid #374151; padding-top: 20px;">
                <p style="color: #6b7280; margin: 0; font-size: 12px; line-height: 1.5;">This is an automated acknowledgment email.<br> Please do not reply to this email address.</p>
            </div>
        </div>
    </div>
</body>
</html>`;
}

module.exports = { getEmailTemplate, getAcknowledgmentTemplate };



