# Tử Vi Cuộc Sống

MVP web app and Zalo Mini App prototype for Vietnamese users who want a Tứ trụ and Ngũ hành reading.

## What is included

- Birth date, birth time, timezone, calendar, and name input
- Four pillars calculation for year, month, day, and hour
- Five-element balance chart
- Vietnamese personality, relationship, career, and money guidance
- Copyable summary
- Mobile-first responsive layout

## Run locally

Open `index.html` directly in a browser, or serve the folder locally:

```powershell
cd "C:\Users\jinu\Documents\New project 2"
node server.mjs
```

Then open `http://localhost:5173`.

You can also double-click `start-server.cmd` or run:

```powershell
& "C:\Users\jinu\Documents\New project 2\start-server.cmd"
```

If your terminal is still in another folder, you can also run:

```powershell
node "C:\Users\jinu\Documents\New project 2\server.mjs"
```

## Zalo Mini App preparation

This folder now includes Zalo Mini App metadata and scripts:

- `package.json`
- `vite.config.mjs`
- `app-config.json`
- `zmp-cli.json`
- `ZALO_MINI_APP_SETUP.md`

After creating a Mini App in the Zalo developer console, install dependencies and run the Zalo CLI:

```powershell
cd "C:\Users\jinu\Documents\New project 2"
npm install
npm run zalo:login
npm run zalo:start:device
```

See `ZALO_MINI_APP_SETUP.md` for the full registration and deploy flow.

## MVP notes

- The current calendar field expects a Gregorian date. If a user has a lunar birthday, convert it to Gregorian first before entering it.
- The reading is designed as entertainment and self-reflection, not medical, legal, or financial advice.
- The pillar logic is intentionally lightweight for MVP validation. A production app should replace it with a verified lunar calendar and solar-term engine.
