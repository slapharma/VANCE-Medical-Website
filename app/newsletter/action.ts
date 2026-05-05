"use server";

/**
 * subscribeNewsletter — server action for the footer newsletter form.
 *
 * Currently logs the subscriber and returns success. To wire up a real ESP,
 * swap the `// TODO: subscribe` block for one of:
 *
 *   • Mailchimp (requires MAILCHIMP_API_KEY + audience id):
 *       const dc = process.env.MAILCHIMP_API_KEY!.split('-')[1];
 *       await fetch(
 *         `https://${dc}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
 *         {
 *           method: 'POST',
 *           headers: {
 *             Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
 *             'Content-Type': 'application/json',
 *           },
 *           body: JSON.stringify({ email_address: email, status: 'pending' }),
 *         }
 *       );
 *
 *   • Buttondown (simpler — single API key):
 *       await fetch('https://api.buttondown.email/v1/subscribers', {
 *         method: 'POST',
 *         headers: {
 *           Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
 *           'Content-Type': 'application/json',
 *         },
 *         body: JSON.stringify({ email_address: email }),
 *       });
 *
 *   • Or post to a Resend audience, ConvertKit, EmailOctopus etc.
 */

export type NewsletterState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export async function subscribeNewsletter(
  _prev: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  // Honeypot
  if (formData.get("nl_url")) {
    return { status: "success", message: "You're subscribed." };
  }

  const email = String(formData.get("email") ?? "").trim();
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRe.test(email) || email.length > 200) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  // TODO: subscribe — see comment block at top of file.
  // eslint-disable-next-line no-console
  console.log("[newsletter-subscription]", {
    timestamp: new Date().toISOString(),
    email,
  });

  return {
    status: "success",
    message: "Thanks — you're on the list.",
  };
}
