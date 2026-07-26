# Climate Fund Watch — Web (Phase B)

Public narrative site for Climate Fund Watch.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Pages

- `/` — Landing
- `/projects` — Demo registry
- `/projects/[id]` — Detail
- `/map` — MapLibre map
- `/methodology` — Data disclaimer
- `/about` · `/problem-solution` · `/get-involved`
- `/api/projects` · `/api/projects.csv`

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · MapLibre GL

## Deploy

Root directory for Vercel must be `web/`:

```bash
npx vercel login
npx vercel --prod
```
