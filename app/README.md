# Food4Lives — App

Plain HTML + CSS front-end. **No backend, no frameworks, no build step.**

## Run it

Open `app/index.html` in a browser. That's it.

## Structure

```
app/
  index.html          Landing / sign-in
  css/style.css       All styles (shared by every page)
  signup/             Volunteer + organization sign-up
  volunteer/          Volunteer Portal (4 pages)
  admin/              Admin Console (5 pages)
  partner/            Partner Portal (4 pages)
```

Navigation is done with ordinary `<a href>` links — no JavaScript.

## How to split the work

Each person takes one folder and fills in their pages. Every page already lists
what belongs on it, so no one has to re-read the design doc.

| Person | Folder |
|---|---|
| Landing | `index.html` + `signup/` |
| Volunteer | `volunteer/` |
| Admin | `admin/` |
| Partner | `partner/` |

Build the bold/plain list items first — the greyed-out "Later, if there's time"
items are optional.

## Adding to a page

Add your markup inside `<main>`. Reuse the classes in `css/style.css`, and add
new ones at the bottom of that file. Keep the topbar and `.side` nav as they are
so every page stays consistent.

The full design reference is in [`../docs/`](../docs/), and the visual prototype
is in [`../prototype/`](../prototype/).
