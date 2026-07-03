# Maintenance Notes

Last refreshed: 2026-07-03

## Current Safe Update Baseline

The lockfile has been refreshed within the existing major-version ranges. Key installed versions after the refresh:

- Next.js: 13.5.11
- React: 18.3.1
- Tailwind CSS: 3.4.19
- PostCSS: 8.5.16
- Node used during this pass: 22.18.0

`@next/font` was removed and the site now imports Inter from `next/font/google`.

## Remaining Audit Risk

`npm audit --omit=dev` still reports vulnerabilities that require breaking changes to fully resolve. The important ones are tied to:

- `next`: requires a major upgrade to the modern Next line.
- `@sendgrid/mail`: requires upgrading to v8.
- `sharp`: requires upgrading to a newer major/minor line.

Do not run `npm audit fix --force` directly on `main` unless you are prepared to test a framework/tooling migration.

## Recommended Upgrade Path

1. Create a dedicated branch.
2. Upgrade `next`, `eslint-config-next`, and `@next/bundle-analyzer` together.
3. Replace any deprecated Pages Router or image/font behavior flagged by the new Next version.
4. Upgrade `react` and `react-dom` only when the selected Next version supports the target React version cleanly.
5. Upgrade `@sendgrid/mail` and confirm the contact form still sends from `CONTACT_FORM_SENDER`.
6. Upgrade `sharp`, then regenerate covers with `npm run covers`.
7. Run `npm run lint`, `npm run build`, and manually smoke-test `/`, `/about`, `/projects`, `/blog`, one post page, `/api/contact-form`, and `/api/subscribe`.

## Content Maintenance

- Add posts in `content/blog/<topic>/`.
- Keep dates in `YYYY-MM-DD` format.
- Add tag pages under `content/tags/` for any new tags.
- Add cover definitions to `scripts/generate-blog-covers.mjs`.
- Run `npm run covers` after adding generated covers.
- Run `npm run build` to ensure images resolve and routes generate.

## Site Health Checklist

Use this checklist every few months:

- `npm outdated --long`
- `npm audit --omit=dev`
- `npm run lint`
- `npm run build`
- Check newest blog date and homepage/about copy.
- Check contact/newsletter environment variables in the deployment host.
- Confirm `NEXT_PUBLIC_SITE_URL` is set in production.
