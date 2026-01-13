import { useState, useEffect } from 'react';
import { Users, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialProofNotificationProps {
  messages?: {
    name: string;
    action: string;
    location: string;
    timeAgo: string;
  }[];
  interval?: number;
  delay?: number;
}

const defaultMessages = [
  { name: "Sarah M.", action: "just started a consultation", location: "United States", timeAgo: "2 minutes ago" },
  { name: "James K.", action: "submitted a dissertation request", location: "United Kingdom", timeAgo: "5 minutes ago" },
  { name: "Priya R.", action: "booked a methodology session", location: "Canada", timeAgo: "8 minutes ago" },
  { name: "Michael T.", action: "started working with an expert", location: "Australia", timeAgo: "12 minutes ago" },
  { name: "Emma L.", action: "completed their proposal", location: "Germany", timeAgo: "15 minutes ago" },
  { name: "David C.", action: "received their analysis results", location: "Singapore", timeAgo: "18 minutes ago" },
];

const SocialProofNotification = ({ 
  messages = defaultMessages,
  interval = 15000,
  delay = 8000
}: SocialProofNotificationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if already dismissed in session
    if (sessionStorage.getItem('socialProofDismissed')) {
      setIsDismissed(true);
      return;
    }

    // Don't show on mobile
    if (window.innerWidth < 768) return;

    // Initial delay before first notification
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
      
      // Auto-hide after 5 seconds
      setTimeout(() => setIsVisible(false), 5000);
    }, delay);

    // Show notifications periodically
    const intervalTimer = setInterval(() => {
      if (!isDismissed) {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsVisible(true);
        setTimeout(() => setIsVisible(false), 5000);
      }
    }, interval);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, [delay, interval, messages.length, isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('socialProofDismissed', 'true');
  };

  if (isDismissed) return null;

  const currentMessage = messages[currentIndex];

  return (
    <div
      className={cn(
        "fixed bottom-6 left-6 z-40 hidden md:block transition-all duration-500 transform",
        isVisible 
          ? "translate-x-0 opacity-100" 
          : "-translate-x-full opacity-0 pointer-events-none"
      )}
    >
      <div className="bg-card rounded-xl shadow-elevated border border-border p-4 max-w-xs relative group">
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-muted text-muted-foreground hover:bg-destructive hover:text-destructive-foreground flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Dismiss notifications"
        >
          ×
        </button>

        <div className="flex items-start gap-3">
          {/* Avatar */}
          <div className="h-10 w-10 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0">
            <Users className="h-5 w-5 text-copper" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-foreground font-medium">
              <span className="font-semibold">{currentMessage.name}</span>{' '}
              <span className="text-muted-foreground font-normal">{currentMessage.action}</span>
            </p>
            <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
              <span>{currentMessage.location}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {currentMessage.timeAgo}
              </span>
            </div>
          </div>
        </div>

        {/* Verified badge */}
        <div className="mt-2 pt-2 border-t border-border flex items-center gap-1.5 text-xs text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Verified activity
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotification;
