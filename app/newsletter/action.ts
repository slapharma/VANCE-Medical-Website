"use server";

import {
  escapeHtml,
  getFromAddress,
  getMailer,
  getNewsletterTo,
} from "@/lib/mailer";

/**
 * subscribeNewsletter — server action for the footer newsletter form.
 *
 * Delivers a "new subscriber" notification to a Gmail inbox via SMTP (see
 * lib/mailer.ts for env-var setup). The notification carries the subscriber's
 * email address so it can be added to whichever audience tool eventually
 * holds the broadcast list (Mailchimp, Buttondown, Resend Audiences, etc.).
 *
 * This is intentionally a bootstrap solution. Gmail is not an audience
 * manager — it can't track unsubscribes, segments, bounces, or run
 * broadcasts. When the list grows past a manageable size (~50+ subscribers)
 * or you want to start sending campaigns, swap this action's call to
 * Mailchimp/Buttondown/Resend Audiences without changing the form UI.
 *
 * If SMTP credentials aren't configured (local dev without .env.local), the
 * subscription is logged to the server console and the form still returns
 * success.
 */

export type NewsletterState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const SUCCESS_MESSAGE = "Thanks. You're on the list.";

export async function subscribeNewsletter(
  _prev: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  // Honeypot
  if (formData.get("nl_url")) {
    return { status: "success", message: SUCCESS_MESSAGE };
  }

  const email = String(formData.get("email") ?? "").trim();
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRe.test(email) || email.length > 200) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  const submission = {
    timestamp: new Date().toISOString(),
    email,
  };

  const mailer = getMailer();
  if (!mailer) {
    // eslint-disable-next-line no-console
    console.log("[newsletter-subscription]", submission);
    return { status: "success", message: SUCCESS_MESSAGE };
  }

  try {
    await mailer.sendMail({
      from: `Vance Medical website <${getFromAddress()}>`,
      to: getNewsletterTo(),
      replyTo: email,
      subject: `Newsletter signup: ${email}`,
      text:
        `New newsletter subscriber\n\n` +
        `Email: ${email}\n` +
        `Time:  ${submission.timestamp}\n\n` +
        `Add this address to whichever audience tool currently holds the\n` +
        `broadcast list (Mailchimp / Buttondown / Resend Audiences / etc).\n`,
      html:
        `<p style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#0B2B2B;line-height:1.6">` +
        `New newsletter subscriber:</p>` +
        `<p style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;font-size:18px;color:#004D4D"><strong>${escapeHtml(email)}</strong></p>` +
        `<p style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#0B2B2B;font-size:13px">` +
        `Submitted ${submission.timestamp}.<br>` +
        `Add this address to whichever audience tool currently holds the broadcast list.</p>`,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[newsletter-subscription] mailer error:", err, submission);
  }

  return { status: "success", message: SUCCESS_MESSAGE };
}
