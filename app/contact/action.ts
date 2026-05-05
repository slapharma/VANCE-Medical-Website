"use server";

/**
 * submitContact — server action for the home-page contact form.
 *
 * For now this logs the submission server-side and returns success. To wire
 * up real email delivery, swap the `// TODO: send` block for one of:
 *
 *   • Resend (preferred for Next.js):
 *       import { Resend } from 'resend';
 *       const resend = new Resend(process.env.RESEND_API_KEY);
 *       await resend.emails.send({
 *         from: 'Vance Medical <noreply@vancemedical.co.uk>',
 *         to: ['info@vancemedical.co.uk'],
 *         replyTo: data.email,
 *         subject: `[${data.role}] ${data.name} — Vance Medical contact form`,
 *         text: `From: ${data.name} <${data.email}>\nRole: ${data.role}\n\n${data.message}`,
 *       });
 *
 *   • Postmark / SendGrid / nodemailer — same shape, different SDK.
 *
 * Whichever you pick, set the API key as an env var on Vercel
 * (Project → Settings → Environment Variables → Production + Preview).
 */

export type ContactSubmitState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const ROLES = ["hcp", "patient", "partner", "press", "other"] as const;
type Role = (typeof ROLES)[number];

export async function submitContact(
  _prev: ContactSubmitState,
  formData: FormData
): Promise<ContactSubmitState> {
  // Honeypot — bots filling every field will populate this; humans don't.
  if (formData.get("website")) {
    // Silent success to avoid confirming the trap is in place.
    return { status: "success", message: "Thanks — we'll be in touch." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const role = String(formData.get("role") ?? "").trim() as Role;
  const message = String(formData.get("message") ?? "").trim();

  // Basic validation — match the client-side `required` attrs and add bounds.
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

  // TODO: send email — see comment block at top of file.
  // For now, log to the server console so the submission isn't lost.
  // eslint-disable-next-line no-console
  console.log("[contact-submission]", {
    timestamp: new Date().toISOString(),
    name,
    email,
    role,
    messageLength: message.length,
    messagePreview: message.slice(0, 200),
  });

  return {
    status: "success",
    message:
      "Thanks — your message is with our team. We typically reply within two working days.",
  };
}
