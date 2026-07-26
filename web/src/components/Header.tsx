"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/map", label: "Map" },
  { href: "/about", label: "About" },
  { href: "/problem-solution", label: "Problem & Solution" },
  { href: "/get-involved", label: "Get involved" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-card/90 backdrop-blur-md">
      {/* Parent hub link — all pages */}
      <div className="border-b border-border/60 bg-primary-soft/50">
        <Container className="flex h-9 items-center justify-between gap-3 text-xs sm:text-sm">
          <a
            href="https://mkweli.tech"
            className="inline-flex items-center gap-1.5 font-medium text-primary-dark transition hover:text-primary"
          >
            <span aria-hidden className="text-muted">
              ←
            </span>
            <span>
              Back to <span className="font-semibold">mkweli.tech</span>
            </span>
          </a>
          <span className="hidden text-muted sm:inline">
            A Mkweli product
          </span>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white shadow-sm"
            aria-hidden
          >
            CF
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight text-foreground sm:text-base">
              Climate Fund Watch
            </span>
            <span className="hidden text-xs text-muted sm:block">
              Trace · Verify · Protect
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary-soft text-primary-dark"
                    : "text-muted hover:bg-primary-soft/60 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
          >
            Explore projects
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-card md:hidden"
        >
          <Container className="flex flex-col gap-1 py-3">
            <a
              href="https://mkweli.tech"
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-primary-dark hover:bg-primary-soft/60"
            >
              ← Back to mkweli.tech
            </a>
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                    active
                      ? "bg-primary-soft text-primary-dark"
                      : "text-foreground hover:bg-primary-soft/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/projects"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-primary px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              Explore projects
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
