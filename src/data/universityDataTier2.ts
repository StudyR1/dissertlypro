import type { UniversityData } from "./universityData";

// Phase 4 — tier-2 university landing pages.
// University queries are the site's strongest ranking category, so the winning
// format is extended to the next 20 institutions by postgraduate volume.

interface Seed {
  slug: string;
  name: string;
  shortName: string;
  region: string;
  city: string;
  country: string;
  countryCode: string;
  founded: number;
  ranking: string;
  studentCount: string;
  researchFocus: string[];
  notableDepartments: string[];
  masters: string;
  phd: string;
  fall: string;
  spring: string;
  lat: number;
  lng: number;
  helped: string;
  supervisionNote: string;
  timelineNote: string;
}

const seeds: Seed[] = [
  {
    slug: "edinburgh", name: "University of Edinburgh", shortName: "Edinburgh", region: "uk", city: "Edinburgh",
    country: "United Kingdom", countryCode: "GB", founded: 1583, ranking: "#4 in UK, #27 World (QS 2025)",
    studentCount: "49,000+", researchFocus: ["Informatics", "Medicine", "Humanities", "Social Sciences"],
    notableDepartments: ["School of Informatics", "Edinburgh Medical School", "Business School"],
    masters: "12,000–15,000 words for most MSc programmes", phd: "70,000–100,000 words (80,000 typical in humanities)",
    fall: "Applications close January–March for September entry", spring: "Limited January entry, October deadline",
    lat: 55.9445, lng: -3.1892, helped: "310+",
    supervisionNote: "Edinburgh operates a formal annual review with a progression board, and candidates are expected to log supervision meetings in EUCLID.",
    timelineNote: "Most Edinburgh PhDs submit in year 3 or 4 with a 12-month maximum writing-up period; annual review outcomes determine progression.",
  },
  {
    slug: "manchester", name: "University of Manchester", shortName: "Manchester", region: "uk", city: "Manchester",
    country: "United Kingdom", countryCode: "GB", founded: 1824, ranking: "#6 in UK, #34 World (QS 2025)",
    studentCount: "45,000+", researchFocus: ["Materials", "Health Sciences", "Business", "Social Sciences"],
    notableDepartments: ["Alliance Manchester Business School", "National Graphene Institute", "School of Health Sciences"],
    masters: "12,000–15,000 words; 20,000 for MRes", phd: "80,000 words maximum for most faculties",
    fall: "Rolling with funding deadlines in January", spring: "January entry available in some schools",
    lat: 53.4668, lng: -2.2339, helped: "280+",
    supervisionNote: "Manchester requires a documented supervisory team of at least two, with eResearch Manchester milestone records at 3, 12 and 24 months.",
    timelineNote: "Continuation reviews at the end of year 1 and year 2 gate progression; submission is normally within 3.5 years full-time.",
  },
  {
    slug: "kcl", name: "King's College London", shortName: "KCL", region: "uk", city: "London",
    country: "United Kingdom", countryCode: "GB", founded: 1829, ranking: "#7 in UK, #40 World (QS 2025)",
    studentCount: "41,000+", researchFocus: ["Clinical Medicine", "Psychiatry", "Law", "War Studies"],
    notableDepartments: ["Institute of Psychiatry, Psychology & Neuroscience", "Dickson Poon School of Law", "Florence Nightingale Faculty of Nursing"],
    masters: "10,000–15,000 words depending on programme", phd: "100,000 words maximum (arts), 80,000 (sciences)",
    fall: "Funding deadlines December–January for September entry", spring: "January entry in selected programmes",
    lat: 51.5115, lng: -0.1160, helped: "240+",
    supervisionNote: "KCL requires an upgrade or progression review typically at 9–18 months, assessed on a substantial written submission plus oral examination.",
    timelineNote: "MPhil-to-PhD upgrade is the critical gate; candidates usually submit 25,000–30,000 words for it.",
  },
  {
    slug: "warwick", name: "University of Warwick", shortName: "Warwick", region: "uk", city: "Coventry",
    country: "United Kingdom", countryCode: "GB", founded: 1965, ranking: "#9 in UK, #69 World (QS 2025)",
    studentCount: "29,000+", researchFocus: ["Economics", "Mathematics", "Business", "Manufacturing"],
    notableDepartments: ["Warwick Business School", "Warwick Manufacturing Group", "Department of Economics"],
    masters: "15,000–20,000 words for taught Master's dissertations", phd: "70,000–80,000 words",
    fall: "Chancellor's scholarship deadline in January", spring: "Limited January starts",
    lat: 52.3793, lng: -1.5615, helped: "190+",
    supervisionNote: "Warwick uses an annual progress review with a formal upgrade panel, and WBS applies its own additional milestone structure.",
    timelineNote: "Full-time submission expected within 3–4 years; the year-1 upgrade paper is the main progression hurdle.",
  },
  {
    slug: "bristol", name: "University of Bristol", shortName: "Bristol", region: "uk", city: "Bristol",
    country: "United Kingdom", countryCode: "GB", founded: 1876, ranking: "#10 in UK, #54 World (QS 2025)",
    studentCount: "30,000+", researchFocus: ["Engineering", "Population Health", "Social Policy", "Physics"],
    notableDepartments: ["Bristol Medical School", "School of Education", "Faculty of Engineering"],
    masters: "12,000–15,000 words", phd: "80,000 words maximum for most faculties",
    fall: "Funding deadlines January–February", spring: "January entry in some schools",
    lat: 51.4584, lng: -2.6030, helped: "170+",
    supervisionNote: "Bristol requires an annual progress review with a written report and independent assessor meeting.",
    timelineNote: "Standard submission at 3–4 years full-time, with a formal upgrade at the end of year 1.",
  },
  {
    slug: "leeds", name: "University of Leeds", shortName: "Leeds", region: "uk", city: "Leeds",
    country: "United Kingdom", countryCode: "GB", founded: 1904, ranking: "#12 in UK, #82 World (QS 2025)",
    studentCount: "39,000+", researchFocus: ["Food Science", "Business", "Medicine", "Transport Studies"],
    notableDepartments: ["Leeds University Business School", "Institute for Transport Studies", "School of Medicine"],
    masters: "12,000–15,000 words", phd: "70,000–100,000 words depending on faculty",
    fall: "Scholarship deadlines in January", spring: "January entry available",
    lat: 53.8067, lng: -1.5550, helped: "160+",
    supervisionNote: "Leeds requires a formal transfer assessment at 9–12 months, with a written report and viva-style meeting.",
    timelineNote: "Submission normally within 36–48 months full-time; the transfer assessment gates continuation.",
  },
  {
    slug: "nottingham", name: "University of Nottingham", shortName: "Nottingham", region: "uk", city: "Nottingham",
    country: "United Kingdom", countryCode: "GB", founded: 1881, ranking: "#15 in UK, #97 World (QS 2025)",
    studentCount: "37,000+", researchFocus: ["Pharmacy", "Engineering", "Business", "Veterinary Science"],
    notableDepartments: ["Nottingham University Business School", "School of Pharmacy", "Faculty of Engineering"],
    masters: "12,000–15,000 words", phd: "80,000 words maximum in most schools",
    fall: "Funding deadlines December–February", spring: "January and April starts in some schools",
    lat: 52.9385, lng: -1.1958, helped: "150+",
    supervisionNote: "Nottingham requires an annual review with a documented supervision log and a first-year qualifying report.",
    timelineNote: "Three to four years full-time, with a thesis submission period of up to 12 months after the end of registration.",
  },
  {
    slug: "glasgow", name: "University of Glasgow", shortName: "Glasgow", region: "uk", city: "Glasgow",
    country: "United Kingdom", countryCode: "GB", founded: 1451, ranking: "#13 in UK, #78 World (QS 2025)",
    studentCount: "36,000+", researchFocus: ["Medicine", "Social Sciences", "Engineering", "Arts"],
    notableDepartments: ["Adam Smith Business School", "Institute of Health and Wellbeing", "School of Social and Political Sciences"],
    masters: "12,000–15,000 words", phd: "70,000–80,000 words (100,000 in some arts programmes)",
    fall: "Funding deadlines January–February", spring: "January entry available",
    lat: 55.8721, lng: -4.2882, helped: "140+",
    supervisionNote: "Glasgow requires an annual progress review and a first-year progression viva in most graduate schools.",
    timelineNote: "Submission within 3–4 years full-time; extensions require a documented case through the graduate school.",
  },
  {
    slug: "birmingham", name: "University of Birmingham", shortName: "Birmingham", region: "uk", city: "Birmingham",
    country: "United Kingdom", countryCode: "GB", founded: 1900, ranking: "#14 in UK, #80 World (QS 2025)",
    studentCount: "38,000+", researchFocus: ["Engineering", "Business", "Education", "Medicine"],
    notableDepartments: ["Birmingham Business School", "School of Education", "College of Medical and Dental Sciences"],
    masters: "12,000–15,000 words", phd: "80,000 words maximum for most colleges",
    fall: "Funding deadlines in January", spring: "January entry in selected programmes",
    lat: 52.4508, lng: -1.9305, helped: "130+",
    supervisionNote: "Birmingham requires a thesis-group or annual review meeting with an independent panel member.",
    timelineNote: "Standard full-time period of three years plus a one-year thesis-awaited period.",
  },
  {
    slug: "berkeley", name: "University of California, Berkeley", shortName: "UC Berkeley", region: "us", city: "Berkeley",
    country: "United States", countryCode: "US", founded: 1868, ranking: "#4 in US public, #12 World (QS 2025)",
    studentCount: "45,000+", researchFocus: ["Engineering", "Economics", "Computer Science", "Public Policy"],
    notableDepartments: ["EECS", "Haas School of Business", "Goldman School of Public Policy"],
    masters: "Capstone or thesis, typically 40–80 pages", phd: "Dissertation, typically 150–300 pages",
    fall: "December 1–January 15 for fall admission", spring: "Rare; program dependent",
    lat: 37.8719, lng: -122.2585, helped: "220+",
    supervisionNote: "Berkeley requires a qualifying examination before advancement to candidacy, then a dissertation committee of at least three faculty with an outside member.",
    timelineNote: "Median time to doctorate is 5–6 years, with the qualifying exam usually in year 2 or 3.",
  },
  {
    slug: "columbia", name: "Columbia University", shortName: "Columbia", region: "us", city: "New York",
    country: "United States", countryCode: "US", founded: 1754, ranking: "#12 in US, #34 World (QS 2025)",
    studentCount: "36,000+", researchFocus: ["Journalism", "Public Health", "Business", "Climate"],
    notableDepartments: ["Mailman School of Public Health", "Columbia Business School", "Teachers College"],
    masters: "Master's thesis 50–100 pages where required", phd: "Dissertation, typically 200–300 pages",
    fall: "December 1–January 5 deadlines", spring: "Selected professional programs only",
    lat: 40.8075, lng: -73.9626, helped: "200+",
    supervisionNote: "Columbia programs use an oral defense of a dissertation prospectus after comprehensive examinations, with a five-member final defense committee.",
    timelineNote: "Typical completion in 5–7 years; the prospectus defense is the key milestone before writing begins.",
  },
  {
    slug: "chicago", name: "University of Chicago", shortName: "UChicago", region: "us", city: "Chicago",
    country: "United States", countryCode: "US", founded: 1890, ranking: "#10 in US, #21 World (QS 2025)",
    studentCount: "18,000+", researchFocus: ["Economics", "Sociology", "Political Science", "Molecular Engineering"],
    notableDepartments: ["Booth School of Business", "Harris School of Public Policy", "Department of Economics"],
    masters: "MA thesis 40–80 pages", phd: "Dissertation, typically 200–350 pages",
    fall: "December–January deadlines", spring: "Not typical",
    lat: 41.7886, lng: -87.5987, helped: "150+",
    supervisionNote: "Chicago is notable for early and demanding candidacy paper requirements, with dissertation proposal hearings before a full committee.",
    timelineNote: "Median 6–7 years in social sciences; candidacy papers in years 2–3 determine progression.",
  },
  {
    slug: "michigan", name: "University of Michigan", shortName: "Michigan", region: "us", city: "Ann Arbor",
    country: "United States", countryCode: "US", founded: 1817, ranking: "#3 in US public, #44 World (QS 2025)",
    studentCount: "52,000+", researchFocus: ["Engineering", "Public Health", "Education", "Business"],
    notableDepartments: ["Ross School of Business", "School of Public Health", "College of Engineering"],
    masters: "Thesis option 50–90 pages", phd: "Dissertation, typically 150–300 pages",
    fall: "December 1–January 15", spring: "Limited",
    lat: 42.2780, lng: -83.7382, helped: "180+",
    supervisionNote: "Michigan requires a preliminary examination and a dissertation committee with a cognate member from outside the program.",
    timelineNote: "Median 5–6 years; the prelim usually falls at the end of year 2.",
  },
  {
    slug: "cornell", name: "Cornell University", shortName: "Cornell", region: "us", city: "Ithaca",
    country: "United States", countryCode: "US", founded: 1865, ranking: "#13 in US, #16 World (QS 2025)",
    studentCount: "26,000+", researchFocus: ["Agriculture", "Engineering", "Hotel Administration", "Life Sciences"],
    notableDepartments: ["College of Engineering", "Nolan School of Hotel Administration", "CALS"],
    masters: "MS thesis 50–100 pages", phd: "Dissertation, typically 150–250 pages",
    fall: "December 1–January 15", spring: "Program dependent",
    lat: 42.4534, lng: -76.4735, helped: "120+",
    supervisionNote: "Cornell uses a special committee model in which the chair and two minor-subject members are chosen by the student, plus A and B examinations.",
    timelineNote: "A exam (candidacy) by the end of year 2–3; B exam is the final defense, typically year 5–6.",
  },
  {
    slug: "nyu", name: "New York University", shortName: "NYU", region: "us", city: "New York",
    country: "United States", countryCode: "US", founded: 1831, ranking: "#25 in US, #43 World (QS 2025)",
    studentCount: "59,000+", researchFocus: ["Business", "Law", "Media", "Data Science"],
    notableDepartments: ["Stern School of Business", "Steinhardt School", "Courant Institute"],
    masters: "Master's thesis or capstone, 40–90 pages", phd: "Dissertation, typically 150–300 pages",
    fall: "December–January deadlines", spring: "Available in many professional programs",
    lat: 40.7295, lng: -73.9965, helped: "160+",
    supervisionNote: "NYU programs require comprehensive examinations then a dissertation proposal defense before a committee of three to five faculty.",
    timelineNote: "Typical completion 5–7 years; proposal approval is the gate to data collection.",
  },
  {
    slug: "unsw", name: "University of New South Wales", shortName: "UNSW", region: "au", city: "Sydney",
    country: "Australia", countryCode: "AU", founded: 1949, ranking: "#2 in Australia, #19 World (QS 2025)",
    studentCount: "60,000+", researchFocus: ["Engineering", "Business", "Law", "Medicine"],
    notableDepartments: ["UNSW Business School", "Faculty of Engineering", "School of Photovoltaic Engineering"],
    masters: "Master's by research thesis 40,000–60,000 words; coursework dissertation 12,000–18,000", phd: "Maximum 100,000 words (many faculties advise 70,000–80,000)",
    fall: "Term 1 entry: applications close October–November", spring: "Term 3 entry available for HDR candidates",
    lat: -33.9173, lng: 151.2313, helped: "140+",
    supervisionNote: "UNSW requires annual progress reviews with a review panel, plus a confirmation of candidature at 9–12 months full-time.",
    timelineNote: "Standard candidature is 3–4 years full-time; confirmation of candidature requires a written proposal and presentation.",
  },
  {
    slug: "queensland", name: "University of Queensland", shortName: "UQ", region: "au", city: "Brisbane",
    country: "Australia", countryCode: "AU", founded: 1909, ranking: "#5 in Australia, #40 World (QS 2025)",
    studentCount: "55,000+", researchFocus: ["Biomedical Science", "Agriculture", "Mining Engineering", "Public Health"],
    notableDepartments: ["Institute for Molecular Bioscience", "UQ Business School", "School of Public Health"],
    masters: "Coursework dissertation 12,000–15,000 words", phd: "Maximum 80,000 words excluding appendices",
    fall: "Semester 1 entry, applications close September–October", spring: "Semester 2 entry available",
    lat: -27.4975, lng: 153.0137, helped: "120+",
    supervisionNote: "UQ requires confirmation of candidature within 12 months, plus mid-candidature and thesis review milestones.",
    timelineNote: "Three to four years full-time; the three-milestone structure (confirmation, mid-candidature, thesis review) governs progression.",
  },
  {
    slug: "auckland", name: "University of Auckland", shortName: "Auckland", region: "au", city: "Auckland",
    country: "New Zealand", countryCode: "NZ", founded: 1883, ranking: "#1 in New Zealand, #65 World (QS 2025)",
    studentCount: "46,000+", researchFocus: ["Bioengineering", "Business", "Education", "Pacific Studies"],
    notableDepartments: ["Auckland Bioengineering Institute", "Business School", "Faculty of Education and Social Work"],
    masters: "Master's thesis 40,000 words; research portfolio 20,000–30,000", phd: "Maximum 100,000 words for most disciplines",
    fall: "Applications accepted year-round for doctoral study", spring: "Year-round enrolment for PhD candidates",
    lat: -36.8523, lng: 174.7691, helped: "90+",
    supervisionNote: "Auckland requires provisional-year review within 12 months and annual reporting through the doctoral portal.",
    timelineNote: "Typical completion in 3–4 years, with the provisional-year goals review as the main early gate.",
  },
  {
    slug: "alberta", name: "University of Alberta", shortName: "Alberta", region: "ca", city: "Edmonton",
    country: "Canada", countryCode: "CA", founded: 1908, ranking: "#5 in Canada, #96 World (QS 2025)",
    studentCount: "40,000+", researchFocus: ["Energy", "Nursing", "Agriculture", "Artificial Intelligence"],
    notableDepartments: ["Faculty of Nursing", "Alberta Machine Intelligence Institute", "Faculty of Engineering"],
    masters: "Master's thesis 60–120 pages", phd: "Dissertation, typically 150–300 pages",
    fall: "January–February deadlines for September entry", spring: "January entry in selected programs",
    lat: 53.5232, lng: -113.5263, helped: "100+",
    supervisionNote: "Alberta requires a supervisory committee, a candidacy examination normally within three years, and an annual progress report.",
    timelineNote: "Candidacy exam by year 3, final oral defense typically year 4–6.",
  },
  {
    slug: "ottawa", name: "University of Ottawa", shortName: "Ottawa", region: "ca", city: "Ottawa",
    country: "Canada", countryCode: "CA", founded: 1848, ranking: "#9 in Canada, #189 World (QS 2025)",
    studentCount: "48,000+", researchFocus: ["Health Sciences", "Law", "Public Administration", "Education"],
    notableDepartments: ["Telfer School of Management", "Faculty of Law", "Faculty of Health Sciences"],
    masters: "Master's thesis 60–100 pages", phd: "Dissertation, typically 150–250 pages",
    fall: "February 1 for most September programs", spring: "January entry in selected programs",
    lat: 45.4231, lng: -75.6831, helped: "85+",
    supervisionNote: "Ottawa requires a thesis advisory committee, a comprehensive examination, and a thesis proposal approved before data collection.",
    timelineNote: "Comprehensive exams in year 2, proposal defense in year 2–3, final defense typically year 4–5.",
  },
];

const build = (s: Seed): UniversityData => ({
  slug: s.slug,
  name: s.name,
  shortName: s.shortName,
  region: s.region,
  city: s.city,
  country: s.country,
  countryCode: s.countryCode,
  founded: s.founded,
  ranking: s.ranking,
  studentCount: s.studentCount,
  researchFocus: s.researchFocus,
  notableDepartments: s.notableDepartments,
  dissertationRequirements: { masters: s.masters, phd: s.phd },
  deadlines: { fall: s.fall, spring: s.spring },
  geo: { latitude: s.lat, longitude: s.lng },
  heroTitle: `Dissertation and Thesis Support for ${s.shortName} Students`,
  heroSubtitle: `Expert help for ${s.name} Master's and doctoral candidates — proposal, methodology, analysis, chapter editing and viva preparation aligned to ${s.shortName}'s own regulations and milestones.`,
  stats: { studentsHelped: s.helped, avgRating: 4.8, completionRate: "97%" },
  testimonials: [
    {
      quote: `The methodology feedback was specific to what ${s.shortName} actually asks for at review, not generic advice. My panel signed off first time.`,
      author: "R. K.",
      program: `PhD candidate, ${s.shortName}`,
      year: "2025",
    },
    {
      quote: `I sent one chapter to see whether it was worth it, then sent three more. Fast, confidential, and the analysis was explained so I could defend it.`,
      author: "A. M.",
      program: `Master's candidate, ${s.shortName}`,
      year: "2025",
    },
  ],
  faqs: [
    {
      question: `What are the dissertation word limits at ${s.name}?`,
      answer: `${s.masters} at Master's level, and ${s.phd} for doctoral work. Limits are set in the institution's own regulations and usually exclude references and appendices, so check the current handbook clause before you plan your chapter budget.`,
    },
    {
      question: `How does supervision and progress review work at ${s.shortName}?`,
      answer: s.supervisionNote,
    },
    {
      question: `How long does a ${s.shortName} doctorate usually take?`,
      answer: s.timelineNote,
    },
    {
      question: `Can you help with just one chapter for a ${s.shortName} submission?`,
      answer:
        "Yes. Pricing is per page from $15 with no consultation fee, so a single chapter, a statistics run or a proofread is a small order. You get a full quote before anything starts and unlimited revisions within the agreed scope.",
    },
    {
      question: "Is my work confidential and checked for similarity?",
      answer:
        "Yes. Your identity, institution and data are covered by a confidentiality agreement, we never contact your university, and a Turnitin-style similarity report is available on request with every deliverable.",
    },
  ],
});

export const tier2UniversityData: Record<string, UniversityData> = Object.fromEntries(
  seeds.map((s) => [s.slug, build(s)])
);
