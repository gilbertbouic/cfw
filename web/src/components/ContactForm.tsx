"use client";

import { useMemo, useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";

const INTEREST_KEYS = [
  "pilot",
  "funding",
  "csoMedia",
  "tech",
  "research",
  "press",
  "other",
] as const;

export function ContactForm() {
  const { dict } = useI18n();
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const copy = dict.contactForm;

  const action = useMemo(
    () => "https://formsubmit.co/ajax/support@mkweli.tech",
    [],
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if ((data.get("_honey") as string)?.length) return;

    setSubmitting(true);
    try {
      const res = await fetch(action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("submit_failed");
      setSent(true);
    } catch {
      const name = String(data.get("name") || "");
      const org = String(data.get("organisation") || "");
      const interest = String(data.get("interest") || "");
      const message = String(data.get("message") || "");
      const email = String(data.get("email") || "");
      const subject = encodeURIComponent(copy.subject);
      const body = encodeURIComponent(
        `${copy.fallbackName}: ${name}\n${copy.fallbackOrg}: ${org}\n${copy.fallbackEmail}: ${email}\n${copy.fallbackInterest}: ${interest}\n\n${message}`,
      );
      window.location.href = `mailto:support@mkweli.tech?subject=${subject}&body=${body}`;
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    const sentParts = copy.sentBody.split("{email}");
    return (
      <div
        className="rounded-2xl border border-success/30 bg-primary-soft/60 p-6 sm:p-8"
        role="status"
      >
        <p className="text-lg font-semibold text-foreground">{copy.sentTitle}</p>
        <p className="mt-2 text-sm text-muted">
          {sentParts[0]}
          <a
            href="mailto:support@mkweli.tech"
            className="font-semibold text-primary"
          >
            support@mkweli.tech
          </a>
          {sentParts[1] ?? ""}
        </p>
      </div>
    );
  }

  const field =
    "mt-1 w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground shadow-sm placeholder:text-muted/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  const label =
    "block text-xs font-semibold uppercase tracking-wide text-muted";

  const tailParts = copy.disclaimerTail.split("{email}");

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
      noValidate
    >
      <input
        type="text"
        name="_honey"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />
      <input type="hidden" name="_subject" value={copy.subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label}>
          {copy.name} <span className="text-accent">*</span>
          <input
            className={field}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={copy.namePlaceholder}
          />
        </label>
        <label className={label}>
          {copy.email} <span className="text-accent">*</span>
          <input
            className={field}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={copy.emailPlaceholder}
          />
        </label>
        <label className={label}>
          {copy.organisation}
          <input
            className={field}
            name="organisation"
            type="text"
            autoComplete="organization"
            placeholder={copy.orgPlaceholder}
          />
        </label>
        <label className={label}>
          {copy.locality}
          <input
            className={field}
            name="locality"
            type="text"
            placeholder={copy.localityPlaceholder}
          />
        </label>
        <label className={`${label} sm:col-span-2`}>
          {copy.interest} <span className="text-accent">*</span>
          <select className={field} name="interest" required defaultValue="">
            <option value="" disabled>
              {copy.selectOne}
            </option>
            {INTEREST_KEYS.map((key) => (
              <option key={key} value={copy.interests[key]}>
                {copy.interests[key]}
              </option>
            ))}
          </select>
        </label>
        <label className={`${label} sm:col-span-2`}>
          {copy.message} <span className="text-accent">*</span>
          <textarea
            className={`${field} min-h-[140px] resize-y`}
            name="message"
            required
            rows={5}
            placeholder={copy.messagePlaceholder}
          />
        </label>
      </div>

      <p className="mt-4 text-xs text-muted">
        {copy.disclaimer}{" "}
        <strong className="font-semibold text-foreground">
          {copy.disclaimerStrong}
        </strong>{" "}
        {tailParts[0]}
        <a href="mailto:support@mkweli.tech" className="text-primary">
          support@mkweli.tech
        </a>
        {tailParts[1] ?? ""}
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark disabled:opacity-60"
        >
          {submitting ? copy.sending : copy.send}
        </button>
        <a
          href={`mailto:support@mkweli.tech?subject=${encodeURIComponent(copy.subject)}`}
          className="text-sm font-semibold text-primary hover:text-primary-dark"
        >
          {copy.orEmail}
        </a>
      </div>
    </form>
  );
}
