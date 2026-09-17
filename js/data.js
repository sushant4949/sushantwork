/* Sushant Kumar portfolio content, shared by all three pages. */

const S = "assets/img/story/";
const T = "assets/img/thumbs/";

const PROFILE = {
  name: "Sushant Kumar",
  email: "kumarsushant494@gmail.com",
  phone: "+91 83186 68335",
  linkedin: "https://www.linkedin.com/in/sushantkumar494/",
  linktree: "https://linktr.ee/hi.sushant",
  portfolio: "https://drive.google.com/drive/folders/1iDiWkDljhmhKN8HVlShESBBqA675HYbx?usp=drive_link",
  photo: "assets/img/profile.jpg",
};

/* ---------- HOME ---------- */

const STATS = [
  { n: 5, suffix: "+", label: "years in social impact communications" },
  { n: 40, suffix: "", label: "workshops led" },
  { n: 12, suffix: "", label: "cities" },
  { n: 4000, suffix: "+", label: "people in the room" },
];

const HOME_ROLES = [
  { role: "Screenwriter", line: "Films that let classrooms speak for themselves.", img: S + "film_c.jpg", anchor: "films" },
  { role: "Executive Producer", line: "A podcast where school students sit across from leaders.", img: S + "ep_studio_2.jpg", anchor: "films" },
  { role: "Writer & Editor", line: "Books, essays and op eds on schools and democracy.", img: S + "pub_lbct2.jpg", anchor: "books" },
  { role: "Character Scout", line: "Finding the people a story is really about.", img: S + "moc_post.jpg", anchor: "campaigns" },
  { role: "Facilitator", line: "Forty workshops on storytelling and the Constitution.", img: S + "fac_2.jpg", anchor: "workshops" },
];

const CANNES = {
  photos: [S + "rc_1.jpg", S + "rc_3.jpg", S + "rc_2.jpg", S + "rc_4.jpg"],
  moments: [S + "ses_1.jpg", S + "fr_1.jpg"],
  stats: [
    { n: 5, label: "days" },
    { n: 30, label: "sessions" },
    { n: 80, label: "films" },
  ],
  pressUrl: "https://aninews.in/news/business/indias-only-sdg-lions-shortlist-at-cannes-2026-comes-from-a-grassroots-education-movement-in-bihar20260627133645/",
};

const ABOUT_TILES = [
  { label: "Right now", value: "Manager, Communications at Mantra4Change" },
  { label: "Since 2021", value: "Co-founder of Dialogues on Democracy & Development" },
  { label: "On the side", value: "Design and communications for Language and Learning Foundation" },
  { label: "Based in", value: "Bengaluru, India" },
  { label: "Studied", value: "Education at Azim Premji University. Political Science at BHU." },
  { label: "Cares about", value: "Public schools, girls' education and constitutional literacy" },
];

const SKILLS = [
  "Creative writing & editing", "Podcast & video production", "Strategic communications",
  "Donor communication", "Social media campaigns", "Curriculum development", "Leadership & mentoring",
];

/* ---------- EDUCATION ---------- */

const EDUCATION = [
  {
    school: "Maharshi Dayanand University",
    place: "Rohtak",
    degree: "Bachelor of Education",
    years: "2023 to 2025",
    score: "73%",
  },
  {
    school: "Azim Premji University",
    place: "Bengaluru",
    degree: "M.A. Education",
    years: "2020 to 2022",
    score: "8.3 / 10 CGPA",
    note: { text: "Featured by the alumni network for building Dialogues on Democracy & Development", url: "https://alumni.azimpremjiuniversity.edu.in/f/fostering-dialogues-a-pathway-to-strengthen-democracy-in-india-sushant-kumar-ma-education-2020-22-24045?source=view" },
  },
  {
    school: "Banaras Hindu University",
    place: "Varanasi",
    degree: "B.A. (Hons.) Political Science",
    years: "2017 to 2020",
    score: "80.45%",
  },
  {
    school: "Sainik School Nalanda",
    place: "Bihar",
    degree: "High School, Physics, Chemistry and Mathematics",
    years: "2009 to 2016",
    score: "72.05%",
  },
];

const ACHIEVEMENTS = [
  { year: "2026", title: "ERA Cohort, Cannes Lions", text: "Selected for the Equity, Representation and Accessibility cohort at the International Festival of Creativity in France.", img: S + "rc_1.jpg" },
  { title: "ABBY Award", text: "Award winning writer for the film Mothers of Courage.", img: S + "moc_post.jpg" },
  { year: "2024 to 2025", title: "RASTA Fellow", text: "Fellowship for promoting constitutional literacy." },
  { title: "Alumni Incubator Accelerator", text: "Selected by Azim Premji University." },
  { title: "National Conference paper", text: "“Can Constitutional Morality lead to improved civic engagement?” selected for the National Conference at Kerala University." },
  { title: "Invited panellist", text: "Constitutional Values and Community Engagement, hosted by CREA." },
];

/* ---------- WORK ---------- */

/* roles are the "capacity engaged in" lines from the original work index, merged per group */
const CATEGORIES = {
  films: { label: "Films & Podcast", roles: "Script, screenplay, direction, executive production" },
  writing: { label: "Writing", roles: "Author, co-author, writer, publisher" },
  books: { label: "Books & Reports", roles: "Content curator, writer, designer, editor, publisher" },
  campaigns: { label: "Campaigns & Events", roles: "Concept, design coordination, implementation, outreach, collateral design" },
  websites: { label: "Websites", roles: "Vendor management, sitemap, design support, web content, site management" },
  workshops: { label: "Workshops", roles: "Storytelling, narrative building, curriculum development, facilitation" },
};

/* date "YYYY-MM" (month omitted when unknown). home: shown under Selected work on the home page. */
const WORK = [
  // Films & Podcast
  { date: "2025-04", category: "films", title: "Up Close & Personal with Gen Next", dek: "Seasons 2 and 3 of the InvokED Studio video podcast", org: "InvokED Studio", url: "https://youtube.com/playlist?list=PLa_4M_7MRsGx-z0wIyVsszZbS2rBiNFJI&si=eehMtOk1QdTIY5CB", img: T + "36de93c740.jpg", home: true },
  { date: "2024-11", category: "films", title: "Making Learning Fun and Engaging", dek: "Project based learning in Andhra Pradesh", org: "Mantra4Change × Education Above All", url: "https://www.youtube.com/watch?v=kR4lGZifQdY", ytId: "kR4lGZifQdY" },
  { date: "2024-08", category: "films", title: "Transforming DIETs in Bihar", dek: "The District Empowerment Program with SCERT Bihar", org: "Mantra4Change × SCERT Bihar", url: "https://www.youtube.com/watch?v=xjLLecAgDwE", ytId: "xjLLecAgDwE" },
  { date: "2024-05", category: "films", title: "Project Based Learning in Bihar", dek: "Classrooms that learn by doing", org: "Education Above All × Mantra4Change × SCERT Bihar", url: "https://www.youtube.com/watch?v=TYWevl5MmJo", ytId: "TYWevl5MmJo" },
  { date: "2024-02", category: "films", title: "Fraternity, the Missing Connection", dek: "Episode one of Siddhant Samvidhan Ke, a series on constitutional values", org: "Dialogues on Democracy & Development", url: "https://www.youtube.com/watch?v=0wxzEEbkVLI", ytId: "0wxzEEbkVLI" },
  { date: "2023-04", category: "films", title: "Speed, Scale and Sustainability", dek: "A brand film on how Mantra4Change works", org: "Mantra4Change", url: "https://www.youtube.com/watch?v=cqtXSSKfmV0", ytId: "cqtXSSKfmV0" },

  // Writing
  { date: "2025-06", category: "writing", title: "A Female Bus Conductor Making Education Accessible", dek: "A story from the Shikshagraha movement", org: "Shikshagraha", url: "https://shikshagraha.org/blog/a-movement-is-truly-a-movement-when-everyone-finds-a-way-to-join/", img: T + "a54e0fe82a.jpg" },
  { date: "2025-03", category: "writing", title: "Can Democracy Education Instill Constitutional Morality?", dek: "A case study", org: "Dialogues on Democracy & Development", url: "https://www.dialoguesondemocracy.org/blog/dXunHtYVY68juq46pUfM" },
  { date: "2024-12", category: "writing", title: "Understanding, Valuing and Strengthening Democracy", dek: "Co-written with Anjor Bhaskar", org: "Desh Apnayen Sahyog Foundation", url: "https://blog.deshapnayen.org/2024/12/01/article-by-sushant-kumar-and-anjor-bhaskar/", img: T + "e4fdaac93e.jpg", home: true },
  { date: "2024-11", category: "writing", title: "Bridging the Gap", dek: "How school leadership is changing parental involvement in public schools", org: "YourStory", url: "https://yourstory.com/socialstory/2024/11/school-leadership-involving-parents-schools-education", home: true },
  { date: "2024-10", category: "writing", title: "Why Small Steps Matter in the Long Journey", dek: "Unpacking the meaning of micro improvement", org: "Mantra4Change", url: "https://www.mantra4change.org/blogs/why-small-steps-matter-in-the-long-journey-unpacking-the-meaning-of-micro-improvement/", img: T + "0087718247.jpg" },
  { date: "2024-06", category: "writing", title: "Five Ways DIETs Can Change Indian Education", dek: "On districts as the unit of change", org: "Mantra4Change", url: "https://www.mantra4change.org/blogs/five-ways-in-which-the-district-institute-of-education-training/", img: T + "2e2c39896e.jpg" },
  { date: "2023-09", category: "writing", title: "Teacher Education and Training in India", dek: "Government policy since Independence", org: "Mantra4Change", url: "https://www.mantra4change.org/blogs/teacher-education-and-training-in-india-government-policy-analysis-since-independence/", img: T + "4b00b49965.jpg" },
  { date: "2022-10", category: "writing", title: "Show Up, No Matter What", dek: "Anil Kumble on leadership", org: "Mantra4Change", url: "https://www.mantra4change.org/blogs/show-up-no-matter-what-anil-kumble-shares-his-leadership-mantra/", img: T + "1e42882812.jpg" },

  // Books & Reports
  { date: "2025", category: "books", title: "Small Steps to Build Great Schools", dek: "Volume II", org: "Mantra4Change", url: "https://heyzine.com/flip-book/d4afa18256.html", img: S + "pub_small_steps2.jpg", home: true },
  { date: "2025", category: "books", title: "People Doing PBL", dek: "Stories of project based learning champions", org: "Mantra4Change × Education Above All", img: S + "pub_people_pbl.jpg" },
  { date: "2025", category: "books", title: "Learning Beyond Chalk and Talk", dek: "Volume II. Stories of teachers in government schools", org: "Mantra4Change", img: S + "pub_lbct2.jpg" },
  { date: "2025", category: "books", title: "Chhote Kadam, Bade Badlav", dek: "Volume I. Small steps, big changes by education leaders", org: "Mantra4Change", img: S + "pub_chhote_kadam.jpg" },
  { date: "2024-06", category: "books", title: "Annual Report 2023-24", dek: "Making learning fun and engaging", org: "Mantra4Change", url: "https://www.mantra4change.org/wp-content/uploads/2024/08/Annual-Report-2023-24_compressed.pdf", img: T + "annual_report_2324.jpg" },
  { date: "2022-10", category: "books", title: "Parent Teacher Meetings in Bihar", dek: "A photo storybook from the Micro Improvement Project", org: "Mantra4Change × NIPUN Bihar Mission", url: "https://www.mantra4change.org/wp-content/uploads/2024/08/bihar-handbook_compressed.pdf", img: T + "ptm_photostory.jpg" },

  // Campaigns & Events
  { date: "2026-06", category: "campaigns", title: "Mothers of Courage", dek: "India's only SDG Lions shortlist at Cannes Lions 2026", org: "Shiksha Chaupal · Mantra Social Services × ShikshaLokam", url: "https://aninews.in/news/business/indias-only-sdg-lions-shortlist-at-cannes-2026-comes-from-a-grassroots-education-movement-in-bihar20260627133645/", img: S + "moc_post.jpg", home: true, featured: true },
  { date: "2024-10", category: "campaigns", title: "Monday Meme Series", dek: "Democracy, explained one meme at a time", org: "Dialogues on Democracy & Development", url: "https://www.instagram.com/p/C-keZiVPag7/", img: T + "6cb0f6aec0.jpg" },
  { date: "2023-02", category: "campaigns", title: "Ten Years of Mantra4Change", dek: "The anniversary evening and its campaign", org: "Mantra4Change", url: "https://www.mantra4change.org/blogs/10th-anniversary-of-mantra4change-the-evening-we-all-waited-for/", img: T + "2115be4e41.jpg" },
  { date: "2022-09", category: "campaigns", title: "The Un/Learn Series", dek: "A Teachers' Day campaign that ran for three seasons", org: "Mantra4Change", url: "https://www.mantra4change.org/the-unlearn-series/", img: T + "3a149e3b45.jpg" },

  // Websites
  { date: "2025-02", category: "websites", title: "Dialogues on Democracy & Development", dek: "dialoguesondemocracy.org", org: "Co-founded initiative", url: "https://www.dialoguesondemocracy.org/" },
  { date: "2024-11", category: "websites", title: "Shikshagraha", dek: "shikshagraha.org", org: "A movement for education", url: "https://shikshagraha.org/", img: T + "f3c1d17ef1.jpg" },
  { date: "2024-09", category: "websites", title: "Mantra4Change", dek: "mantra4change.org", org: "Rebuilt on WordPress", url: "https://www.mantra4change.org/", img: T + "8e40a099a1.jpg" },

  // Workshops
  { date: "2024-08", category: "workshops", title: "Fraternity and the Indian Constitution", dek: "Karta Initiative × Azim Premji University, Bengaluru", org: "Workshop", url: "https://www.linkedin.com/posts/karta-initiative-india-foundation_karta-scholars-workshop-azim-premji-university-ugcPost-7240207535847133185-TER3", img: S + "fac_2.jpg" },
  { date: "2024-07", category: "workshops", title: "A Session on Fraternity", dek: "Dasra Fellowship Program, Mumbai", org: "Workshop", url: "https://www.linkedin.com/posts/sushantkumar494_constitutionalliteracy-democracy-liberty-activity-7222971096545812482-QVIm", img: T + "38f9fbb695.jpg" },
  { date: "2023-05", category: "workshops", title: "Five Day Constitutional Literacy Program", dek: "School of Politics, ECC, Bengaluru", org: "Program", url: "https://sites.google.com/view/dialoguesondemocracy/workshops/school-of-politics" },
];

const EXPERIENCE = [
  { years: "2025 to now", role: "Manager, Communications", org: "Mantra4Change", points: [
    "Leads the communications team across Bihar, Karnataka and Uttar Pradesh",
    "Ran a statewide Brand Perception Survey that lifted the Brand Health Index by 20%",
    "Executive Producer of InvokED Studio",
    "Took Mothers of Courage to Cannes Lions 2026",
  ] },
  { years: "2025 to now", role: "Design & Communications Consultant", org: "Language and Learning Foundation", points: [
    "Contributed to the 10 Year Impact Report",
    "Co-developed a teacher handbook for FLN classrooms",
  ] },
  { years: "2024 to 2025", role: "Academic Mentor, Roshni Fellowship", org: "CREA", points: [
    "Mentored 12 fellows through a 10 month program on constitutional values",
  ] },
  { years: "2023 to 2025", role: "Associate Manager, Communications", org: "Mantra4Change", points: [
    "Built fundraising stories for Dialogue for Social Equity, USA",
    "Co-authored op eds with the founders for national media",
  ] },
  { years: "2022 to 2023", role: "Program Communications Lead", org: "Mantra4Change", points: [
    "Built the communications strategy from the ground up",
    "Scripted program films and ran the 10th anniversary campaign",
  ] },
  { years: "2021 to now", role: "Co-founder", org: "Dialogues on Democracy & Development", points: [
    "15 partner organisations and 40 workshops in 12 cities",
    "Produced the video series Siddhant Samvidhan Ke",
  ] },
];
