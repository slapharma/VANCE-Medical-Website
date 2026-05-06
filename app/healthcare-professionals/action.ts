"use server";

import {
  escapeHtml,
  getContactTo,
  getFromAddress,
  getMailer,
} from "@/lib/mailer";

/**
 * submitHCPInfo — server action for the healthcare-professionals contact form.
 *
 * Mirrors `app/contact/action.ts` but for HCP info requests:
 *  - role is implicit (the page is gated for HCPs)
 *  - adds a "Product of interest" field
 *  - subject prefix is `[HCP info request]` so medical-info team can filter
 */

export type HCPSubmitState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const PRODUCTS = ["general", "epa-ibd", "butyrate-ibs", "pipeline"] as const;
type Product = (typeof PRODUCTS)[number];

const PRODUCT_LABEL: Record<Product, string> = {
  general: "General clinical question",
  "epa-ibd": "EPA medical food — Inflammatory bowel disease",
  "butyrate-ibs": "Butyrate capsule — Irritable bowel syndrome",
  pipeline: "Pipeline / future products",
};

const SUCCESS_MESSAGE =
  "Your contact request has been received, a member of our team will contact you shortly.";

export async function submitHCPInfo(
  _prev: HCPSubmitState,
  formData: FormData
): Promise<HCPSubmitState> {
  if (formData.get("website")) {
    return { status: "success", message: SUCCESS_MESSAGE };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const organisation = String(formData.get("organisation") ?? "").trim();
  const product = String(formData.get("product") ?? "general").trim() as Product;
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
  if (organisation.length > 200) {
    return {
      status: "error",
      message: "Organisation must be under 200 characters.",
    };
  }
  if (!PRODUCTS.includes(product)) {
    return { status: "error", message: "Please choose a topic." };
  }
  if (!message || message.length < 10 || message.length > 4000) {
    return {
      status: "error",
      message: "Please share a few sentences (10–4000 characters).",
    };
  }

  const productLabel = PRODUCT_LABEL[product];
  const submission = {
    timestamp: new Date().toISOString(),
    name,
    email,
    organisation,
    product,
    productLabel,
    message,
  };

  const mailer = getMailer();
  if (!mailer) {
    // eslint-disable-next-line no-console
    console.log("[hcp-info-request]", submission);
    return { status: "success", message: SUCCESS_MESSAGE };
  }

  try {
    await mailer.sendMail({
      from: `Vance Medical website <${getFromAddress()}>`,
      to: getContactTo(),
      replyTo: `${name} <${email}>`,
      subject: `[HCP info request] ${productLabel} — ${name}`,
      text:
        `New HCP info request\n\n` +
        `Topic:        ${productLabel}\n` +
        `Name:         ${name}\n` +
        `Email:        ${email}\n` +
        `Organisation: ${organisation || "—"}\n` +
        `Sent:         ${submission.timestamp}\n\n` +
        `Message:\n${message}\n`,
      html:
        `<table style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#0B2B2B;line-height:1.5">` +
        `<tr><td style="padding:6px 16px 6px 0;color:#008080;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.06em">Topic</td><td>${escapeHtml(productLabel)}</td></tr>` +
        `<tr><td style="padding:6px 16px 6px 0;color:#008080;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.06em">Name</td><td>${escapeHtml(name)}</td></tr>` +
        `<tr><td style="padding:6px 16px 6px 0;color:#008080;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.06em">Email</td><td><a href="mailto:${escapeHtml(email)}" style="color:#008080">${escapeHtml(email)}</a></td></tr>` +
        `<tr><td style="padding:6px 16px 6px 0;color:#008080;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.06em">Organisation</td><td>${escapeHtml(organisation || "—")}</td></tr>` +
        `<tr><td style="padding:6px 16px 6px 0;color:#008080;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.06em">Sent</td><td>${escapeHtml(submission.timestamp)}</td></tr>` +
        `</table>` +
        `<hr style="border:0;border-top:1px solid #DEF4F4;margin:20px 0">` +
        `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#0B2B2B;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</div>`,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[hcp-info-request] mailer error:", err, submission);
  }

  return { status: "success", message: SUCCESS_MESSAGE };
}
