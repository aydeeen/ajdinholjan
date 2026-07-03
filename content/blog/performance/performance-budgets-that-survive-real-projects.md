---
layout: Post
title: 'Performance budgets that survive real projects'
description: A performance budget only helps if it is small enough, visible enough, and connected to product decisions.
date: '2026-02-12'
tags:
  - performance
  - javascript
images:
  - src: /blog/performance-budgets.png
    alt: Front-end performance budget cover
---

Performance budgets often start with good intentions and then slowly become wallpaper.

Someone adds a Lighthouse target. Someone writes a line in the README. Maybe there is a bundle size check in CI. Then the project grows, deadlines arrive, and the budget becomes a number everyone agrees with emotionally but nobody uses when making decisions.

That is not because people do not care. It is because the budget is not part of the workflow.

## Make the budget boring and visible

The performance budgets I trust are simple:

- Maximum JavaScript for the main route.
- Maximum image weight for key landing pages.
- Maximum number of third-party scripts.
- A clear target for Core Web Vitals.
- A short review step before adding heavy dependencies.

The goal is not to create a perfect score. The goal is to make tradeoffs visible before they become expensive.

If marketing needs a new analytics tool, fine. But it should be a decision, not a surprise. If a product page needs a video background, fine. But someone should ask how it behaves on a slow connection. If a dependency saves a day of work but adds 80kb to a common route, that might still be worth it. The point is to know.

Performance is a product feature, but it is also a budgeting conversation.

I like budgets that fit on one screen and fail loudly enough to start a discussion. The budget should not shame the team. It should protect the user from the slow accumulation of "just this once."

Most performance problems are not one big mistake. They are many small decisions that never met each other.
