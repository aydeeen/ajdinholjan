---
layout: Post
title: 'CSS anchor positioning is finally worth attention'
description: Tooltips, callouts, and menus are slowly becoming less dependent on JavaScript layout math.
date: '2025-08-29'
tags:
  - css
images:
  - src: /blog/css-anchor-positioning.png
    alt: CSS anchor positioning cover
---

There is a specific kind of UI bug that always feels smaller than it is: a tooltip that drifts away from its trigger, a dropdown that clips inside a container, a popover that works on desktop and then quietly gives up on mobile.

For years, solving that properly meant reaching for JavaScript measurement. Sometimes that was the right call. Floating UI libraries are good for a reason. But there is something refreshing about the platform itself getting better at these everyday layout problems.

CSS anchor positioning is one of those features that makes me pause and think, "This is the browser admitting what we keep building."

The idea is simple: position one element in relation to another element without manually calculating coordinates. That matters for tooltips, menus, badges, teaching overlays, command palettes, and all the little interface pieces that need to belong to another piece of the page.

## Why this matters

The benefit is not only fewer lines of JavaScript. It is fewer moving parts.

When positioning becomes declarative, the intent stays closer to the styling:

```css
.trigger {
  anchor-name: --profile-button;
}

.menu {
  position-anchor: --profile-button;
  position-area: bottom span-right;
}
```

That is easier to scan than a component juggling refs, bounding rectangles, resize observers, scroll listeners, and edge-case cleanup. JavaScript still has a place, especially when collision behavior gets sophisticated, but CSS taking more of this responsibility is a good direction.

I am not ready to throw it into every production design system without checking support and fallbacks. But I am ready to prototype with it, especially for internal tools and progressive enhancements where the baseline experience can stay simple.

The broader lesson is familiar: every year, a few things we used to treat as framework work become platform work. Good front-end development means noticing when that happens and being willing to delete a little code.

Worth reading: MDN's guide to [CSS anchor positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning).
