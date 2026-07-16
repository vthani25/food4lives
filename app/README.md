# Food4Lives — App

Plain HTML + CSS. **No backend, no framework, no build step, no JavaScript.**

This is a **scaffold only**. Navigation, the page shell, and the sign-in bypass work.
The pages themselves are intentionally empty — the UI is yours to build.

## Run it

Open `app/index.html` in a browser. Or serve it:

```bash
cd app
python -m http.server 8000
```

Then go to http://localhost:8000

## Getting in

There's no real sign-in (no backend). Use the red **DEV ENTER** panel on the landing
page to open any portal, or the black **DEV bar** at the top of every page to jump
between portals.

> Both are temporary. Delete the `.devbar` block from the pages and the
> `.dev-panel` block from `index.html` once real auth exists.

## Structure

```
app/
  index.html          Landing + DEV ENTER
  css/style.css       Shell styles only (dev bar, top bar, sidebar, landing)
  signup/             Volunteer + organization sign-up
  volunteer/          Volunteer Portal (4 pages)
  admin/              Admin Console (5 pages)
  partner/            Partner Portal (4 pages)
```

Navigation is ordinary `<a href>` links.

## How to split the work

| Person | Folder |
|---|---|
| Landing | `index.html` + `signup/` |
| Volunteer | `volunteer/` |
| Admin | `admin/` |
| Partner | `partner/` |

Nobody shares files, so no merge conflicts.

## Building a page

Every page has a dashed **spec block** inside `<main>` listing what belongs there,
what the user can do, what it connects to, and what's optional. It's a note to you —
not UI.

1. Delete the `<div class="spec">...</div>` block.
2. Add your own markup inside `<main>`.
3. Add your CSS at the bottom of `css/style.css`, namespaced (e.g. `.admin-kpi`).

Keep the dev bar, topbar, and `.side` nav as they are so every page stays consistent.

Design reference: [`../docs/`](../docs/) · visual prototype: [`../prototype/`](../prototype/)
