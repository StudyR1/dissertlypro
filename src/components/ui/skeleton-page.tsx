import { Skeleton } from '@/components/ui/skeleton';

const SkeletonPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header skeleton */}
      <div className="h-20 border-b border-border bg-card">
        <div className="container flex items-center justify-between h-full">
          <Skeleton className="h-10 w-40" />
          <div className="hidden md:flex gap-6">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-10 w-32" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="py-20 lg:py-28 bg-primary">
        <div className="container">
          <div className="max-w-2xl">
            <Skeleton className="h-4 w-32 mb-4 bg-white/10" />
            <Skeleton className="h-12 w-full mb-4 bg-white/10" />
            <Skeleton className="h-12 w-3/4 mb-6 bg-white/10" />
            <Skeleton className="h-6 w-full mb-2 bg-white/10" />
            <Skeleton className="h-6 w-2/3 mb-8 bg-white/10" />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-40 bg-white/10" />
              <Skeleton className="h-12 w-32 bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="py-16 container">
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 rounded-xl border border-border">
              <Skeleton className="h-12 w-12 rounded-lg mb-4" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonPage;
