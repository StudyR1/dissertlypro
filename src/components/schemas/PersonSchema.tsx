import { Helmet } from "react-helmet-async";

interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  credentials?: string[];
  alumniOf?: {
    name: string;
    url?: string;
  }[];
  expertise?: string[];
  publications?: number;
  sameAs?: string[]; // ORCID, Google Scholar, LinkedIn, etc.
  worksFor?: {
    name: string;
    url: string;
  };
  hasCredential?: {
    credentialCategory: string;
    educationalLevel?: string;
    recognizedBy?: string;
  }[];
}

const PersonSchema = ({
  name,
  jobTitle,
  description,
  image,
  credentials = [],
  alumniOf = [],
  expertise = [],
  publications,
  sameAs = [],
  worksFor = {
    name: "DissertlyPro",
    url: "https://dissertlypro.com"
  },
  hasCredential = []
}: PersonSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    ...(description && { "description": description }),
    ...(image && { "image": image }),
    "worksFor": {
      "@type": "Organization",
      "name": worksFor.name,
      "url": worksFor.url
    },
    ...(alumniOf.length > 0 && {
      "alumniOf": alumniOf.map(institution => ({
        "@type": "CollegeOrUniversity",
        "name": institution.name,
        ...(institution.url && { "url": institution.url })
      }))
    }),
    ...(expertise.length > 0 && {
      "knowsAbout": expertise
    }),
    ...(publications && publications > 0 && {
      "hasOccupation": {
        "@type": "Occupation",
        "name": jobTitle,
        "qualifications": `${publications}+ peer-reviewed publications`
      }
    }),
    ...(sameAs.length > 0 && { "sameAs": sameAs }),
    ...(hasCredential.length > 0 && {
      "hasCredential": hasCredential.map(cred => ({
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": cred.credentialCategory,
        ...(cred.educationalLevel && { "educationalLevel": cred.educationalLevel }),
        ...(cred.recognizedBy && {
          "recognizedBy": {
            "@type": "Organization",
            "name": cred.recognizedBy
          }
        })
      }))
    }),
    ...(credentials.length > 0 && {
      "award": credentials
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default PersonSchema;

// Expert data for use throughout the site
export const expertPersonData = [
  {
    name: "Dr. Sarah Mitchell",
    jobTitle: "Senior Research Methodologist",
    description: "Expert in qualitative research methods with 15+ years guiding PhD students through grounded theory, phenomenology, and mixed methods dissertations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    expertise: ["Qualitative Research", "Mixed Methods", "Grounded Theory", "Phenomenology", "Dissertation Methodology"],
    alumniOf: [{ name: "Stanford University", url: "https://stanford.edu" }],
    publications: 45,
    hasCredential: [
      { credentialCategory: "PhD in Research Methods", educationalLevel: "Doctoral", recognizedBy: "Stanford University" }
    ],
    sameAs: [] // Add ORCID, Google Scholar links when available
  },
  {
    name: "Dr. Michael Chen",
    jobTitle: "Statistical Analysis Expert",
    description: "Former Harvard Medical School Research Director specializing in advanced statistical modeling, SEM, and machine learning applications in academic research.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    expertise: ["SPSS", "R Programming", "Structural Equation Modeling", "Multivariate Analysis", "Machine Learning", "Statistical Analysis"],
    alumniOf: [{ name: "Massachusetts Institute of Technology", url: "https://mit.edu" }],
    publications: 62,
    hasCredential: [
      { credentialCategory: "PhD in Statistics", educationalLevel: "Doctoral", recognizedBy: "MIT" }
    ],
    sameAs: []
  },
  {
    name: "Dr. Emily Rodriguez",
    jobTitle: "Academic Writing Specialist",
    description: "Published author and editor with expertise in dissertation structure, academic tone, and APA/Chicago citation management.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    expertise: ["Dissertation Structure", "Academic Writing", "Literature Reviews", "APA Style", "Chicago Style", "Citation Management"],
    alumniOf: [{ name: "Yale University", url: "https://yale.edu" }],
    publications: 28,
    hasCredential: [
      { credentialCategory: "PhD in English Literature", educationalLevel: "Doctoral", recognizedBy: "Yale University" }
    ],
    sameAs: []
  },
  {
    name: "Dr. James Thompson",
    jobTitle: "Business & Management Expert",
    description: "Former Fortune 500 consultant with 20+ years industry experience specializing in organizational behavior, strategic management, and case study research.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    expertise: ["Organizational Behavior", "Strategic Management", "Case Study Research", "Business Analytics", "DBA Research"],
    alumniOf: [{ name: "London Business School", url: "https://london.edu" }],
    publications: 38,
    hasCredential: [
      { credentialCategory: "DBA", educationalLevel: "Doctoral", recognizedBy: "London Business School" }
    ],
    sameAs: []
  },
  {
    name: "Dr. Priya Sharma",
    jobTitle: "Healthcare Research Specialist",
    description: "NIH research fellow and clinical trial design expert with expertise in epidemiology, health policy, and systematic reviews.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    expertise: ["Epidemiology", "Health Policy", "Clinical Research", "Systematic Reviews", "Meta-Analysis", "PRISMA"],
    alumniOf: [{ name: "Johns Hopkins University", url: "https://jhu.edu" }],
    publications: 55,
    hasCredential: [
      { credentialCategory: "PhD in Public Health", educationalLevel: "Doctoral", recognizedBy: "Johns Hopkins University" }
    ],
    sameAs: []
  },
  {
    name: "Dr. Robert Williams",
    jobTitle: "Social Sciences Expert",
    description: "Fulbright Scholar specializing in ethnography, survey design, content analysis, and critical theory applications in social research.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    expertise: ["Ethnography", "Survey Design", "Content Analysis", "Critical Theory", "Social Research Methods"],
    alumniOf: [{ name: "University of California, Berkeley", url: "https://berkeley.edu" }],
    publications: 42,
    hasCredential: [
      { credentialCategory: "PhD in Sociology", educationalLevel: "Doctoral", recognizedBy: "UC Berkeley" }
    ],
    sameAs: []
  }
];
