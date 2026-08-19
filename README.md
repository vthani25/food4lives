# Food4Lives Platform

A website that supports Food4Lives' daily operations — volunteer coordination, food delivery
management, and community impact tracking. 250 meals on the table by 12:30, every day.
100% volunteer-run.

## Status
Planning & MVP Development

## Run it

Plain HTML + CSS. **No backend, no framework, no build step, no JavaScript** (beyond a
couple of small inline form handlers).

Open `index.html` in a browser, or serve it:

```bash
python -m http.server 8000
```

Then go to http://localhost:8000

## Getting in

There's no real sign-in (no backend). Use the **DEV ENTER** panel on the landing
page to open any portal, or the black **DEV bar** at the top of every page to jump
between portals.

> Both are temporary. Delete the `.devbar` block from the pages and the
> `.dev-panel` block from `index.html` once real auth exists.

## Structure

```
index.html          Landing + sign-in + DEV ENTER
css/style.css        GLOBAL design system — tokens + reusable components
css/admin.css        Admin Console layout
css/volunteer.css    Volunteer Portal layout (mobile-first)
css/partner.css       Partner Portal layout
images/              Brand mark + real event photography, used across all portals
signup/              volunteer.html · organization.html
volunteer/           Volunteer Portal (5 pages)
admin/               Admin Console (5 pages)
partner/             Partner Portal (4 pages)
```

Navigation is ordinary `<a href>` links — every page shares the same topbar + side-nav shell.

## Building a page

1. Copy the topbar + `.devbar` + `.shell`/`.side` structure from a page in the same
   portal so navigation stays consistent.
2. Reuse the design-system classes above rather than one-off styles.
3. For portal-specific layout, add rules to that portal's stylesheet (`css/admin.css`,
   `css/volunteer.css`, `css/partner.css`) — don't pile portal-specific rules into the
   shared `style.css`. Namespace new classes (e.g. `.volunteer-taskcard`).

Keep the dev bar, topbar, and `.side` nav as they are so every page stays consistent.

## Accessibility
- Every page opens with `<a class="skip-link" href="#main">`, and its `<main>` carries
  `id="main"`, so keyboard users can jump past the dev bar and side nav.
- `:focus-visible` draws a 3px navy outline globally. Don't remove outlines without
  putting an equally visible replacement in.
- The side nav is `<nav class="side" aria-label="...">` and the current page's link
  carries `aria-current="page"`.
- Body text colours (`--muted` included) clear 4.5:1 on their backgrounds. If you pick a
  new grey, check it first.
- Captions and labels stay visible rather than appearing on hover, since hover doesn't
  exist on touch.
- Every `<img>` needs an `alt`. Use `alt=""` only for decoration, like the logo next to
  the "Food4Lives" wordmark.
