import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

/**
 * Gmail / Google Workspace SMTP mailer.
 *
 * Configure these env vars on Vercel (Project → Settings → Env Variables,
 * Production + Preview):
 *
 *   GMAIL_USER            sending account, e.g. contact@vancemedical.co.uk
 *   GMAIL_APP_PASSWORD    16-char App Password from
 *                         https://myaccount.google.com/apppasswords
 *                         (requires 2-Step Verification on the account first)
 *   CONTACT_TO            optional — destination for contact-form messages,
 *                         defaults to GMAIL_USER
 *   NEWSLETTER_TO         optional — destination for new-subscriber alerts,
 *                         defaults to GMAIL_USER
 *
 * For local dev: drop the same vars into .env.local (gitignored). Without
 * them, the actions fall back to console.log so the form UI stays testable.
 */

let cached: Transporter | null = null;

export function getMailer(): Transporter | null {
  if (cached) return cached;
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return null;
  cached = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // STARTTLS upgrade — Gmail requires this on 587
    auth: { user, pass },
  });
  return cached;
}

export function getFromAddress(): string {
  return (
    process.env.GMAIL_FROM ??
    process.env.GMAIL_USER ??
    "contact@vancemedical.co.uk"
  );
}

export function getContactTo(): string {
  return (
    process.env.CONTACT_TO ??
    process.env.GMAIL_USER ??
    "contact@vancemedical.co.uk"
  );
}

export function getNewsletterTo(): string {
  return (
    process.env.NEWSLETTER_TO ??
    process.env.GMAIL_USER ??
    "contact@vancemedical.co.uk"
  );
}

/**
 * Escape a string for safe insertion into an HTML email body.
 * Inputs are user-supplied and we don't want them parsing as HTML.
 */
export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
