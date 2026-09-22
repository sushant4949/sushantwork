const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const page = document.body.dataset.page;

const fmtDate = d => {
  const [y, m] = d.split("-");
  return m ? `${MONTHS[Number(m) - 1]} ${y}` : y;
};

/* ---------- shared ---------- */
function fillShared() {
  $$("[data-email]").forEach(el => el.href = `mailto:${PROFILE.email}`);
  $$("[data-linkedin]").forEach(el => el.href = PROFILE.linkedin);
  $$("[data-portfolio]").forEach(el => el.href = PROFILE.portfolio);
  $$("[data-photo]").forEach(el => el.src = PROFILE.photo);
  $$("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  showLastUpdated();
  $$("[data-nav]").forEach(a => a.classList.toggle("active", a.dataset.nav === page));

  const nav = $("#site-nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 20);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function thumb(item) {
  if (item.ytId) return `<img src="assets/img/yt_${item.ytId}.jpg" alt="" loading="lazy"><div class="play"><span></span></div>`;
  if (item.img) return `<img src="${item.img}" alt="" loading="lazy">`;
  const alt = item.category === "websites" ? "alt" : "";
  return `<div class="type-card ${alt}"><span class="tc-org">${CATEGORIES[item.category].label}</span><span class="tc-title">${item.category === "websites" ? item.dek : item.org}</span></div>`;
}

function card(item, withTag = false) {
  const cls = ["card", "reveal", item.featured ? "featured" : ""].join(" ");
  const tag = item.url ? "a" : "div";
  const attrs = item.url ? `href="${item.url}" target="_blank" rel="noopener"` : "";
  return `
    <${tag} class="${cls}" ${attrs}>
      <div class="card-thumb">
        ${withTag ? `<span class="tag">${CATEGORIES[item.category].label}</span>` : ""}
        ${thumb(item)}
      </div>
      <div class="card-body">
        <div class="card-date">${fmtDate(item.date)}</div>
        <h3>${item.title}</h3>
        ${item.dek ? `<p class="card-dek">${item.dek}</p>` : ""}
        <div class="card-org"><span>${item.org}</span>${item.url ? `<span class="arrow">↗</span>` : ""}</div>
      </div>
    </${tag}>`;
}

/* footer date comes from the latest commit on GitHub; stays hidden if the lookup fails */
function showLastUpdated() {
  const els = $$("[data-updated]");
  if (!els.length) return;
  fetch("https://api.github.com/repos/sushant4949/sushantwork/commits?per_page=1")
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(([c]) => {
      const d = new Date(c.commit.committer.date);
      const text = d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
      els.forEach(el => { const t = $("time", el); t.dateTime = d.toISOString(); t.textContent = text; el.hidden = false; });
    })
    .catch(() => {});
}

const byNewest = (a, b) => b.date.localeCompare(a.date);

/* ---------- home ---------- */
function renderHome() {
  $("#stats").innerHTML = STATS.map(s => `
    <div class="stat reveal">${s.text ? `<b>${s.text}</b>` : `<b data-count="${s.n}" data-suffix="${s.suffix}">0</b>`}<span>${s.label}</span></div>`).join("");

  $("#home-roles").innerHTML = HOME_ROLES.map((r, i) => `
    <a class="role-card reveal" href="work#${r.anchor}">
      <img src="${r.img}" alt="" loading="lazy">
      <span class="num">0${i + 1}</span>
      <h3>${r.role}</h3>
      <p>${r.line}</p>
      <span class="go">See the work →</span>
    </a>`).join("");

  $("#press-link").href = CANNES.pressUrl;
  $("#cannes-collage").innerHTML =
    CANNES.photos.map(p => `<figure class="tall"><img src="${p}" alt="Sushant Kumar on the red carpet at Cannes Lions 2026" loading="lazy"></figure>`).join("") +
    CANNES.moments.map(p => `<figure class="wide"><img src="${p}" alt="A moment from Cannes Lions 2026" loading="lazy"></figure>`).join("");

  $("#selected-work").innerHTML = WORK.filter(w => w.home).sort(byNewest).map(w => card(w, true)).join("");

  $("#about-tiles").innerHTML = ABOUT_TILES.map(t => `
    <div class="tile reveal"><span>${t.label}</span><p>${t.value}</p></div>`).join("");
  $("#skills").innerHTML = SKILLS.map(s => `<span>${s}</span>`).join("");
}

/* ---------- education ---------- */
function renderEducation() {
  $("#degrees").innerHTML = EDUCATION.map(e => `
    <article class="degree reveal">
      <div class="degree-logo"><img src="${e.logo}" alt="${e.school} logo" loading="lazy"></div>
      <div>
        <p class="degree-years">${e.years}</p>
        <h2>${e.school}</h2>
        <p class="degree-name">${e.degree}</p>
        ${e.story ? `<p class="degree-story">${e.story}</p>` : ""}
        ${e.note ? `<a class="text-link degree-note" href="${e.note.url}" target="_blank" rel="noopener">${e.note.text} ↗</a>` : ""}
        <p class="degree-meta">${e.place}<span>·</span>${e.score}</p>
      </div>
    </article>`).join("");

  $("#achievements").innerHTML = ACHIEVEMENTS.map(a => `
    <article class="ach reveal ${a.photos ? "big" : ""}">
      ${a.photos ? `<div class="ach-collage">${a.photos.map(p => `<img src="${p}" alt="" loading="lazy">`).join("")}</div>` : ""}
      ${a.img ? `<div class="ach-img"><img src="${a.img}" alt="" loading="lazy" onerror="this.parentNode.remove()"></div>` : ""}
      <div class="ach-body">
        ${a.year ? `<p class="ach-year">${a.year}</p>` : ""}
        <h3>${a.title}</h3>
        <p>${a.text}</p>
      </div>
    </article>`).join("");
}

/* ---------- work ---------- */
function renderWork() {
  const groups = Object.entries(CATEGORIES).map(([key, c]) => ({ key, ...c, items: WORK.filter(w => w.category === key).sort(byNewest) }));

  $("#work-sections").innerHTML = groups.map(g => `
    <section class="work-section wrap" id="${g.key}">
      <div class="ws-head reveal">
        <h2>${g.label}</h2>
        <div class="ws-roles">
          <span class="label">My role</span>
          <div class="chips">${g.roles.split(", ").map(r => `<span>${r}</span>`).join("")}</div>
        </div>
      </div>
      <div class="card-grid ${g.key === "books" ? "books" : ""}">${g.items.map(i => card(i)).join("")}</div>
    </section>`).join("");

  $("#timeline").innerHTML = EXPERIENCE.map(e => `
    <article class="tl reveal">
      <div class="tl-top"><a class="tl-logo-link" href="${e.site}" target="_blank" rel="noopener" aria-label="${e.org} website"><img class="tl-logo" src="${e.logo}" alt="${e.org} logo" loading="lazy"></a><div class="tl-side">${e.years ? `<p class="tl-years">${e.years}</p>` : ""}<span class="tl-type">${e.type}</span></div></div>
      <h3>${e.role}</h3>
      <p class="tl-org">${e.org}</p>
      <ul>${e.points.map(p => `<li>${p}</li>`).join("")}</ul>
    </article>`).join("");
}

/* ---------- motion ---------- */
function countUp(el) {
  const target = Number(el.dataset.count), suffix = el.dataset.suffix || "", t0 = performance.now();
  const tick = now => {
    const p = Math.min(1, (now - t0) / 1400);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString("en-IN") + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function setupMotion() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      $$("[data-count]", e.target).forEach(countUp);
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
  $$(".reveal").forEach(el => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  fillShared();
  if (page === "home") renderHome();
  if (page === "education") renderEducation();
  if (page === "work") renderWork();
  setupMotion();
  if (location.hash) setTimeout(() => $(location.hash)?.scrollIntoView(), 50);
});
