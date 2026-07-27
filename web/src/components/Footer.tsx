import Link from "next/link";
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
            A digital public good for climate finance transparency, community
            verification, and whistleblower-safe integrity reporting. Built once,
            configurable for any country. Mauritius is the reference pilot.
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
              <Link href="/map" className="hover:text-primary">
                Map
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/problem-solution" className="hover:text-primary">
                Problem &amp; Solution
              </Link>
            </li>
            <li>
              <Link href="/methodology" className="hover:text-primary">
                Methodology
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
          <p className="text-sm font-semibold text-foreground">Status</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Phase B — narrative site</li>
            <li>Phase C — demo registry &amp; map</li>
            <li>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
                Demo data live
              </span>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Climate Fund Watch. All rights reserved.</p>
          <p>Open by default for public climate finance. Privacy-first for integrity reports.</p>
        </Container>
      </div>
    </footer>
  );
}
