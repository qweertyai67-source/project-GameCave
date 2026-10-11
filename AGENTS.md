# Gamer Cave project instructions

Before making a meaningful change, read `PROJECT.md` and, for brand or visual work, `RESTYLING.md`.

## Sources of truth

- `src/club.config.ts`: company identity, location, schedule, contact state, external links, hero copy and hero image.
- `src/data.ts`: capacities, seat availability, zones, tariffs, perks, gallery, reviews, FAQ and booking options.
- `src/styles.css`: design tokens, responsive gutters, typography and component styling.
- `public/photos`: real venue photography.
- `index.html`: static SEO metadata and JSON-LD; keep it synchronized with `src/club.config.ts` after a rebrand.

## Invariants

- The current venue has exactly 32 gaming seats: 20 Standard, 7 VIP and 5 Bootcamp. Update every dependent value through `ZONE_CAPACITIES`, not by editing totals separately.
- GitHub Pages serves this repository from a nested path. Keep Vite `base: './'` and build public-asset URLs through `assetUrl`; do not introduce root-absolute `/photos/...` URLs.
- Booking, payment, reviews and legal documents are demonstrational until a real backend and approved content are provided. Preserve the visible disclaimers.
- Do not replace the real venue photos with generated or stock images unless the user explicitly requests it.
- Preserve keyboard accessibility, focus states, reduced-motion support and mobile layouts.

## Verification

Run before committing:

```powershell
pnpm typecheck
pnpm lint
pnpm build
```

If global `pnpm` is unavailable, use the package manager available in the environment with the equivalent scripts.

Pushes to `main` deploy through `.github/workflows/deploy.yml`. After deployment, verify the public page and at least one image URL under the repository subpath.
