// Region-specific data for localized landing pages

export interface RegionData {
  code: string;
  name: string;
  currency: {
    code: string;
    symbol: string;
  };
  phone: string;
  pricing: {
    chapter: number;
    dissertation: number;
    monthly: number;
  };
  universities: string[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
    rating: number;
  }[];
  stats: {
    students: string;
    experts: string;
    universities: string;
  };
  supportHours: string;
  flagEmoji: string;
  heroTitle: string;
  heroSubtitle: string;
}

export const regionData: Record<string, RegionData> = {
  us: {
    code: 'us',
    name: 'United States',
    currency: { code: 'USD', symbol: '$' },
    phone: '+1 (812) 690-5122',
    pricing: {
      chapter: 299,
      dissertation: 2499,
      monthly: 599,
    },
    universities: [
      'Harvard University',
      'Stanford University',
      'MIT',
      'Yale University',
      'Columbia University',
      'University of Chicago',
      'Princeton University',
      'UC Berkeley',
    ],
    testimonials: [
      {
        quote: "DissertlyPro helped me complete my PhD at Stanford while working full-time in Silicon Valley. Their flexibility and expertise were exactly what I needed.",
        author: "Kevin L.",
        role: "PhD Computer Science, Stanford University",
        rating: 5,
      },
      {
        quote: "The methodology support I received was exceptional. My committee at Harvard approved my proposal on the first submission.",
        author: "Rachel H.",
        role: "PhD Public Policy, Harvard Kennedy School",
        rating: 5,
      },
      {
        quote: "As an EdD student at Columbia, I struggled with my lit review. DissertlyPro's experts helped me synthesize 200+ sources into a coherent narrative.",
        author: "Marcus D.",
        role: "EdD, Columbia Teachers College",
        rating: 5,
      },
    ],
    stats: {
      students: '8,500+',
      experts: '250+',
      universities: '150+',
    },
    supportHours: '24/7 support • EST, CST, MST, PST time zones',
    flagEmoji: '🇺🇸',
    heroTitle: 'Expert Dissertation Support for American Graduate Students',
    heroSubtitle: "Premium academic guidance for Master's and PhD candidates at top US universities. From Ivy League to state schools, we support your research journey.",
  },
  uk: {
    code: 'uk',
    name: 'United Kingdom',
    currency: { code: 'GBP', symbol: '£' },
    phone: '+1 (812) 690-5122',
    pricing: {
      chapter: 249,
      dissertation: 1999,
      monthly: 499,
    },
    universities: [
      'University of Oxford',
      'University of Cambridge',
      'Imperial College London',
      'UCL',
      'London School of Economics',
      'University of Edinburgh',
      'University of Manchester',
      "King's College London",
    ],
    testimonials: [
      {
        quote: "Completing my DPhil at Oxford whilst teaching was incredibly demanding. DissertlyPro provided the structured support I needed to finish on time.",
        author: "Charlotte B.",
        role: "DPhil History, University of Oxford",
        rating: 5,
      },
      {
        quote: "The data analysis support using SPSS was brilliant. My supervisors at Cambridge were impressed with the rigour of my quantitative chapter.",
        author: "Vikram S.",
        role: "PhD Economics, University of Cambridge",
        rating: 5,
      },
      {
        quote: "As an international student at LSE, academic writing was my biggest challenge. The editing service transformed my thesis.",
        author: "Wei L.",
        role: "PhD International Relations, LSE",
        rating: 5,
      },
    ],
    stats: {
      students: '4,200+',
      experts: '120+',
      universities: '80+',
    },
    supportHours: '24/7 support • GMT/BST time zone',
    flagEmoji: '🇬🇧',
    heroTitle: 'Premium Dissertation Support for UK Postgraduate Students',
    heroSubtitle: "Expert guidance for Master's, MPhil, and PhD candidates at Russell Group and leading UK universities. We understand the British academic system.",
  },
  au: {
    code: 'au',
    name: 'Australia',
    currency: { code: 'AUD', symbol: 'A$' },
    phone: '+1 (812) 690-5122',
    pricing: {
      chapter: 449,
      dissertation: 3499,
      monthly: 849,
    },
    universities: [
      'University of Melbourne',
      'University of Sydney',
      'Australian National University',
      'University of Queensland',
      'UNSW Sydney',
      'Monash University',
      'University of Western Australia',
      'University of Adelaide',
    ],
    testimonials: [
      {
        quote: "Balancing my PhD at Melbourne with family commitments seemed impossible. DissertlyPro's flexible support made it achievable.",
        author: "Olivia M.",
        role: "PhD Psychology, University of Melbourne",
        rating: 5,
      },
      {
        quote: "The qualitative analysis support using NVivo was exceptional. My thesis on Indigenous education received high distinction.",
        author: "Daniel C.",
        role: "PhD Education, University of Sydney",
        rating: 5,
      },
      {
        quote: "As a distance student at ANU, I needed expert guidance I couldn't get locally. DissertlyPro bridged that gap perfectly.",
        author: "Ananya R.",
        role: "PhD Public Health, Australian National University",
        rating: 5,
      },
    ],
    stats: {
      students: '1,800+',
      experts: '60+',
      universities: '35+',
    },
    supportHours: '24/7 support • AEST, ACST, AWST time zones',
    flagEmoji: '🇦🇺',
    heroTitle: 'Expert Dissertation Support for Australian HDR Students',
    heroSubtitle: "Premium guidance for Master's by Research and PhD candidates at Group of Eight and leading Australian universities.",
  },
  ca: {
    code: 'ca',
    name: 'Canada',
    currency: { code: 'CAD', symbol: 'C$' },
    phone: '+1 (812) 690-5122',
    pricing: {
      chapter: 399,
      dissertation: 2999,
      monthly: 749,
    },
    universities: [
      'University of Toronto',
      'McGill University',
      'University of British Columbia',
      'University of Alberta',
      'McMaster University',
      'University of Waterloo',
      'Western University',
      "Queen's University",
    ],
    testimonials: [
      {
        quote: "My PhD journey at U of T was transformed by DissertlyPro. Their methodology experts helped me design a robust mixed-methods study.",
        author: "Sophia W.",
        role: "PhD Sociology, University of Toronto",
        rating: 5,
      },
      {
        quote: "Writing my thesis in English as my second language was daunting. The editing support ensured my research at McGill met the highest standards.",
        author: "François L.",
        role: "PhD Political Science, McGill University",
        rating: 5,
      },
      {
        quote: "The statistical analysis support was invaluable for my health sciences dissertation at UBC. Highly recommended for Canadian grad students.",
        author: "Amir H.",
        role: "PhD Health Sciences, University of British Columbia",
        rating: 5,
      },
    ],
    stats: {
      students: '2,100+',
      experts: '75+',
      universities: '45+',
    },
    supportHours: '24/7 support • EST, CST, MST, PST time zones',
    flagEmoji: '🇨🇦',
    heroTitle: 'Expert Dissertation Support for Canadian Graduate Students',
    heroSubtitle: "Premium academic guidance for Master's and PhD candidates at U15 and leading Canadian universities. Bilingual support available.",
  },
};

export const getRegionByCode = (code: string): RegionData | undefined => {
  return regionData[code.toLowerCase()];
};

export const formatPrice = (amount: number, currency: { code: string; symbol: string }): string => {
  return `${currency.symbol}${amount.toLocaleString()}`;
};
