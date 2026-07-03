---
layout: Post
title: 'Design systems for small teams'
description: A design system does not need to start as a grand platform. Sometimes it starts with five components that stop repeating mistakes.
date: '2025-09-12'
tags:
  - design-systems
  - react
  - css
images:
  - src: /blog/design-systems-small-teams.png
    alt: Design systems for small teams cover
---

When people say "design system," it can sound like a huge company thing. Tokens, governance, Figma libraries, documentation sites, contribution models, versioning, and a team whose full-time job is maintaining the system.

That version exists. It is also not where most small teams should begin.

For a small product or client team, a useful design system can start with a much humbler goal: stop solving the same interface problem differently every week.

That usually means a few reliable pieces:

- Buttons with real states.
- Form controls that handle errors consistently.
- A page shell with predictable spacing.
- Cards or rows for repeated content.
- Typography defaults for rich text.

That is already a lot of value.

## The trap to avoid

The biggest mistake is building the system before the product has taught you what it needs.

I like to wait until a pattern appears twice, then extract it the third time. That keeps the system grounded in actual usage. Otherwise it is easy to design a beautiful component API for a world your project never visits.

Small systems should stay close to the work. A button component does not need a manifesto, but it does need disabled, loading, hover, focus, and accessible labeling behavior. A form field does not need seven variants unless the product has seven real form field needs.

The purpose is not to impress other developers. The purpose is to make the next screen easier to build correctly.

That is a very human kind of maintenance. You are reducing decisions where consistency matters so the team has more energy for the parts that really need judgment.
