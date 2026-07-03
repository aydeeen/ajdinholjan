---
layout: Post
title: 'The small joy of deleting dependencies'
description: Removing a package can be just as satisfying as adding one, especially when the platform already does the job.
date: '2026-06-30'
tags:
  - javascript
  - performance
images:
  - src: /blog/deleting-dependencies.png
    alt: Removing JavaScript dependencies cover
---

Adding a dependency feels productive. Deleting one feels responsible.

I have nothing against packages. The JavaScript ecosystem is useful because people share solutions. A good library can save weeks of work, reduce bugs, and give a project a better foundation than a rushed internal version.

But dependencies also have weight. They bring APIs, update cycles, transitive packages, bundle cost, security alerts, and the quiet assumption that someone on the team still understands why the package is there.

Sometimes the best maintenance task is asking, "Do we still need this?"

## The best candidates

I like looking for packages that were added to solve problems the platform now handles well:

- Small date formatting helpers.
- Simple class name utilities in tiny projects.
- Scroll locking packages that only support one modal.
- Old polyfills for browsers the project no longer supports.
- Tiny DOM helpers left over from an earlier version of the app.
- Heavy UI dependencies used for one component.

The goal is not minimalism as a personality trait. The goal is clarity.

If a dependency earns its place, keep it. If it hides real complexity, keep it. If it is maintained, tested, accessible, and central to the product, keep it gladly.

But if a package is only there because nobody questioned it, that is a chance to simplify.

Deleting dependencies makes installs faster, audits quieter, bundles smaller, and the codebase easier to explain. More importantly, it restores a little confidence. The project becomes less like a pile of inherited decisions and more like something actively cared for.

That feeling is worth chasing.
