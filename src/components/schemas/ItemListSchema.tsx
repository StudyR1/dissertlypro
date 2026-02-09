import { Helmet } from "react-helmet-async";

interface ListItem {
  name: string;
  url: string;
  description?: string;
  image?: string;
}

interface ItemListSchemaProps {
  name: string;
  description: string;
  items: ListItem[];
  itemListOrder?: "ascending" | "descending" | "unordered";
}

const ItemListSchema = ({
  name,
  description,
  items,
  itemListOrder = "ascending",
}: ItemListSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    itemListOrder: `https://schema.org/ItemListOrder${itemListOrder.charAt(0).toUpperCase() + itemListOrder.slice(1)}`,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url.startsWith("http") ? item.url : `https://dissertlypro.com${item.url}`,
      ...(item.description && { description: item.description }),
      ...(item.image && { image: item.image }),
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ItemListSchema;
