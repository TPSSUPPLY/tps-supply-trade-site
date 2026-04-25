# TPS Supply Trade Site

Wholesale plumbing supply site for TPS Supply (Morristown, NJ). Sister site to [yourshowroomattps.com](https://yourshowroomattps.com).

## Stack
- Vite + React + TypeScript
- Tailwind CSS
- React Router 7
- Express + Resend (credit application backend)
- Deployed on Render

## Local development
```sh
npm install
npm run dev          # frontend (Vite) on :5173
```

For backend testing:
```sh
npm run build
npm run start        # serves dist + /api on :8080
```

## Environment variables (Render)
- `RESEND_API_KEY` — Resend API key (secret)
- `TO_EMAIL` — anthony@tpssupply.com
- `FROM_EMAIL` — `TPS Supply <onboarding@resend.dev>`
- `VITE_GA4_ID` — GA4 Measurement ID (optional, build-time)

## Build & deploy
- Build: `npm install && npm run build`
- Start: `npm run start`
- Render config: `render.yaml`

## Pages
- `/` Home with 4 hero value props
- `/about`, `/services`, `/brands`, `/categories`, `/trade`, `/credit-application`, `/locations`, `/blog`, `/contact`
- 6 category subpages incl. `/categories/pipe-supply`
- 5 trade audience pages
- 16 geo pages: `/plumbing-supply-{city}-nj`

## Notes
- DNS on `tpssupply.com` is **NOT** configured here. Stage URL is the `.onrender.com` only.
- Pipe supply inventory list is placeholder — Anthony to edit.
