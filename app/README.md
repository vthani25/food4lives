# Food4Lives — App

Plain HTML + CSS front-end. **No backend, no framework, no build step, no JavaScript.**

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

> Both the DEV bar and DEV panel are temporary. Delete `.devbar` from the pages and
> the `.dev-panel` block from `index.html` once real auth exists.

## Structure

```
app/
  index.html          Landing / sign-in + DEV ENTER
  css/style.css       All styles (shared by every page)
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

Every page is built with placeholder content. Each one also has a **"Later, if
there's time"** dropdown at the bottom listing the non-MVP features for that page.

## Styling

Reuse the classes already in `css/style.css` — `.card`, `.row`, `.kpi`,
`.tasklist`, `.table`, `.field`, `.btn`, `.pill`, `.calendar`, `.photos`.
Add new rules at the bottom of that file. Keep the topbar and `.side` nav as-is so
every page stays consistent.

Design reference: [`../docs/`](../docs/) · visual prototype: [`../prototype/`](../prototype/)
