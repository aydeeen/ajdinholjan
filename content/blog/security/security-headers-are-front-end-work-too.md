---
layout: Post
title: 'Security headers are front-end work too'
description: CSP, permissions, referrers, and framing rules are not glamorous, but they shape how safely a site behaves.
date: '2026-05-07'
tags:
  - security
  - javascript
images:
  - src: /blog/security-headers-front-end.png
    alt: Web security headers cover
---

Security headers are easy to ignore because they do not have a component preview.

There is no beautiful screenshot of `Content-Security-Policy`. Nobody opens a design review to admire `X-Frame-Options`. A referrer policy will not make the homepage feel more premium.

Still, these headers matter.

They help define what the browser is allowed to do with your site: which scripts can run, which features can be used, whether the page can be embedded, how much URL information gets passed to other origins, and how strictly the browser should treat transport security.

That is front-end territory.

## The practical habit

I like checking headers during launch work, especially for public sites with forms, auth, dashboards, or third-party scripts.

A basic review usually includes:

- `Content-Security-Policy`
- `Strict-Transport-Security`
- `Referrer-Policy`
- `Permissions-Policy`
- `X-Content-Type-Options`
- `Framing protections`

The exact policy depends on the project. A strict CSP on a site full of third-party embeds can become noisy fast. But ignoring the topic completely is worse.

The useful approach is incremental. Start with the headers that are easy and low-risk. Audit scripts. Remove old third-party tags. Move inline behavior into files where possible. Test forms and embeds. Tighten the policy as the site gets cleaner.

Security is not only a backend concern. The browser is enforcing a lot of the contract, and front-end developers are often the people who understand what the page actually loads.

That makes us part of the security conversation whether we planned to be or not.
