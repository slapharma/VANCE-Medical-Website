"use client";

import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { submitHCPInfo, type HCPSubmitState } from "@/app/healthcare-professionals/action";

const initialState: HCPSubmitState = { status: "idle" };

const PRODUCT_OPTIONS = [
  { value: "general", label: "General clinical question" },
  { value: "epa-ibd", label: "EPA medical food — Inflammatory bowel disease" },
  { value: "butyrate-ibs", label: "Butyrate capsule — Irritable bowel syndrome" },
  { value: "pipeline", label: "Pipeline / future products" },
];

const VALID_PRODUCTS = new Set(PRODUCT_OPTIONS.map((p) => p.value));

export function HCPContactForm() {
  const [state, formAction] = useFormState(submitHCPInfo, initialState);
  const params = useSearchParams();
  const [product, setProduct] = useState<string>("general");

  // Pre-select the product when the URL has ?product=epa-ibd or ?product=butyrate-ibs
  // (set by the "Request product details" button on each pipeline card).
  useEffect(() => {
    const fromUrl = params.get("product");
    if (fromUrl && VALID_PRODUCTS.has(fromUrl)) {
      setProduct(fromUrl);
    }
  }, [params]);

  return (
    <form action={formAction} noValidate className="space-y-5">
      {/* Honeypot — same pattern as ContactForm */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
      >
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="hcp-name" label="Your name" required>
          <input
            id="hcp-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            className={inputClass}
          />
        </Field>
        <Field id="hcp-email" label="Email" required>
          <input
            id="hcp-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            className={inputClass}
          />
        </Field>
      </div>

      <Field id="hcp-organisation" label="Organisation / institution">
        <input
          id="hcp-organisation"
          name="organisation"
          type="text"
          autoComplete="organization"
          maxLength={200}
          className={inputClass}
        />
      </Field>

      <Field id="hcp-product" label="Topic" required>
        <select
          id="hcp-product"
          name="product"
          required
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className={`${inputClass} appearance-none bg-[length:0.65em] bg-[right_1rem_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='%23AEDBDB'><path d='M2 4l4 4 4-4z'/></svg>\")",
          }}
        >
          {PRODUCT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-white text-teal-900">
              {opt.label}
            </option>
          ))}
        </select>
      </Field>

      <Field id="hcp-message" label="Your message" required>
        <textarea
          id="hcp-message"
          name="message"
          required
          rows={5}
          minLength={10}
          maxLength={4000}
          className={inputClass}
        />
      </Field>

      <p className="text-xs text-teal-100">
        We use your details only to reply to your enquiry. See our{" "}
        <a
          href="/legal/privacy"
          className="underline decoration-teal-300 underline-offset-4 hover:text-white"
        >
          privacy notice
        </a>
        .
      </p>

      <SubmitButton />

      {state.status === "success" && (
        <p
          role="status"
          className="border-l-2 border-teal-300 bg-teal-300/10 px-4 py-3 text-sm text-teal-100"
        >
          {state.message}
        </p>
      )}
      {state.status === "error" && (
        <p
          role="alert"
          className="border-l-2 border-red-300 bg-red-300/10 px-4 py-3 text-sm text-red-100"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center bg-white px-6 py-3 text-sm font-semibold text-teal-900 shadow-card transition-colors hover:bg-teal-100 disabled:cursor-progress disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send enquiry"}
      {!pending && (
        <span aria-hidden className="ml-2">
          →
        </span>
      )}
    </button>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-teal-300"
      >
        {label}
        {required && (
          <span aria-hidden className="ml-1 text-teal-300/70">
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-teal-100/50 outline-none ring-0 transition-colors focus:border-teal-300 focus:bg-white/10";
