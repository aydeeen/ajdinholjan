---
layout: Post
title: 'Design systems need boring names'
description: A small argument for naming tokens, components, and patterns in ways future developers can understand quickly.
date: '2025-12-09'
tags:
  - ux
  - css
images:
  - src: /blog/design-systems-boring-names.png
    alt: Design system naming cover
---

One of the quiet signs of a healthy design system is boring naming.

Not lifeless naming. Not corporate naming. Just names that make sense when the original designer, original developer, and original Slack thread are all gone.

I have seen color tokens named after moods, campaigns, planets, internal jokes, and brand concepts that sounded good in a workshop but became confusing in code. Six months later, someone is trying to decide whether `sunset` or `ember` is the warning color.

That is not personality. That is debt wearing a nice shirt.

## Names are part of the interface

Design system names are an API. Developers use them. Designers search for them. Product people reference them in discussions. The more obvious the names are, the less translation everyone has to do.

I usually prefer names that describe purpose:

- `color-text-primary`
- `color-surface-muted`
- `color-border-danger`
- `space-4`
- `radius-sm`
- `button-primary`
- `form-field-error`

These are not poetic. Good. They are not trying to be.

The poetry can live in the product, the brand, the illustrations, the page rhythm, and the details users actually see. The system underneath should be calm enough to support all of that without becoming a puzzle.

Boring names also make refactors easier. If a token describes purpose instead of appearance, the visual value can change without lying. `color-text-primary` can become lighter or darker. `blue-700` is stuck explaining the implementation.

That is the little discipline I keep coming back to: name things for the job they do.

Future developers rarely complain that a system was too clear.
