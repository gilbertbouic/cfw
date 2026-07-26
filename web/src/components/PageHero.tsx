import type { ReactNode } from "react";
import { Container } from "./Container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-primary-soft/70 to-background">
      <Container className="py-12 sm:py-16">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
          {description}
        </p>
        {children && <div className="mt-6">{children}</div>}
      </Container>
    </section>
  );
}
