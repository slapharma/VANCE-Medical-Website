"use server";

import {
  escapeHtml,
  getContactTo,
  getFromAddress,
  getMailer,
} from "@/lib/mailer";

/**
 * submitContact — server action for the home-page contact form.
 *
 * Delivers the submission via Gmail SMTP (see `lib/mailer.ts` for env-var
 * setup). If the SMTP credentials aren't configured (e.g. local dev without
 * .env.local), the submission is logged to the server console and the form
 * still returns success — UI is fully testable without a Gmail account.
 *
 * Validation runs first; a bad submission never reaches Gmail and never
 * reveals the existence of the honeypot trap.
 */

export type ContactSubmitState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const ROLES = ["hcp", "patient", "partner", "press", "other"] as const;
type Role = (typeof ROLES)[number];

const ROLE_LABEL: Record<Role, string> = {
  hcp: "Healthcare professional",
  patient: "Patient or carer",
  partner: "Industry partner",
  press: "Press or media",
  other: "Other",
};

const SUCCESS_MESSAGE =
  "Thanks. Your message is with our team and we typically reply within two working days.";

export async function submitContact(
  _prev: ContactSubmitState,
  formData: FormData
): Promise<ContactSubmitState> {
  // Honeypot — bots filling every field will populate this; humans don't.
  if (formData.get("website")) {
    // Silent success to avoid confirming the trap exists.
    return { status: "success", message: SUCCESS_MESSAGE };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const role = String(formData.get("role") ?? "").trim() as Role;
  const message = String(formData.get("message") ?? "").trim();

  if (!name || name.length > 120) {
    return { status: "error", message: "Please enter your name." };
  }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRe.test(email) || email.length > 200) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }
  if (!ROLES.includes(role)) {
    return { status: "error", message: "Please choose a role." };
  }
  if (!message || message.length < 10 || message.length > 4000) {
    return {
      status: "error",
      message: "Please share a few sentences (10–4000 characters).",
    };
  }

  const submission = {
    timestamp: new Date().toISOString(),
    name,
    email,
    role,
    roleLabel: ROLE_LABEL[role],
    message,
  };

  const mailer = getMailer();
  if (!mailer) {
    // No SMTP creds → log the submission so it isn't lost in dev.
    // eslint-disable-next-line no-console
    console.log("[contact-submission]", submission);
    return { status: "success", message: SUCCESS_MESSAGE };
  }

  try {
    const subjectRole = ROLE_LABEL[role];
    await mailer.sendMail({
      from: `Vance Medical website <${getFromAddress()}>`,
      to: getContactTo(),
      replyTo: `${name} <${email}>`,
      subject: `[${subjectRole}] ${name} — Vance Medical contact form`,
      text:
        `New contact-form submission\n\n` +
        `Role:    ${subjectRole}\n` +
        `Name:    ${name}\n` +
        `Email:   ${email}\n` +
        `Sent:    ${submission.timestamp}\n\n` +
        `Message:\n${message}\n`,
      html:
        `<table style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#0B2B2B;line-height:1.5">` +
        `<tr><td style="padding:6px 16px 6px 0;color:#008080;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.06em">Role</td><td>${escapeHtml(subjectRole)}</td></tr>` +
        `<tr><td style="padding:6px 16px 6px 0;color:#008080;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.06em">Name</td><td>${escapeHtml(name)}</td></tr>` +
        `<tr><td style="padding:6px 16px 6px 0;color:#008080;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.06em">Email</td><td><a href="mailto:${escapeHtml(email)}" style="color:#008080">${escapeHtml(email)}</a></td></tr>` +
        `<tr><td style="padding:6px 16px 6px 0;color:#008080;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.06em">Sent</td><td>${escapeHtml(submission.timestamp)}</td></tr>` +
        `</table>` +
        `<hr style="border:0;border-top:1px solid #DEF4F4;margin:20px 0">` +
        `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#0B2B2B;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</div>`,
    });
  } catch (err) {
    // Don't lose the submission if SMTP fails — log full payload so it can
    // be reconstructed from Vercel's runtime logs.
    // eslint-disable-next-line no-console
    console.error("[contact-submission] mailer error:", err, submission);
    // Still return success to the user — they shouldn't see internal errors,
    // and operations can recover the message from logs.
  }

  return { status: "success", message: SUCCESS_MESSAGE };
}
