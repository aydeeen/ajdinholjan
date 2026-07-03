# Ajdin Holjan Website

Personal portfolio and technical blog for Ajdin Holjan. The site is built with Next.js, React, Tailwind CSS, and Markdown/MDX content files.

## Stack

- Next.js Pages Router
- React 18
- Tailwind CSS 3
- Markdown/MDX content under `content/`
- Static blog/project collections generated at build time
- `next-sitemap` for sitemap and robots generation
- SendGrid contact form API route
- ConvertKit newsletter API route

## Getting Started

```sh
npm install
npm run dev
```

The local site runs at `http://localhost:3000`.

Copy `.env.example` to `.env.local` and fill in the values needed for contact/newsletter features.

## Useful Commands

```sh
npm run dev      # Start local dev server with content watching
npm run lint     # Run Next.js lint checks
npm run build    # Build the production site and generate sitemap
npm run check    # Run lint and build together
npm run covers   # Generate blog cover images from scripts/generate-blog-covers.mjs
npm run format   # Format JS, JSX, CSS, JSON, and Markdown files
```

## Content

Blog posts live in `content/blog/<category>/<post-slug>.md`.

Every post should include:

```yaml
---
layout: Post
title: 'Post title'
description: Short summary for cards and SEO.
date: '2026-07-03'
tags:
  - javascript
images:
  - src: /blog/example-cover.png
    alt: Cover image description
---
```

Tag pages live in `content/tags/*.md`. Add one when a new recurring topic appears so the blog category grid stays useful.

Cover images live in `public/blog/`. For the current generated style, add a cover entry to `scripts/generate-blog-covers.mjs` and run `npm run covers`.

## Deployment Notes

- Production URL: `https://ajdinholjan.com`
- `NEXT_PUBLIC_SITE_URL` should be set in production.
- Contact form needs `SENDGRID_API_KEY`, `CONTACT_FORM_RECIPIENT`, and `CONTACT_FORM_SENDER`.
- Newsletter form needs `CONVERTKIT_FORM_ID`, `CONVERTKIT_API_KEY`, and `CONVERTKIT_API_URL`.

## Maintenance

See `docs/site-maintenance.md` for the 2026 refresh notes, content workflow, and dependency upgrade checklist.
