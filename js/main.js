const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function monthYear(dateStr) {
  const [y, m] = dateStr.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

function fmtPeriod(item) {
  const fmt = s => { const [y, m] = s.split("-").map(Number); return `${MONTHS[m - 1]} ${y}`; };
  const end = item.end === "Present" ? `<span class="present">Present</span>` : fmt(item.end);
  return `${fmt(item.start)} — ${end}`;
}

// Photos opened in the lightbox are grouped so arrows step through their set.
const ph = (src, group, caption = "", cls = "") =>
  `<figure class="ph ${cls}"><img src="${src}" alt="${caption}" loading="lazy" data-lb="${group}" data-cap="${caption}"></figure>`;

/* ---------- hero ---------- */
function renderHero() {
  $("#hero-summary").textContent = PROFILE.summary;
  $$("[data-email]").forEach(el => el.href = `mailto:${PROFILE.email}`);
  $$("[data-linkedin]").forEach(el => el.href = PROFILE.linkedin);
  $$("[data-linktree]").forEach(el => el.href = PROFILE.linktree);

  $("#hero-stats").innerHTML = STATS.map(s => `
    <div class="stat"><b data-count="${s.n}" data-suffix="${s.suffix}">0${s.suffix}</b><span>${s.label}</span></div>`).join("");

  const phrase = `<span class="fr">Liberté. Égalité. Fraternité.</span><span class="en">Liberty. Equality. Fraternity.</span><span class="hi">स्वतंत्रता. समानता. बंधुत्व.</span>`;
  $("#marquee").innerHTML = phrase.repeat(4);
}

/* ---------- roles ---------- */
function roleMedia(r, i) {
  const g = `role-${i}`;
  const cap = `${r.role} — ${r.project}`;
  switch (r.role) {
    case "Character Scout":
      return `<div class="role-media media-single">${ph(r.photos[0], g, cap)}</div>`;
    case "Screenwriter":
      return `<div class="role-media media-films">${r.photos.map(p => ph(p, g, cap)).join("")}</div>`;
    case "Executive Producer":
      return `<div class="role-media media-producer">${r.photos.map(p => ph(p, g, cap)).join("")}</div>`;
    case "Writer & Editor":
      return `<div class="role-media media-books">${ph(r.photos[0], g, cap)}${ph(r.photos[1], g, cap)}
        <div class="stack">${ph(r.photos[2], g, cap)}${ph(r.photos[3], g, cap)}</div></div>`;
    default:
      return `<div class="role-media media-fac">${r.photos.map(p => ph(p, g, cap)).join("")}</div>`;
  }
}

function renderRoles() {
  $("#role-stories").innerHTML = ROLE_STORIES.map((r, i) => `
    <article class="role">
      ${roleMedia(r, i)}
      <div class="role-copy reveal">
        <div class="role-num">0${i + 1}</div>
        <h3>${r.role}</h3>
        <p class="role-hi">${r.hi}</p>
        <p class="project">${r.project}</p>
        <p class="role-text">${r.text}</p>
        ${r.facts ? `<div class="facts">${r.facts.map(f => `<span class="fact">${f}</span>`).join("")}</div>` : ""}
        <div class="role-links">
          <button class="jump" data-jump="${r.filter}">See ${CATEGORIES[r.filter].label.toLowerCase()} in the archive →</button>
          ${r.link ? `<a class="text-link" href="${r.link.url}" target="_blank" rel="noopener">${r.link.label} ↗</a>` : ""}
        </div>
      </div>
    </article>`).join("");
  $$(".role-media").forEach(el => el.classList.add("reveal"));
}

/* ---------- Cannes ---------- */
function renderCannes() {
  const caps = ["On the Awards Show steps", "Outside the Palais", "Taking a seat on the carpet", "A red-carpet selfie"];
  $("#red-carpet").innerHTML = CANNES.redCarpet.map((p, i) => ph(p, "carpet", caps[i])).join("");
  $("#cannes-stats").innerHTML = CANNES.stats.map(s => `
    <div class="cstat"><b data-count="${s.n}">0</b><span>${s.label}<i>${s.hi}</i></span></div>`).join("");
  $("#sessions").innerHTML = CANNES.sessions.map(p => ph(p, "sessions", "Sessions at Cannes Lions 2026")).join("");
  $("#friends").innerHTML = CANNES.friends.map(p => ph(p, "friends", "New friends at Cannes Lions 2026")).join("");
  $("#scholarships").innerHTML = CANNES.scholarships.map(s => `
    <li><span>${s.name}</span>${s.note ? `<small>${s.note}</small>` : ""}</li>`).join("");
}

/* ---------- France ---------- */
function renderFrance() {
  $("#france-strip").innerHTML = FRANCE_NOTES.map((n, i) => {
    const num = String(i + 1).padStart(2, "0");
    if (n.text) {
      return `<article class="note text"><div class="note-body">
        <span class="note-num">${num}</span><h4>${n.title}</h4><p class="hi">${n.hi}</p>
        <p class="big">${n.text}</p></div></article>`;
    }
    return `<article class="note">
      <figure class="ph"><img src="${n.img}" alt="${n.title}" loading="lazy" draggable="false"></figure>
      <div class="note-body"><span class="note-num">${num}</span><h4>${n.title}</h4><p class="hi">${n.hi}</p>
        ${n.detail ? `<p class="detail">${n.detail}</p>` : ""}</div>
    </article>`;
  }).join("");

  $("#population").innerHTML = `
    <div class="pop"><img src="assets/img/map_france.png" alt="Outline of France"><b>${POPULATION.france}</b><span>people in France</span></div>
    <p class="pop-mid">Bihar has nearly twice France's population. What could its streets learn?<small>फ्रांस बनाम बिहार — जनसंख्या</small></p>
    <div class="pop bihar"><img src="assets/img/map_bihar.png" alt="Outline of Bihar"><b>${POPULATION.bihar}</b><span>people in Bihar</span></div>`;
}

function setupStrip() {
  const strip = $("#france-strip");
  const bar = $("#strip-bar");
  const step = () => (strip.querySelector(".note")?.offsetWidth || 300) + 18;

  const update = () => {
    const max = strip.scrollWidth - strip.clientWidth;
    const visible = strip.clientWidth / strip.scrollWidth;
    bar.style.width = `${Math.max(visible * 100, 8)}%`;
    bar.style.left = `${max > 0 ? (strip.scrollLeft / max) * (100 - visible * 100) : 0}%`;
  };
  strip.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();

  $("#strip-prev").onclick = () => strip.scrollBy({ left: -step(), behavior: "smooth" });
  $("#strip-next").onclick = () => strip.scrollBy({ left: step(), behavior: "smooth" });

  let down = false, startX = 0, startLeft = 0, moved = false;
  strip.addEventListener("pointerdown", e => {
    if (e.pointerType !== "mouse") return;
    down = true; moved = false; startX = e.clientX; startLeft = strip.scrollLeft;
  });
  window.addEventListener("pointermove", e => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) { moved = true; strip.classList.add("dragging"); }
    strip.scrollLeft = startLeft - dx;
  });
  window.addEventListener("pointerup", () => {
    if (!down) return;
    down = false;
    strip.classList.remove("dragging");
  });
  strip.addEventListener("click", e => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
}

/* ---------- archive ---------- */
let currentFilter = "all";
let visibleCount = 16;
const PAGE_SIZE = 16;
const CAT_MARK = { reports: "R", events: "E", campaigns: "C", articles: "A", blogs: "B", films: "F", websites: "W", social: "S", facilitation: "L" };

function thumbHTML(item) {
  if (item.ytId) return `<img src="assets/img/yt_${item.ytId}.jpg" alt="" loading="lazy"><div class="play"><span class="play-icon"></span></div>`;
  if (item.img) return `<img src="${item.img}" alt="" loading="lazy">`;
  return `<div class="cat-mark">${CAT_MARK[item.category]}</div>`;
}

function cardHTML(item) {
  const cat = CATEGORIES[item.category];
  const tag = item.url ? "a" : "div";
  const attrs = item.url ? `href="${item.url}" target="_blank" rel="noopener"` : "";
  const date = item.approx ? item.date.slice(0, 4) : monthYear(item.date);
  return `
    <${tag} class="work-card reveal ${item.featured ? "featured" : ""}" ${attrs}>
      <div class="work-thumb cat-${item.category}">
        <span class="tag">${cat.label}</span>
        ${thumbHTML(item)}
      </div>
      <div class="work-body">
        <div class="work-date">${date}</div>
        <h3>${item.title}</h3>
        <div class="card-role"><span>My role</span>${cat.roles}</div>
        <div class="work-org"><span>${item.org}</span>${item.url ? `<span class="arrow">↗</span>` : ""}</div>
      </div>
    </${tag}>`;
}

function renderRolesPanel() {
  const el = $("#roles-panel");
  if (currentFilter === "all") {
    el.innerHTML = `<div class="roles-grid">${Object.entries(CATEGORIES).map(([key, c]) => `
      <button class="role-tile" data-jump="${key}">
        <span class="role-tile-label">${c.label}</span>
        <span class="role-tile-roles">${c.roles}</span>
      </button>`).join("")}</div>`;
  } else {
    const c = CATEGORIES[currentFilter];
    el.innerHTML = `<div class="roles-banner">
      <span class="roles-banner-label">Capacity engaged in · ${c.label}</span>
      <div class="roles-chips">${c.roles.split(", ").map(r => `<span class="role-chip">${r}</span>`).join("")}</div>
    </div>`;
  }
}

function renderWork() {
  const sorted = [...WORK].sort((a, b) => a.date.localeCompare(b.date));
  const filtered = currentFilter === "all" ? sorted : sorted.filter(i => i.category === currentFilter);
  const slice = filtered.slice(0, visibleCount);

  const years = {};
  slice.forEach(item => (years[item.date.slice(0, 4)] ||= []).push(item));
  const totals = {};
  filtered.forEach(item => totals[item.date.slice(0, 4)] = (totals[item.date.slice(0, 4)] || 0) + 1);

  $("#work-grid").innerHTML = slice.length
    ? Object.entries(years).map(([y, items]) => `
        <div class="year-block">
          <h3 class="year-label">${y}<small>${totals[y]} ${totals[y] === 1 ? "piece" : "pieces"}</small></h3>
          <div class="work-grid-inner">${items.map(cardHTML).join("")}</div>
        </div>`).join("")
    : `<div class="work-empty">No work in this category yet.</div>`;

  const more = $("#load-more-wrap");
  more.innerHTML = "";
  if (filtered.length > visibleCount) {
    const btn = document.createElement("button");
    btn.className = "btn btn-line";
    btn.textContent = `Show more (${filtered.length - visibleCount} left)`;
    btn.onclick = () => { visibleCount += PAGE_SIZE; renderWork(); };
    more.appendChild(btn);
  }
  observeReveals();
}

function renderFilters() {
  const counts = { all: WORK.length };
  Object.keys(CATEGORIES).forEach(k => counts[k] = WORK.filter(w => w.category === k).length);
  const items = [["all", "All work"], ...Object.entries(CATEGORIES).map(([k, c]) => [k, c.label])];
  $("#filters").innerHTML = items.map(([key, label]) => `
    <button class="filter-btn ${key === currentFilter ? "active" : ""}" data-filter="${key}">${label}<span class="count">${counts[key]}</span></button>`).join("");
}

function setFilter(key, scroll = true) {
  currentFilter = key;
  visibleCount = PAGE_SIZE;
  $$(".filter-btn").forEach(b => b.classList.toggle("active", b.dataset.filter === key));
  renderRolesPanel();
  renderWork();
  if (scroll) $("#work").scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------- about ---------- */
function renderAbout() {
  $("#about-summary").textContent = PROFILE.summary;
  $("#skills").innerHTML = SKILLS.map(s => `<span class="skill">${s}</span>`).join("");
  $("#timeline").innerHTML = EXPERIENCE.map(e => `
    <div class="tl-item reveal">
      <div class="tl-period">${fmtPeriod(e)}</div>
      <div class="tl-role"><h4>${e.role}</h4><span class="org">${e.org}</span>
        <ul>${e.points.map(p => `<li>${p}</li>`).join("")}</ul></div>
    </div>`).join("");
  $("#edu-list").innerHTML = EDUCATION.map(e => `
    <div class="edu-item reveal"><h4>${e.school}</h4><div class="degree">${e.degree}</div><div class="period">${e.period}</div></div>`).join("");
  $("#ach-list").innerHTML = ACHIEVEMENTS.map(a => `<li class="reveal">${a}</li>`).join("");
}

/* ---------- lightbox ---------- */
function setupLightbox() {
  const box = $("#lightbox"), img = $("#lb-img"), cap = $("#lb-cap");
  let group = [], index = 0;

  const show = () => { img.src = group[index].src; img.alt = group[index].alt; cap.textContent = group[index].dataset.cap; };
  const open = el => {
    group = $$(`img[data-lb="${el.dataset.lb}"]`);
    index = group.indexOf(el);
    show();
    box.classList.add("open");
    box.setAttribute("aria-hidden", "false");
    $$(".lb-nav").forEach(b => b.style.display = group.length > 1 ? "" : "none");
  };
  const close = () => { box.classList.remove("open"); box.setAttribute("aria-hidden", "true"); };
  const go = d => { index = (index + d + group.length) % group.length; show(); };

  document.addEventListener("click", e => {
    const el = e.target.closest("img[data-lb]");
    if (el) open(el);
  });
  $("#lb-close").onclick = close;
  $("#lb-prev").onclick = () => go(-1);
  $("#lb-next").onclick = () => go(1);
  box.addEventListener("click", e => { if (e.target === box) close(); });
  document.addEventListener("keydown", e => {
    if (!box.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  });
}

/* ---------- motion ---------- */
function countUp(el) {
  const target = Number(el.dataset.count), suffix = el.dataset.suffix || "", t0 = performance.now();
  const tick = now => {
    const p = Math.min(1, (now - t0) / 1500);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString("en-IN") + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

let revealObserver;
function observeReveals() {
  revealObserver ||= new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      revealObserver.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal:not(.in)").forEach(el => revealObserver.observe(el));
}

function setupCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      $$("[data-count]", e.target).forEach(countUp);
      io.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  [$("#hero-stats"), $("#cannes-stats")].forEach(el => io.observe(el));
}

function setupScroll() {
  const nav = $("#site-nav"), progress = $("#progress");
  const links = $$("#nav-links a");
  const sections = links.map(a => $(a.getAttribute("href")));
  let lastY = 0;

  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 30);
    nav.classList.toggle("hidden", y > lastY && y > 500 && !nav.classList.contains("open"));
    lastY = y;
    const h = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${h > 0 ? (y / h) * 100 : 0}%`;
    let current = -1;
    sections.forEach((s, i) => { if (s.getBoundingClientRect().top < innerHeight * 0.4) current = i; });
    links.forEach((a, i) => a.classList.toggle("active", i === current));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  $("#nav-toggle").onclick = () => nav.classList.toggle("open");
  links.forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  const stack = $("#hero-stack");
  if (matchMedia("(hover: hover)").matches) {
    stack.addEventListener("mousemove", e => {
      const r = stack.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      stack.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    });
    stack.addEventListener("mouseleave", () => stack.style.transform = "");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  renderHero();
  renderRoles();
  renderCannes();
  renderFrance();
  renderFilters();
  renderRolesPanel();
  renderWork();
  renderAbout();

  document.addEventListener("click", e => {
    const jump = e.target.closest("[data-jump]");
    if (jump) setFilter(jump.dataset.jump);
    const f = e.target.closest("[data-filter]");
    if (f) setFilter(f.dataset.filter);
  });

  setupStrip();
  setupLightbox();
  setupCounters();
  setupScroll();
  observeReveals();
});
