/* Printable two-page CV, built from the same data as the site. */

const $ = sel => document.querySelector(sel);
const host = url => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

$("#cv-contact").innerHTML = [
  { label: "Email", text: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: "LinkedIn", text: host(PROFILE.linkedin), href: PROFILE.linkedin },
  { label: "Website", text: host(PROFILE.website), href: PROFILE.website },
].map(c => `<li><span>${c.label}</span><a href="${c.href}">${c.text}</a></li>`).join("");

$("#cv-do").innerHTML = HOME_ROLES.map(r => `<li><b>${r.role}</b>${r.line}</li>`).join("");

$("#cv-edu").innerHTML = EDUCATION.map(e => `
  <li>
    <b>${e.degree}</b>
    <span>${e.school}, ${e.place}</span>
    <small>${e.years} · ${e.score}</small>
  </li>`).join("");

$("#cv-ach").innerHTML = ACHIEVEMENTS.map(a => `<li><b>${a.title}${a.year ? ` <small>${a.year}</small>` : ""}</b>${a.text}</li>`).join("");

$("#cv-skills").innerHTML = SKILLS.map(s => `<li>${s}</li>`).join("");

$("#cv-stats").innerHTML = STATS.filter(s => !s.text).map(s => `<li><b>${s.n}${s.suffix}</b>${s.label}</li>`).join("");

const job = e => `
  <article class="cv-job">
    <header class="cv-job-head">
      <a class="cv-logo" href="${e.site}" aria-label="${e.org} website"><img src="${e.logo}" alt="${e.org} logo"></a>
      <div class="cv-job-title">
        <div class="cv-job-top">
          <h3>${e.role}</h3>
          <span class="cv-when">${e.years}</span>
        </div>
        <p class="cv-org"><a href="${e.site}">${e.org}</a> <span>· ${e.type}</span></p>
      </div>
    </header>
    <ul>${e.points.map(p => `<li>${p}</li>`).join("")}</ul>
  </article>`;

/* the first three roles fit on page one; the rest continue on page two */
$("#cv-roles-1").innerHTML = EXPERIENCE.slice(0, 3).map(job).join("");
$("#cv-roles-2").innerHTML = EXPERIENCE.slice(3).map(job).join("");

const site = $("[data-site]");
site.href = PROFILE.website;
site.textContent = host(PROFILE.website);

$("#cv-print").addEventListener("click", () => print());

/* opened from a "Download CV" link: wait for fonts and the photo, then open the print dialog */
if (new URLSearchParams(location.search).has("print")) {
  const photo = $(".cv-photo");
  const photoReady = photo.complete ? Promise.resolve() : new Promise(r => { photo.onload = photo.onerror = r; });
  Promise.all([document.fonts.ready, photoReady]).then(() => setTimeout(print, 300));
}
