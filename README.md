# Sushant Kumar — Portfolio

A single-page, dependency-free portfolio site compiled from a résumé, a
2020–2025 work-portfolio index, and a Linktree — organised into a filterable,
chronological archive of annual reports, events, campaigns, articles, blogs,
impact films, websites, social media and facilitation work.

## Stack

Plain HTML/CSS/JS, no build step. Content lives in `js/data.js` — edit that
file to add, remove, or re-date work items.

## Structure

```
index.html           Home
education.html       Education and achievements
work.html            All work, grouped by type
css/style.css        styling shared by every page
js/data.js           all content (edit this to add or remove work)
js/main.js           renders each page
assets/img/          photos and thumbnails
```

Internal links use clean URLs (`/work`, `/education`), which GitHub Pages
resolves to the `.html` files.

## Run locally

```
python3 -m http.server 8000
```

then open `http://localhost:8000`.

## Deploy to GitHub Pages

Push to a repo, then in **Settings → Pages** set the source to the `main`
branch, root folder.
