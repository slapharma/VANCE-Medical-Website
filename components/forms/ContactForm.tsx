"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContact, type ContactSubmitState } from "@/app/contact/action";

const initialState: ContactSubmitState = { status: "idle" };

export function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);

  return (
    <form action={formAction} noValidate className="space-y-5">
      {/* Honeypot — visually hidden + aria-hidden, but present in the DOM so
          bots fill it. Humans never see or tab to it. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
      >
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Your name" required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            className={inputClass}
          />
        </Field>
        <Field id="email" label="Email" required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            className={inputClass}
          />
        </Field>
      </div>

      <Field id="role" label="I am a…" required>
        <select
          id="role"
          name="role"
          required
          defaultValue=""
          className={`${inputClass} appearance-none bg-[length:0.65em] bg-[right_1rem_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='%23004D4D'><path d='M2 4l4 4 4-4z'/></svg>\")",
          }}
        >
          {/* Native <option> elements respect background-color and color in
              all evergreen browsers; this gives the dark-teal-on-white look
              the brand wants when the dropdown popup opens, even though the
              closed-select display stays white-on-dark to match the
              surrounding form fields. */}
          <option value="" disabled className="bg-white text-teal-900">
            Choose one…
          </option>
          <option value="hcp" className="bg-white text-teal-900">
            Healthcare professional
          </option>
          <option value="patient" className="bg-white text-teal-900">
            Patient or carer
          </option>
          <option value="partner" className="bg-white text-teal-900">
            Industry partner
          </option>
          <option value="press" className="bg-white text-teal-900">
            Press or media
          </option>
          <option value="other" className="bg-white text-teal-900">
            Other
          </option>
        </select>
      </Field>

      <Field id="message" label="Your message" required>
        <textarea
          id="message"
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
          className="focus-ring-on-dark inline-block py-1 underline decoration-teal-300 underline-offset-4 hover:text-white"
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
      className="focus-ring-on-dark inline-flex items-center bg-white px-6 py-3 text-sm font-semibold text-teal-900 shadow-card transition-colors hover:bg-teal-100 disabled:cursor-progress disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send message"}
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
          <span aria-hidden className="ml-1 text-teal-300">
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "focus-ring-on-dark w-full border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-teal-100/70 transition-colors focus:border-teal-300 focus:bg-white/10";
