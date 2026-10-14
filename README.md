# AionUi Civil — site

Landing page clone of [aionui.com/en](https://www.aionui.com/en/), rebuilt as a real
React + TypeScript + Vite app so it can be maintained and extended, not just mirrored.

## What it is

A faithful reproduction of the AionUi marketing page: same sections, same copy, same
product visuals, plus a light/dark theme toggle and a GitHub Pages deploy pipeline.

## Stack

- React 18 + TypeScript
- Vite 5
- No CSS framework — hand-written CSS with design tokens lifted from the original
  site's Tailwind variable layer (`--color-primary`, `--color-accent`, `--color-bg-*`)

## Structure

```
index.html                  entry document
vite.config.ts              base path config (VITE_BASE, default /aionui-civil/)
src/main.tsx                app root
src/styles.css              all design tokens + component styles
src/data/content.ts         assistants, channels, scheduled tasks, FAQ copy
src/components/Chrome.tsx   header, theme toggle, hero, product mockup
src/components/Sections.tsx cowork, assistants, remote, automation, platform,
                            contributors, FAQ, final CTA, footer
src/lib/asset.ts            prefixes public/ paths with the Vite base URL
public/profiles/            20 assistant avatars
public/channel-logos/       Telegram, Slack, Discord, Lark marks
public/media/               product screenshots
```

## Development

```bash
npm install
npm run dev            # http://localhost:5173
npm run build          # typecheck + production bundle into dist/
npm run preview        # serve the built bundle
```

For local builds served at the domain root (not under a sub-path), set the base:

```bash
VITE_BASE=/ npm run build
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes
`dist/` to GitHub Pages.

**One-time setup:** in the repository, go to *Settings → Pages → Build and deployment*
and set **Source** to **GitHub Actions**.

Site URL: https://ragomes102030-civil.github.io/aionui-civil/

## Notes on the clone

- Assistant avatars, channel logos and product screenshots are the originals, fetched
  from aionui.com into `public/`. They remain the property of the AionUi project.
- Section copy is reproduced verbatim from the English page.
- The original site's own dark-mode tokens were not exposed in its public stylesheet
  (they live in the app shell, not the marketing bundle), so the dark palette here is
  derived from the same accent hue and contrast ratios rather than copied.
