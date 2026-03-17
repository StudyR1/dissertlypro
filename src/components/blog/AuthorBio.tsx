import { getAuthorByName, Author } from "@/data/authors";
import { Badge } from "@/components/ui/badge";

interface AuthorBioProps {
  authorName: string;
  authorBio?: string;
  variant?: "default" | "compact";
}

const AuthorBio = ({ authorName, authorBio, variant = "default" }: AuthorBioProps) => {
  const author = getAuthorByName(authorName);
  
  // Fallback to simple display if author not found in database
  if (!author) {
    return (
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <span className="text-2xl font-serif text-primary">
            {authorName.split(' ')[1]?.[0] || authorName[0]}
          </span>
        </div>
        <div>
          <h4 className="font-serif font-semibold text-foreground">{authorName}</h4>
          {authorBio && (
            <p className="text-muted-foreground font-sans text-sm">{authorBio}</p>
          )}
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3">
        {author.image ? (
          <img 
            src={author.image} 
            alt={author.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover border-2 border-copper/20"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-lg font-serif text-primary">
              {author.name.split(' ')[1]?.[0]}
            </span>
          </div>
        )}
        <div>
          <span className="font-medium text-foreground text-sm">{author.name}</span>
          <p className="text-xs text-muted-foreground">{author.credentials}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream-warm rounded-xl p-6 border border-border">
      <div className="flex flex-col sm:flex-row gap-5">
        {/* Author Photo */}
        {author.image ? (
          <img 
            src={author.image} 
            alt={author.name}
            width={96}
            height={96}
            className="h-24 w-24 rounded-full object-cover border-4 border-copper/20 shadow-md flex-shrink-0 mx-auto sm:mx-0"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
            <span className="text-4xl font-serif text-primary">
              {author.name.split(' ')[1]?.[0]}
            </span>
          </div>
        )}
        
        {/* Author Info */}
        <div className="flex-1 text-center sm:text-left">
          <div className="mb-2">
            <h4 className="font-serif font-bold text-foreground text-lg">{author.name}</h4>
            <p className="text-copper font-medium text-sm">{author.credentials}</p>
          </div>
          
          <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-3">
            {author.bio}
          </p>
          
          {/* Expertise Tags */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {author.expertise.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="bg-midnight/5 text-midnight hover:bg-midnight/10 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
