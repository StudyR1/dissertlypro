import { Clock, Users, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UrgencyBannerProps {
  message?: string;
  className?: string;
  variant?: 'default' | 'subtle';
}

const UrgencyBanner = ({ 
  message = "Limited spots available for January consultations",
  variant = 'default',
  className 
}: UrgencyBannerProps) => {
  if (variant === 'subtle') {
    return (
      <div className={cn(
        "inline-flex items-center gap-2 text-sm text-copper bg-copper/10 rounded-full px-4 py-2",
        className
      )}>
        <Clock className="h-4 w-4 animate-pulse" />
        <span>{message}</span>
      </div>
    );
  }

  return (
    <div className={cn(
      "bg-gradient-to-r from-copper-dark via-copper to-copper-dark text-white",
      className
    )}>
      <div className="container py-2.5 flex items-center justify-center gap-3 text-sm font-sans">
        <Zap className="h-4 w-4 animate-pulse" />
        <span>{message}</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:flex items-center gap-1.5">
          <Users className="h-4 w-4" />
          <span>12 students booking now</span>
        </span>
      </div>
    </div>
  );
};

export default UrgencyBanner;
