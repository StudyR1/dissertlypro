import { Helmet } from "react-helmet-async";

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  telephone: string;
  url: string;
  priceRange: string;
  image?: string;
  openingHours?: string[];
  areaServed?: string[];
  sameAs?: string[];
}

const LocalBusinessSchema = ({
  name,
  description,
  address,
  geo,
  telephone,
  url,
  priceRange,
  image = "https://dissertlypro.com/og-image.jpg",
  openingHours = ["Mo-Fr 09:00-21:00", "Sa 10:00-18:00"],
  areaServed = [],
  sameAs = [],
}: LocalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": url,
    name,
    description,
    image,
    telephone,
    url,
    priceRange,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    ...(geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    }),
    openingHoursSpecification: openingHours.map((hours) => {
      const [days, time] = hours.split(" ");
      const [opens, closes] = time.split("-");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days.split("-").map((day) => {
          const dayMap: Record<string, string> = {
            Mo: "Monday",
            Tu: "Tuesday",
            We: "Wednesday",
            Th: "Thursday",
            Fr: "Friday",
            Sa: "Saturday",
            Su: "Sunday",
          };
          return dayMap[day] || day;
        }),
        opens,
        closes,
      };
    }),
    ...(areaServed.length > 0 && { areaServed }),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
