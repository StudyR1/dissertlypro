import { cn } from "@/lib/utils";
import { Lightbulb, MessageCircle, Zap } from "lucide-react";

interface QuickAnswerProps {
  question: string;
  children: React.ReactNode;
  variant?: "default" | "compact" | "highlighted";
  icon?: "lightbulb" | "chat" | "zap";
  className?: string;
}

/**
 * QuickAnswer - Answer-first content component for SEO and featured snippets
 * 
 * Optimizes for:
 * - Google Featured Snippets (passage indexing)
 * - Voice Search (speakable content)
 * - AI/LLM citations (clear Q&A format)
 * 
 * Best practices:
 * - Keep answers under 60 words for snippet eligibility
 * - Front-load the direct answer
 * - Use natural, conversational language
 */
const QuickAnswer = ({ 
  question, 
  children, 
  variant = "default",
  icon = "lightbulb",
  className 
}: QuickAnswerProps) => {
  const IconComponent = {
    lightbulb: Lightbulb,
    chat: MessageCircle,
    zap: Zap
  }[icon];

  return (
    <div 
      className={cn(
        "quick-answer speakable-content my-6",
        variant === "default" && "bg-cream-warm border border-border rounded-xl p-5 sm:p-6",
        variant === "compact" && "bg-muted/50 rounded-lg p-4",
        variant === "highlighted" && "bg-gradient-to-r from-copper/5 to-copper/10 border-l-4 border-copper rounded-r-xl p-5 sm:p-6",
        className
      )}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <div className="flex items-start gap-3">
        <div className={cn(
          "shrink-0 rounded-lg p-2",
          variant === "highlighted" ? "bg-copper/10" : "bg-primary/10"
        )}>
          <IconComponent className={cn(
            "h-5 w-5",
            variant === "highlighted" ? "text-copper" : "text-primary"
          )} aria-hidden="true" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 
            className={cn(
              "font-serif font-semibold text-foreground mb-2",
              variant === "compact" ? "text-base" : "text-lg"
            )}
            itemProp="name"
          >
            {question}
          </h3>
          
          <div 
            className={cn(
              "text-muted-foreground leading-relaxed",
              variant === "compact" ? "text-sm" : "text-base"
            )}
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAnswer;

/**
 * TLDRBlock - Summary block for AI/LLM optimization
 * 
 * Place at the start of content sections for:
 * - LLM citation optimization (40-60 word chunks)
 * - Quick scanning for users
 * - Featured snippet eligibility
 */
interface TLDRBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const TLDRBlock = ({ children, className }: TLDRBlockProps) => {
  return (
    <div 
      className={cn(
        "tldr-summary speakable-content bg-primary/5 border border-primary/10 rounded-xl p-4 sm:p-5 mb-6",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <Zap className="h-4 w-4 text-copper" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-wider text-copper">
          TL;DR
        </span>
      </div>
      <p className="text-sm sm:text-base text-foreground leading-relaxed">
        {children}
      </p>
    </div>
  );
};

/**
 * ExpertInsight - First-person experience callout for E-E-A-T signals
 * 
 * Demonstrates "lived experience" that AI-generated content cannot replicate
 */
interface ExpertInsightProps {
  quote: string;
  expertName: string;
  expertTitle?: string;
  className?: string;
}

export const ExpertInsight = ({ quote, expertName, expertTitle, className }: ExpertInsightProps) => {
  return (
    <blockquote 
      className={cn(
        "expert-insight my-6 bg-gradient-to-r from-copper/5 to-transparent border-l-4 border-copper pl-5 pr-4 py-4 rounded-r-lg",
        className
      )}
      itemScope
      itemType="https://schema.org/Quotation"
    >
      <p 
        className="text-base italic text-foreground leading-relaxed mb-3"
        itemProp="text"
      >
        "{quote}"
      </p>
      <footer className="flex items-center gap-2">
        <span className="text-sm font-semibold text-copper" itemProp="creator">
          — {expertName}
        </span>
        {expertTitle && (
          <span className="text-xs text-muted-foreground">
            {expertTitle}
          </span>
        )}
      </footer>
    </blockquote>
  );
};

/**
 * KeyTakeaways - Numbered list for featured snippets
 * 
 * Google prioritizes structured takeaways for list snippets
 */
interface KeyTakeawaysProps {
  title?: string;
  items: string[];
  className?: string;
}

export const KeyTakeaways = ({ title = "Key Takeaways", items, className }: KeyTakeawaysProps) => {
  return (
    <div 
      className={cn(
        "key-takeaways bg-cream-warm border border-border rounded-xl p-5 sm:p-6 my-6",
        className
      )}
    >
      <h4 className="font-serif font-bold text-foreground mb-4 flex items-center gap-2">
        <Lightbulb className="h-5 w-5 text-copper" aria-hidden="true" />
        {title}
      </h4>
      <ol className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-copper/10 text-copper text-sm font-semibold flex items-center justify-center">
              {index + 1}
            </span>
            <span className="text-muted-foreground text-sm leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};
