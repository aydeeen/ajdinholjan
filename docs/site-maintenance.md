# Site Maintenance Notes

Last major refresh: 2026-07-03.

## What Changed In The 2026 Refresh

- Added 30 dated blog posts from July 2025 through July 2026.
- Added missing tag pages for newer topics.
- Added generated PNG covers for the new posts.
- Replaced placeholder About page copy with real positioning.
- Refreshed homepage copy and stats.
- Restored social menu config.
- Hardened the contact and newsletter API routes around method checks, environment checks, and HTML escaping.
- Updated semver-compatible dependency versions in the lockfile.
- Removed the deprecated `@next/font` package and switched to `next/font/google`.
- Cleaned up README documentation.

## Adding A Blog Post

1. Create `content/blog/<topic>/<slug>.md`.
2. Add frontmatter with `layout`, `title`, `description`, `date`, `tags`, and `images`.
3. Add a tag page in `content/tags/` if the tag is new.
4. Add a cover entry to `scripts/generate-blog-covers.mjs` when using the generated cover style.
5. Run `npm run covers`.
6. Run `npm run check`.

## Current Content Cadence

The refreshed archive now has continuity through 2026-07-03. Future posts should use real publication dates and avoid clustering too many posts on the same day unless there is a clear reason.

Good recurring themes for this site:

- React and Next.js delivery habits
- TypeScript clarity
- CSS platform features
- Tailwind discipline
- Accessibility and performance
- WordPress/client delivery
- AI-assisted development with human ownership
- Security and operational front-end concerns

## Dependency Notes

`npm audit` still reports issues that require major upgrades. Do not run `npm audit fix --force` casually.

Major upgrade path to plan separately:

- Next.js 13 to a current supported Next.js major
- React 18 to React 19
- SendGrid 7 to SendGrid 8
- Sharp 0.31 to a current Sharp release
- Semantic-release npm plugin to a current major
- Prettier 2 to Prettier 3 and matching Tailwind plugin

Recommended migration order:

1. Create a dedicated branch.
2. Upgrade Next.js within the Pages Router first.
3. Replace deprecated config and package APIs.
4. Upgrade React only after the Next.js build is stable.
5. Upgrade formatting and release tooling last.
6. Run `npm run check` after each group.

## Launch Checklist

- `npm run covers`
- `npm run lint`
- `npm run build`
- Review generated sitemap output.
- Check `/`, `/about`, `/projects`, `/blog`, and the newest post.
- Confirm production environment variables are set.
