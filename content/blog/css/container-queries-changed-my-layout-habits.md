---
layout: Post
title: 'Container queries changed my layout habits'
description: Responsive design feels calmer when components can respond to their own space instead of only the viewport.
date: '2025-07-04'
tags:
  - css
  - design-systems
images:
  - src: /blog/container-queries-layout-habits.png
    alt: Container queries layout cover
---

For a long time, responsive design trained us to think mostly in viewport sizes. Small screen, medium screen, large screen. That worked, but it also made components a little too dependent on where they happened to be placed.

Container queries changed that mental model for me.

The nice thing is not only the syntax. The nice thing is the shift in responsibility. A card can respond to the space it actually has. A sidebar widget can behave differently from the same widget in a full-width section. A pricing block can become compact because its container is compact, not because the whole browser is narrow.

That feels closer to how components are supposed to work.

## A small example

I now try to ask, "Should this respond to the viewport, or to its parent?" more often.

```css
.feature-card {
  container-type: inline-size;
}

@container (min-width: 34rem) {
  .feature-card__body {
    display: grid;
    grid-template-columns: 12rem 1fr;
  }
}
```

That sort of CSS makes reusable components much less fragile. You can move the card from a three-column grid to a detail page and the component has a chance to adapt without someone adding another pile of breakpoint-specific overrides.

Container queries do not replace media queries. The viewport still matters for page-level layout, navigation, and big composition changes. But for component-level behavior, container queries feel like the missing piece.

The best part is how ordinary it becomes after a while. You stop thinking, "This is a new CSS feature," and start thinking, "This is where this logic belonged all along."
