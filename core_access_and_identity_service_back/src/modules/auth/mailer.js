const nodemailer = require('nodemailer');
const logger = require('../../config/logger');

function hasSmtpConfig() {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
}

function createTransporter() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // TLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

/**
 * Envoie le code OTP par email à l'utilisateur.
 * @param {string} toEmail - Adresse email du destinataire
 * @param {string} otpCode - Code OTP à 6 chiffres
 */
async function sendOtpEmail(toEmail, otpCode) {
  if (!hasSmtpConfig()) {
    logger.warn({
      toEmail,
      otpCode,
    }, 'SMTP not configured, OTP logged instead of being sent');
    return;
  }

  const transporter = createTransporter();

  await transporter.sendMail({
    from: `"MboaLink Security" <${process.env.SMTP_USER}>`,
    to: toEmail,
    subject: 'Votre code de vérification MboaLink',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
        <div style="text-align: center; margin-bottom: 24px;">
          <h1 style="color: #052F5F; font-size: 24px; margin: 0;">MboaLink</h1>
          <p style="color: #64748b; font-size: 14px; margin-top: 4px;">Plateforme d'administration</p>
        </div>

        <div style="background: white; border-radius: 10px; padding: 24px; border: 1px solid #e2e8f0;">
          <h2 style="color: #052F5F; font-size: 18px; margin: 0 0 12px 0;">Code de vérification</h2>
          <p style="color: #475569; font-size: 14px; margin: 0 0 24px 0;">
            Utilisez ce code pour finaliser votre connexion. Il est valable <strong>10 minutes</strong>.
          </p>

          <div style="text-align: center; background: #f1f5f9; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <span style="font-size: 36px; font-weight: 900; letter-spacing: 0.3em; color: #052F5F;">${otpCode}</span>
          </div>

          <p style="color: #94a3b8; font-size: 12px; margin: 0;">
            Si vous n'avez pas demandé ce code, ignorez cet email. Votre compte reste sécurisé.
          </p>
        </div>

        <p style="text-align: center; color: #94a3b8; font-size: 11px; margin-top: 24px;">
          © 2025 MboaLink. Tous droits réservés.
        </p>
      </div>
    `,
  });
}

module.exports = { sendOtpEmail };
