import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface SeeAlsoLink {
  title: string;
  href: string;
  description?: string;
}

interface SeeAlsoProps {
  links: SeeAlsoLink[];
  title?: string;
  className?: string;
  variant?: "default" | "compact" | "highlight";
}

const SeeAlso = ({ 
  links, 
  title = "See Also", 
  className,
  variant = "default" 
}: SeeAlsoProps) => {
  if (links.length === 0) return null;

  return (
    <aside 
      className={cn(
        "my-8 rounded-lg border-l-4 border-copper bg-muted/50 p-5",
        variant === "highlight" && "bg-copper/10 border-copper",
        variant === "compact" && "my-4 p-4",
        className
      )}
      role="complementary"
      aria-label="Related resources"
    >
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb className="w-4 h-4 text-copper flex-shrink-0" />
        <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
          {title}
        </h4>
      </div>
      
      <ul className={cn(
        "space-y-2",
        variant === "compact" && "space-y-1"
      )}>
        {links.map((link) => (
          <li key={link.href}>
            <Link 
              to={link.href}
              className="group flex items-start gap-2 text-muted-foreground hover:text-copper transition-colors"
            >
              <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-copper/60 group-hover:text-copper group-hover:translate-x-0.5 transition-all" />
              <span className="flex-1">
                <span className="font-medium text-foreground group-hover:text-copper transition-colors">
                  {link.title}
                </span>
                {link.description && variant !== "compact" && (
                  <span className="text-sm text-muted-foreground ml-1">
                    — {link.description}
                  </span>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export { SeeAlso };
export type { SeeAlsoLink, SeeAlsoProps };
