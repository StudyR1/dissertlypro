import { Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface GuaranteeBadgeProps {
  variant?: 'default' | 'compact' | 'hero';
  className?: string;
}

const GuaranteeBadge = ({ variant = 'default', className = '' }: GuaranteeBadgeProps) => {
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 text-sm ${className}`}>
        <Shield className="h-4 w-4 text-green-600" />
        <span className="text-muted-foreground">100% Money-Back Guarantee</span>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className={`inline-flex items-center gap-3 px-4 py-2 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-full ${className}`}
      >
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 dark:bg-green-900">
          <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold text-green-800 dark:text-green-300">100% Money-Back Guarantee</p>
          <p className="text-xs text-green-600 dark:text-green-400">Full refund if not satisfied</p>
        </div>
      </motion.div>
    );
  }

  // Default variant - card style
  return (
    <div className={`bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/40 border border-green-200 dark:border-green-800 rounded-xl p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 shrink-0">
          <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h4 className="font-semibold text-green-800 dark:text-green-300">100% Money-Back Guarantee</h4>
          <p className="text-sm text-green-700 dark:text-green-400 mt-1">
            Not satisfied? Get a full refund within 14 days, no questions asked.
          </p>
          <ul className="mt-2 space-y-1">
            {['Unlimited revisions', 'Quality assured', 'Secure payments'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-green-600 dark:text-green-500">
                <CheckCircle className="h-3 w-3" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeBadge;
