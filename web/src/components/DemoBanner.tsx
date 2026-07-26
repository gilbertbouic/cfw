import Link from "next/link";

export function DemoBanner() {
  return (
    <div className="border-b border-warning/30 bg-accent-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2.5 text-sm text-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          <span className="font-semibold text-accent">Demo data</span>
          {" — "}
          Curated sample projects for illustration. Not an official live feed
          from government or funders.
        </p>
        <Link
          href="/methodology"
          className="shrink-0 font-semibold text-primary hover:text-primary-dark"
        >
          Methodology →
        </Link>
      </div>
    </div>
  );
}
