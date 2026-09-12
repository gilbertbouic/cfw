import Link from "next/link";
import { LEDGER_REVIEWED } from "@/data/types";

export function SourceBanner() {
  return (
    <div className="border-b border-border bg-primary-soft/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2.5 text-sm text-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          <span className="font-semibold text-primary-dark">Sourced ledger</span>
          {" — "}
          Independent compilation of public documents. Not an official
          government or funder portal. Last reviewed {LEDGER_REVIEWED}.
        </p>
        <Link
          href="/sources"
          className="shrink-0 font-semibold text-primary hover:text-primary-dark"
        >
          Sources →
        </Link>
      </div>
    </div>
  );
}
