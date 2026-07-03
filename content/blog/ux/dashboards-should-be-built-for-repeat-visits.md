---
layout: Post
title: 'Dashboards should be built for repeat visits'
description: Operational interfaces need less drama and more respect for scanning, comparison, and daily habits.
date: '2026-06-19'
tags:
  - ux
  - react
images:
  - src: /blog/dashboards-repeat-visits.png
    alt: Dashboard UX cover
---

A dashboard is usually not a poster. It is a place someone returns to while trying to do work.

That distinction changes the design.

Marketing pages can afford a little ceremony. A product dashboard usually cannot. The user is not there to admire the layout for the first time every day. They are there to check status, compare changes, catch problems, and move on.

Good dashboard UI respects repetition.

## What I look for

When designing or building an operational interface, I care about:

- Stable layout.
- Clear hierarchy.
- Useful empty states.
- Tables that can be scanned.
- Filters that remember how people work.
- Actions close to the thing they affect.
- Density without visual exhaustion.
- Loading states that do not rearrange the page.

That last point matters more than people think. If a dashboard shifts every time data loads, the user has to re-orient themselves constantly. Stability is a form of kindness.

I also like dashboards that avoid making every metric equally loud. If everything is a card, nothing is a signal. Some information deserves to be primary. Some belongs in a table. Some belongs behind a filter. Some does not belong on the dashboard at all.

The hard part is not adding data. The hard part is deciding which data helps the user act.

Front-end developers influence that more than we admit. Component choices, spacing, loading behavior, table design, and interaction patterns all shape whether the dashboard feels like a tool or a wall of rectangles.

A good dashboard should get more useful as it becomes familiar.
