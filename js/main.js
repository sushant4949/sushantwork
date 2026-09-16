// Category label + accent letter used when there's no real thumbnail image.
const CAT_MARK = {
  reports: "R", events: "E", campaigns: "C", articles: "A",
  blogs: "B", films: "F", websites: "W", social: "S", facilitation: "L",
};

function monthYear(dateStr) {
  const [y, m] = dateStr.split("-").map(Number);
  const names = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${names[m - 1]} ${y}`;
}

function fmtPeriod(item) {
  const [y, m] = item.start.split("-").map(Number);
  const names = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const startStr = `${names[m - 1]} ${y}`;
  const endStr = item.end === "Present" ? `<span class="present">Present</span>` : item.end;
  return `${startStr} — ${endStr}`;
}

function renderHero() {
  document.getElementById("hero-name").textContent = PROFILE.name;
  document.getElementById("hero-summary").textContent = PROFILE.summary;
  document.getElementById("hero-photo").src = PROFILE.photo;
  document.getElementById("hero-photo").alt = PROFILE.name;
  document.querySelectorAll("[data-email]").forEach(el => el.href = `mailto:${PROFILE.email}`);
  document.querySelectorAll("[data-linkedin]").forEach(el => el.href = PROFILE.linkedin);
  document.querySelectorAll("[data-linktree]").forEach(el => el.href = PROFILE.linktree);
  document.querySelectorAll("[data-resume]").forEach(el => el.href = PROFILE.resume);
  document.getElementById("brand-name").textContent = PROFILE.name.split(" ")[0];
}

function renderStats() {
  const wrap = document.getElementById("hero-stats");
  wrap.innerHTML = STATS.map(s => `
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
      el.textContent = Math.round(target * eased) + suffix;
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
  const catLetter = CAT_MARK[item.category] || "•";
  if (item.ytId) {
    return `<img src="assets/img/yt_${item.ytId}.jpg" alt="${item.title}" loading="lazy">
            <div class="play"><span class="play-icon"></span></div>`;
  }
  return `<div class="cat-mark">${catLetter}</div>`;
}

function cardHTML(item) {
  const [y] = item.date.split("-");
  const href = item.url || item.insta || "#";
  return `
    <a class="work-card reveal" href="${href}" target="_blank" rel="noopener">
      <div class="work-thumb">
        <span class="tag">${CATEGORIES[item.category]}</span>
        <span class="yr">${monthYear(item.date)}</span>
        ${thumbHTML(item)}
      </div>
      <div class="work-body">
        <h3>${item.title}</h3>
        <div class="org"><span>${item.org}</span><span class="arrow">↗</span></div>
      </div>
    </a>`;
}

function renderWork() {
  const sorted = [...WORK].sort((a, b) => a.date.localeCompare(b.date));
  const filtered = currentFilter === "all" ? sorted : sorted.filter(i => i.category === currentFilter);
  const slice = filtered.slice(0, visibleCount);
  const grid = document.getElementById("work-grid");

  if (!slice.length) {
    grid.innerHTML = `<div class="work-empty">No work in this category yet.</div>`;
  } else {
    grid.innerHTML = slice.map(cardHTML).join("");
  }

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

function renderFilters() {
  const bar = document.getElementById("filters");
  const counts = { all: WORK.length };
  Object.keys(CATEGORIES).forEach(k => counts[k] = WORK.filter(w => w.category === k).length);

  const items = [["all", "All Work"], ...Object.entries(CATEGORIES)];
  bar.innerHTML = items.map(([key, label]) => `
    <button class="filter-btn ${key === currentFilter ? "active" : ""}" data-filter="${key}">
      ${label} <span style="opacity:.55">· ${counts[key]}</span>
    </button>`).join("");

  bar.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentFilter = btn.getAttribute("data-filter");
      visibleCount = PAGE_SIZE;
      bar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderWork();
      document.getElementById("work").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
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
  if (!target) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCounters(); io.disconnect(); }
    });
  }, { threshold: 0.4 });
  io.observe(target);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderHero();
  renderStats();
  renderAbout();
  renderExperience();
  renderAchievements();
  renderFilters();
  renderWork();
  setupNavScroll();
  setupStatsTrigger();
  observeReveals();
});
