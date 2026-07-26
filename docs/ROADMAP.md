# Climate Fund Watch — Build roadmap (thin slice)

This roadmap adapts [`PRODUCT_BUILD_PLAN.md`](../PRODUCT_BUILD_PLAN.md) for practical sequential delivery. The full plan remains the north star (modules, two-zone security, multi-tenant country packs).

## Principle

Ship a **credible public face + demo tracker** first. Keep architecture decisions compatible with multi-country and two-zone security. Defer integrity vault, staff auth, and live government integrations until legal review and pilot partners exist.

## Phases

### Phase A — Repo hygiene *(done)*

- [x] Connect workspace to `gilbertbouic/climate-fund-watch`
- [x] Keep product build plan at repo root
- [x] Organize Mauritius materials under `docs/mauritius/`
- [x] Document thin-slice roadmap

### Phase B — Public narrative site

**Audience:** citizens & media (also useful for funders)

- [x] Next.js + TypeScript + Tailwind app in `web/`
- [x] Landing (problem, modules, build path CTAs)
- [x] About (product definition, audiences, principles, MU pilot)
- [x] Problem & Solution (failure modes, modules, user flow)
- [x] Get involved (partnership paths + contact stub)
- [x] Deploy to Vercel (see README)
- [ ] Confirm public contact email and custom domain

### Phase C — Public demo tracker *(current)*

- [x] Project TypeScript schema (global MVP fields)
- [x] Seed 15 curated demo projects (MU research + synthetic locals)
- [x] Project list + detail pages
- [x] Filters (district, status, hazard, funder, objective, search)
- [x] MapLibre map with status styling
- [x] Persistent “demo data” banner and methodology page
- [x] CSV download + JSON API (`/api/projects`, `/api/projects.csv`)

### Phase D — Community evidence (light)

- [ ] Report wizard (categories from product plan Appendix A)
- [ ] Photo upload pipeline (scan + EXIF strip later)
- [ ] Operator inbox (email or simple admin) before full console

### Phase E — Institutional & integrity (funded / partners)

Follow product plan Phases 1–3:

- Integrity vault (M5) with pen-test
- Council / national consoles (M6)
- RBAC + MFA
- SMS/WhatsApp bridges as needed
- Live pilot in ≥2 subnational units

## Stack (locked for Phase B–C)

| Layer | Choice |
|-------|--------|
| Public web | Next.js (App Router) + TypeScript + Tailwind |
| Demo data | Static JSON/CSV in repo (no DB required for C) |
| Maps (Phase C) | MapLibre GL + OSM |
| Later API/DB | NestJS or FastAPI + PostgreSQL/PostGIS (per build plan) |

## Exit criteria

| Phase | Done when |
|-------|-----------|
| B | Stakeholders can share a live URL explaining problem, solution, and pilot intent |
| C | Media/citizen can browse demo projects on list + map and download open data |
| D | A field report can be submitted and received by an operator |
| E | Real pilot geography with real users and integrity SOP |

## Related docs

- Product plan §22 MVP scope freeze  
- Product plan §28 90-day execution plan  
- Product plan §30 immediate next artifacts (ADRs, PRD, schemas)
