---
layout: Post
title: 'Accessibility still starts with plain HTML'
description: Before ARIA, before component libraries, before clever abstractions, there is still the shape of the document.
date: '2026-01-29'
tags:
  - accessibility
  - css
images:
  - src: /blog/accessibility-plain-html.png
    alt: Accessible HTML cover
---

Accessibility can sound intimidating because people often introduce it at the most complicated layer.

ARIA patterns. Screen reader testing. Focus traps. Keyboard interaction. Live regions. All of that matters. But the first layer is much simpler and much older: write good HTML.

A real button should be a `button`. A link should go somewhere. A heading should describe the section below it. A label should be connected to its input. The page should still make sense when the CSS is tired and the JavaScript has not arrived yet.

That foundation does more work than people give it credit for.

## The boring checklist I trust

When I review a component, I like to ask:

- Can I use it with a keyboard?
- Does it expose a useful name to assistive tech?
- Is the focus state visible?
- Are headings in a sensible order?
- Does the form explain errors near the fields?
- Did I use a custom div when a native element already exists?

The last question catches a lot.

Front-end developers are very good at making divs pretend to be things. Sometimes we have to. But every time we fake a native control, we inherit a pile of behavior the browser would have given us for free.

That is why I still like starting with HTML. It is not a beginner step. It is a professional habit.

The more complex the interface becomes, the more valuable that habit is. Good semantics give JavaScript and CSS something solid to enhance. Bad semantics make every later layer work harder.

Accessibility is not a polish pass at the end. It is part of the material we build with.
