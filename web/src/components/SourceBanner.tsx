"use client";

import Link from "next/link";
import { LEDGER_REVIEWED } from "@/data/types";
import { useI18n } from "@/i18n/LanguageProvider";

export function SourceBanner() {
  const { dict, t } = useI18n();
  return (
    <div className="border-b border-border bg-primary-soft/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2.5 text-sm text-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          <span className="font-semibold text-primary-dark">
            {dict.sourceBanner.title}
          </span>
          {" - "}
          {t(dict.sourceBanner.body, { date: LEDGER_REVIEWED })}
        </p>
        <Link
          href="/sources"
          className="shrink-0 font-semibold text-primary hover:text-primary-dark"
        >
          {dict.sourceBanner.sourcesLink}
        </Link>
      </div>
    </div>
  );
}
