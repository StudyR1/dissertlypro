export interface UniversityData {
  slug: string;
  name: string;
  shortName: string;
  region: string;
  city: string;
  country: string;
  countryCode: string;
  founded: number;
  ranking?: string;
  studentCount: string;
  researchFocus: string[];
  notableDepartments: string[];
  dissertationRequirements: {
    masters: string;
    phd: string;
  };
  deadlines: {
    fall: string;
    spring: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  heroTitle: string;
  heroSubtitle: string;
  stats: {
    studentsHelped: string;
    avgRating: number;
    completionRate: string;
  };
  testimonials: {
    quote: string;
    author: string;
    program: string;
    year: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const universityData: Record<string, UniversityData> = {
  // UK Universities
  oxford: {
    slug: "oxford",
    name: "University of Oxford",
    shortName: "Oxford",
    region: "uk",
    city: "Oxford",
    country: "United Kingdom",
    countryCode: "GB",
    founded: 1096,
    ranking: "#1 in UK, #4 World (QS 2025)",
    studentCount: "26,000+",
    researchFocus: ["Humanities", "Natural Sciences", "Social Sciences", "Medical Sciences"],
    notableDepartments: ["Bodleian Libraries", "Saïd Business School", "Medical Sciences Division"],
    dissertationRequirements: {
      masters: "15,000-20,000 words for most MSc/MPhil programmes",
      phd: "80,000-100,000 words (DPhil thesis)",
    },
    deadlines: {
      fall: "January for October entry",
      spring: "November for January entry",
    },
    geo: { latitude: 51.7548, longitude: -1.2544 },
    heroTitle: "Dissertation Support for Oxford Students",
    heroSubtitle: "Expert guidance for Oxford's rigorous DPhil and Master's programmes. Navigate the tutorial system with confidence.",
    stats: { studentsHelped: "450+", avgRating: 4.9, completionRate: "98%" },
    testimonials: [
      {
        quote: "The support I received was invaluable for my DPhil viva. My supervisor was impressed with the clarity of my methodology chapter.",
        author: "Dr. Sarah M.",
        program: "DPhil History",
        year: "2024",
      },
      {
        quote: "Completing my MPhil alongside full-time work seemed impossible until I found DissertlyPro. They understood Oxford's expectations perfectly.",
        author: "James T.",
        program: "MPhil Economics",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "How do you support Oxford's tutorial-based supervision system?",
        answer: "We complement your college supervisor's guidance by providing additional structural feedback, methodology refinement, and writing support between tutorials. Our experts understand Oxford's unique collegiate system.",
      },
      {
        question: "What's the typical DPhil timeline at Oxford?",
        answer: "Oxford DPhil programmes typically take 3-4 years. We help you create realistic chapter milestones and manage the confirmation of status (transfer) process in Year 1-2.",
      },
    ],
  },
  cambridge: {
    slug: "cambridge",
    name: "University of Cambridge",
    shortName: "Cambridge",
    region: "uk",
    city: "Cambridge",
    country: "United Kingdom",
    countryCode: "GB",
    founded: 1209,
    ranking: "#2 in UK, #5 World (QS 2025)",
    studentCount: "24,000+",
    researchFocus: ["STEM", "Humanities", "Social Sciences", "Clinical Medicine"],
    notableDepartments: ["Cavendish Laboratory", "Judge Business School", "Computer Laboratory"],
    dissertationRequirements: {
      masters: "12,000-15,000 words for MPhil",
      phd: "80,000 words maximum (PhD thesis)",
    },
    deadlines: {
      fall: "December for October entry",
      spring: "N/A (most programmes October start only)",
    },
    geo: { latitude: 52.2043, longitude: 0.1218 },
    heroTitle: "Dissertation Help for Cambridge Students",
    heroSubtitle: "Navigate Cambridge's demanding PhD and MPhil requirements with expert support tailored to the Cambridge system.",
    stats: { studentsHelped: "380+", avgRating: 4.9, completionRate: "97%" },
    testimonials: [
      {
        quote: "The structured approach to my literature review transformed my research. I passed my first-year registration with distinction.",
        author: "Emma L.",
        program: "PhD Engineering",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "How does Cambridge's PhD registration process work?",
        answer: "Cambridge requires registration review at the end of Year 1, with a substantial piece of written work. We help prepare you for this milestone with structured writing support and mock viva preparation.",
      },
    ],
  },
  lse: {
    slug: "lse",
    name: "London School of Economics",
    shortName: "LSE",
    region: "uk",
    city: "London",
    country: "United Kingdom",
    countryCode: "GB",
    founded: 1895,
    ranking: "#6 in UK (QS 2025)",
    studentCount: "13,000+",
    researchFocus: ["Economics", "Political Science", "Sociology", "International Relations"],
    notableDepartments: ["Department of Economics", "Department of International Relations", "Department of Management"],
    dissertationRequirements: {
      masters: "10,000-12,000 words for MSc",
      phd: "100,000 words maximum",
    },
    deadlines: {
      fall: "January for September entry",
      spring: "N/A",
    },
    geo: { latitude: 51.5144, longitude: -0.1165 },
    heroTitle: "Academic Support for LSE Students",
    heroSubtitle: "Expert dissertation guidance for LSE's rigorous social science programmes. Data-driven support for quantitative research.",
    stats: { studentsHelped: "520+", avgRating: 4.8, completionRate: "96%" },
    testimonials: [
      {
        quote: "The econometrics support was exactly what I needed. My dissertation earned a distinction and I've been offered a PhD position.",
        author: "Michael K.",
        program: "MSc Economics",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "Do you provide quantitative methods support for LSE dissertations?",
        answer: "Yes, we have specialists in STATA, R, and econometric methods commonly required at LSE. We support everything from regression analysis to causal inference techniques.",
      },
    ],
  },

  // US Universities
  harvard: {
    slug: "harvard",
    name: "Harvard University",
    shortName: "Harvard",
    region: "us",
    city: "Cambridge, MA",
    country: "United States",
    countryCode: "US",
    founded: 1636,
    ranking: "#1 in USA, #3 World (QS 2025)",
    studentCount: "23,000+",
    researchFocus: ["Law", "Medicine", "Business", "Public Policy", "Arts & Sciences"],
    notableDepartments: ["Harvard Law School", "Harvard Business School", "Harvard Medical School"],
    dissertationRequirements: {
      masters: "Varies by programme (typically 50-100 pages)",
      phd: "No strict limit; typically 200-400 pages",
    },
    deadlines: {
      fall: "December for September entry",
      spring: "Varies by programme",
    },
    geo: { latitude: 42.3770, longitude: -71.1167 },
    heroTitle: "Dissertation Support for Harvard Students",
    heroSubtitle: "Navigate Harvard's rigorous doctoral programmes with expert guidance. From prospectus to defense, we're here to help.",
    stats: { studentsHelped: "620+", avgRating: 4.9, completionRate: "98%" },
    testimonials: [
      {
        quote: "The prospectus feedback I received was transformative. My committee approved it on the first submission.",
        author: "Dr. Jennifer R.",
        program: "PhD Government",
        year: "2024",
      },
      {
        quote: "As an EdD student working full-time, DissertlyPro helped me maintain momentum through the capstone process.",
        author: "Marcus W.",
        program: "EdD",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "How do you support Harvard's doctoral programmes?",
        answer: "We provide support across all Harvard schools, from the Graduate School of Arts and Sciences to professional doctorates at HBS, HLS, and HSPH. Our experts understand each school's distinct requirements.",
      },
      {
        question: "What is Harvard's qualifying exam process?",
        answer: "Harvard's generals/qualifying exams vary by department. We help with comprehensive exam preparation, reading list organization, and practice oral defenses.",
      },
    ],
  },
  stanford: {
    slug: "stanford",
    name: "Stanford University",
    shortName: "Stanford",
    region: "us",
    city: "Stanford, CA",
    country: "United States",
    countryCode: "US",
    founded: 1885,
    ranking: "#2 in USA, #6 World (QS 2025)",
    studentCount: "17,000+",
    researchFocus: ["Computer Science", "Engineering", "Business", "Medicine"],
    notableDepartments: ["Stanford GSB", "School of Engineering", "Stanford Law School"],
    dissertationRequirements: {
      masters: "Programme dependent",
      phd: "No strict limit; quality over quantity",
    },
    deadlines: {
      fall: "December for Autumn quarter",
      spring: "Varies",
    },
    geo: { latitude: 37.4275, longitude: -122.1697 },
    heroTitle: "Dissertation Help for Stanford Students",
    heroSubtitle: "Expert support for Stanford's innovative research environment. From CS to humanities, we've got you covered.",
    stats: { studentsHelped: "410+", avgRating: 4.9, completionRate: "97%" },
    testimonials: [
      {
        quote: "The methodological guidance for my ML-focused dissertation was exceptional. They understood both the technical and academic writing requirements.",
        author: "Alex C.",
        program: "PhD Computer Science",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "Do you support technical dissertations in CS and Engineering?",
        answer: "Yes, we have experts with PhD-level expertise in computer science, machine learning, and engineering disciplines who can provide both technical and writing support.",
      },
    ],
  },
  mit: {
    slug: "mit",
    name: "Massachusetts Institute of Technology",
    shortName: "MIT",
    region: "us",
    city: "Cambridge, MA",
    country: "United States",
    countryCode: "US",
    founded: 1861,
    ranking: "#1 World for Engineering (QS 2025)",
    studentCount: "11,500+",
    researchFocus: ["Engineering", "Computer Science", "Physics", "Economics"],
    notableDepartments: ["MIT Sloan", "CSAIL", "Media Lab"],
    dissertationRequirements: {
      masters: "SM thesis typically 50-100 pages",
      phd: "Department dependent",
    },
    deadlines: {
      fall: "December for Fall semester",
      spring: "September for Spring semester",
    },
    geo: { latitude: 42.3601, longitude: -71.0942 },
    heroTitle: "Thesis Support for MIT Students",
    heroSubtitle: "Navigate MIT's demanding technical thesis requirements with expert guidance from PhD-qualified specialists.",
    stats: { studentsHelped: "340+", avgRating: 4.9, completionRate: "98%" },
    testimonials: [
      {
        quote: "My SM thesis in Course 6 required balancing technical depth with clear exposition. DissertlyPro helped me achieve both.",
        author: "David L.",
        program: "SM EECS",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "How technical can the support get for MIT theses?",
        answer: "Very technical. Our team includes PhD holders in engineering, computer science, and applied sciences who can engage with your research at a substantive level while helping with structure and presentation.",
      },
    ],
  },

  // Australian Universities
  melbourne: {
    slug: "melbourne",
    name: "University of Melbourne",
    shortName: "Melbourne",
    region: "au",
    city: "Melbourne",
    country: "Australia",
    countryCode: "AU",
    founded: 1853,
    ranking: "#1 in Australia (QS 2025)",
    studentCount: "52,000+",
    researchFocus: ["Medicine", "Law", "Arts", "Science"],
    notableDepartments: ["Melbourne Law School", "Faculty of Medicine", "Melbourne Business School"],
    dissertationRequirements: {
      masters: "15,000-25,000 words for research masters",
      phd: "80,000-100,000 words",
    },
    deadlines: {
      fall: "October for February entry",
      spring: "April for July entry",
    },
    geo: { latitude: -37.7963, longitude: 144.9614 },
    heroTitle: "Dissertation Support for Melbourne Students",
    heroSubtitle: "Expert guidance for Australia's top-ranked university. Navigate the Melbourne Model with confidence.",
    stats: { studentsHelped: "680+", avgRating: 4.8, completionRate: "96%" },
    testimonials: [
      {
        quote: "The support through my PhD candidature confirmation was invaluable. I passed with flying colours.",
        author: "Sophie H.",
        program: "PhD Arts",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "How does the Melbourne PhD confirmation process work?",
        answer: "Melbourne requires candidature confirmation 12-18 months into your PhD. We help prepare your confirmation document, literature review, and presentation for the confirmation panel.",
      },
    ],
  },
  sydney: {
    slug: "sydney",
    name: "University of Sydney",
    shortName: "Sydney",
    region: "au",
    city: "Sydney",
    country: "Australia",
    countryCode: "AU",
    founded: 1850,
    ranking: "#2 in Australia (QS 2025)",
    studentCount: "70,000+",
    researchFocus: ["Medicine", "Engineering", "Business", "Humanities"],
    notableDepartments: ["Sydney Medical School", "School of Economics", "Sydney Law School"],
    dissertationRequirements: {
      masters: "15,000-20,000 words",
      phd: "80,000-100,000 words",
    },
    deadlines: {
      fall: "October for March entry",
      spring: "April for August entry",
    },
    geo: { latitude: -33.8882, longitude: 151.1875 },
    heroTitle: "Thesis Help for Sydney Students",
    heroSubtitle: "Navigate Sydney's research requirements with expert support. From HDR to professional doctorates.",
    stats: { studentsHelped: "720+", avgRating: 4.8, completionRate: "95%" },
    testimonials: [
      {
        quote: "The structured approach to my thesis chapters made all the difference. Submitted on time and passed with minor corrections.",
        author: "Tom B.",
        program: "PhD Business",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "What is Sydney's Annual Progress Review?",
        answer: "Sydney requires annual progress reviews for all HDR students. We help you prepare comprehensive progress reports and presentations to demonstrate satisfactory progress.",
      },
    ],
  },

  // Canadian Universities
  toronto: {
    slug: "toronto",
    name: "University of Toronto",
    shortName: "UofT",
    region: "ca",
    city: "Toronto",
    country: "Canada",
    countryCode: "CA",
    founded: 1827,
    ranking: "#1 in Canada (QS 2025)",
    studentCount: "95,000+",
    researchFocus: ["Medicine", "Engineering", "Business", "Humanities"],
    notableDepartments: ["Rotman School", "Faculty of Medicine", "Faculty of Law"],
    dissertationRequirements: {
      masters: "Varies; typically 50-100 pages for thesis stream",
      phd: "Department dependent; typically 200-300 pages",
    },
    deadlines: {
      fall: "January for September entry",
      spring: "September for January entry",
    },
    geo: { latitude: 43.6629, longitude: -79.3957 },
    heroTitle: "Dissertation Support for UofT Students",
    heroSubtitle: "Expert guidance for Canada's top university. Navigate thesis requirements across St. George, UTM, and UTSC.",
    stats: { studentsHelped: "890+", avgRating: 4.8, completionRate: "96%" },
    testimonials: [
      {
        quote: "The comprehensive exam prep was a lifesaver. I felt completely prepared for my committee's questions.",
        author: "Priya S.",
        program: "PhD Political Science",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "How do you support UofT's thesis-stream masters?",
        answer: "We provide comprehensive support for thesis-stream master's students, including proposal development, literature review guidance, and thesis writing support. We understand the distinction between thesis and course-based streams.",
      },
    ],
  },
  ubc: {
    slug: "ubc",
    name: "University of British Columbia",
    shortName: "UBC",
    region: "ca",
    city: "Vancouver",
    country: "Canada",
    countryCode: "CA",
    founded: 1908,
    ranking: "#2 in Canada (QS 2025)",
    studentCount: "70,000+",
    researchFocus: ["Forestry", "Mining", "Computer Science", "Medicine"],
    notableDepartments: ["Sauder School of Business", "Faculty of Science", "Faculty of Medicine"],
    dissertationRequirements: {
      masters: "Varies by programme",
      phd: "Department dependent",
    },
    deadlines: {
      fall: "December for September entry",
      spring: "July for January entry",
    },
    geo: { latitude: 49.2606, longitude: -123.2460 },
    heroTitle: "Thesis Help for UBC Students",
    heroSubtitle: "Navigate UBC's research requirements with expert support. From comprehensive exams to final defense.",
    stats: { studentsHelped: "560+", avgRating: 4.8, completionRate: "95%" },
    testimonials: [
      {
        quote: "The guidance through my doctoral comprehensive exam was exactly what I needed. Passed on the first attempt.",
        author: "Kevin M.",
        program: "PhD Education",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "What is UBC's comprehensive examination process?",
        answer: "UBC doctoral students must pass comprehensive exams, typically in Year 2. We provide structured preparation, practice questions, and mock oral components to ensure you're fully prepared.",
      },
    ],
  },
  mcgill: {
    slug: "mcgill",
    name: "McGill University",
    shortName: "McGill",
    region: "ca",
    city: "Montreal",
    country: "Canada",
    countryCode: "CA",
    founded: 1821,
    ranking: "#3 in Canada (QS 2025)",
    studentCount: "40,000+",
    researchFocus: ["Medicine", "Law", "Music", "Science"],
    notableDepartments: ["Desautels Faculty of Management", "Faculty of Medicine", "Schulich School of Music"],
    dissertationRequirements: {
      masters: "Thesis typically 75-150 pages",
      phd: "Department dependent",
    },
    deadlines: {
      fall: "January for September entry",
      spring: "September for January entry",
    },
    geo: { latitude: 45.5048, longitude: -73.5772 },
    heroTitle: "Dissertation Support for McGill Students",
    heroSubtitle: "Bilingual support for McGill's world-class research programmes. Navigate thesis requirements with expert guidance.",
    stats: { studentsHelped: "420+", avgRating: 4.8, completionRate: "96%" },
    testimonials: [
      {
        quote: "Having bilingual support was crucial for my research in Quebec health policy. The team understood both academic traditions.",
        author: "Marie-Claire D.",
        program: "PhD Public Health",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "Do you offer French-language dissertation support?",
        answer: "Yes, we have French-speaking experts who can support dissertations written in French, particularly for programmes in Quebec institutions.",
      },
    ],
  },
};

export const getUniversityBySlug = (slug: string): UniversityData | undefined => {
  return universityData[slug.toLowerCase()];
};

export const getUniversitiesByRegion = (region: string): UniversityData[] => {
  return Object.values(universityData).filter((uni) => uni.region === region.toLowerCase());
};

export const getAllUniversitySlugs = (): string[] => {
  return Object.keys(universityData);
};
