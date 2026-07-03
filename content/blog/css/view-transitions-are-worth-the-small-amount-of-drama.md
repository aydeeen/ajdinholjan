---
layout: Post
title: 'View Transitions are worth the small amount of drama'
description: Page and state transitions can make interfaces feel calmer when they are used with restraint.
date: '2026-04-28'
tags:
  - css
  - javascript
images:
  - src: /blog/view-transitions-polish.png
    alt: View Transitions API cover
---

Animations get a bad reputation when they are used to decorate uncertainty. A modal slides in because nobody knows what else to do. A page fades because it feels modern. A card jumps around with spring physics while the actual interaction gets harder to follow.

But good motion is different. Good motion helps the user keep context.

That is why I keep coming back to the View Transitions API. It gives us a way to animate between UI states without hand-building a whole choreography system. Used carefully, it can make navigation and state changes feel less abrupt.

The key phrase is "used carefully."

## Where it makes sense

I like view transitions for moments where the user's attention is already tracking an object:

- A list item opens into a detail view.
- A gallery thumbnail becomes a larger image.
- A filtered result set changes without feeling like the page blinked.
- A route change keeps a shared header or card visually connected.

Those are context-preserving transitions. They answer the user's quiet question: "Where did the thing I clicked go?"

Where I am more cautious is global page animation. If every route fades, slides, or scales, the effect gets old quickly. The web is already full of waiting. We do not need to make waiting feel designed.

The best use of this API is subtle enough that most users will not name it. They will just feel less lost.

From an implementation point of view, I also like that the platform is giving us more native tools for this layer of polish. We can still use animation libraries when we need them, but not every transition deserves a dependency.

Motion should earn its place. When it does, it can make an interface feel calmer, more physical, and more respectful of attention.

Worth reading: MDN's guide to the [View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API).
