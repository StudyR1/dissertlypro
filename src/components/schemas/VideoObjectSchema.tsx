import { Helmet } from "react-helmet-async";

interface VideoObjectSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string; // ISO 8601 format, e.g., "PT1H30M"
  contentUrl?: string;
  embedUrl?: string;
  hasPart?: {
    name: string;
    startOffset: number;
    endOffset: number;
    url?: string;
  }[];
}

const VideoObjectSchema = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl,
  hasPart
}: VideoObjectSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration,
    ...(contentUrl && { contentUrl }),
    ...(embedUrl && { embedUrl }),
    publisher: {
      "@type": "Organization",
      name: "DissertlyPro",
      logo: {
        "@type": "ImageObject",
        url: "https://dissertlypro.com/logo-icon.png"
      }
    },
    ...(hasPart && hasPart.length > 0 && {
      hasPart: hasPart.map((part, index) => ({
        "@type": "Clip",
        name: part.name,
        startOffset: part.startOffset,
        endOffset: part.endOffset,
        ...(part.url && { url: part.url })
      }))
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

export default VideoObjectSchema;
