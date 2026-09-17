/* Sushant Kumar — portfolio data
   Compiled from CV, work-portfolio index, and Linktree. Every url below
   is one the source documents actually pointed to — nothing invented. */

const PROFILE = {
  name: "Sushant Kumar",
  role: "Social Impact Communications · Storytelling · Podcast · Fundraising",
  location: "JP Nagar, Bengaluru, India",
  email: "kumarsushant494@gmail.com",
  phone: "+91 83186 68335",
  linkedin: "https://www.linkedin.com/in/sushantkumar494/",
  linktree: "https://linktr.ee/hi.sushant",
  photo: "assets/img/profile.jpg",
  summary:
    "Social impact communications professional with 5+ years shaping narratives, brands and public engagement for education and development organisations. Selected for the Equity, Representation & Accessibility (ERA) Cohort at the Cannes Lions International Festival of Creativity 2026, and an ABBY Award-winning writer for the film Mothers of Courage.",
};

const STATS = [
  { n: 5, suffix: "+", label: "years in social-impact comms" },
  { n: 40, suffix: "", label: "workshops delivered, 12 cities" },
  { n: 4000, suffix: "+", label: "participants engaged" },
  { n: 15, suffix: "", label: "partner organisations, DoD" },
];

const EXPERIENCE = [
  {
    start: "2025-04",
    end: "Present",
    role: "Manager, Communications",
    org: "Mantra4Change",
    points: [
      "Leads and mentors the communications team across Bihar, Karnataka and Uttar Pradesh.",
      "Directed a statewide Brand Perception Survey — 20% lift in Mantra4Change's Brand Health Index.",
      "Executive Producer of InvokED Studio, a video podcast featuring education & social-impact leaders.",
      "Took Mothers of Courage — India's only SDG Lions–shortlisted campaign — to Cannes Lions 2026; selected for the ERA Cohort.",
    ],
  },
  {
    start: "2025-02",
    end: "Present",
    role: "Design & Communications Consultant",
    org: "Language and Learning Foundation",
    points: [
      "Contributed to the 10-Year Impact Report — narrative clarity and visual coherence.",
      "Co-developed a teacher handbook supporting FLN classroom implementation.",
    ],
  },
  {
    start: "2024-11",
    end: "2025-10",
    role: "Academic Mentor, Roshni Program",
    org: "CREA",
    points: [
      "Mentored 12 fellows over a 10-month cohort on constitutional values in grassroots social action.",
      "Facilitated learning sessions on democracy, liberty, equality, justice, fraternity and dignity.",
    ],
  },
  {
    start: "2023-10",
    end: "2025-03",
    role: "Associate Manager, Communications",
    org: "Mantra4Change",
    points: [
      "Built fundraising stories and assets for Dialogue for Social Equity, USA.",
      "Co-authored thought-leadership articles with the Co-founders & COO for tier-1 media.",
      "Designed and executed a hiring pipeline; facilitated internal storytelling L&D sessions.",
    ],
  },
  {
    start: "2022-06",
    end: "2023-09",
    role: "Program Communications Lead",
    org: "Mantra4Change",
    points: [
      "Built the org's messaging, positioning, channel and audience strategy from the ground up.",
      "Produced blogs, case studies, articles and program films documenting on-ground impact.",
      "Ran branding and campaigns for Mantra4Change's 10th Anniversary.",
    ],
  },
  {
    start: "2021-06",
    end: "Present",
    role: "Co-Founder",
    org: "Dialogues on Democracy & Development",
    points: [
      "Built partnerships with 15 government bodies, NGOs and academic institutions to date.",
      "Produced the video lecture series “Siddhant Samvidhan Ke” on constitutional values.",
      "Delivered 40 workshops across 12 cities, engaging 4,000+ participants.",
    ],
  },
];

const EDUCATION = [
  { school: "Maharshi Dayanand University, Rohtak", degree: "Bachelor of Education · 73%", period: "Aug 2023 – Jul 2025" },
  { school: "Azim Premji University, Bangalore", degree: "M.A. Education · 8.3/10 CGPA", period: "Sep 2020 – Jun 2022" },
  { school: "Banaras Hindu University, Varanasi", degree: "B.A. (Hons.) Political Science · 80.45%", period: "Jun 2017 – Sep 2020" },
  { school: "Sainik School Nalanda, Bihar", degree: "High School · Physics, Chemistry & Maths · 72.05%", period: "Jun 2009 – Mar 2016" },
];

const ACHIEVEMENTS = [
  "Selected for the ERA Cohort 2026 at Cannes Lions International Festival of Creativity, France",
  "ABBY Award–winning writer for the film Mothers of Courage",
  "Selected by Azim Premji University for the Alumni Incubator Accelerator Program",
  "Research paper “Can Constitutional Morality lead to improved civic engagement?” selected for the National Conference at Kerala University",
  "Invited panellist — Constitutional Values & Community Engagement, CREA",
  "RASTA Fellow (2024–25) for promoting constitutional literacy",
];

const SKILLS = [
  "Creative Writing & Editing", "Podcast & Video Production", "Strategic Communications",
  "Leadership & Mentoring", "Donor Communication", "Social Media Campaigns",
  "Logical & Analytical Thinking", "Curriculum Development",
];

const S = "assets/img/story/";

/* "Why did I get this opportunity?" — the five roles from the Cannes & France talk.
   filter = work-archive category the role links into. */
const ROLE_STORIES = [
  {
    role: "Character Scout",
    hi: "कैरेक्टर स्काउट",
    project: "Mothers of Courage",
    text: "Found the mothers at the heart of Shiksha Chaupal — village conversations in Bihar that keep girls in school — and wrote the film around them. It became India's only shortlist in the SDG Lions at Cannes Lions 2026, and an ABBY Award winner.",
    facts: ["28,000+ Chaupals", "14 districts", "800,000+ people mobilised"],
    photos: [S + "moc_post.jpg"],
    link: { label: "Read the press coverage", url: "https://aninews.in/news/business/indias-only-sdg-lions-shortlist-at-cannes-2026-comes-from-a-grassroots-education-movement-in-bihar20260627133645/" },
    filter: "campaigns",
  },
  {
    role: "Screenwriter",
    hi: "पटकथा लेखक",
    project: "Impact films",
    text: "Scripts for program films that let classrooms speak for themselves — project-based learning in Bihar, Andhra Pradesh and Nagaland, and the transformation of district teacher-training institutes with SCERT Bihar.",
    photos: [S + "film_c.jpg", S + "film_a.jpg", S + "film_d.jpg", S + "film_b.jpg", S + "film_e.jpg", S + "film_f.jpg"],
    link: { label: "Watch PBL in Bihar", url: "https://www.youtube.com/watch?v=TYWevl5MmJo" },
    filter: "films",
  },
  {
    role: "Executive Producer",
    hi: "एग्ज़ीक्यूटिव प्रोड्यूसर",
    project: "Up Close & Personal with Gen Next · InvokED Studio",
    text: "A video podcast where school students sit across the table from leaders in education and the social sector. Executive Producer and writer for Seasons 2 & 3.",
    photos: [S + "ep_studio_2.jpg", S + "ep_studio_1.jpg", S + "ep_logo.jpg"],
    link: { label: "Watch the playlist", url: "https://youtube.com/playlist?list=PLa_4M_7MRsGx-z0wIyVsszZbS2rBiNFJI&si=eehMtOk1QdTIY5CB" },
    filter: "films",
  },
  {
    role: "Writer & Editor",
    hi: "लेखक और संपादक",
    project: "Books of teachers' stories",
    text: "Story collections from public-school classrooms, in English and Hindi — People Doing PBL, Learning Beyond Chalk & Talk (Vol. II), छोटे कदम, बड़े बदलाव (Vol. I) and Small Steps to Build Great Schools (Vol. II).",
    photos: [S + "pub_people_pbl.jpg", S + "pub_lbct2.jpg", S + "pub_chhote_kadam.jpg", S + "pub_small_steps2.jpg"],
    link: { label: "Flip through Small Steps, Vol. II", url: "https://heyzine.com/flip-book/d4afa18256.html" },
    filter: "reports",
  },
  {
    role: "Facilitator",
    hi: "फ़ैसिलिटेटर",
    project: "Storytelling & constitutional values",
    text: "Workshops on storytelling and on liberty, equality and fraternity — 40 of them across 12 cities, for fellowships, universities and government departments.",
    photos: [S + "fac_2.jpg", S + "fac_6.jpg", S + "fac_3.jpg", S + "fac_4.jpg", S + "fac_1.jpg", S + "fac_5.jpg"],
    filter: "facilitation",
  },
];

const CANNES = {
  redCarpet: [S + "rc_1.jpg", S + "rc_2.jpg", S + "rc_3.jpg", S + "rc_4.jpg"],
  stats: [
    { n: 5, label: "days", hi: "दिन" },
    { n: 30, label: "sessions", hi: "सत्र" },
    { n: 80, label: "films", hi: "फ़िल्में" },
  ],
  sessions: [S + "ses_1.jpg", S + "ses_5.jpg", S + "ses_3.jpg", S + "ses_2.jpg", S + "ses_4.jpg"],
  friends: [S + "fr_1.jpg", S + "fr_5.jpg", S + "fr_3.jpg", S + "fr_4.jpg", S + "fr_2.jpg"],
  scholarships: [
    { name: "The Equity, Representation & Accessibility (ERA) Programme", note: "The one I was selected for" },
    { name: "The Jodi Harris Scholarship" },
    { name: "See It Be It" },
    { name: "The LIONS Scholarship" },
  ],
};

/* Civic observations from the France half of the talk. hi = the slide's own line. */
const FRANCE_NOTES = [
  { img: S + "fr_walk.jpg", title: "Pedestrians come first", hi: "पहली प्राथमिकता पैदल चलने वालों को" },
  { img: S + "fr_cycle.jpg", title: "Cyclists come second", hi: "दूसरी प्राथमिकता साइकिल चलाने वालों को" },
  { img: S + "fr_tram.jpg", title: "Public transport comes third", hi: "तीसरी प्राथमिकता पब्लिक ट्रांसपोर्ट को" },
  { img: S + "fr_boat.jpg", title: "15 days, 4 cities — a cab only once", hi: "15 दिन, 4 शहर, केवल एक बार कैब" },
  { img: S + "fr_118km.jpg", title: "118 km on foot", hi: "15 दिन 118 किलोमीटर पैदल" },
  { img: S + "fr_fountain.jpg", title: "Thirsty? Refill wherever there's public water", hi: "जहाँ सार्वजनिक पानी दिखे, वहीं भरिए और पीजिए" },
  { text: "Low-emission zones are mandatory in every city of 150,000+ people, under climate and air-quality law.", title: "Strict rules for clean air", hi: "स्वच्छ हवा के लिए सख़्त नियम" },
  { img: S + "fr_books.jpg", title: "Read, return — or leave a book behind", hi: "पढ़िए, लौटाइए या अपनी किताब छोड़ जाइए" },
  { img: S + "fr_chess.jpg", title: "Third spaces, everywhere", hi: "3rd Space" },
  { img: S + "fr_canal.jpg", title: "Clean drains", hi: "साफ़ नाले" },
  { img: S + "fr_rhone.jpg", title: "Clean rivers", hi: "साफ़ नदी", detail: "Polluting a river is a criminal offence — fines up to €75,000 and up to 2 years in jail." },
  { text: "Neither the market nor the government can take it without your permission.", title: "Your data is yours", hi: "आपका डेटा आपका है" },
  { img: S + "fr_smallcar.jpg", title: "Small vehicles, equally safe on the road", hi: "छोटे वाहन भी सड़कों पर बराबर सुरक्षित" },
  { img: S + "fr_streets.jpg", title: "No billboard jungle", hi: "होर्डिंग, बैनर और बाहरी विज्ञापनों पर सख़्त नियम", detail: "Size, number, placement and lighting of outdoor ads are regulated by law." },
];

const POPULATION = { france: "6.9 crore", bihar: "13.06 crore" };

/* category keys used for filtering — roles are the exact "capacity engaged in"
   lines from the work-portfolio index, one per category. */
const CATEGORIES = {
  reports: { label: "Annual Reports", roles: "Content curator, writer, designer, editor, publisher" },
  events: { label: "Events", roles: "Organizer, manager, collateral designer, space designer, facilitator" },
  campaigns: { label: "Campaigns", roles: "Concept development, design coordination, implementation, social media posting, outreach management" },
  articles: { label: "Articles", roles: "Author, co-author" },
  blogs: { label: "Blogs", roles: "Writer, publisher" },
  films: { label: "Impact Films", roles: "Script, screenplay, direction" },
  websites: { label: "Websites", roles: "Vendor management, sitemap creation, design support, web content development, site management" },
  social: { label: "Social Media", roles: "Content creator, community manager, analytics tracker, visual designer" },
  facilitation: { label: "Facilitation", roles: "Storytelling, presentation-making, narrative building, curriculum development, workshop facilitation, democratic values promotion" },
};

/* date: "YYYY-MM" for sorting.
   thumb priority: ytId (real YouTube thumbnail) > img (real og:image, fetched
   from the linked page) > category letterform card. */
const WORK = [
  // 2020
  { date: "2020-01", category: "social", title: "Event Poster", org: "Hardliner", url: "https://www.instagram.com/p/CDb-OVTJN-l/?igsh=MTQzNGZjcDZkcG54eA==" },
  { date: "2020-04", category: "social", title: "Story — Adivasi Lives Matter", org: "Independent", url: "https://www.instagram.com/p/CZq2nWFvY8n/?igsh=Z3h4cGZsdW1vMWhr", img: "assets/img/thumbs/af77843f50.jpg" },
  { date: "2020-06", category: "social", title: "Course Registration Poster — Adivasi Lives Matter", org: "Independent", url: "https://www.instagram.com/p/CUw4p4lN54Y/?igsh=MW9ocHR3NGt0Y3RmMQ==", img: "assets/img/thumbs/72e5833da9.jpg" },
  { date: "2020-09", category: "social", title: "Webinar & Article Poster", org: "Azim Premji University", url: "https://www.instagram.com/p/CGg72TlHN-w/?igsh=MTd4dzV5OXV0emo4eA==", img: "assets/img/thumbs/eea334fd3a.jpg" },

  // 2021
  { date: "2021-02", category: "social", title: "Online Talk Poster", org: "Azim Premji University", url: "https://www.instagram.com/p/CVUhsbBv16I/?igsh=YTdzeGNnNW1mcHk4", img: "assets/img/thumbs/32c384f0bc.jpg" },
  { date: "2021-04", category: "websites", title: "Dialogues on Democracy & Development", org: "DoD · built on Google Sites", url: "https://sites.google.com/view/dialoguesondemocracy/home" },
  { date: "2021-05", category: "social", title: "Story Breakdown", org: "Youth Ki Awaaz", url: "https://www.instagram.com/p/CWGDSNmpFFa/?utm_source=ig_web_copy_link", img: "assets/img/thumbs/b175912951.jpg" },
  { date: "2021-07", category: "social", title: "Article Breakdown", org: "Youth Ki Awaaz", url: "https://www.instagram.com/p/CXBfUxUBDzz/?utm_source=ig_web_copy_link", img: "assets/img/thumbs/7a132714c4.jpg" },
  { date: "2021-10", category: "social", title: "Admission Poster", org: "Azim Premji Foundation", url: "https://www.instagram.com/p/CQBJQfsnV9Q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/75fa90ad5c.jpg" },

  // 2022
  { date: "2022-03", category: "articles", title: "Transforming Public Education Through Government Partnerships", org: "Wipro Foundation — Samuhik Pahal", url: "https://issuu.com/wiprofoundation/docs/samuhik_pahal_vol_4_issue_2_-_working_with_the_gov/s/42295405" },
  { date: "2022-04", category: "articles", title: "Fostering Dialogue Amidst Decline in Public Discourse Civility, Shrinking Democratic Space", org: "Counterview", url: "https://www.counterview.in/2023/08/fostering-dialogue-amidst-decline-in.html" },
  { date: "2022-09", category: "campaigns", title: "The Un/Learn Series — 3 Seasons", org: "Mantra4Change · Teachers' Day Campaign", url: "https://www.mantra4change.org/the-unlearn-series/", img: "assets/img/thumbs/3a149e3b45.jpg" },
  { date: "2022-09", category: "social", title: "Street Play Post", org: "Mantra4Change", url: "https://www.instagram.com/p/CfrbuAOKRuk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/c16488c6ce.jpg" },
  { date: "2022-09", category: "social", title: "Induction Reel", org: "Mantra4Change", url: "https://www.instagram.com/reel/CgbnK1YDTwF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/70df5de32b.jpg" },
  { date: "2022-09", category: "social", title: "Internship Opportunity", org: "Dialogues on Democracy & Development", url: "https://www.instagram.com/p/ClqVvsnPqwW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/0b857bc1d6.jpg" },
  { date: "2022-09", category: "social", title: "Event Announcement", org: "Mantra4Change", url: "https://www.instagram.com/p/Cf3b8XEP8Kt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/473cd64a0d.jpg" },
  { date: "2022-10", category: "articles", title: "Reading Campaign: A Case Study of Micro-Improvement Project in Punjab", org: "Mantra4Change", url: "https://www.mantra4change.org/post/reading-campaign-a-micro-improvement-project" },
  { date: "2022-10", category: "blogs", title: "Show Up, No Matter What: Anil Kumble Shares His Leadership Mantra", org: "Mantra4Change", url: "https://www.mantra4change.org/post/show-up-no-matter-what-anil-kumble-shares-his-leadership-mantra", img: "assets/img/thumbs/1e42882812.jpg" },
  { date: "2022-12", category: "articles", title: "Dialogue to Strengthen Democracy", org: "Azim Premji University Alumni", url: "https://alumni.azimpremjiuniversity.edu.in/f/fostering-dialogues-a-pathway-to-strengthen-democracy-in-india-sushant-kumar-ma-education-2020-22-24045?source=view", img: "assets/img/thumbs/0852a66d29.jpg" },
  { date: "2022-12", category: "facilitation", title: "Fraternity and the Indian Constitution", org: "Dr. MCR HRD Institute, Telangana · Hyderabad", url: "https://www.instagram.com/p/CoaKacsvNp-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/6968340b1b.jpg" },

  // 2023
  { date: "2023-01", category: "facilitation", title: "The Preamble of the Indian Constitution", org: "Christ University · Bangalore", url: "https://www.instagram.com/p/CrbUwzQPk99/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/b2970e8068.jpg" },
  { date: "2023-02", category: "events", title: "10-Year Celebration — A Decade-Long Memorandum", org: "Mantra4Change", url: "https://www.mantra4change.org/10th-anniversary-of-mantra4change-the-evening-we-all-waited-for/", img: "assets/img/thumbs/2115be4e41.jpg" },
  { date: "2023-02", category: "events", title: "Manthan — Annual Leadership Meet", org: "Mantra4Change", url: "https://www.instagram.com/p/CpRvfeWP7mF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/3e6fc3a88c.jpg" },
  { date: "2023-03", category: "reports", title: "Annual Report 2022-23 — Inspire Enable Transform", org: "Mantra4Change", url: "https://www.mantra4change.org/wp-content/uploads/2024/08/22-23_compressed.pdf" },
  { date: "2023-03", category: "facilitation", title: "Curriculum Development on Democratic Values", org: "Social Audit Society, Govt. of Bihar · Patna", url: "https://docs.google.com/document/d/1c_wXJjlXhNHlKANVT818sT3RIOqYFep4/edit", img: "assets/img/thumbs/56929fd2bb.jpg" },
  { date: "2023-04", category: "reports", title: "Conference Report — Constitutional Literacy for Pastoral Leadership", org: "Dialogues on Democracy & Development", url: "https://bit.ly/ConfReportECC" },
  { date: "2023-04", category: "films", title: "How Are We Solving for Speed, Scale and Sustainability?", org: "Mantra4Change · Brand Video", url: "https://www.youtube.com/watch?v=cqtXSSKfmV0&t=51s", ytId: "cqtXSSKfmV0" },
  { date: "2023-04", category: "blogs", title: "Punjab Education Collective — Winner, Collective Social Innovation Award", org: "Mantra4Change · The Schwab Foundation", url: "https://www.mantra4change.org/punjab-education-collective-winner-of-collective-social-innovation-award-by-the-schwab-foundation/", img: "assets/img/thumbs/2b2dc3cfdd.jpg" },
  { date: "2023-05", category: "facilitation", title: "Five-Day Constitutional Literacy Program", org: "School of Politics, ECC · Bangalore", url: "https://sites.google.com/view/dialoguesondemocracy/workshops/school-of-politics" },
  { date: "2023-07", category: "articles", title: "Systemic Approach to the Development of Education Leadership", org: "Wipro Foundation — Samuhik Pahal", url: "https://issuu.com/wiprofoundation/docs/samuhik_pahal_vol_3_issue_12_-_school_leadership/16" },
  { date: "2023-07", category: "blogs", title: "Innovative Approaches to Public Goods in Education: Solution Packages", org: "Mantra4Change", url: "https://www.mantra4change.org/innovative-approaches-to-public-goods-in-education-solution-packages-by-mantra4change/", img: "assets/img/thumbs/69ee81aa9d.jpg" },
  { date: "2023-09", category: "websites", title: "Mantra4Change US", org: "built on Wix", url: "https://www.mantra4changeus.org/", img: "assets/img/thumbs/d2603be740.jpg" },
  { date: "2023-09", category: "articles", title: "Teacher Education and Training in India: Government Policy Analysis Since Independence", org: "Mantra4Change", url: "https://www.mantra4change.org/post/teacher-education-and-training-in-india-government-policy-analysis-since-independence", img: "assets/img/thumbs/4b00b49965.jpg" },
  { date: "2023-09", category: "events", title: "Dialogue for Social Equity — Fundraising Event", org: "REACH India Collective", url: "https://www.instagram.com/p/Cy5Nj-kuMOv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/7e1f7ab2f4.jpg" },
  { date: "2023-09", category: "social", title: "10 Years of Mantra", org: "Mantra4Change", url: "https://www.instagram.com/p/CpkjFgQv4wK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/ea9e145f69.jpg" },
  { date: "2023-09", category: "social", title: "Annual Report Cover", org: "Mantra4Change", url: "https://www.instagram.com/p/CwKHe_JuVNY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/b96b963877.jpg" },
  { date: "2023-09", category: "social", title: "Course Registration", org: "Dialogues on Democracy & Development", url: "https://www.instagram.com/p/CtrNsOdP7Gj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/830a3c26d3.jpg" },
  { date: "2023-09", category: "social", title: "Conference Report Cover", org: "Dialogues on Democracy & Development", url: "https://www.instagram.com/p/Cpzkw6iPksk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/f659a94c1d.jpg" },
  { date: "2023-11", category: "films", title: "#EveryChildDreams", org: "Mantra4Change · Children's Day", url: "https://www.instagram.com/reel/CznWMuBtaeM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/9bcd485e33.jpg" },
  { date: "2023-11", category: "films", title: "#IamThankful", org: "Mantra4Change · Thanksgiving", url: "https://www.instagram.com/reel/CzJFRGSs92G/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/c87fd16b5d.jpg" },

  // 2024
  { date: "2024-02", category: "events", title: "InvokED — Global Dialogue on Education Leadership", org: "ShikshaLokam", url: "https://shikshalokam.org/invoked/" },
  { date: "2024-02", category: "films", title: "Fraternity: The Missing Connection", org: "Dialogues on Democracy & Development", url: "https://www.youtube.com/watch?v=0wxzEEbkVLI", ytId: "0wxzEEbkVLI" },
  { date: "2024-02", category: "facilitation", title: "Curriculum Development Workshop", org: "Dept. of Rural Development, Karnataka · Bangalore", url: "https://www.linkedin.com/posts/sushantkumar494_constitution-community-culture-activity-7155252311240364032-KCPv?utm_source=share&utm_medium=member_desktop" },
  { date: "2024-03", category: "facilitation", title: "Constitutional Literacy Workshop", org: "South Asian Institute of Advanced Christian Studies · Bangalore", url: "https://www.linkedin.com/posts/democratic_dialogues_workshop-at-saiacs-ugcPost-7175517856460136449-fjFV?utm_source=share&utm_medium=member_desktop" },
  { date: "2024-04", category: "campaigns", title: "The Letter Series", org: "Mantra4Change · Writing Campaign (Apr–Aug)", url: "https://www.linkedin.com/posts/kahaaniwaladost_the-letter-series-activity-7229371074612748288-I3jZ?utm_source=share&utm_medium=member_desktop" },
  { date: "2024-05", category: "films", title: "PBL in Bihar — Education Above All × Mantra4Change × SCERT Bihar", org: "Mantra4Change", url: "https://www.youtube.com/watch?v=TYWevl5MmJo", ytId: "TYWevl5MmJo" },
  { date: "2024-06", category: "reports", title: "Annual Report 2023-24 — Making Learning Fun & Engaging", org: "Mantra4Change", url: "https://www.mantra4change.org/wp-content/uploads/2024/08/Annual-Report-2023-24_compressed.pdf" },
  { date: "2024-06", category: "blogs", title: "Five Ways in Which DIETs Can Change the Education Landscape of India", org: "Mantra4Change", url: "https://www.mantra4change.org/five-ways-in-which-the-district-institute-of-education-training/", img: "assets/img/thumbs/2e2c39896e.jpg" },
  { date: "2024-07", category: "facilitation", title: "Session on Fraternity", org: "Dasra Fellowship Program · Mumbai", url: "https://www.linkedin.com/posts/sushantkumar494_constitutionalliteracy-democracy-liberty-activity-7222971096545812482-QVIm?utm_source=share&utm_medium=member_desktop", img: "assets/img/thumbs/38f9fbb695.jpg" },
  { date: "2024-08", category: "films", title: "Transforming DIETs in Bihar", org: "SCERT Bihar · District Empowerment", url: "https://www.youtube.com/watch?v=xjLLecAgDwE&t=11s", ytId: "xjLLecAgDwE" },
  { date: "2024-08", category: "facilitation", title: "Fraternity and the Indian Constitution", org: "Karta Initiative × Azim Premji University · Bangalore", url: "https://www.linkedin.com/posts/karta-initiative-india-foundation_karta-scholars-workshop-azim-premji-university-ugcPost-7240207535847133185-TER3?utm_source=share&utm_medium=member_desktop" },
  { date: "2024-09", category: "websites", title: "Mantra4Change", org: "rebuilt on WordPress", url: "https://www.mantra4change.org/", img: "assets/img/thumbs/8e40a099a1.jpg" },
  { date: "2024-09", category: "events", title: "Author Talk — Education Leadership in India", org: "Mantra4Change", url: "https://www.instagram.com/p/C-XPTg_J5w-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/80db797ab9.jpg" },
  { date: "2024-10", category: "blogs", title: "Why Small Steps Matter in the Long Journey: Unpacking Micro-Improvement", org: "Mantra4Change", url: "https://www.mantra4change.org/why-small-steps-matter-in-the-long-journey-unpacking-the-meaning-of-micro-improvement/", img: "assets/img/thumbs/0087718247.jpg" },
  { date: "2024-10", category: "campaigns", title: "Monday Meme Series — Democracy Through Memes", org: "Dialogues on Democracy & Development", url: "https://www.instagram.com/p/C-keZiVPag7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/6cb0f6aec0.jpg" },
  { date: "2024-10", category: "facilitation", title: "Session on Storytelling", org: "Missing Millions · Bangalore", url: "https://www.linkedin.com/posts/resleevarghese_aarohfellowship-missingmillionsmovement-inclusion-ugcPost-7242885907706474496-93gt?utm_source=share&utm_medium=member_desktop", img: "assets/img/thumbs/402c695eda.jpg" },
  { date: "2024-11", category: "reports", title: "A to Z of a Program Through a Photostory Book", org: "Language and Learning Foundation · Bihar FLN Handbook", url: "https://www.mantra4change.org/wp-content/uploads/2024/08/bihar-handbook_compressed.pdf" },
  { date: "2024-11", category: "films", title: "Making Learning Fun & Engaging Through PBL", org: "Mantra4Change · Andhra Pradesh", url: "https://www.youtube.com/watch?v=kR4lGZifQdY", ytId: "kR4lGZifQdY" },
  { date: "2024-11", category: "websites", title: "Shikshagraha", org: "built on Wix", url: "https://shikshagraha.org/", img: "assets/img/thumbs/f3c1d17ef1.jpg" },
  { date: "2024-11", category: "events", title: "Shiksha Samvad — HNI Roundtable", org: "Shikshagraha", url: "https://www.linkedin.com/feed/update/urn:li:activity:7259828724353622017" },
  { date: "2024-11", category: "campaigns", title: "Democracy Everyday, Dialogue Everyday", org: "Dialogues on Democracy & Development", url: "https://www.instagram.com/p/DBNzMUtJNiQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/0522a95591.jpg" },
  { date: "2024-11", category: "articles", title: "Bridging the Gap: How School Leadership Is Revolutionizing Parental Involvement in Public Schools", org: "YourStory", url: "https://yourstory.com/socialstory/2024/11/school-leadership-involving-parents-schools-education" },
  { date: "2024-11", category: "facilitation", title: "Liberty, Equality & Fraternity", org: "Roshni Fellowship, CREA · Patna", url: "https://www.linkedin.com/posts/democratic_dialogues_constitutional-values-workshop-ugcPost-7265337220075536384-6CG7?utm_source=share&utm_medium=member_desktop" },
  { date: "2024-11", category: "social", title: "Manthan Reel", org: "Mantra4Change", url: "https://www.instagram.com/reel/C34K-Potl1T/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/d58ce0d16e.jpg" },
  { date: "2024-11", category: "social", title: "Impact Post", org: "Dialogues on Democracy & Development", url: "https://www.instagram.com/p/C6Avj_uJD1A/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "assets/img/thumbs/188feb1d21.jpg" },
  { date: "2024-11", category: "social", title: "Book Recommendation", org: "Mantra4Change", url: "https://www.linkedin.com/posts/mantra4change_books-on-education-leadership-ugcPost-7213843949893898240-2F2o?utm_source=share&utm_medium=member_desktop" },
  { date: "2024-11", category: "social", title: "Carousel Story", org: "Mantra4Change", url: "https://www.linkedin.com/feed/update/urn:li:activity:7265684360966615040" },
  { date: "2024-12", category: "articles", title: "Understanding, Valuing and Strengthening Democracy", org: "Desh Apnayen Sahyog Foundation", url: "https://blog.deshapnayen.org/2024/12/01/article-by-sushant-kumar-and-anjor-bhaskar/", img: "assets/img/thumbs/e4fdaac93e.jpg" },

  // 2025
  { date: "2025-02", category: "websites", title: "Dialogues on Democracy & Development", org: "new dedicated website", url: "https://www.dialoguesondemocracy.org/" },
  { date: "2025-03", category: "articles", title: "Can Democracy Education Help Instill 'Constitutional Morality'?", org: "Dialogues on Democracy & Development · Case Study", url: "https://www.dialoguesondemocracy.org/blog/dXunHtYVY68juq46pUfM" },
  { date: "2025-04", category: "films", title: "Up Close & Personal with Gen Next — Seasons 2 & 3", org: "InvokED Studio · Executive Producer & Writer", url: "https://youtube.com/playlist?list=PLa_4M_7MRsGx-z0wIyVsszZbS2rBiNFJI&si=eehMtOk1QdTIY5CB", img: "assets/img/thumbs/36de93c740.jpg" },
  { date: "2025-06", category: "blogs", title: "A Female Bus Conductor Making Education Accessible for Children", org: "Shikshagraha", url: "https://shikshagraha.org/uncategorized/a-movement-is-truly-a-movement-when-everyone-finds-a-way-to-join/", img: "assets/img/thumbs/a54e0fe82a.jpg" },
  { date: "2025-07", category: "articles", title: "Is the NCERT Textbook Rationalization Rational?", org: "Dialogues on Democracy & Development", url: "https://www.instagram.com/p/DMkINsBSPUV/?img_index=1", img: "assets/img/thumbs/b6132374f5.jpg" },
  { date: "2025-09", approx: true, category: "reports", title: "People Doing PBL — Stories of Project-Based Learning Champions", org: "Mantra4Change × Education Above All · Writer & Editor", img: S + "pub_people_pbl.jpg" },
  { date: "2025-09", approx: true, category: "reports", title: "Learning Beyond Chalk & Talk — Volume II", org: "Mantra4Change · Writer & Editor", img: S + "pub_lbct2.jpg" },
  { date: "2025-09", approx: true, category: "reports", title: "छोटे कदम, बड़े बदलाव — Volume I", org: "Stories of education leaders · Writer & Editor", img: S + "pub_chhote_kadam.jpg" },
  { date: "2025-09", approx: true, category: "reports", title: "Small Steps to Build Great Schools — Volume II", org: "Mantra4Change · Writer & Editor", url: "https://heyzine.com/flip-book/d4afa18256.html", img: S + "pub_small_steps2.jpg" },
  { date: "2026-06", category: "campaigns", title: "Mothers of Courage — Shifting Societal Norms, One Conversation at a Time", org: "Shiksha Chaupal · India's only SDG Lions shortlist, Cannes Lions 2026", url: "https://aninews.in/news/business/indias-only-sdg-lions-shortlist-at-cannes-2026-comes-from-a-grassroots-education-movement-in-bihar20260627133645/", img: S + "moc_post.jpg", featured: true },
  { date: "2025-08", category: "articles", title: "Research: Is RSS an NGO?", org: "Dialogues on Democracy & Development", url: "https://www.instagram.com/p/DSSRUoekkWA/?img_index=1", img: "assets/img/thumbs/caee5dab6d.jpg" },
];
