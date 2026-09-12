import Link from "next/link";
import { LEDGER_REVIEWED } from "@/data/types";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="text-base font-semibold text-foreground">
            Climate Fund Watch
          </p>
          <p className="mt-2 max-w-md text-sm text-muted">
            An independent public ledger of climate-finance figures for
            Mauritius, compiled from cited government and funder documents.
            Product modules beyond this sourced registry are proposed, not live.
          </p>
          <p className="mt-3 text-sm">
            <a
              href="mailto:support@mkweli.tech"
              className="font-semibold text-primary hover:text-primary-dark"
            >
              support@mkweli.tech
            </a>
          </p>
          <p className="mt-4">
            <a
              href="https://mkweli.tech"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              <img
                src="/brand/mkweli-logo.png"
                alt="Mkweli"
                className="h-6 w-auto dark:hidden"
              />
              <img
                src="/brand/mkweli-logo-on-dark.png"
                alt="Mkweli"
                className="hidden h-6 w-auto dark:block"
              />
              <span>A Mkweli product</span>
            </a>
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/projects" className="hover:text-primary">
                Project registry
              </Link>
            </li>
            <li>
              <Link href="/landscape" className="hover:text-primary">
                Funding landscape
              </Link>
            </li>
            <li>
              <Link href="/map" className="hover:text-primary">
                Map
              </Link>
            </li>
            <li>
              <Link href="/sources" className="hover:text-primary">
                Sources
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About the product
              </Link>
            </li>
            <li>
              <Link href="/problem-solution" className="hover:text-primary">
                Problem &amp; solution
              </Link>
            </li>
            <li>
              <Link href="/get-involved" className="hover:text-primary">
                Get involved
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Ledger</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Last reviewed {LEDGER_REVIEWED}</li>
            <li>Unknown amounts shown as “Not published”</li>
            <li>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-2 py-0.5 text-xs font-medium text-primary-dark">
                Sourced records only
              </span>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Climate Fund Watch. All rights reserved.</p>
          <p>Not an official government or funder reporting system.</p>
        </Container>
      </div>
    </footer>
  );
}
