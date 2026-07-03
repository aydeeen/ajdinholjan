---
layout: Post
title: 'Container queries changed how I think about components'
description: Responsive UI gets calmer when components can respond to their own space instead of the whole viewport.
date: '2025-09-12'
tags:
  - css
images:
  - src: /blog/container-queries-components.png
    alt: Container queries and component layout cover
---

For a long time, responsive design made us think in pages. A card looked one way on mobile, another way on tablet, and another way on desktop. That worked, but it also made components strangely dependent on the viewport.

Container queries changed that mental model in a useful way.

Now a component can ask, "How much room do I have?" instead of "How wide is the browser?" That sounds like a small difference, but it makes layout systems feel more honest.

A card in a sidebar should not behave like a card in a three-column grid just because the viewport is wide. A dashboard widget should adapt to the space the dashboard gives it. A media object should know when it has room for horizontal layout and when it should stack.

That is component thinking.

## A simple example

```css
.card-list {
  container-type: inline-size;
}

@container (min-width: 36rem) {
  .card {
    display: grid;
    grid-template-columns: 12rem 1fr;
  }
}
```

The CSS reads like the design decision: when this component has enough room, use the richer layout.

I like that. It makes responsive behavior easier to reuse and easier to trust. You can move a component from one layout to another without dragging a trail of viewport assumptions behind it.

There is still craft involved. Container queries do not replace good spacing, content strategy, or testing on actual screens. But they do make modern CSS feel more aligned with how we build interfaces now.

The page is not the only responsive thing anymore. The component is too.
