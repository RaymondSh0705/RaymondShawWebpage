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
