"use client";

import { useFormState, useFormStatus } from "react-dom";
import {
  subscribeNewsletter,
  type NewsletterState,
} from "@/app/newsletter/action";

const initial: NewsletterState = { status: "idle" };

export function NewsletterForm() {
  const [state, formAction] = useFormState(subscribeNewsletter, initial);

  return (
    <form action={formAction} className="space-y-3">
      {/* Honeypot — bots fill, humans never see */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
      >
        <label>
          URL
          <input type="text" name="nl_url" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label htmlFor="nl-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-wrap items-stretch gap-2">
        <input
          id="nl-email"
          name="email"
          type="email"
          required
          maxLength={200}
          placeholder="you@example.com"
          autoComplete="email"
          className="min-w-0 flex-1 border border-teal-200 bg-white px-4 py-3 text-sm text-teal-900 placeholder:text-teal-700/40 outline-none transition-colors focus:border-teal-700"
        />
        <Submit />
      </div>

      <p className="text-xs text-teal-900/60">
        Occasional updates on our pipeline and gastrointestinal nutrition
        evidence. Unsubscribe at any time.
      </p>

      {state.status === "success" && (
        <p
          role="status"
          className="border-l-2 border-teal-700 bg-teal-700/5 px-3 py-2 text-xs text-teal-900"
        >
          {state.message}
        </p>
      )}
      {state.status === "error" && (
        <p
          role="alert"
          className="border-l-2 border-red-500 bg-red-500/5 px-3 py-2 text-xs text-red-700"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-900 disabled:cursor-progress disabled:opacity-60"
    >
      {pending ? "…" : "Subscribe"}
    </button>
  );
}
