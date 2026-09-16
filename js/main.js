// Letterform shown when an item has no real thumbnail.
const CAT_MARK = {
  reports: "R", events: "E", campaigns: "C", articles: "A",
  blogs: "B", films: "F", websites: "W", social: "S", facilitation: "L",
};

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function monthYear(dateStr) {
  const [y, m] = dateStr.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

function fmtPeriod(item) {
  const [y, m] = item.start.split("-").map(Number);
  const startStr = `${MONTHS[m - 1]} ${y}`;
  let endStr;
  if (item.end === "Present") {
    endStr = `<span class="present">Present</span>`;
  } else {
    const [ey, em] = item.end.split("-").map(Number);
    endStr = `${MONTHS[em - 1]} ${ey}`;
  }
  return `${startStr} — ${endStr}`;
}

function renderHero() {
  document.getElementById("hero-summary").textContent = PROFILE.summary;
  const photo = document.getElementById("hero-photo");
  photo.src = PROFILE.photo;
  photo.alt = PROFILE.name;
  document.querySelectorAll("[data-email]").forEach(el => el.href = `mailto:${PROFILE.email}`);
  document.querySelectorAll("[data-linkedin]").forEach(el => el.href = PROFILE.linkedin);
  document.querySelectorAll("[data-linktree]").forEach(el => el.href = PROFILE.linktree);
}

function renderStats() {
  document.getElementById("hero-stats").innerHTML = STATS.map(s => `
    <div class="stat">
      <b data-count="${s.n}" data-suffix="${s.suffix}">0${s.suffix}</b>
      <span>${s.label}</span>
    </div>`).join("");
}

function animateCounters() {
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = Number(el.getAttribute("data-count"));
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("en-IN") + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

function renderAbout() {
  document.getElementById("about-summary").textContent = PROFILE.summary;
  document.getElementById("skills-cloud").innerHTML =
    SKILLS.map(s => `<span class="skill-pill">${s}</span>`).join("");
  document.getElementById("edu-list").innerHTML = EDUCATION.map(e => `
    <div class="edu-item">
      <h4>${e.school}</h4>
      <div class="degree">${e.degree}</div>
      <div class="period">${e.period}</div>
    </div>`).join("");
}

function renderExperience() {
  document.getElementById("timeline").innerHTML = EXPERIENCE.map(e => `
    <div class="tl-item reveal">
      <div class="tl-period">${fmtPeriod(e)}</div>
      <div class="tl-role">
        <h3>${e.role}</h3>
        <span class="org">${e.org}</span>
        <ul>${e.points.map(p => `<li>${p}</li>`).join("")}</ul>
      </div>
    </div>`).join("");
}

function renderCannes() {
  const c = CANNES_SPOTLIGHT;
  document.getElementById("cannes-spotlight").innerHTML = `
    <div class="cannes-photos">
      ${c.photos.map((p, i) => `<figure class="cannes-photo"><img src="${p}" alt="Sushant Kumar at Cannes Lions 2026, photo ${i + 1}" loading="lazy"></figure>`).join("")}
    </div>
    <div class="cannes-copy">
      <img class="cannes-logo" src="${c.logo}" alt="Cannes Lions — International Festival of Creativity">
      <div class="eyebrow">Spotlight · June 2026</div>
      <h3>${c.caption}</h3>
      <p>Took <em>Mothers of Courage</em> — India's only SDG Lions–shortlisted campaign — to the Palais in Cannes, and was selected for the festival's Equity, Representation & Accessibility cohort.</p>
    </div>`;
}

function renderAchievements() {
  document.getElementById("ach-grid").innerHTML = ACHIEVEMENTS.map((a, i) => `
    <div class="ach-card reveal">
      <span class="num">${String(i + 1).padStart(2, "0")}</span>
      <span>${a}</span>
    </div>`).join("");
}

let currentFilter = "all";
let visibleCount = 12;
const PAGE_SIZE = 12;

function thumbHTML(item) {
  if (item.ytId) {
    return `<img src="assets/img/yt_${item.ytId}.jpg" alt="" loading="lazy">
            <div class="play"><span class="play-icon"></span></div>`;
  }
  if (item.img) {
    return `<img src="${item.img}" alt="" loading="lazy">`;
  }
  return `<div class="cat-mark cat-${item.category}">${CAT_MARK[item.category] || "•"}</div>`;
}

function cardHTML(item) {
  const cat = CATEGORIES[item.category];
  return `
    <a class="work-card reveal" href="${item.url}" target="_blank" rel="noopener">
      <div class="work-thumb">
        <span class="tag">${cat.label}</span>
        <span class="yr">${monthYear(item.date)}</span>
        ${thumbHTML(item)}
      </div>
      <div class="work-body">
        <h3>${item.title}</h3>
        <div class="card-role"><span>My role</span>${cat.roles}</div>
        <div class="org"><span>${item.org}</span><span class="arrow">↗</span></div>
      </div>
    </a>`;
}

function renderRoles() {
  const el = document.getElementById("roles-panel");
  if (currentFilter === "all") {
    el.innerHTML = `
      <div class="roles-grid">
        ${Object.entries(CATEGORIES).map(([key, c]) => `
          <button class="role-tile" data-jump="${key}">
            <span class="role-tile-label">${c.label}</span>
            <span class="role-tile-roles">${c.roles}</span>
          </button>`).join("")}
      </div>`;
    el.querySelectorAll("[data-jump]").forEach(btn =>
      btn.addEventListener("click", () => setFilter(btn.getAttribute("data-jump"))));
  } else {
    const c = CATEGORIES[currentFilter];
    el.innerHTML = `
      <div class="roles-banner">
        <span class="roles-banner-label">Capacity engaged in · ${c.label}</span>
        <div class="roles-chips">${c.roles.split(", ").map(r => `<span class="role-chip">${r}</span>`).join("")}</div>
      </div>`;
  }
}

function renderWork() {
  const sorted = [...WORK].sort((a, b) => a.date.localeCompare(b.date));
  const filtered = currentFilter === "all" ? sorted : sorted.filter(i => i.category === currentFilter);
  const grid = document.getElementById("work-grid");

  grid.innerHTML = filtered.length
    ? filtered.slice(0, visibleCount).map(cardHTML).join("")
    : `<div class="work-empty">No work in this category yet.</div>`;

  const moreWrap = document.getElementById("load-more-wrap");
  moreWrap.innerHTML = "";
  if (filtered.length > visibleCount) {
    const btn = document.createElement("button");
    btn.className = "btn btn-ghost";
    btn.textContent = `Load more (${filtered.length - visibleCount} left)`;
    btn.onclick = () => { visibleCount += PAGE_SIZE; renderWork(); };
    moreWrap.appendChild(btn);
  }

  observeReveals();
}

function setFilter(key) {
  currentFilter = key;
  visibleCount = PAGE_SIZE;
  document.querySelectorAll(".filter-btn").forEach(b =>
    b.classList.toggle("active", b.getAttribute("data-filter") === key));
  renderRoles();
  renderWork();
  document.getElementById("work").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderFilters() {
  const bar = document.getElementById("filters");
  const counts = { all: WORK.length };
  Object.keys(CATEGORIES).forEach(k => counts[k] = WORK.filter(w => w.category === k).length);

  const items = [["all", "All Work"], ...Object.entries(CATEGORIES).map(([k, c]) => [k, c.label])];
  bar.innerHTML = items.map(([key, label]) => `
    <button class="filter-btn ${key === currentFilter ? "active" : ""}" data-filter="${key}">
      ${label} <span class="count">${counts[key]}</span>
    </button>`).join("");

  bar.querySelectorAll(".filter-btn").forEach(btn =>
    btn.addEventListener("click", () => setFilter(btn.getAttribute("data-filter"))));
}

function observeReveals() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
}

function setupNavScroll() {
  const nav = document.getElementById("site-nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });
}

function setupStatsTrigger() {
  const target = document.querySelector(".hero-stats");
  const io = new IntersectionObserver((entries) => {
    if (entries.some(e => e.isIntersecting)) { animateCounters(); io.disconnect(); }
  }, { threshold: 0.4 });
  io.observe(target);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderHero();
  renderStats();
  renderAbout();
  renderExperience();
  renderCannes();
  renderAchievements();
  renderFilters();
  renderRoles();
  renderWork();
  setupNavScroll();
  setupStatsTrigger();
  observeReveals();
});
