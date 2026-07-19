# Climate Fund Watch — Full Product Build Plan

**Product name (global):** Climate Fund Watch (CFW)  
**Reference pilot brand:** ClimateFunds Watch Mauritius  
**Document type:** Country-agnostic product, architecture, and delivery plan  
**Version:** 1.0  
**Status:** Build-ready product plan  

---

## 1. Executive summary

Climate Fund Watch is a **digital public good** that makes climate finance **traceable, community-verified, and integrity-safe**. It combines:

1. A **public transparency platform** for climate projects, budgets, milestones, and open data.  
2. A **strictly isolated whistleblower / integrity channel** for safe reporting of misuse, fraud, and greenwashing.  
3. **Subnational operational dashboards** for local governments and implementing agencies.  
4. **Open APIs and scorecards** so media, CSOs, auditors, and researchers can independently verify claims.

The product is designed as a **multi-country, multi-tenant platform** with a shared core and **country packs** (law, language, admin boundaries, funder catalogs, risk layers). Mauritius is the reference pilot; the same core must deploy for any country with minimal code forks.

**One-line product definition**

> A mobile-first climate finance transparency platform with open project/budget tracking, community evidence, and a cryptographically isolated anonymous integrity channel—configurable for any country.

---

## 2. Problem, users, and theory of change

### 2.1 Universal problem

Climate finance is rising worldwide, but delivery fails for similar reasons across countries:

| Failure mode | Citizen impact |
|--------------|----------------|
| Fragmented project reporting | No single source of truth |
| Weak budget-to-site traceability | Money disappears between approval and community |
| Limited local authority visibility | Delays and mis-prioritization |
| Unsafe or absent integrity channels | Corruption and greenwashing go unreported |
| Closed data | Media/NGOs cannot audit independently |
| Low connectivity / language barriers | Excluded communities cannot participate |

### 2.2 Theory of change

**If** governments and partners publish climate projects and budget flows on a shared platform, communities can submit field evidence, and whistleblowers can report integrity risks safely, **and** local/national actors act on alerts under clear SLAs, **then** delays and misuse are detected earlier, trust rises, and adaptation resources reach vulnerable communities more fairly and effectively.

### 2.3 Primary user roles (global)

| Role | Goals | Access |
|------|-------|--------|
| **Citizen / resident** | See projects near me; report stalled/poor works | Public + evidence submit |
| **Whistleblower** | Report misuse without retaliation | Anonymous integrity vault |
| **Community verifier / CSO** | Confirm/dispute field signals | Elevated public + moderation tools |
| **Local government officer** | Update projects; act on delays/reports | Council/municipality console |
| **National climate finance unit** | Portfolio oversight; donor reporting | National console |
| **Implementing agency / contractor** | Milestone updates (controlled) | Limited contributor access |
| **Auditor / media / researcher** | Bulk data, APIs, exports | Public open data |
| **Integrity case handler** | Process confidential cases | Trusted zone only |
| **Platform operator / super-admin** | Tenant config, security, uptime | Ops console |
| **Donor / DFI analyst** | Portfolio transparency analytics | Public + optional premium |

---

## 3. Product principles (non-negotiable)

1. **Two-zone architecture** — Public transparency and whistleblower data never share identity links.  
2. **Open by default for public money** — Projects, budgets, milestones, and scorecards are public unless law requires redaction.  
3. **Anonymous by default for integrity reports** — No account required; case-code follow-up only.  
4. **Country-configurable, not country-forked** — One codebase; config/packs per country.  
5. **Offline-aware inclusion** — SMS/WhatsApp/USSD/hotline bridges where needed.  
6. **Standards-aligned data** — Prefer IATI, Open Contracting, ISO 3166, admin boundary standards.  
7. **Security and privacy as product features** — DPIA-ready; pen-tested before integrity launch.  
8. **Institutional co-ownership + independent integrity oversight** — Avoid “regulator audits itself only.”  
9. **Open source where possible** — Public tracker core should be publishable as a digital public good.  
10. **Action over dashboards** — Every alert has an owner, SLA, and public aggregate outcome.

---

## 4. Product vision and success definition

### 4.1 Vision (5 years)

Climate Fund Watch is the default **climate finance accountability layer** for countries and SIDS regions: every adaptation/mitigation project publicly listed, budget-traceable, community-checked, and integrity-safe—with a reusable multi-country SaaS / government-hosted option.

### 4.2 Success metrics (platform-level)

| Metric | Year-1 pilot target (per country) | Mature target |
|--------|-----------------------------------|---------------|
| % climate projects in scope publicly listed | ≥ 80% in pilot localities | ≥ 95% national |
| % projects with complete budget chain (approved/disbursed/spent) | ≥ 60% | ≥ 90% |
| Median time report → first official response | ≤ 10 working days | ≤ 5 working days |
| Integrity cases with status update to reporter | ≥ 90% | ≥ 95% |
| Citizen reports verified (not spam) | ≥ 70% actionable/verified | ≥ 80% |
| Open data consumers (API/download users) | ≥ 10 orgs | ≥ 50 orgs |
| Subnational entities actively updating | 2 pilots | National coverage |

---

## 5. Modular product architecture

Build as **pluggable modules**. Countries enable what they need; core remains shared.

```
┌──────────────────────────────────────────────────────────────────┐
│                     CLIMATE FUND WATCH PLATFORM                  │
├───────────────┬───────────────┬───────────────┬──────────────────┤
│  M1 Registry  │  M2 Budget &  │  M3 Map &     │  M4 Community    │
│  & Projects   │  Fund Flows   │  Milestones   │  Evidence        │
├───────────────┼───────────────┼───────────────┼──────────────────┤
│  M5 Integrity │  M6 Gov       │  M7 Open Data │  M8 Risk &       │
│  Safe Channel │  Ops Consoles │  API/Exports  │  Green Score     │
├───────────────┴───────────────┴───────────────┴──────────────────┤
│  M9 Alerts/SLA │ M10 Localization │ M11 Analytics │ M12 Identity │
├──────────────────────────────────────────────────────────────────┤
│         PLATFORM CORE: multi-tenant, RBAC, audit, config packs   │
└──────────────────────────────────────────────────────────────────┘
```

### 5.1 Module catalog

#### M1 — Project Registry (required)

- Project master record: ID, title, description, sector tags, climate objective (adaptation/mitigation/cross-cutting).  
- Actors: funders, implementing entities, contractors, local authority.  
- Location: country, admin units (L1/L2/L3), optional site geometries.  
- Lifecycle status: pipeline / approved / in progress / delayed / completed / cancelled.  
- Documents: public links to designs, EIAs, contracts (where lawful).  
- Change log: field-level public audit of official updates.

#### M2 — Budget & Fund Flow (required)

- Money chain: **Source → Instrument → Appropriation → Disbursement → Expenditure → Remaining**.  
- Multi-currency + reporting currency (USD/EUR) with FX rate date stamps.  
- Co-financing and counterpart contributions.  
- Procurement milestones and contract values (Open Contracting-friendly fields).  
- “Follow the money” visualization API.

#### M3 — Map & Milestone Tracker (required)

- MapLibre/OSM base map; offline tile strategy optional.  
- Filters: hazard type, status, funder, admin unit, year.  
- Milestone plans vs actuals; delay reason taxonomy (global + country extendable).  
- Photo progress gallery (official vs community tagged).

#### M4 — Community Evidence Reporting (required)

- Categories: delay, quality defect, non-delivery, access/exclusion, environmental harm, greenwashing suspicion, other.  
- Media upload (photo/video), optional geotag, free text.  
- Severity scoring + escalation rules.  
- Community verify/dispute workflow (trusted verifiers).  
- Public display: sanitized summaries; PII stripped.

#### M5 — Integrity Safe Channel / Whistleblower (required)

- Anonymous and optional identified intake.  
- Unique case tracking code; secure status channel.  
- Encrypted attachments; EXIF strip; no third-party trackers.  
- Handler workflow, dual control for high sensitivity, immutable access logs.  
- Legal guidance content per country pack.  
- **Hard isolation** from public DB identity graph (see §7).

#### M6 — Government / Local Ops Consoles (required)

- Local authority dashboard: portfolio, delays, inbox, SLAs.  
- National dashboard: cross-jurisdiction analytics, donor views.  
- Contributor forms for milestone/budget updates with approval workflow.  
- Export for cabinet/parliamentary briefings.

#### M7 — Open Data & API (required)

- REST + optional GraphQL; bulk CSV/JSON/GeoJSON.  
- Public data dictionary and versioned schemas.  
- CKAN-style catalog or native open-data portal pages.  
- Webhooks for CSO/media monitors.  
- Machine-readable license (e.g., CC BY 4.0 for public datasets).

#### M8 — Risk Overlay & Green Integrity Score (recommended Y1)

- Optional climate hazard layers (flood, cyclone, drought, heat, sea-level) via external WMS/tiles.  
- Checklist-based green integrity score (anti-greenwashing).  
- “Risk vs investment” views: high hazard / low investment alerts.

#### M9 — Alerts, SLA & Scorecards (recommended Y1)

- Automated delay and stall detection.  
- Citizen report SLA clocks.  
- Monthly public scorecards by admin unit / funder / sector.  
- Aggregate integrity metrics only (never case-level public detail).

#### M10 — Localization & Access Bridges (required for scale)

- i18n: UI + content (RTL support).  
- Admin boundary packs; currency; date/number formats.  
- SMS / WhatsApp / USSD / voice hotline adapters.  
- Low-bandwidth mode and offline form drafts (PWA).

#### M11 — Analytics & Premium Insights (Y2 optional revenue)

- Anomaly detection (budget vs progress outliers).  
- Donor portfolio analytics.  
- Comparative country benchmarks (opt-in).  
- Keep free tier strong for public trust.

#### M12 — Identity, RBAC & Tenant Admin (platform core)

- Multi-tenant orgs (country / state / multi-country program).  
- Role-based access; MFA for staff; SSO optional (SAML/OIDC).  
- Feature flags per tenant.  
- Full admin audit trail.

---

## 6. Multi-country adaptability model

### 6.1 Design rule: one product, many country packs

Never fork the app per country. Ship:

| Layer | What varies by country | How configured |
|-------|------------------------|----------------|
| **Core platform** | Business logic, modules, security model | Shared release train |
| **Country pack** | Language, law text, boundaries, taxonomies, funders, hotlines | Config + content repo |
| **Integrations pack** | Budget systems, GIS, SMS gateway, ID systems | Connectors + credentials |
| **Governance pack** | Who handles cases, SLAs, escalation matrix | Policy config |
| **Hosting mode** | SaaS multi-tenant vs sovereign single-tenant | Deployment profile |

### 6.2 Country pack contents (checklist)

```
country-packs/<iso3166>/
  manifest.yml              # country meta, modules enabled, locales
  locales/                  # UI translations
  legal/
    privacy_notice.md
    whistleblower_guidance.md
    data_retention.yml
  geo/
    admin_boundaries.geojson  # or external source ref
    default_bbox.json
  taxonomies/
    sectors.yml
    delay_reasons.yml
    report_categories.yml
    climate_hazards.yml
  organizations/
    funders.yml
    ministries.yml
  integrity/
    escalation_matrix.yml
    handler_roles.yml
    legal_basis.yml
  branding/
    logo.svg
    theme.json
  open_data/
    license.yml
    redaction_rules.yml
```

### 6.3 Deployment profiles

| Profile | When to use | Notes |
|---------|-------------|-------|
| **A. Multi-tenant SaaS** | NGOs, multi-country programs, fast pilots | Strongest network effects; careful data residency |
| **B. Sovereign single-tenant** | Governments requiring in-country hosting | Same code; dedicated stack |
| **C. Hybrid** | Public zone SaaS + integrity vault on-prem / hardened host | Recommended for high-threat contexts |
| **D. Air-gapped integrity only** | Extreme threat models | Rare; public tracker still online |

### 6.4 Global standards mapping (portability)

| Domain | Preferred standards |
|--------|---------------------|
| Country / admin | ISO 3166; UNDP/GADM or national official boundaries |
| Climate finance activity | IATI activity standard (subset) + CFW extensions |
| Procurement / contracts | Open Contracting Data Standard (OCDS) fields where available |
| Geospatial | GeoJSON; EPSG:4326; optional ISO 19115 metadata |
| Climate taxonomy | IPCC sectors + national climate budget tagging codes |
| Accessibility | WCAG 2.2 AA target |
| Security | OWASP ASVS L2+ for public; higher bar for integrity zone |

### 6.5 Localization beyond language

- Right-to-left scripts.  
- Local number/currency/date.  
- Low-literacy UX (icons, voice notes where appropriate).  
- Inclusive access: disability, gender-sensitive reporting paths.  
- Offline/assisted intake via CSO partners and local government kiosks.

---

## 7. Security & whistleblower architecture (two-zone)

### 7.1 Zone separation

```
                    ┌─────────────────────────────┐
   Citizens         │  PUBLIC ZONE                │
   Media/API   ───► │  Registry, budgets, maps,   │
   Councils         │  community evidence (PII-)  │
                    │  open API, scorecards       │
                    └──────────────▲──────────────┘
                                   │ NO shared user/case IDs
                    ┌──────────────┴──────────────┐
   Whistleblowers ─►│  TRUSTED ZONE               │
   Handlers         │  Anonymous intake           │
                    │  Encrypted case vault       │
                    │  Separate DB/keys/logs/VPC  │
                    └─────────────────────────────┘
```

### 7.2 Integrity zone requirements

| Control | Requirement |
|---------|-------------|
| Identity | No login required for submitters |
| Tracking | Random high-entropy case code only |
| Encryption | TLS in transit; field/attachment encryption at rest |
| Metadata | Strip EXIF; minimize IP retention; no marketing pixels |
| Access | Need-to-know RBAC; MFA; dual control for export |
| Logging | Immutable handler access audit |
| Hosting | Separate service and datastore from public app |
| Testing | External pen-test + abuse testing before go-live |
| Legal | Country-pack retention + lawful disclosure SOP |
| Tor | Onion service optional but recommended for high-risk reporters |

### 7.3 Recommended implementation approach

- **Do not build crypto messaging from scratch in Y1.**  
- Integrate a hardened open-source tip platform (**GlobaLeaks-class**) behind CFW UX, **or** implement an equivalent vault service with independent security review.  
- Public site deep-links to integrity intake without sharing cookies/analytics.  
- Case content never appears in public search indexes.

### 7.4 Threat model (summary)

| Threat | Mitigation |
|--------|------------|
| Reporter re-identification | Anonymity defaults, metadata hygiene, no account graph |
| Compelled disclosure overreach | Minimize stored personal data; legal process SOP |
| Insider misuse by handlers | Dual control, audit logs, role separation |
| Fake reports / weaponization | Verification workflow; sanctions for proven abuse |
| DDoS / vandalism | WAF, rate limits, moderated public evidence |
| Supply-chain / hosting compromise | Separate zones, key management, least privilege |
| Government pressure to weaken anonymity | Governance charter; multi-party integrity oversight |

---

## 8. Canonical data model (country-agnostic)

### 8.1 Core entities

```
Tenant (country or program)
 ├── AdminUnit (hierarchical)
 ├── Organization (funder, ministry, council, implementer, CSO)
 ├── PersonAccount (staff only; never required for citizens)
 ├── FundSource / Instrument
 ├── Project
 │    ├── ProjectLocation
 │    ├── ProjectOrganizationRole
 │    ├── BudgetLine / Transaction (approved, disbursed, spent)
 │    ├── Contract (optional OCDS-aligned)
 │    ├── Milestone
 │    ├── Document
 │    ├── GreenScoreAssessment
 │    └── OfficialStatusHistory
 ├── CommunityReport
 │    ├── MediaAsset (sanitized)
 │    ├── VerificationVote
 │    └── PublicModerationState
 ├── Alert / SLACase (public-zone operational)
 └── ScorecardSnapshot

IntegrityTenant (may map 1:1 to public Tenant, separate store)
 └── IntegrityCase
      ├── CaseMessage
      ├── EncryptedAttachment
      ├── HandlerAssignment
      └── CaseStatusEvent
```

### 8.2 Project minimum viable fields (global)

| Field | Required | Notes |
|-------|----------|-------|
| `project_id` | Yes | Stable public ID |
| `title` | Yes | Local + optional English |
| `country_iso` | Yes | ISO 3166-1 |
| `admin_unit_ids[]` | Yes | At least one |
| `climate_objective` | Yes | adaptation / mitigation / cross_cutting |
| `sector_tags[]` | Yes | Country taxonomy mapped to global |
| `status` | Yes | Enum |
| `budget_approved` | Yes* | *or explicit “not disclosed + reason” |
| `currency` | Yes | ISO 4217 |
| `implementing_org_id` | Yes | |
| `start_date` / `end_date_planned` | Preferred | |
| `geometry` or `point` | Preferred | |
| `last_updated_at` | Yes | System |

### 8.3 Transaction types (budget chain)

`commitment | appropriation | disbursement | expenditure | co_financing | adjustment`

Every transaction: amount, currency, date, source org, destination org, optional project link, reference document, public visibility flag.

### 8.4 Interoperability

- Import adapters: CSV templates, IATI XML/JSON, OCDS JSON, national open budget APIs.  
- Export: CFW canonical JSON schema v1, CSV bundles, GeoJSON, IATI subset.  
- Schema versioning with deprecation policy (min 12 months).

---

## 9. Technical architecture

### 9.1 Reference stack (recommended)

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Public web | TypeScript + Next.js (App Router) | SEO, i18n, PWA-ready |
| Public API | NestJS or FastAPI | Strong validation, OpenAPI |
| Primary DB | PostgreSQL + PostGIS | Relational finance + geo |
| Cache / queue | Redis + background workers | Alerts, imports, media processing |
| Object storage | S3-compatible (encrypted) | Media/docs |
| Maps | MapLibre GL + OSM | Cost, open |
| Search | Postgres FTS or OpenSearch | Project discovery |
| Auth (staff) | OIDC (Keycloak or managed) + MFA | Enterprise SSO ready |
| Integrity vault | GlobaLeaks-class or dedicated vault service | Proven anonymity patterns |
| Infra as code | Terraform + Kubernetes or equivalent | Repeatable country deploys |
| Observability | OpenTelemetry, Prometheus, structured logs | Ops maturity |
| CI/CD | GitHub Actions / GitLab CI | Tests, security scans, deploys |

### 9.2 High-level system diagram

```
[PWA / Web] [SMS/WA Gateway] [Open API clients]
        \         |              /
         \        |             /
          v       v            v
     ┌────────────────────────────┐
     │ API Gateway / WAF          │
     └────────────┬───────────────┘
                  │
     ┌────────────┴───────────────┐
     │ Public Application Services│
     │ registry, budget, reports, │
     │ maps, scorecards, tenants  │
     └────────────┬───────────────┘
                  │
         PostgreSQL+PostGIS / S3 / Redis
                  │
     (no join keys / no shared PII)
                  │
     ┌────────────┴───────────────┐
     │ Integrity Vault Services   │
     │ intake, crypto, handlers   │
     └────────────┬───────────────┘
                  │
         Isolated DB + KMS + hardened storage
```

### 9.3 Non-functional requirements

| NFR | Target |
|-----|--------|
| Public page LCP | < 2.5s on 4G mid-tier mobile |
| API availability | 99.5% pilot; 99.9% national |
| Integrity availability | 99.5% with maintenance windows published |
| Backup RPO / RTO | Public: 24h / 8h; Integrity: 24h / 4h (policy-dependent) |
| Accessibility | WCAG 2.2 AA |
| Browser support | Last 2 versions Chrome/Firefox/Safari/Edge + progressive enhancement |
| Load | Design for 10× pilot peak at national scale without rewrite |
| Privacy | DPIA template; data minimization; retention jobs |

### 9.4 Media pipeline

1. Upload to temporary storage.  
2. Virus scan.  
3. EXIF/metadata strip (default on for community + integrity).  
4. Transcode/resize.  
5. Move to durable encrypted bucket.  
6. Generate public derivatives only for approved public evidence.

---

## 10. UX product surfaces

### 10.1 Public surfaces

1. **Home / country landing** — trust statement, totals, search.  
2. **Explore map** — primary mobile discovery.  
3. **Project page** — money, milestones, docs, community signals.  
4. **Follow the money** — funder → site chain.  
5. **My area** — geolocation or admin-unit picker.  
6. **Report evidence** — 60-second guided flow.  
7. **Integrity intake** — separate visual design; calm, privacy-first.  
8. **Scorecards** — monthly public performance.  
9. **Open data** — docs, swagger, downloads.  
10. **About / methodology / governance** — who runs it, how data is verified.

### 10.2 Authenticated surfaces

1. Local authority console.  
2. National portfolio console.  
3. Implementer contributor portal.  
4. Moderation / verification queue.  
5. Integrity handler console (trusted zone).  
6. Tenant admin / country pack manager.  
7. Platform ops admin.

### 10.3 UX principles

- Mobile-first; thumb-reachable primary actions.  
- Plain language (target CEFR B1 for citizen UI).  
- Progressive disclosure for complex budget data.  
- Explicit anonymity warnings and tips before integrity submit.  
- Works on low bandwidth (compressed maps, optional images).

---

## 11. Delivery roadmap

### 11.1 Phased product roadmap (global)

#### Phase 0 — Foundation (Weeks 0–6)

**Goals:** legal/security baseline, architecture freeze, first country pack skeleton.

- Product principles & threat model signed off.  
- Multi-tenant data model v1.  
- Design system + wireframes (public + integrity).  
- Country pack schema.  
- DPIA template; retention policy template.  
- CI/CD, environments (dev/stage/prod), IaC bootstrap.  
- Select integrity engine (integrate vs build).  

**Exit criteria:** Architecture Decision Records (ADRs) approved; security review of plan complete.

#### Phase 1 — MVP Core (Months 2–5)

**Ship:**

- M1 Registry, M2 Budget (manual entry + CSV import), M3 Map/Milestones.  
- M4 Community evidence (web/PWA).  
- M6 Local + national basic consoles.  
- M7 Read API + CSV export.  
- M12 Tenant/RBAC/MFA.  
- M10 i18n framework + English + pilot language(s).  
- M5 Integrity intake MVP (isolated) + handler workflow.  

**Exit criteria:** End-to-end demo on staging with synthetic + sample real data; pen-test scheduled.

#### Phase 2 — Pilot hardening (Months 5–8)

- Pen-test fixes; integrity go-live checklist.  
- SLA/alert engine (M9 light).  
- WhatsApp/SMS bridge (at least one channel).  
- Green integrity checklist (M8 light).  
- Training content + SOPs.  
- Public scorecard v1.  
- Live pilot in **≥2 subnational units** of first country.

**Exit criteria:** Live public data; first real community reports processed; integrity cases handled under SOP.

#### Phase 3 — National readiness (Months 8–12)

- Performance, accessibility, and localization polish.  
- IATI/OCDS import adapters (as available).  
- Advanced moderation and verifier roles.  
- Quarterly transparency bulletin generator.  
- Scale-up playbook + second-country readiness checklist.  
- Open-source publication decision executed for public core (recommended).

**Exit criteria:** National rollout plan; measurable KPI baseline→midline; second country pack in draft.

#### Phase 4 — Multi-country scale (Year 2)

- Self-serve country onboarding (or assisted).  
- Premium analytics (optional).  
- Cross-country benchmarks (opt-in).  
- Additional connectors (IFMIS, procurement portals, national GIS).  
- Mobile native apps only if PWA metrics demand it.  
- Federated / regional deployments (e.g., Indian Ocean, Caribbean, Pacific).

### 11.2 Country onboarding playbook (repeatable)

| Step | Duration | Activities |
|------|----------|------------|
| 1. Scoping | 2–4 weeks | Stakeholders, legal review, hosting profile, module selection |
| 2. Country pack | 2–6 weeks | Translations, boundaries, taxonomies, escalation matrix |
| 3. Data bootstrap | 2–8 weeks | Historical projects CSV/IATI load; validation workshops |
| 4. Configure & train | 2–4 weeks | Roles, SLAs, handler training, CSO partners |
| 5. Soft launch | 2 weeks | Limited geography; feedback |
| 6. Public launch | — | Campaign, media kit, open data announcement |
| 7. Operate & improve | ongoing | MEL, monthly scorecards, security reviews |

**Target:** second country launch in **8–16 weeks** after first pilot maturity (not from zero engineering).

---

## 12. Implementation workstreams

| Workstream | Owns | Key outputs |
|------------|------|-------------|
| **Product** | PRDs, roadmap, prioritization | Backlog, release notes |
| **Design** | UX/UI, content design | Design system, flows, accessibility |
| **Engineering — public** | Registry, budgets, maps, API | MVP platform |
| **Engineering — integrity** | Vault, handlers, isolation | Secure channel |
| **Data & standards** | Schemas, imports, quality rules | Canonical model, adapters |
| **Security & privacy** | Threat model, pen-test, KMS | Security baseline, DPIA |
| **DevOps** | Hosting profiles, CI/CD, monitoring | Environments, runbooks |
| **Localization** | Country packs | Translations, legal content |
| **Partnerships / gov relations** | Data-sharing agreements | MoUs, governance charter |
| **Community & CSO** | Verifier networks, outreach | Adoption playbooks |
| **Legal** | Whistleblower/privacy compliance | SOPs, ToS, retention |
| **MEL** | Indicators, evaluation | Baseline/endline, learning reports |
| **Training** | Officer & handler curricula | LMS content / manuals |

### 12.1 Suggested core team (first country pilot)

| Role | FTE (indicative) |
|------|------------------|
| Product manager | 1.0 |
| Tech lead / architect | 1.0 |
| Full-stack engineers | 3.0–4.0 |
| Security engineer (shared/fractional) | 0.5–1.0 |
| UX/UI designer | 1.0 |
| Data engineer / analyst | 1.0 |
| DevOps | 0.5–1.0 |
| Localization / content | 0.5–1.0 |
| Community / training lead | 1.0 |
| Project manager / gov liaison | 1.0 |
| Legal counsel (fractional) | 0.2–0.4 |
| MEL specialist (fractional) | 0.3–0.5 |

---

## 13. Budget patterns (adaptable, not single-country fixed)

Use **modular cost envelopes** rather than one global price.

### 13.1 Reference envelopes (USD, indicative)

| Envelope | Pilot country (12 mo) | Each additional country (Y1) | Notes |
|----------|----------------------|------------------------------|-------|
| Product & engineering (core share) | 180k–280k | 20k–60k incremental | Core amortized across countries |
| Integrity security & isolation | 40k–90k | 15k–40k | Pen-test, hardening, vault ops |
| Hosting & observability | 20k–60k | 10k–40k | Depends on sovereign vs SaaS |
| Country pack + localization | 25k–70k | 25k–70k | Languages, legal, boundaries |
| Training & stakeholder engagement | 40k–90k | 30k–70k | Critical path for adoption |
| Pilot operations | 40k–80k | 30k–70k | Field support, helpdesk |
| MEL & knowledge | 20k–50k | 15k–35k | |
| Contingency (10–15%) | variable | variable | |
| **Total first country** | **~400k–700k** | | Mauritius reference ~550k fits |
| **Additional country** | | **~150k–350k** | If core already built |

### 13.2 Funding / sustainability models

1. **Public digital infrastructure** — government budget line + climate/governance grants.  
2. **Donor-funded pilots** — GCF readiness, bilateral governance funds, multi-lateral trust funds.  
3. **Freemium SaaS** — free public + citizen tools; paid advanced analytics for DFIs/auditors.  
4. **Regional shared service** — several SIDS share one operated instance with country packs.  
5. **Hybrid** — public core open source; paid hosting/support from a nonprofit or social enterprise operator.

**Pricing principle:** Citizens always free. Public climate project data always free. Never paywall transparency.

---

## 14. Governance model (global template)

### 14.1 Bodies

| Body | Function |
|------|----------|
| **Steering Committee** | Strategy, module priorities, major partnerships |
| **Data Governance Board** | Standards, quality, redaction disputes |
| **Integrity Oversight Panel** | Independent view on whistleblower SOPs and handler conduct |
| **Technical Advisory Group** | Architecture, security, open source |
| **Country Implementation Unit** | Day-to-day ops for a tenant |

### 14.2 Critical independence rule

The **integrity vault** must not be solely controlled by entities that are primary subjects of potential allegations. Options:

- Multi-signature administrative control (gov + CSO + independent tech).  
- Third-party nonprofit operator for trusted zone.  
- Statutory anti-corruption body as primary handler with published SLA metrics.

### 14.3 Policies every country must adopt (templates provided)

- Acceptable use & anti-abuse policy.  
- Community evidence moderation policy.  
- Whistleblower confidentiality & retaliation response SOP.  
- Data retention & deletion schedule.  
- Vulnerability disclosure policy.  
- Open data license & attribution.  
- Conflict of interest policy for handlers and admins.

---

## 15. Compliance & legal portability

Build a **compliance matrix** per country pack:

| Topic | Questions to resolve before launch |
|-------|------------------------------------|
| Privacy law | Lawful bases, DPIA, cross-border transfers |
| Whistleblower law | Protected categories, employer duties, anonymous tips legality |
| Defamation / false reports | Handling accusations before verification |
| Public finance disclosure | What must/can be published |
| Procurement secrecy | Contract field redaction rules |
| National security exceptions | Narrow, logged, time-bound |
| Records laws | Retention vs right to erasure tension |
| Child safety / CSAM | Media scanning obligations |
| Accessibility law | Public sector digital standards |

**Product stance:** maximum transparency for public fund data; maximum minimization for integrity identities.

---

## 16. Integration strategy

### 16.1 Priority connectors (build as adapters)

| System type | Examples (generic) | Phase |
|-------------|--------------------|-------|
| Spreadsheet/CSV | Ministry project lists | P1 |
| IATI feeds | Publisher datasets | P2–P3 |
| National budget / IFMIS | Treasury systems | P3–Y2 |
| Procurement portals | OCDS APIs | P3–Y2 |
| GIS / disaster risk | National DRM agencies, open hazard data | P2 |
| SMS gateways | Twilio, Africa’s Talking, local telco | P2 |
| WhatsApp Business | Meta Cloud API | P2 |
| Identity (staff) | Gov SSO, Azure AD, Keycloak | P1 |
| Document stores | SharePoint, national CMS | Y2 |

### 16.2 Integration principles

- Anti-corruption adapter pattern: normalize → validate → stage → publish.  
- Human-in-the-loop for first-time official data publishes.  
- Idempotent imports; full lineage (`source_system`, `source_id`, `imported_at`).

---

## 17. Analytics, AI, and automation (careful rollout)

| Capability | When | Guardrails |
|------------|------|------------|
| Rule-based delay alerts | P2 | Transparent rules published |
| Duplicate report clustering | P2 | Human moderation remains |
| Budget vs progress anomaly flags | Y2 | Explainable features only |
| NLP categorization of reports | Y2 | Human override; bias testing |
| Generative AI summaries for officers | Y2 optional | Never auto-decide integrity cases; never invent project facts |
| Face/re-ID in photos | **Do not ship** | Privacy harm outweighs benefit |

**Principle:** AI assists triage; humans own accountability decisions.

---

## 18. Testing, quality, and release management

### 18.1 Quality gates

- Unit + integration + contract tests for API.  
- End-to-end tests for citizen report and staff update flows.  
- Accessibility checks in CI.  
- Security SAST/DAST + dependency scanning.  
- Load tests before national launch.  
- Integrity zone: dedicated security regression suite.  
- Localization QA (linguistic + cultural).  
- Data quality score on imports (completeness, validity, timeliness).

### 18.2 Environments

`local → dev → staging (prod-like data synthetic) → production`  
Separate staging for integrity vault with production-like controls.

### 18.3 Release train

- Biweekly public platform releases after MVP.  
- Integrity changes: slower, security-reviewed cadence.  
- Feature flags for country-specific rollouts.

---

## 19. Operations & support model

| Function | Pilot | Scale |
|----------|-------|-------|
| Platform uptime monitoring | 8×5 | 24×7 on-call rotation |
| Citizen helpdesk | Email + partner CSOs | Multi-channel, multi-language |
| Officer support | Training + office hours | Tiered support |
| Integrity hotline support | Trained handlers only | Regional handler pools |
| Incident response | Security runbook | Tabletop exercises 2×/year |
| Data steward | Per country | Network of stewards |

**Public status page** recommended for trust.

---

## 20. MEL framework (Monitoring, Evaluation, Learning)

### 20.1 Indicator families

1. **Coverage** — projects listed, budget fields complete, geo completeness.  
2. **Use** — MAU citizens, officer active rates, API consumers.  
3. **Responsiveness** — report→ack→resolve times.  
4. **Integrity process health** — cases received, processed, status feedback rate (aggregates).  
5. **Outcomes** — reduced delay rates, corrective actions documented, trust surveys.  
6. **Inclusion** — reports by gender/region/language (voluntary, privacy-safe).  

### 20.2 Evaluation moments

- Baseline at pilot start.  
- Midline ~month 6–8.  
- Endline month 12.  
- Independent evaluation optional for donor programs.

### 20.3 Learning products

- Monthly internal ops review.  
- Quarterly public transparency bulletin.  
- Annual multi-country methods report.  
- Open post-mortems for major incidents (privacy-preserving).

---

## 21. Risk register (product delivery)

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Incomplete government data | High | High | Minimum templates; phased mandates; CSV bootstrap |
| Institutional resistance | Medium | High | Co-design; show operational value to councils |
| Integrity module security flaw | Low–Med | Critical | Isolation, pen-test, minimize data, bug bounty later |
| Low citizen uptake | Medium | High | CSO partners, SMS, radio, local language, offline help |
| Report weaponization | Medium | Medium | Verification, moderation, legal deterrents for malice |
| Scope creep (AI, native apps, DRM) | High | Medium | Modular roadmap; protect MVP |
| Multi-country config forks | Medium | High | Enforce country packs; no per-country code branches |
| Hosting data residency conflicts | Medium | High | Deployment profiles A–D |
| Funding cliff after pilot | Medium | High | Institutionalization plan from month 1 |
| Greenwashing score disputes | Medium | Low–Med | Transparent methodology; appeal process |

---

## 22. MVP scope freeze (build this first)

### In scope (global MVP)

- Multi-tenant project registry + budget fields + map.  
- Manual entry + CSV import.  
- Community evidence reports (web/PWA).  
- Integrity anonymous channel + handler console + case codes.  
- Local and national read/write consoles (basic).  
- Public REST API + CSV download.  
- RBAC + MFA for staff.  
- i18n framework + ≥2 languages for first pilot.  
- Audit logs for official data edits.  
- Basic delay alerts.  
- Country pack v1 for pilot country.  

### Explicitly out of scope for MVP

- Native iOS/Android apps.  
- Full IFMIS real-time integration.  
- Advanced ML anomaly engines.  
- Cross-country leaderboards.  
- Full disaster early-warning system.  
- Gamification / points economies.  
- Custom blockchain ledgers (unnecessary for v1 transparency).

---

## 23. Detailed build backlog (epic level)

### Epic A — Platform foundation

- Tenant model, feature flags, config service.  
- AuthN/AuthZ, MFA, SSO hooks.  
- Design system, layout shell, a11y baseline.  
- Observability and error tracking.  
- Admin audit log.

### Epic B — Registry & budget

- Project CRUD + public pages.  
- Organizations & roles.  
- Transactions & budget rollups.  
- Document attachments.  
- CSV import/export + validation errors UX.  
- Public changelog.

### Epic C — Geo & milestones

- PostGIS locations.  
- Map explorer + filters.  
- Milestone timeline UI.  
- Status/delay taxonomy.

### Epic D — Community evidence

- Report wizard.  
- Media pipeline.  
- Moderation queue.  
- Public sanitized display.  
- Verifier workflow.

### Epic E — Integrity vault

- Isolated deploy.  
- Submit UX + case code.  
- Handler case management.  
- Encryption, retention jobs, access audit.  
- Country legal guidance content.  
- Pen-test remediation.

### Epic F — Ops consoles

- Local dashboard.  
- National dashboard.  
- SLA inbox.  
- Notification preferences (email for staff only).

### Epic G — Open data

- Versioned OpenAPI.  
- Bulk downloads.  
- Data dictionary site.  
- License & attribution.

### Epic H — Localization & bridges

- Country pack loader.  
- Translation pipeline.  
- SMS/WhatsApp adapter interface.  
- Low-bandwidth mode.

### Epic I — Scorecards & green checks

- Monthly snapshot jobs.  
- Public scorecard pages.  
- Green checklist assessments.

### Epic J — Pilot enablement

- Training modules.  
- SOPs.  
- Help center.  
- Launch campaign assets.

---

## 24. Go-to-market & adoption (country-agnostic)

### 24.1 Launch sequence

1. Soft launch with local officers (data quality first).  
2. CSO verifier onboarding.  
3. Public launch with media kit and open data.  
4. Integrity channel announced with clear safety guidance.  
5. First monthly scorecard within 60 days of public launch.

### 24.2 Adoption levers

- Make council dashboards useful for **their** meetings (not only public shaming).  
- Celebrate data completeness publicly (positive incentives).  
- Partner with universities for independent analysis.  
- Integrate into donor reporting requirements where possible.  
- Radio/IVR campaigns for low-connectivity areas.

### 24.3 Messaging pillars

1. Trace every climate unit of currency to a place and result.  
2. Communities are sensors of implementation reality.  
3. Safe reporting protects public funds and honest officials.  
4. Open data multiplies accountability beyond the platform.  
5. Built once, configurable everywhere.

---

## 25. Open source & digital public good strategy

**Recommended stance:**

| Component | License direction |
|-----------|-------------------|
| Public tracker application | Open source (e.g., AGPL or MPL) after pilot stabilization |
| Data schemas & country pack examples | Creative Commons / open schema |
| Integrity vault | Prefer existing OSS; publish hardening guides |
| Operational runbooks | Public where safe |
| Security-sensitive configs | Private |

Benefits: trust, reuse across countries, external audits, lower long-term cost for SIDS.

---

## 26. Second-country readiness checklist

A new country may start when:

- [ ] Core MVP in production in country #1 for ≥3 months.  
- [ ] Country pack schema stable (no weekly breaking changes).  
- [ ] At least one non-English localization proven.  
- [ ] Integrity SOP templates validated with legal review process.  
- [ ] Hosting profile docs complete (SaaS / sovereign / hybrid).  
- [ ] Onboarding runbook used once end-to-end.  
- [ ] Cost model for incremental country approved.  
- [ ] Support capacity exists (or regional partner contracted).  

---

## 27. Mauritius reference mapping (optional first tenant)

Use existing concept assets as **Country Pack MU** seed:

| Existing asset | Maps to |
|----------------|---------|
| Idea / concept notes | Product modules M1–M8 |
| Pitch deck outline | Go-to-market + 12-month pilot |
| Budget ~USD 550k | First-country envelope (§13) |
| Pilot: 2 councils | Phase 2 subnational scope |
| Flood/cyclone focus | Hazard taxonomy + risk layers |
| Local council portals | M6 |
| Whistleblower channel | M5 |
| Open data/API | M7 |

Mauritius remains the **reference implementation**, not the product boundary.

---

## 28. 90-day execution plan (start building)

### Days 1–30

- Freeze MVP scope (§22).  
- Write ADRs: two-zone security, stack, multi-tenant model.  
- Hire/assign core team.  
- UX flows for: project page, report evidence, integrity submit, council inbox.  
- Stand up infra skeletons (public + integrity).  
- Draft Country Pack schema + first pack stub.  
- Legal kickoff: privacy + whistleblower memo template.

### Days 31–60

- Implement registry + budget + auth.  
- Map explorer alpha.  
- CSV import.  
- Integrity intake prototype on isolated stack.  
- Design system components.  
- Data dictionary v0.1.  
- Security threat model workshop.

### Days 61–90

- Community evidence MVP.  
- Council console MVP.  
- Public API read endpoints.  
- Staging demo with pilot stakeholders.  
- Pen-test procurement.  
- Training outline + SOP drafts.  
- Public launch criteria checklist.

---

## 29. Definition of Done — global product v1.0

Climate Fund Watch **v1.0** is achieved when:

1. A country tenant can be configured via country pack without code fork.  
2. Public users can discover projects on a map and see budget + status.  
3. Citizens can submit evidence in under 3 minutes on mobile web.  
4. Whistleblowers can submit anonymously and check status via case code.  
5. Local officers can update milestones and respond to reports under SLA.  
6. Third parties can download bulk open data and call a documented API.  
7. Security pen-test for integrity zone is completed and critical issues closed.  
8. At least one live pilot geography has real projects and real users.  
9. Documentation enables a second country pack to start without core rewrites.  
10. Governance charter and independence model for integrity are published.

---

## 30. Immediate next artifacts to produce

| Priority | Artifact | Purpose |
|----------|----------|---------|
| P0 | Architecture Decision Records (ADRs) | Lock two-zone + stack |
| P0 | PRD for MVP epics A–F | Engineering backlog |
| P0 | Threat model + DPIA template | Security/legal |
| P1 | Canonical JSON schema v1 | Interoperability |
| P1 | UX wireframes (key flows) | Design build |
| P1 | Country pack MU draft | First tenant |
| P1 | Data import CSV templates | Bootstrap projects |
| P2 | Training curriculum | Pilot adoption |
| P2 | Pitch materials update (global product) | Fundraising |
| P2 | Open-source governance draft | DPG path |

---

## Appendix A — Global report category taxonomy (starter)

- `DELAY_STALLED` — work not progressing  
- `QUALITY_DEFECT` — poor construction / materials  
- `NON_DELIVERY` — project missing on ground  
- `BUDGET_MISUSE_SUSPECT` — public-zone signal only; sensitive detail → integrity  
- `EXCLUSION_ACCESS` — community not benefiting / access barriers  
- `ENVIRONMENTAL_HARM` — negative local impacts  
- `GREENWASHING` — claimed climate benefit not evident  
- `SAFETY_HAZARD` — site danger  
- `OTHER`  

Sensitive corruption detail should prefer **M5 Integrity**, not public evidence comments.

---

## Appendix B — Green integrity checklist (starter)

Score 0–100 from weighted items:

1. Clear climate risk linkage documented.  
2. Located in/for exposed population or system.  
3. Outcome indicators defined and measurable.  
4. Community consultation evidence.  
5. Environmental/social safeguard docs present.  
6. Procurement transparency adequate.  
7. Progress evidence current (<90 days).  
8. Independent verification status.  
9. No material unresolved integrity flags (aggregate).  
10. Sustainability / O&M plan noted.

Publish methodology; allow official response annotations.

---

## Appendix C — Sample SLA defaults (configurable)

| Event | Target |
|-------|--------|
| Citizen report acknowledgement | 3 working days |
| First substantive response | 10 working days |
| Integrity case acknowledgement (via case code) | 5 working days |
| High-severity safety issue escalation | 24–48 hours |
| Official project data refresh expectation | Monthly minimum |

---

## Appendix D — Glossary

| Term | Meaning |
|------|---------|
| **Tenant** | Isolated country or multi-country program instance config |
| **Country pack** | All locale/legal/geo/taxonomy configuration for a country |
| **Public zone** | Open transparency systems and datasets |
| **Trusted / integrity zone** | Isolated whistleblower systems |
| **Community evidence** | Non-anonymous or lightly identified field reports (sanitized for public) |
| **Case code** | Secret token for whistleblower follow-up |
| **Scorecard** | Periodic public performance summary |
| **DPG** | Digital Public Good |

---

## Document control

| Item | Value |
|------|-------|
| Product | Climate Fund Watch |
| Plan version | 1.0 |
| Applicability | All countries (multi-tenant, country-pack model) |
| Reference pilot | Mauritius |
| Related docs | Idea.docx, concept notes, Pitch Deck Outline.docx |

---

*End of Full Product Build Plan*
