import { Shield, Award, Lock, CheckCircle, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TrustBadgesProps {
  variant?: 'horizontal' | 'vertical' | 'compact';
  className?: string;
}

const badges = [
  { 
    icon: Shield, 
    label: "100% Confidential", 
    description: "Your privacy protected" 
  },
  { 
    icon: Award, 
    label: "PhD Experts", 
    description: "500+ qualified specialists" 
  },
  { 
    icon: Lock, 
    label: "Secure & Private", 
    description: "Enterprise-grade security" 
  },
  { 
    icon: CheckCircle, 
    label: "Satisfaction Guaranteed", 
    description: "Unlimited revisions" 
  },
];

const TrustBadges = ({ variant = 'horizontal', className }: TrustBadgesProps) => {
  if (variant === 'compact') {
    return (
      <div className={cn("flex flex-wrap items-center justify-center gap-4 text-sm", className)}>
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center gap-2 text-muted-foreground">
            <badge.icon className="h-4 w-4 text-copper" />
            <span>{badge.label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={cn("space-y-4", className)}>
        {badges.map((badge, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-copper/10 text-copper flex-shrink-0">
              <badge.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-medium text-foreground text-sm">{badge.label}</div>
              <div className="text-xs text-muted-foreground">{badge.description}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4", className)}>
      {badges.map((badge, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border hover:shadow-card transition-shadow"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10 text-copper mb-3">
            <badge.icon className="h-6 w-6" />
          </div>
          <div className="font-medium text-foreground text-sm">{badge.label}</div>
          <div className="text-xs text-muted-foreground mt-1">{badge.description}</div>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;

// Inline trust strip component
export const TrustStrip = ({ className }: { className?: string }) => (
  <div className={cn(
    "flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 text-sm text-muted-foreground",
    className
  )}>
    <div className="flex items-center gap-2">
      <Shield className="h-4 w-4 text-copper" />
      <span>100% Confidential</span>
    </div>
    <div className="flex items-center gap-2">
      <Users className="h-4 w-4 text-copper" />
      <span>15,000+ Students Helped</span>
    </div>
    <div className="flex items-center gap-2">
      <Award className="h-4 w-4 text-copper" />
      <span>PhD-Level Experts</span>
    </div>
    <div className="flex items-center gap-2">
      <Clock className="h-4 w-4 text-copper" />
      <span>24hr Response</span>
    </div>
  </div>
);
