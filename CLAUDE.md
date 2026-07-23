# Mānasollāsa Foundation — site

One-page Jekyll site (hero, Projects, Contact, Events), deployed to GitHub
Pages via "Deploy from a branch" using the `github-pages` gem. This
directory *is* the repo root — `_config.yml` sits at the top level, not
nested under a subfolder.

## Adding a project

Create `_projects/<slug>.md`:

```yaml
---
title: Project title
category: Small label shown above the title
order: 5          # sort position, ascending, lower first
---
One paragraph description. Rendered as-is (through kramdown) inside the card.
```

Rendered in `index.html` in the `#projects` section as a `.card` grid
(`site.projects | sort: 'order'`). The collection has `output: false` in
`_config.yml`, so there are no separate `/projects/<slug>/` pages — the
loop in `index.html` is the *only* place this content appears. If you add
a project and it doesn't show up, check that loop before assuming
something else is broken.

## Adding an event

Create `_events/YYYY-MM-DD-slug.md` (the filename date is cosmetic; the
`date` front matter field is what actually drives sorting and the date
badge):

```yaml
---
title: Event title
date: 2026-12-01
where: Evening talk · Online
---
One paragraph description.
```

Rendered in `index.html`'s `#events` section, sorted by `date` ascending.

## Editing contact details

Address and email live in `_config.yml` under `contact:` — not hardcoded
in `index.html`.

## Contact form

Posts directly to a Google Form (see `README.md` for the exact wiring
steps — `FORM_ID` and the `entry.NNNNNN` field IDs in `index.html` are
still placeholders as of now and need to be filled in from a real form).

## Google Analytics

Set `google_analytics: "G-XXXXXXXXXX"` in `_config.yml` (empty string
disables it). The tracking snippet in `_layouts/default.html` only fires
when `jekyll.environment == "production"` — GitHub Pages builds are
always production, so `bundle exec jekyll serve` locally stays untracked.
No other config file (there's no `config.xml` or similar) — `_config.yml`
is the single Jekyll config file for this site.

## Brand lockup (header + hero)

Both use inline SVG `<text>` with `textLength` set to a fixed value so
lines of differing script/length render at identical pixel width — this
is deliberate, not a bug, and is the reason font sizes look arbitrary per
script. The header (`_layouts/default.html`) always shows Brahmi
(Mānasollāsa / Pratiṣṭhāna, one line each) stacked above Latin
(Mānasollāsa / FOUNDATION), never interleaved. The hero (`index.html`)
always shows the Brahmi ribbon (Mānasollāsa only) plus one script chosen
at random from the remaining `[data-name-pick]` variants via
`assets/js/lockup.js` — Latin was deliberately removed from that pool, so
don't re-add a Cormorant Garamond `.nm` variant without checking that's
still wanted.

When adding or editing any Brahmi/Indic-script string in this repo,
proofread the transliteration before committing — past mistakes here have
included dropped conjuncts (missing akṣaras entirely) and wrong
short/long vowel signs (Kannada/Telugu/Tamil/Malayalam distinguish
short-o/e from long-o/e; Devanagari/Bengali/Gujarati/Grantha/Brahmi do
not — Sanskrit's ओ is always long, so Dravidian-script renderings need the
long vowel sign, not the short one).

## Local dev

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000, auto-rebuilds on save
```
