/* ==========================================================================
   Renders the content from data/content.js into the page.
   You shouldn't need to edit this file to update your site.
   ========================================================================== */

(function () {
  "use strict";

  const site = typeof SITE !== "undefined" ? SITE : {};
  const projects = typeof PROJECTS !== "undefined" ? PROJECTS : [];

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ------------------------------------------------------------- icons --- */

  const ICONS = {
    github:
      "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.35 4.7-4.58 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z",
    linkedin:
      "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.5 4.77 5.75v5.7h-4v-5.05c0-1.2-.02-2.75-1.7-2.75-1.7 0-1.96 1.3-1.96 2.66v5.14h-4v-11Z",
    mail: "M3 6.5h18v11H3v-11Zm0 .5 9 6 9-6",
    x: "M3 3h5.2l4.3 5.9L17.8 3H21l-6.9 8.3L21.4 21h-5.2l-4.6-6.3L6 21H3l7.2-8.6L3 3Z",
    twitter:
      "M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.6A11.4 11.4 0 0 1 3.8 4.5a4 4 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.8-.5a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A11.3 11.3 0 0 1 2 18.6a16 16 0 0 0 8.7 2.5c10.4 0 16-8.7 15.7-16.3",
    instagram:
      "M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm4.5 5.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Zm5.1-1.5v.01",
    dribbble:
      "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 4.6c-2 1.5-4.4 2.5-7 2.9M5 4.9c1.9 2.2 3.4 4.7 4.4 7.5m-7.3.6c3.6-1 7.4-.7 10.8.8M8 21.2c1.7-3.4 4.7-6 8.3-7.2m-1.6-9.8c2.3 3 3.6 6.7 3.7 10.6",
    globe: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-9.7 8h19.4M12 2c2.7 2.6 4.2 6.2 4.2 10S14.7 19.4 12 22c-2.7-2.6-4.2-6.2-4.2-10S9.3 4.6 12 2Z",
    substack: "M4 3h16v3H4V3Zm0 5.2h16V21l-8-4.2L4 21V8.2Z",
    scholar: "M12 2 2 8l10 6 10-6-10-6Zm-6 8.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-6.5",
    link: "M9.5 14.5 14.5 9.5M10.8 7.2l1.9-1.9a4 4 0 0 1 5.7 5.7l-1.9 1.9M13.2 16.8l-1.9 1.9a4 4 0 0 1-5.7-5.7l1.9-1.9",
  };

  function iconSvg(name, className = "icon") {
    const path = ICONS[name] || ICONS.link;
    const filled = name === "github" || name === "linkedin" || name === "substack";
    return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true"${
      filled ? ' style="fill:currentColor;stroke:none"' : ""
    }><path d="${path}"/></svg>`;
  }

  const escapeHtml = (value) =>
    String(value ?? "").replace(
      /[&<>"']/g,
      (ch) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch])
    );

  function socialUrl(link) {
    if (link.icon === "mail" && site.email) return `mailto:${site.email}`;
    if (link.url && link.url.startsWith("mailto:")) return link.url;
    if (link.icon === "mail" && link.url && !link.url.includes("://")) {
      return `mailto:${link.url}`;
    }
    return link.url || "#";
  }

  async function copyEmail() {
    const email = site.email;
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      const input = document.createElement("textarea");
      input.value = email;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.left = "-9999px";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }

    showCopyToast("Email copied to clipboard");
  }

  function showCopyToast(message) {
    let toast = $(".copy-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "copy-toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(showCopyToast._timer);
    showCopyToast._timer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
  }

  /* ------------------------------------------------------------- theme --- */

  const STORAGE_KEY = "portfolio-theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (err) {
      /* private browsing — theme just won't persist */
    }
  }

  if (!root.getAttribute("data-theme")) {
    root.setAttribute("data-theme", "dark");
  }

  $$("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  });

  /* -------------------------------------------------------- site chrome --- */

  function initials(name) {
    return String(name || "")
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0] || "")
      .join("")
      .toUpperCase();
  }

  function renderSite() {
    $$("[data-site-name]").forEach((el) => (el.textContent = site.name || ""));
    $$("[data-brand-initials]").forEach(
      (el) => (el.textContent = initials(site.shortName || site.name))
    );

    const role = $("[data-site-role]");
    if (role) role.textContent = site.role || "";

    const location = $("[data-site-location]");
    if (location) location.textContent = site.location || "Available for work";

    const avatar = $("[data-site-avatar]");
    if (avatar && site.avatar) {
      avatar.src = site.avatar;
      avatar.alt = site.name ? `Portrait of ${site.name}` : "";
    }

    $$("[data-site-email]").forEach((el) => (el.textContent = site.email || ""));
    $$("[data-site-email-link]").forEach((el) => {
      if (site.email) el.href = `mailto:${site.email}`;
      else el.hidden = true;
    });

    $$("[data-site-resume]").forEach((el) => {
      if (site.resume) {
        el.href = site.resume;
        el.hidden = false;
      }
    });

    const taglines = $("[data-site-taglines]");
    if (taglines) {
      taglines.innerHTML = (site.taglines || [])
        .map((line) => `<li>${escapeHtml(line)}</li>`)
        .join("");
    }

    const about = $("[data-site-about]");
    if (about) {
      about.innerHTML = (site.about || [])
        .map((para) => `<p>${escapeHtml(para)}</p>`)
        .join("");
    }

    const skills = $("[data-site-skills]");
    if (skills) {
      skills.innerHTML = (site.skills || [])
        .map(
          (group, i) => `
          <div class="skill-group reveal" data-delay="${i % 4}">
            <p class="skill-group__name">${escapeHtml(group.group)}</p>
            <ul class="tags">
              ${(group.items || [])
                .map((item) => `<li class="tag">${escapeHtml(item)}</li>`)
                .join("")}
            </ul>
          </div>`
        )
        .join("");
    }

    const experience = $("[data-site-experience]");
    if (experience) {
      const entries = site.experience || [];
      const section = $("[data-experience-section]");
      if (section) section.hidden = entries.length === 0;
      experience.innerHTML = entries
        .map(
          (item) => `
          <li class="reveal">
            <p class="timeline__period">${escapeHtml(item.period)}</p>
            <h3 class="timeline__title">
              ${escapeHtml(item.title)}
              ${item.org ? `<span class="timeline__org"> · ${escapeHtml(item.org)}</span>` : ""}
            </h3>
            ${item.detail ? `<p class="timeline__detail">${escapeHtml(item.detail)}</p>` : ""}
          </li>`
        )
        .join("");
    }

    $$("[data-socials]").forEach((list) => {
      const isHeader = list.classList.contains("social--header");
      list.innerHTML = (site.socials || [])
        .map((link) => {
          if (isHeader && link.icon === "mail" && site.email) {
            return `
          <li>
            <button type="button" class="social-copy-email" aria-label="${escapeHtml(
              link.label
            )}" title="Copy email">
              ${iconSvg(link.icon)}
            </button>
          </li>`;
          }

          const url = socialUrl(link);
          return `
          <li>
            <a href="${escapeHtml(url)}" aria-label="${escapeHtml(link.label)}" title="${escapeHtml(
            link.label
          )}"${url.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>
              ${iconSvg(link.icon)}
            </a>
          </li>`;
        })
        .join("");
    });

    $$(".social-copy-email").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        copyEmail();
      });
    });

    $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

    if (site.name) {
      const page = document.title || "";
      document.title = page ? `${site.name} — ${page}` : site.name;
    }
  }

  /* ------------------------------------------------------------- cards --- */

  function cardHtml(project, index) {
    const links = (project.links || [])
      .map(
        (link) => `
        <a class="card__link" href="${escapeHtml(link.url)}"${
          link.url && link.url.startsWith("http") ? ' target="_blank" rel="noopener"' : ""
        }>
          ${escapeHtml(link.label)}
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 17 17 7M9 7h8v8"/>
          </svg>
        </a>`
      )
      .join("");

    const tags = (project.tags || [])
      .map((tag) => `<li class="tag">${escapeHtml(tag)}</li>`)
      .join("");

    return `
      <article class="card reveal" data-delay="${index % 3}" data-tags="${escapeHtml(
      (project.tags || []).join("|")
    )}">
        ${
          project.image
            ? `<div class="card__media">
                 <img src="${escapeHtml(project.image)}" alt="${escapeHtml(
                 project.title
               )} preview" loading="lazy" />
                 ${project.year ? `<span class="card__year">${escapeHtml(project.year)}</span>` : ""}
               </div>`
            : ""
        }
        <div class="card__body">
          <h3 class="card__title">${escapeHtml(project.title)}</h3>
          <p class="card__summary">${escapeHtml(project.summary)}</p>
          ${tags ? `<ul class="tags card__tags">${tags}</ul>` : ""}
        </div>
        ${links ? `<div class="card__links">${links}</div>` : ""}
      </article>`;
  }

  function renderFeatured() {
    const grid = $("[data-featured-grid]");
    if (!grid) return;
    const featured = projects.filter((p) => p.featured).slice(0, 3);
    const section = $("[data-featured-section]");
    if (section) section.hidden = featured.length === 0;
    grid.innerHTML = featured.map(cardHtml).join("");
  }

  function renderProjects() {
    const grid = $("[data-projects-grid]");
    if (!grid) return;
    grid.innerHTML = projects.map(cardHtml).join("");

    const filterBar = $("[data-filters]");
    if (!filterBar) return;

    const tags = [...new Set(projects.flatMap((p) => p.tags || []))];
    if (tags.length === 0) {
      filterBar.hidden = true;
      return;
    }

    filterBar.innerHTML = ["All", ...tags]
      .map(
        (tag, i) =>
          `<button class="filter${i === 0 ? " is-active" : ""}" type="button" data-tag="${escapeHtml(
            tag
          )}" aria-pressed="${i === 0}">${escapeHtml(tag)}</button>`
      )
      .join("");

    const empty = $("[data-empty]");

    filterBar.addEventListener("click", (event) => {
      const btn = event.target.closest(".filter");
      if (!btn) return;

      $$(".filter", filterBar).forEach((el) => {
        const active = el === btn;
        el.classList.toggle("is-active", active);
        el.setAttribute("aria-pressed", String(active));
      });

      const tag = btn.dataset.tag;
      let shown = 0;
      $$(".card", grid).forEach((card) => {
        const cardTags = (card.dataset.tags || "").split("|");
        const match = tag === "All" || cardTags.includes(tag);
        card.hidden = !match;
        if (match) shown += 1;
      });
      if (empty) empty.hidden = shown > 0;
    });
  }

  /* ------------------------------------------------------ scroll effects --- */

  function initReveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    items.forEach((el) => observer.observe(el));
  }

  function initHeader() {
    const header = $(".site-header");
    if (!header) return;
    const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* --------------------------------------------------------------- init --- */

  renderSite();
  renderFeatured();
  renderProjects();
  initReveal();
  initHeader();
})();
