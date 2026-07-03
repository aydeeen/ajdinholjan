---
layout: Post
title: 'Performance budgets without killing creativity'
description: Performance work gets easier when budgets are treated as design constraints, not punishment.
date: '2025-09-30'
tags:
  - performance
  - javascript
  - next
images:
  - src: /blog/performance-budgets-creativity.png
    alt: Performance budgets cover
---

Performance budgets can sound unfriendly at first. They feel like somebody saying no before the design has even had a chance to breathe.

But a good budget is not there to flatten a project. It is there to protect it.

Users do not experience your intent. They experience the page that loads on their device, their connection, with their battery, in their slightly chaotic real life. If the first interaction is slow, the design has already lost some trust.

That does not mean every page needs to be tiny or visually plain. It means the team should be honest about tradeoffs.

## A budget I actually like

For many marketing and portfolio sites, I like starting with a few simple limits:

- Keep the initial JavaScript boringly small.
- Avoid loading third-party scripts before they are needed.
- Use real image dimensions and modern formats.
- Watch the largest contentful paint element.
- Treat font loading as part of the design.

Those constraints still leave plenty of room for style. They mostly prevent accidental heaviness.

The word "accidental" matters. Some performance cost is intentional and worth it. A high-quality project image, an interactive demo, a rich product configurator - those can earn their place. The problem is the weight nobody noticed: unused libraries, oversized images, duplicate scripts, blocking embeds, and components that ship far more than they show.

When performance budgets are part of the conversation early, they become creative constraints. When they appear at the end, they feel like cleanup.

I would rather design with the constraint than apologize to it later.
