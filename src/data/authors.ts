export interface Author {
  id: string;
  name: string;
  credentials: string;
  bio: string;
  expertise: string[];
  image?: string;
}

export const authors: Record<string, Author> = {
  "dr-evelyn-hartwell": {
    id: "dr-evelyn-hartwell",
    name: "Dr. Evelyn Hartwell",
    credentials: "PhD in Education, Stanford University",
    bio: "A former Fulbright Scholar with over 15 years of experience guiding doctoral candidates through dissertation completion. Dr. Hartwell has supervised 200+ successful PhD students and authored three books on academic writing.",
    expertise: ["Dissertation Writing", "Academic Career", "PhD Supervision"],
    image: "/images/authors/evelyn-hartwell.jpg"
  },
  "dr-marcus-thorne": {
    id: "dr-marcus-thorne",
    name: "Dr. Marcus Thorne",
    credentials: "PhD in English Literature, Yale University",
    bio: "Award-winning academic writing specialist and former Director of Graduate Studies. Dr. Thorne's research on academic discourse has been published in over 40 peer-reviewed journals.",
    expertise: ["Literature Review", "Academic Writing", "Writing Tips"],
    image: "/images/authors/marcus-thorne.jpg"
  },
  "dr-amara-okonkwo": {
    id: "dr-amara-okonkwo",
    name: "Dr. Amara Okonkwo",
    credentials: "PhD in Communication Studies, Northwestern University",
    bio: "Research methodology expert with 50+ peer-reviewed publications. Dr. Okonkwo specializes in mixed-methods research design and has trained researchers at institutions across four continents.",
    expertise: ["Research Methodology", "Literature Review", "Data Analysis"],
    image: "/images/authors/amara-okonkwo.jpg"
  },
  "dr-julian-castellanos": {
    id: "dr-julian-castellanos",
    name: "Dr. Julian Castellanos",
    credentials: "PhD in Psychology, University of Cambridge",
    bio: "Quantitative research specialist and former statistical consultant for the National Science Foundation. Dr. Castellanos has expertise in advanced statistical methods and research design.",
    expertise: ["Data Analysis", "Research Methodology", "SPSS", "NVivo"],
    image: "/images/authors/julian-castellanos.jpg"
  },
  "dr-helena-vranos": {
    id: "dr-helena-vranos",
    name: "Dr. Helena Vranos",
    credentials: "PhD in Sociology, University of Oxford",
    bio: "Qualitative research expert and ethnographer with fieldwork experience spanning 12 countries. Dr. Vranos advises doctoral students on case study methodology and narrative analysis.",
    expertise: ["Case Studies", "Qualitative Research", "Ethics"],
    image: "/images/authors/helena-vranos.jpg"
  },
  "dr-nathaniel-ashford": {
    id: "dr-nathaniel-ashford",
    name: "Dr. Nathaniel Ashford",
    credentials: "PhD in History, Harvard University",
    bio: "Archive research specialist and former Mellon Fellow with expertise in interdisciplinary doctoral supervision. Dr. Ashford has mentored students from 15 different academic disciplines.",
    expertise: ["Dissertation Writing", "University Guides", "Academic Career"],
    image: "/images/authors/nathaniel-ashford.jpg"
  },
  "dr-yuki-tanaka": {
    id: "dr-yuki-tanaka",
    name: "Dr. Yuki Tanaka",
    credentials: "PhD in Computer Science, MIT",
    bio: "Data science researcher and dissertation coach specializing in STEM fields. Dr. Tanaka combines technical expertise with clear communication to help students present complex research effectively.",
    expertise: ["Data Analysis", "Research Methodology", "STEM Dissertations"],
    image: "/images/authors/yuki-tanaka.jpg"
  },
  "dr-isabelle-fontaine": {
    id: "dr-isabelle-fontaine",
    name: "Dr. Isabelle Fontaine",
    credentials: "PhD in Philosophy, Sorbonne University",
    bio: "Academic wellness advocate and thesis completion specialist. Dr. Fontaine's research on doctoral student well-being has informed graduate program reforms at universities worldwide.",
    expertise: ["Work-Life Balance", "Mental Health", "Thesis Completion"],
    image: "/images/authors/isabelle-fontaine.jpg"
  }
};

// Map existing author names to new author IDs
export const authorNameToId: Record<string, string> = {
  "Dr. Sarah Mitchell": "dr-evelyn-hartwell",
  "Dr. Emily Rodriguez": "dr-marcus-thorne",
  "Dr. David Park": "dr-amara-okonkwo",
  "Dr. Michael Chen": "dr-julian-castellanos",
  "Dr. James Wilson": "dr-nathaniel-ashford",
  "Dr. Lisa Thompson": "dr-helena-vranos",
  "Dr. Rachel Foster": "dr-yuki-tanaka",
  "Dr. Maria Santos": "dr-isabelle-fontaine",
  "Dr. Jennifer Adams": "dr-evelyn-hartwell",
  "Dr. Robert Kim": "dr-julian-castellanos",
  "Dr. Angela Martinez": "dr-amara-okonkwo",
  "Dr. Christopher Lee": "dr-marcus-thorne",
  "Dr. Katherine Brown": "dr-helena-vranos",
  "Dr. Thomas Wright": "dr-nathaniel-ashford",
  "Dr. Elizabeth Harper": "dr-yuki-tanaka",
  "Dr. Daniel Foster": "dr-isabelle-fontaine",
};

export const getAuthorByName = (name: string): Author | undefined => {
  const authorId = authorNameToId[name];
  return authorId ? authors[authorId] : undefined;
};

export const getAuthorById = (id: string): Author | undefined => {
  return authors[id];
};
