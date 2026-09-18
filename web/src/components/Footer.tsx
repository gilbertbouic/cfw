"use client";

import Link from "next/link";
import { LEDGER_REVIEWED } from "@/data/types";
import { useI18n } from "@/i18n/LanguageProvider";
import { Container } from "./Container";
import { MkweliLockup } from "./MkweliLockup";

export function Footer() {
  const { dict, t } = useI18n();

  return (
    <footer className="mt-auto border-t border-border bg-card">
      <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="text-base font-semibold text-foreground">
            {dict.header.productName}
          </p>
          <p className="mt-2 max-w-md text-sm text-muted">{dict.footer.blurb}</p>
          <p className="mt-3 text-sm">
            <a
              href="mailto:support@mkweli.tech"
              className="font-semibold text-primary hover:text-primary-dark"
            >
              support@mkweli.tech
            </a>
          </p>
          <p className="mt-4">
            <MkweliLockup size="md" className="text-sm font-semibold" />
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">
            {dict.footer.explore}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/projects" className="hover:text-primary">
                {dict.footer.projectRegistry}
              </Link>
            </li>
            <li>
              <Link href="/landscape" className="hover:text-primary">
                {dict.footer.fundingLandscape}
              </Link>
            </li>
            <li>
              <Link href="/map" className="hover:text-primary">
                {dict.footer.places}
              </Link>
            </li>
            <li>
              <Link href="/reports" className="hover:text-primary">
                {dict.footer.donorReports}
              </Link>
            </li>
            <li>
              <Link href="/sources" className="hover:text-primary">
                {dict.footer.sources}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                {dict.footer.aboutProduct}
              </Link>
            </li>
            <li>
              <Link href="/problem-solution" className="hover:text-primary">
                {dict.footer.problemSolution}
              </Link>
            </li>
            <li>
              <Link href="/get-involved" className="hover:text-primary">
                {dict.footer.getInvolved}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">
            {dict.footer.ledger}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>{t(dict.footer.lastReviewed, { date: LEDGER_REVIEWED })}</li>
            <li>{dict.footer.unknownAmounts}</li>
            <li>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-2 py-0.5 text-xs font-medium text-primary-dark">
                {dict.footer.sourcedOnly}
              </span>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            {t(dict.footer.copyright, { year: new Date().getFullYear() })}
          </p>
          <p>{dict.footer.disclaimer}</p>
        </Container>
      </div>
    </footer>
  );
}
