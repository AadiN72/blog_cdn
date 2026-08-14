---
title: Making Astro asset images work in RSS
slug: draft-1760476800000
date: 2026-02-08
---

I was building an RSS feed for a blog and hit the classic problem where image URLs were being rendered as relative paths instead of fully qualified asset URLs.

The fix was surprisingly small but highly specific. Astro treats static assets differently depending on whether they are imported in Markdown or referenced directly from the content layer, and RSS output is a bit stricter about absolute URLs.

Once I normalized the asset paths and exposed a fully qualified base URL, the feed started rendering the images exactly how I wanted. The lesson was simple: anything that leaves the app shell needs a stable, absolute path.

It was one of those bugs that looked tiny at first, but it had a broad effect on the user experience.
