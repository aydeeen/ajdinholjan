# Agent Notes

This is a Next.js personal portfolio and MDX blog. Prefer small, verified changes over broad rewrites.

## Project Shape

- Content source: `content/`
- Blog collection index: `content/blog.md`
- Blog posts: `content/blog/<topic>/<slug>.md`
- Tag/category pages: `content/tags/*.md`
- Projects: `content/projects.md` and `content/projects/*.md`
- Layouts: `layouts/*.jsx`
- Shared UI: `components/*.jsx`
- Site config: `theme.config.js`

## Commands

- `npm run dev` starts the local development server.
- `npm run lint` runs Next.js lint.
- `npm run build` builds the site and runs `next-sitemap`.
- `npm run check` runs lint and build together.
- `npm run covers` regenerates generated blog cover PNGs.

## Content Rules

- Use `YYYY-MM-DD` dates in frontmatter.
- Keep post titles and descriptions human, specific, and not keyword-stuffed.
- Add a tag page under `content/tags/` when introducing a recurring topic.
- Put cover images in `public/blog/`.
- Generated covers are defined in `scripts/generate-blog-covers.mjs`.
- Avoid future-dated posts unless explicitly requested.

## Engineering Notes

- The site is still on Next.js 13 Pages Router. Do not casually migrate to App Router as part of unrelated work.
- `npm audit fix --force` wants major upgrades. Treat that as a planned migration, not a cleanup command.
- Contact and newsletter API routes depend on environment variables. Keep local builds working without secrets.
- Use `apply_patch` for file edits.
- Run `npm run check` before handing off meaningful changes.
