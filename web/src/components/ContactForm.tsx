"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const INTERESTS = [
  { value: "pilot", label: "Pilot / government partnership" },
  { value: "funding", label: "Funding / donor support" },
  { value: "cso-media", label: "Civil society / media" },
  { value: "tech", label: "Technical contribution" },
  { value: "research", label: "Research / data" },
  { value: "press", label: "Press enquiry" },
  { value: "other", label: "Other" },
] as const;

type Props = {
  /** Where FormSubmit redirects after success */
  thankYouUrl: string;
};

export function ContactForm({ thankYouUrl }: Props) {
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent") === "1";
  const [submitting, setSubmitting] = useState(false);

  const action = useMemo(
    () => "https://formsubmit.co/ajax/support@mkweli.tech",
    [],
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot
    if ((data.get("_honey") as string)?.length) return;

    setSubmitting(true);
    try {
      const res = await fetch(action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("submit_failed");
      window.location.href = thankYouUrl;
    } catch {
      // Fallback: open mail client with filled subject/body
      const name = String(data.get("name") || "");
      const org = String(data.get("organisation") || "");
      const interest = String(data.get("interest") || "");
      const message = String(data.get("message") || "");
      const email = String(data.get("email") || "");
      const subject = encodeURIComponent(
        `Climate Fund Watch — ${interest || "Get involved"}`,
      );
      const body = encodeURIComponent(
        `Name: ${name}\nOrganisation: ${org}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`,
      );
      window.location.href = `mailto:support@mkweli.tech?subject=${subject}&body=${body}`;
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div
        className="rounded-2xl border border-success/30 bg-primary-soft/60 p-6 sm:p-8"
        role="status"
      >
        <p className="text-lg font-semibold text-foreground">Message sent</p>
        <p className="mt-2 text-sm text-muted">
          Thank you. We will reply to the address you provided. For urgent
          matters you can also email{" "}
          <a
            href="mailto:support@mkweli.tech"
            className="font-semibold text-primary"
          >
            support@mkweli.tech
          </a>
          .
        </p>
      </div>
    );
  }

  const field =
    "mt-1 w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground shadow-sm placeholder:text-muted/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  const label =
    "block text-xs font-semibold uppercase tracking-wide text-muted";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
      noValidate
    >
      {/* Honeypot — leave empty */}
      <input
        type="text"
        name="_honey"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />
      <input type="hidden" name="_subject" value="Climate Fund Watch — Get involved" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label}>
          Name <span className="text-accent">*</span>
          <input
            className={field}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
          />
        </label>
        <label className={label}>
          Email <span className="text-accent">*</span>
          <input
            className={field}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@organisation.org"
          />
        </label>
        <label className={label}>
          Organisation
          <input
            className={field}
            name="organisation"
            type="text"
            autoComplete="organization"
            placeholder="Ministry, CSO, media, company…"
          />
        </label>
        <label className={label}>
          Country / locality
          <input
            className={field}
            name="locality"
            type="text"
            placeholder="e.g. Mauritius — Port Louis"
          />
        </label>
        <label className={`${label} sm:col-span-2`}>
          Interest <span className="text-accent">*</span>
          <select className={field} name="interest" required defaultValue="">
            <option value="" disabled>
              Select one…
            </option>
            {INTERESTS.map((i) => (
              <option key={i.value} value={i.label}>
                {i.label}
              </option>
            ))}
          </select>
        </label>
        <label className={`${label} sm:col-span-2`}>
          Message <span className="text-accent">*</span>
          <textarea
            className={`${field} min-h-[140px] resize-y`}
            name="message"
            required
            rows={5}
            placeholder="How would you like to get involved? Include timeline if relevant."
          />
        </label>
      </div>

      <p className="mt-4 text-xs text-muted">
        This form is for partnership, pilot, press, and technical enquiries.{" "}
        <strong className="font-semibold text-foreground">
          Do not use it for confidential integrity or whistleblower reports
        </strong>{" "}
        — a separate safe channel is planned. Messages go to{" "}
        <a href="mailto:support@mkweli.tech" className="text-primary">
          support@mkweli.tech
        </a>
        .
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send message"}
        </button>
        <a
          href="mailto:support@mkweli.tech?subject=Climate%20Fund%20Watch%20%E2%80%94%20Get%20involved"
          className="text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Or email support@mkweli.tech →
        </a>
      </div>
    </form>
  );
}
