# Mānasollāsa Foundation — website

A single-page [Jekyll](https://jekyllrb.com/) site, ready to host on **GitHub Pages**.
Classical editorial design: Cormorant Garamond over Lora, gold accent used as
stroke, and a Brahmi-script wordmark lockup (concept 1a).

One flowing page with **Projects**, **Events**, and **Contact** sections.

## Structure
- `index.html` — the one-pager (hero + sections).
- `_projects/*.md` — the **Projects** collection (one file per project).
- `_events/*.md` — the **Events** collection (one file per event).
- `_layouts/default.html` — page shell (header, footer, brand lockup).
- `assets/css/style.css` — design tokens + all styles.
- `assets/js/lockup.js` — equalizes the three lockup lines to one width; contact confirm.

## Add / edit content
**A project** — create `_projects/my-project.md`:
```yaml
---
title: My project title
category: Translation        # small label shown above the title
order: 5                     # controls sort position
---
The project description goes here.
```
**An event** — create `_events/2026-12-01-my-event.md`:
```yaml
---
title: My event title
date: 2026-12-01             # drives the date badge and sort order
where: Evening talk · Online
---
The event description goes here.
```

## Contact form → Google Form
The form in the Contact section posts straight to a Google Form so responses
land in your linked spreadsheet. To wire it up:
1. Build a Google Form with **Name**, **Email**, and **Message** fields.
2. Open the live form, **View source**, and find each field's `entry.NUMBER`.
3. In `index.html`, replace `FORM_ID` in the form `action` with your form ID
   (the long string in the form URL), and replace `entry.1000001/2/3` with your
   real field IDs.
The response posts silently to a hidden iframe and shows a thank-you line.

## Contact details
Address and email live in `_config.yml` under `contact:` — edit them there.
Current address: 43 Workspace, 232, 9th Main Road, 1st Block, Kalyana Nagar,
Bangalore 560043.

## Run locally
```bash
cd site
bundle install
bundle exec jekyll serve   # → http://localhost:4000
```

## Deploy to GitHub Pages
1. Push the **contents of this folder** to a repo (so `_config.yml` is at the root).
2. **Settings → Pages → Deploy from a branch**, pick your branch, folder `/ (root)`.
3. For a project page (`https://<user>.github.io/<repo>/`), set
   `baseurl: "/<repo>"` in `_config.yml`; leave empty for a user/org page or custom domain.
