const nodemailer = require('nodemailer');
const logger = require('../../config/logger');

function getSmtpConfig() {
  return {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || 'false').toLowerCase() === 'true',
    timeout: Number(process.env.SMTP_TIMEOUT_MS || 5000),
    user: process.env.SMTP_USER?.trim(),
    pass: process.env.SMTP_PASS?.trim(),
    from: process.env.SMTP_FROM?.trim() || process.env.SMTP_USER?.trim(),
  };
}

function hasSmtpConfig() {
  const config = getSmtpConfig();
  return Boolean(config.user && config.pass);
}

function createTransporter() {
  const config = getSmtpConfig();

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    connectionTimeout: config.timeout,
    greetingTimeout: config.timeout,
    socketTimeout: config.timeout,
    auth: {
      user: config.user,
      pass: config.pass,
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
      smtpUserConfigured: Boolean(process.env.SMTP_USER?.trim()),
      smtpPassConfigured: Boolean(process.env.SMTP_PASS?.trim()),
    }, 'SMTP not configured, OTP logged instead of being sent');
    return;
  }

  const config = getSmtpConfig();
  const transporter = createTransporter();

  try {
    await transporter.sendMail({
      from: `"MboaLink Security" <${config.from}>`,
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
  } catch (error) {
    logger.error({
      toEmail,
      smtpHost: config.host,
      smtpPort: config.port,
      smtpSecure: config.secure,
      error: {
        code: error.code,
        command: error.command,
        message: error.message,
      },
    }, 'SMTP email delivery failed');

    const err = new Error('Email service unavailable');
    err.status = 503;
    throw err;
  }
}

module.exports = { sendOtpEmail };
