# softstatic rules

`softstatic` is Noa's current Neocities site.

`Signal Archive` is an archive only. Do not copy it back into this repo, merge it
with `softstatic`, or use it as the deploy target unless Noa explicitly asks.

## Ownership

- Noa decides the public voice, writing, pages, tags, and aesthetic.
- Technical helpers may maintain repository setup, deploy workflow, and small
  non-visible infrastructure files.
- Ask Noa before changing visible copy, adding or removing pages, changing the
  look of the site, or adding public-facing behavior.

## Site Spirit

- Keep the site quiet, static, old-web, light, and unhurried.
- Do not add tracking, analytics, ads, newsletter forms, AI hype, or heavy
  dependencies.
- Prefer plain HTML, CSS, tiny JavaScript, and local assets.

## Secrets

- Never commit passwords, API keys, `.env` files, exported secrets, or private
  account data.
- The Neocities key belongs only in the GitHub Actions secret named
  `NEOCITIES_API_KEY`.
- If a key is exposed anywhere, rotate it before continuing.

## Deploy

- The `main` branch deploys to `https://softstatic.neocities.org/`.
- Files under `.github/` and this rules file are repository infrastructure and
  are not uploaded to Neocities.
