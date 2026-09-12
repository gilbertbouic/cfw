# Climate Fund Watch (`cfw`)

Independent, sourced public ledger of climate-finance figures for Mauritius, plus a proposed multi-country transparency product.

| | |
|--|--|
| **Public site** | https://cfw.mkweli.tech |
| **GitHub** | https://github.com/gilbertbouic/cfw |
| **Contact** | support@mkweli.tech · form on [/get-involved](https://cfw.mkweli.tech/get-involved) |
| **Reference pilot** | ClimateFunds Watch Mauritius |

## What is live

A **sourced Mauritius briefing**: need (NDC / CCDR), tagged domestic spend, international projects, and citations. Every money field is taken from a public URL or shown as “Not published.”

Community evidence, the integrity vault, and government consoles are **proposed**, not operating.

## Repository layout

| Path | Purpose |
|------|---------|
| [`web/`](./web) | Public website (Next.js) |
| [`web/src/data/`](./web/src/data) | Sourced ledger and headline figures |
| [`docs/mauritius/SOURCES.md`](./docs/mauritius/SOURCES.md) | Source list |
| [`PRODUCT_BUILD_PLAN.md`](./PRODUCT_BUILD_PLAN.md) | Full product, architecture, security, and delivery plan |
| [`docs/ROADMAP.md`](./docs/ROADMAP.md) | Thin-slice build sequence |
| [`docs/mauritius/`](./docs/mauritius) | Mauritius research pack |

## Run locally

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Main routes

| Path | Description |
|------|-------------|
| `/` | Mauritius climate-finance briefing |
| `/projects` | Sourced registry |
| `/projects/[id]` | Record detail with citations |
| `/landscape` | Need vs tagged spend vs donor channels |
| `/map` | Named works sites from reports; site-level spend or not reported |
| `/sources` | Methods and source list (`/methodology` redirects here) |
| `/api/projects` | JSON (includes source URLs) |
| `/api/projects.csv` | CSV download |
| `/about` · `/problem-solution` · `/get-involved` | Product narrative + contact |

## Deploy (Vercel)

The Next.js app lives in **`web/`**. In the Vercel project settings, **Root Directory must be `web`**.

### Custom domain `cfw.mkweli.tech`

In Hostinger DNS:

| Type | Name | Value |
|------|------|-------|
| CNAME | `cfw` | `cname.vercel-dns.com` |

**Not** `gilbertbouic.github.io`. Then add the domain in the Vercel project settings.

## Product status

- [x] Product build plan (multi-country, two-zone security)
- [x] Mauritius research / concept materials
- [x] Sourced public ledger (replaces demo registry)
- [x] Get involved form → support@mkweli.tech
- [ ] Phase D community evidence reporting
- [ ] Integrity vault + government consoles (after legal/security gates)

## License / visibility

Public repository. The public tracker core is intended as a digital public good (see product build plan §25).
