---
layout: Post
title: 'Testing what users can break'
description: Front-end tests are most valuable when they protect behavior instead of implementation details.
date: '2026-03-06'
tags:
  - testing
  - react
  - javascript
images:
  - src: /blog/testing-users-can-break.png
    alt: Testing user behavior cover
---

The easiest front-end tests to write are not always the most useful ones.

It is tempting to test that a component renders, that a function was called, or that a class name exists. Sometimes those checks have a place, but they rarely tell you whether the user flow still works.

The tests I trust most are closer to the way a person uses the interface.

Can the user open the menu? Can they submit the form? Does the error message show up when the API fails? Can they filter the list and still open an item? Does the checkout button become disabled at the right time?

That is the work users can break.

## A better testing question

Instead of asking, "What can I test in this component?" I like asking, "What would be embarrassing if it broke?"

That changes the shape of the tests.

For a contact form, I care less about internal state names and more about:

- Required fields.
- Loading state.
- Success feedback.
- Failure feedback.
- The payload being sent in the expected shape.

For a navigation menu, I care about opening, closing, keyboard behavior, current-page state, and whether important links are still reachable.

Tests should give future developers confidence to change code. If a test fails every time you refactor harmless internals, it becomes background noise. If a test fails when the user experience breaks, it becomes useful.

That is the kind of test suite I want: not huge, not theatrical, but pointed at the parts people depend on.
