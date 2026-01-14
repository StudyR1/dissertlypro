import { Helmet } from 'react-helmet-async';

interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration format, e.g., "PT30M" for 30 minutes
  estimatedCost?: {
    currency: string;
    value: string;
  };
  image?: string;
}

const HowToSchema = ({ 
  name, 
  description, 
  steps, 
  totalTime,
  estimatedCost,
  image 
}: HowToSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    ...(totalTime && { "totalTime": totalTime }),
    ...(estimatedCost && {
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": estimatedCost.currency,
        "value": estimatedCost.value
      }
    }),
    ...(image && { "image": image }),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && { "image": step.image }),
      ...(step.url && { "url": step.url })
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

// Default how-to for the consultation process
export const defaultHowToSteps: HowToStep[] = [
  {
    name: "Submit Your Request",
    text: "Fill out our consultation form with your research requirements, timeline, academic level, and specific needs. Include details about your dissertation topic, methodology preferences, and any challenges you're facing.",
    url: "https://dissertlypro.com/consultation"
  },
  {
    name: "Expert Matching",
    text: "Within 24 hours, we pair you with a subject-matter expert who holds an advanced degree in your field. Your expert is selected based on their specialization, experience, and availability to ensure the best fit.",
  },
  {
    name: "Initial Consultation",
    text: "Schedule a complimentary consultation call with your assigned expert to discuss your project scope, establish milestones, and create a personalized support plan tailored to your academic goals.",
  },
  {
    name: "Collaborative Work",
    text: "Work directly with your expert through milestone-based progress updates. Receive regular feedback, revisions, and guidance as you develop your dissertation chapters.",
  },
  {
    name: "Review and Revision",
    text: "Your expert reviews your work, provides detailed feedback, and helps you refine your arguments, methodology, and writing to meet the highest academic standards.",
  },
  {
    name: "Final Delivery",
    text: "Receive polished, publication-ready work that meets your university's requirements. Your expert remains available for post-delivery support and defense preparation.",
  }
];

export default HowToSchema;
