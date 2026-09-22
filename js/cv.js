/* Printable two-page CV. Every line comes from js/data.js, so updating the
   website updates the CV; the page split is worked out when the CV opens. */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const host = url => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const list = (items, fn) => items.map(fn).join("");

/* ---------- fill ---------- */
const [first, ...rest] = PROFILE.name.split(" ");
$("#cv-name").innerHTML = `${first} <em>${rest.join(" ")}</em>`;
$("#cv-titles").innerHTML = PROFILE.titles.join(" <i>/</i> ");
$("#cv-pitch").textContent = `${PROFILE.intro} ${PROFILE.focus}`;
$("#cv-photo").src = PROFILE.portrait;
$("#cv-photo").alt = PROFILE.name;

$("#cv-contact").innerHTML = list([
  { label: "Email", text: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: "LinkedIn", text: host(PROFILE.linkedin), href: PROFILE.linkedin },
  { label: "Website", text: host(PROFILE.website), href: PROFILE.website },
], c => `<li><span>${c.label}</span><a href="${c.href}">${c.text}</a></li>`);

$("#cv-do").innerHTML = list(HOME_ROLES, r => `<li><b>${r.role}</b>${r.line}</li>`);

$("#cv-edu").innerHTML = list(EDUCATION, e => `
  <li>
    <b>${e.degree}</b>
    <span>${e.school}, ${e.place}</span>
    <small>${e.years} · ${e.score}</small>
  </li>`);

$("#cv-stats").innerHTML = list(STATS.filter(s => !s.text), s => `<li><b>${s.n}${s.suffix}</b>${s.label}</li>`);

$("#cv-ach").innerHTML = list(ACHIEVEMENTS, a => `<li><b>${a.title}${a.year ? ` <small>${a.year}</small>` : ""}</b>${a.text}</li>`);

$("#cv-skills").innerHTML = list(SKILLS, s => `<li>${s}</li>`);

$("#cv-roles-1").innerHTML = list(EXPERIENCE, e => `
  <article class="cv-job">
    <div class="cv-job-top">
      <h3>${e.role}</h3>
      <span class="cv-when">${e.years}</span>
    </div>
    <p class="cv-org"><a href="${e.site}">${e.org}</a> <span>· ${e.type}</span></p>
    <ul>${e.points.map(p => `<li>${p}</li>`).join("")}</ul>
  </article>`);

$("#cv-site").href = PROFILE.website;
$("#cv-site").textContent = host(PROFILE.website);

/* ---------- paginate ----------
   All roles start on page one. Laid out at A4 size, roles that don't fit move
   to page two, then spare room on each page is shared out between the roles
   (capped, so a short page doesn't look stretched). */
const MAX_EXTRA_GAP = 22; // px added under each role at most

const innerBottom = sheet => sheet.getBoundingClientRect().bottom - parseFloat(getComputedStyle(sheet).paddingBottom);
const lastBottom = col => col.lastElementChild.getBoundingClientRect().bottom;

function paginate() {
  const root = document.documentElement;
  const p1 = $("#page-1"), p2 = $("#page-2");
  const jobs1 = $("#cv-roles-1"), jobs2 = $("#cv-roles-2");
  root.classList.add("cv-measure");

  const overflows = () => Math.max(...$$(".cv-side, .cv-main", p1).map(lastBottom)) > innerBottom(p1);
  while (jobs1.children.length > 1 && overflows()) jobs2.prepend(jobs1.lastElementChild);

  [[p1, jobs1, innerBottom(p1)], [p2, jobs2, $(".cv-foot", p2).getBoundingClientRect().top - 12]].forEach(([sheet, jobs, limit]) => {
    const n = jobs.children.length;
    if (!n) return;
    const spare = limit - lastBottom($(".cv-main", sheet));
    jobs.style.setProperty("--extra", `${Math.max(0, Math.min(MAX_EXTRA_GAP, spare / n))}px`);
  });

  root.classList.remove("cv-measure");
}

/* ---------- print ---------- */
$("#cv-print").addEventListener("click", () => print());

const photo = $("#cv-photo");
const photoReady = photo.complete ? Promise.resolve() : new Promise(r => { photo.onload = photo.onerror = r; });

Promise.all([document.fonts.ready, photoReady]).then(() => {
  paginate();
  if (new URLSearchParams(location.search).has("print")) setTimeout(print, 300);
});
