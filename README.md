# Climate Fund Watch (`cfw`)

Country-agnostic digital public good for climate finance transparency, community verification, and whistleblower-safe integrity reporting.

| | |
|--|--|
| **Public site** | https://cfw.mkweli.tech (also `climate-fund-watch.vercel.app`) |
| **GitHub** | https://github.com/gilbertbouic/cfw (private) |
| **Contact** | support@mkweli.tech · form on [/get-involved](https://cfw.mkweli.tech/get-involved) |
| **Reference pilot** | ClimateFunds Watch Mauritius |

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
| `/about` · `/problem-solution` · `/get-involved` | Narrative + contact form |

## Deploy (Vercel)

The Next.js app lives in **`web/`**. In the Vercel project settings, **Root Directory must be `web`** (required for GitHub deploys).

```bash
# From the repository root (recommended)
cd ~/Documents/cfw
npx vercel --prod
```

Do **not** set Root Directory to empty if the Git repo is connected — that causes:  
`Couldn't find any 'pages' or 'app' directory`.

### Custom domain `cfw.mkweli.tech`

In Hostinger DNS:

| Type | Name | Value |
|------|------|-------|
| CNAME | `cfw` | `cname.vercel-dns.com` |

**Not** `gilbertbouic.github.io` — that target is for GitHub Pages sites only. Then add the domain in the Vercel project settings.

## Product status

- [x] Product build plan (multi-country, two-zone security)
- [x] Mauritius research / concept materials
- [x] Phase B public narrative site
- [x] Phase C demo registry, map, open CSV/JSON
- [x] Get involved form → support@mkweli.tech
- [ ] Phase D community evidence reporting
- [ ] Integrity vault + government consoles (after legal/security gates)

## License / visibility

Private repository during early build. Public open-source release of the public tracker core is planned after pilot stabilization (see product build plan §25).
