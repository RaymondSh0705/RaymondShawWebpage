# Personal Portfolio

A static, dependency-free portfolio site: two pages (About + Projects), a dark/light
theme, and all content in a single editable file. No build step, no npm install —
it runs anywhere that serves files, including GitHub Pages.

```
.
├── index.html          About page
├── projects.html       Projects page
├── data/content.js     ← everything you edit lives here
├── assets/
│   ├── css/styles.css  styling and theme colors
│   ├── js/main.js      renders content.js into the pages
│   └── img/            your photo and project images
└── .nojekyll           tells GitHub Pages to serve files as-is
```

## Editing your content

Open `data/content.js`. It has two sections:

**`SITE`** — your name, role, location, email, avatar, about paragraphs, skills,
and experience timeline. Set `resume` to a PDF path (e.g. `"assets/resume.pdf"`)
to show a résumé button, or leave it `""` to hide it.

**`PROJECTS`** — one object per project. Copy a block and change the values:

```js
{
  title: "My Project",
  summary: "One or two sentences about it.",
  image: "assets/img/my-project.png",
  tags: ["Web", "TypeScript"],   // become filter buttons on the Projects page
  year: "2026",
  featured: true,                // also show it on the About page
  links: [
    { label: "Live demo", url: "https://example.com" },
    { label: "Source", url: "https://github.com/you/my-project" },
  ],
},
```

Notes:

- Projects appear in the order listed, so put newest first.
- `image` can be a local path or a full URL. Roughly **800 × 500** (16:10) looks
  best; anything else is cropped to fit.
- The first link in `links` is highlighted as the primary action.
- Up to three `featured: true` projects show on the About page.

Social icons available for `SITE.socials`: `github`, `linkedin`, `mail`, `x`,
`twitter`, `instagram`, `dribbble`, `substack`, `scholar`, `globe`, `link`.

## Changing the look

The colors are CSS variables at the top of `assets/css/styles.css`. Changing
`--accent` and `--accent-2` restyles the whole site; the `[data-theme="light"]`
block below controls light mode.

## Previewing locally

Open `index.html` in a browser, or serve the folder to avoid any file-path
quirks:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

1. Create a repo on GitHub. Naming it `<your-username>.github.io` gets you the
   root domain; any other name serves the site at `/<repo-name>/`.
2. Push this folder:

```bash
git init
git add .
git commit -m "Add portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

3. In the repo, go to **Settings → Pages**, set **Source** to "Deploy from a
   branch", pick `main` and `/ (root)`, and save.
4. The site goes live at `https://<your-username>.github.io/<repo>/` within a
   minute or two.

Every later `git push` to `main` redeploys automatically. Since all paths in the
HTML are relative, the site works at the root domain and in a subfolder without
any changes.
