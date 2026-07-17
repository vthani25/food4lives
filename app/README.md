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
  css/style.css       GLOBAL design system — tokens + reusable components
  css/admin.css       Admin Console layout
  css/volunteer.css   Volunteer Portal layout (mobile-first)
  signup/             volunteer.html BUILT · organization.html scaffold
  volunteer/          Volunteer Portal (5 pages)         BUILT
  admin/              Admin Console (5 pages)            BUILT
  partner/            Partner Portal (4 pages)           (scaffold)
```

Navigation is ordinary `<a href>` links.

## Design system (use these — they're global)

`css/style.css` implements the team UI outline. Build with these tokens and classes
so the whole site matches:

- **Colors** (CSS variables): `--navy #00146b`, `--azure #c6eaff`, `--red #e6251f`,
  `--stone #efeded` (page bg), `--hover #edf2fa`.
- **Fonts**: headings/labels/buttons use **Poppins** (`--font-head`); body text uses
  **Source Serif 4** (`--font-body`). Loaded from Google Fonts in `style.css`.
- **Shape/motion**: `--radius` (16px), `--shadow` (soft elevation), `--ease` (gentle transition).
- **Reusable components**: `.btn` / `.btn-primary` / `.btn-ghost` / `.btn-sm`,
  `.card` + `.card-head`, `.badge` (`.ok` `.warn` `.crit` `.info` `.azure`),
  `.field` inputs/selects/textareas, `.table`.

The **Admin Console** is a worked example of these classes in action — copy patterns
from `admin/*.html` and `css/admin.css`.

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
2. Add your own markup inside `<main>`, reusing the design-system classes above.
3. For portal-specific layout, add your own stylesheet (like `css/admin.css`) and
   link it in your pages — don't pile portal-specific rules into the shared
   `style.css`. Namespace new classes (e.g. `.volunteer-taskcard`).

Keep the dev bar, topbar, and `.side` nav as they are so every page stays consistent.

Design reference: [`../docs/`](../docs/) · visual prototype: [`../prototype/`](../prototype/)
