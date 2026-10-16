# Project handoff: Gamer Cave landing page

This file is durable project context for a fresh Codex chat. The repository, not the previous chat transcript, is the source of truth.

## Purpose

Responsive demonstration website for the Gamer Cave computer club in Krasnodar. It presents the venue, gaming zones and tariffs and includes an interactive front-end booking flow. No booking or payment data is sent to a server.

## Current product state

- React 19, TypeScript and Vite 6.
- Responsive desktop, tablet and mobile layouts.
- Interactive selection of branch, date, start time, duration, zone and seat.
- 32 seats total: 20 Standard, 7 VIP and 5 Bootcamp.
- Demonstration pricing, checkout validation, success dialog, tariff cards, promotions, FAQ and review placeholders.
- Ten real Gamer Cave photographs in `public/photos`, used by the hero, zone cards and gallery.
- GitHub Pages deployment from `main` through GitHub Actions.

## Important paths

| Path | Responsibility |
| --- | --- |
| `src/club.config.ts` | Reusable company and hero configuration |
| `src/data.ts` | Zones, capacities, pricing, gallery, FAQ and booking data |
| `src/App.tsx` | Page sections and interactive behavior |
| `src/styles.css` | Theme tokens, layout and responsive behavior |
| `public/photos` | Real venue photography |
| `index.html` | SEO metadata and structured data |
| `RESTYLING.md` | Checklist for adapting the template to another company |

## Repository and deployment

- Repository: <https://github.com/qweertyai67-source/project-GameCave>
- Public site: <https://qweertyai67-source.github.io/project-GameCave/>
- Production branch: `main`
- Deployment workflow: `.github/workflows/deploy.yml`

The repository was renamed to `project-GameCave`; the old `projectAI-number-one.` Pages URL is obsolete. Vite deliberately uses `base: './'`. Public assets must use relative URLs via `assetUrl`.

## Known demo limitations

- There is no backend, database, authentication, payment or real reservation confirmation.
- Prices and hardware specifications require owner approval.
- The phone number, social links, promotions and legal texts are placeholders.
- Reviews are demonstration copy, not imported customer reviews.
- The map is a stylized block rather than an embedded map service.

## Recommended first prompt in a new chat

> Read `AGENTS.md`, `PROJECT.md` and `RESTYLING.md`. Inspect the current repository before editing. Adapt this template to the company information and visual references I provide, preserve the working booking flow, run all checks, and show me the result before publishing.
