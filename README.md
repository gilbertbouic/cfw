# Climate Fund Watch

Country-agnostic digital public good for climate finance transparency, community verification, and whistleblower-safe integrity reporting.

**Reference pilot brand:** ClimateFunds Watch Mauritius

## One-line definition

A mobile-first climate finance transparency platform with open project/budget tracking, community evidence, and a cryptographically isolated anonymous integrity channel—configurable for any country.

## Repository layout

| Path | Purpose |
|------|---------|
| [`web/`](./web) | Public website (Next.js) — narrative + demo registry/map |
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
| `/` | Landing |
| `/projects` | Demo project registry (filters + stats) |
| `/projects/[id]` | Project detail (budget chain, milestones) |
| `/map` | MapLibre status map |
| `/methodology` | Demo data disclaimer |
| `/api/projects` | Open JSON API |
| `/api/projects.csv` | CSV download |
| `/about` · `/problem-solution` · `/get-involved` | Narrative pages |

## Deploy (Vercel)

The app lives in **`web/`**. Set that as the Vercel **Root Directory**.

### Option A — Dashboard

1. Import `gilbertbouic/climate-fund-watch` at [vercel.com/new](https://vercel.com/new)
2. Root Directory: `web`
3. Framework: Next.js (auto)
4. Deploy

### Option B — CLI

```bash
cd web
npx vercel login
npx vercel        # preview
npx vercel --prod # production
```

## Product status

- [x] Product build plan (multi-country, two-zone security)
- [x] Mauritius research / concept materials
- [x] Phase B public narrative site
- [x] Phase C demo registry, map, open CSV/JSON
- [ ] Phase D community evidence reporting
- [ ] Integrity vault + government consoles (after legal/security gates)

## License / visibility

Private repository during early build. Public open-source release of the public tracker core is planned after pilot stabilization (see product build plan §25).
