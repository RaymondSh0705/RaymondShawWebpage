# Raymond Shaw · Personal Portfolio

A responsive, dependency-free portfolio with About and Projects pages, a light/dark theme, and project filters. Serve the files directly; no build or npm install is required.

For a local preview, run `python3 -m http.server 8000` and open `http://localhost:8000`.

- `data/content.js` holds the biography, contact links, skills, experience, and projects. Project `tags` control filtering; optional `stack` entries describe the technologies shown on cards.
- `index.html` and `projects.html` define the page structure and section copy.
- `assets/css/styles.css` contains the responsive layout, typography, and theme colors.
- `assets/js/main.js` renders the content and handles filtering and theme persistence.
- `assets/img/raymond-shaw-resume.pdf` is the current downloadable résumé.

The default theme is light. A visitor's explicit theme choice persists across both pages. Fonts use Google Fonts with local system fallbacks.
