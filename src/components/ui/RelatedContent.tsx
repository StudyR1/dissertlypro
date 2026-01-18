import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Wrench, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { getRelatedContent, TopicItem } from "@/data/topicClusters";

interface RelatedContentProps {
  currentUrl: string;
  title?: string;
  className?: string;
  variant?: "default" | "compact" | "sidebar";
  maxGuides?: number;
  maxTools?: number;
}

/**
 * RelatedContent - Displays semantically related content from topic clusters
 * 
 * Features:
 * - Automatic pillar page highlighting (isPartOf schema relationship)
 * - Related guides and tools from the same topic cluster
 * - Internal linking for SEO authority building
 */
const RelatedContent = ({
  currentUrl,
  title = "Related Resources",
  className,
  variant = "default",
  maxGuides = 4,
  maxTools = 4
}: RelatedContentProps) => {
  const { cluster, relatedGuides, relatedTools, pillar } = getRelatedContent(currentUrl);
  
  // Don't render if no related content
  if (!cluster || (relatedGuides.length === 0 && relatedTools.length === 0)) {
    return null;
  }

  const displayGuides = relatedGuides.slice(0, maxGuides);
  const displayTools = relatedTools.slice(0, maxTools);

  if (variant === "sidebar") {
    return (
      <aside 
        className={cn("bg-cream-warm rounded-xl p-5 border border-border", className)}
        aria-label="Related content"
      >
        <h3 className="font-serif font-bold text-foreground mb-4 flex items-center gap-2">
          <Lightbulb className="h-4 w-4 text-copper" />
          {title}
        </h3>
        
        {pillar && (
          <div className="mb-4 p-3 bg-copper/5 rounded-lg border border-copper/20">
            <span className="text-xs font-medium text-copper uppercase tracking-wider">Part of</span>
            <Link 
              to={pillar.url}
              className="block mt-1 text-sm font-medium text-foreground hover:text-copper transition-colors"
            >
              {pillar.title}
            </Link>
          </div>
        )}

        {displayGuides.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Related Guides
            </h4>
            <ul className="space-y-2">
              {displayGuides.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url}
                    className="text-sm text-foreground hover:text-copper transition-colors flex items-center gap-2"
                  >
                    <BookOpen className="h-3 w-3 shrink-0" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {displayTools.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Free Tools
            </h4>
            <ul className="space-y-2">
              {displayTools.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url}
                    className="text-sm text-copper font-medium hover:text-copper-dark transition-colors flex items-center gap-2"
                  >
                    <Wrench className="h-3 w-3 shrink-0" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    );
  }

  if (variant === "compact") {
    return (
      <div className={cn("py-6 border-t border-border", className)}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {[...displayGuides, ...displayTools].map((item, index) => (
            <Link
              key={index}
              to={item.url}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-colors",
                item.type === "tool" 
                  ? "bg-copper/10 text-copper hover:bg-copper/20" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {item.type === "tool" ? (
                <Wrench className="h-3 w-3" />
              ) : (
                <BookOpen className="h-3 w-3" />
              )}
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Default variant - full section
  return (
    <section 
      className={cn("py-12 sm:py-16 bg-cream-warm", className)}
      aria-label="Related content"
    >
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-2">
              {title}
            </h2>
            {cluster && (
              <p className="text-muted-foreground">
                Explore more resources in our <span className="text-copper font-medium">{cluster.name}</span> collection
              </p>
            )}
          </div>

          {/* Pillar Page Link */}
          {pillar && (
            <div className="mb-8 p-4 sm:p-6 bg-gradient-to-r from-copper/5 to-copper/10 rounded-xl border border-copper/20">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-copper" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold text-copper uppercase tracking-wider">
                    Main Guide
                  </span>
                  <Link 
                    to={pillar.url}
                    className="group block mt-1"
                  >
                    <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-copper transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {pillar.description}
                    </p>
                  </Link>
                </div>
                <Link 
                  to={pillar.url}
                  className="shrink-0 text-copper hover:text-copper-dark transition-colors"
                  aria-label={`Read ${pillar.title}`}
                >
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Related Guides */}
            {displayGuides.length > 0 && (
              <div>
                <h3 className="font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-copper" />
                  Related Guides
                </h3>
                <div className="space-y-3">
                  {displayGuides.map((item, index) => (
                    <RelatedItemCard key={index} item={item} />
                  ))}
                </div>
              </div>
            )}

            {/* Related Tools */}
            {displayTools.length > 0 && (
              <div>
                <h3 className="font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-copper" />
                  Free Tools
                </h3>
                <div className="space-y-3">
                  {displayTools.map((item, index) => (
                    <RelatedItemCard key={index} item={item} isTool />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

interface RelatedItemCardProps {
  item: TopicItem;
  isTool?: boolean;
}

const RelatedItemCard = ({ item, isTool = false }: RelatedItemCardProps) => {
  return (
    <Link 
      to={item.url}
      className={cn(
        "group flex items-center gap-3 p-3 rounded-lg border transition-all",
        isTool 
          ? "bg-copper/5 border-copper/20 hover:bg-copper/10 hover:border-copper/30" 
          : "bg-card border-border hover:bg-muted/50 hover:border-muted"
      )}
    >
      <div className={cn(
        "shrink-0 w-8 h-8 rounded-lg flex items-center justify-center",
        isTool ? "bg-copper/10" : "bg-muted"
      )}>
        {isTool ? (
          <Wrench className="h-4 w-4 text-copper" />
        ) : (
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className={cn(
          "text-sm font-medium transition-colors truncate",
          isTool 
            ? "text-copper group-hover:text-copper-dark" 
            : "text-foreground group-hover:text-copper"
        )}>
          {item.title}
        </h4>
        <p className="text-xs text-muted-foreground truncate">
          {item.description}
        </p>
      </div>
      <ArrowRight className={cn(
        "h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5",
        isTool ? "text-copper" : "text-muted-foreground"
      )} />
    </Link>
  );
};

export default RelatedContent;

/**
 * TopicClusterSchema - JSON-LD for topic cluster relationships
 */
export const TopicClusterSchema = ({ currentUrl }: { currentUrl: string }) => {
  const { cluster, pillar } = getRelatedContent(currentUrl);
  
  if (!cluster) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": `https://dissertlypro.com${currentUrl}`,
    ...(pillar && {
      "isPartOf": {
        "@type": "WebPage",
        "name": pillar.title,
        "url": `https://dissertlypro.com${pillar.url}`
      }
    }),
    "about": {
      "@type": "Thing",
      "name": cluster.name
    },
    "keywords": cluster.keywords.join(", ")
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};
