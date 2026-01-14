import { Helmet } from 'react-helmet-async';

const services = [
  {
    name: "Dissertation Proposal Development",
    description: "Craft compelling research proposals that win approval from your committee on the first submission.",
    url: "/services/dissertation-proposal"
  },
  {
    name: "Thesis & Dissertation Writing Support",
    description: "Expert guidance through every chapter of your research journey, from introduction to conclusion.",
    url: "/services/thesis-writing"
  },
  {
    name: "Research Methodology Design",
    description: "Design robust qualitative, quantitative, or mixed methods frameworks tailored to your research questions.",
    url: "/services/methodology"
  },
  {
    name: "Data Analysis Services",
    description: "Advanced statistical and qualitative analysis using SPSS, R, STATA, NVivo, and ATLAS.ti.",
    url: "/services/data-analysis"
  },
  {
    name: "Literature Review Structuring",
    description: "Comprehensive literature reviews with thematic analysis, synthesis, and critical evaluation.",
    url: "/services/literature-review"
  },
  {
    name: "Editing & Proofreading",
    description: "Academic English refinement with APA, MLA, Chicago, and Harvard formatting expertise.",
    url: "/services/editing"
  },
  {
    name: "Turnitin Similarity Reduction",
    description: "Expert paraphrasing and restructuring to ensure your work meets institutional originality standards.",
    url: "/services/similarity-reduction"
  },
  {
    name: "Supervisor Comments Revision",
    description: "Expert assistance in addressing supervisor feedback and implementing required changes effectively.",
    url: "/services/supervisor-revisions"
  },
  {
    name: "Journal Article Preparation",
    description: "Transform your research into publication-ready manuscripts for peer-reviewed journals.",
    url: "/services/journal-preparation"
  },
  {
    name: "Formatting & Submission Compliance",
    description: "Ensure your dissertation meets all university formatting requirements and submission guidelines.",
    url: "/services/formatting"
  }
];

const ServicesListSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "DissertlyPro Academic Support Services",
    "description": "Comprehensive dissertation and thesis support services for Master's and PhD students",
    "numberOfItems": String(services.length),
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": String(index + 1),
      "item": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "url": `https://dissertlypro.com${service.url}`,
        "provider": {
          "@type": "Organization",
          "@id": "https://dissertlypro.com/#organization",
          "name": "DissertlyPro"
        }
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ServicesListSchema;
