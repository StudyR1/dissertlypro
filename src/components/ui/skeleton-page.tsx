import { Skeleton } from '@/components/ui/skeleton';
import { memo } from 'react';

// Memoized header skeleton component
const HeaderSkeleton = memo(() => (
  <div className="h-16 sm:h-20 border-b border-border bg-card">
    <div className="container flex items-center justify-between h-full px-4 sm:px-6">
      <Skeleton className="h-10 w-32 sm:w-40" />
      <div className="hidden md:flex gap-6">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-20" />
      </div>
      <Skeleton className="h-10 w-24 sm:w-32" />
    </div>
  </div>
));
HeaderSkeleton.displayName = 'HeaderSkeleton';

// Generic page skeleton with header and hero
const SkeletonPage = memo(() => (
  <div className="min-h-screen bg-background animate-fade-in">
    <HeaderSkeleton />

    {/* Hero skeleton */}
    <div className="py-16 lg:py-24 bg-primary">
      <div className="container px-4 sm:px-6">
        <div className="max-w-2xl">
          <Skeleton className="h-4 w-32 mb-4 bg-white/10" />
          <Skeleton className="h-10 sm:h-12 w-full mb-4 bg-white/10" />
          <Skeleton className="h-10 sm:h-12 w-3/4 mb-6 bg-white/10" />
          <Skeleton className="h-5 w-full mb-2 bg-white/10" />
          <Skeleton className="h-5 w-2/3 mb-8 bg-white/10" />
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Skeleton className="h-12 w-full sm:w-40 bg-white/10" />
            <Skeleton className="h-12 w-full sm:w-32 bg-white/10" />
          </div>
        </div>
      </div>
    </div>

    {/* Content skeleton */}
    <div className="py-12 sm:py-16 container px-4 sm:px-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="p-5 sm:p-6 rounded-xl border border-border bg-card">
            <Skeleton className="h-12 w-12 rounded-lg mb-4" />
            <Skeleton className="h-6 w-3/4 mb-3" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  </div>
));
SkeletonPage.displayName = 'SkeletonPage';

// Services grid skeleton
export const ServicesGridSkeleton = memo(() => (
  <div className="min-h-screen bg-background animate-fade-in">
    <HeaderSkeleton />

    {/* Hero */}
    <div className="py-12 sm:py-16 lg:py-24 bg-primary">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl">
          <Skeleton className="h-4 w-24 mb-3 bg-white/10" />
          <Skeleton className="h-10 sm:h-14 w-full mb-4 bg-white/10" />
          <Skeleton className="h-5 w-full mb-2 bg-white/10" />
          <Skeleton className="h-5 w-3/4 bg-white/10" />
        </div>
      </div>
    </div>

    {/* Services Grid */}
    <div className="py-12 sm:py-16 container px-4 sm:px-6">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="p-5 sm:p-6 lg:p-8 rounded-xl border border-border bg-card">
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Skeleton className="h-11 w-11 sm:h-14 sm:w-14 rounded-lg flex-shrink-0" />
              <div className="flex-1">
                <Skeleton className="h-5 sm:h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
            <div className="space-y-2 mb-4 sm:mb-6">
              {[1, 2, 3].map((j) => (
                <div key={j} className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4 rounded-full flex-shrink-0" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
            <Skeleton className="h-10 w-full sm:w-32" />
          </div>
        ))}
      </div>
    </div>
  </div>
));
ServicesGridSkeleton.displayName = 'ServicesGridSkeleton';

// Blog grid skeleton
export const BlogGridSkeleton = memo(() => (
  <div className="min-h-screen bg-background animate-fade-in">
    <HeaderSkeleton />

    {/* Hero */}
    <div className="py-12 sm:py-16 lg:py-20 bg-primary">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl">
          <Skeleton className="h-4 w-28 mb-3 bg-white/10" />
          <Skeleton className="h-10 sm:h-12 w-full mb-4 bg-white/10" />
          <Skeleton className="h-5 w-full mb-2 bg-white/10" />
          <Skeleton className="h-5 w-2/3 bg-white/10" />
        </div>
      </div>
    </div>

    {/* Featured section */}
    <div className="py-8 sm:py-12 bg-muted/30 border-b border-border">
      <div className="container px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-6">
          <Skeleton className="h-5 w-5" />
          <Skeleton className="h-5 w-32" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
              <Skeleton className="aspect-video w-full" />
              <div className="p-4">
                <Skeleton className="h-3 w-20 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Category filters */}
    <div className="py-4 border-b border-border bg-background sticky top-16 sm:top-20 z-40">
      <div className="container px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-4" />
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-9 w-20 sm:w-24 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Blog posts grid */}
    <div className="py-12 sm:py-16 container px-4 sm:px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
            <Skeleton className="aspect-video w-full" />
            <div className="p-6">
              <Skeleton className="h-3 w-24 mb-3" />
              <Skeleton className="h-5 w-full mb-2" />
              <Skeleton className="h-5 w-3/4 mb-4" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-2/3 mb-4" />
              <div className="flex items-center gap-4">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
));
BlogGridSkeleton.displayName = 'BlogGridSkeleton';

// Article/resource page skeleton
export const ArticleSkeleton = memo(() => (
  <div className="min-h-screen bg-background animate-fade-in">
    <HeaderSkeleton />

    {/* Breadcrumb */}
    <div className="py-3 bg-muted/30">
      <div className="container px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-3 w-2" />
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-2" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
    </div>

    {/* Hero */}
    <div className="py-12 sm:py-16 lg:py-20 bg-primary">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl">
          <Skeleton className="h-4 w-24 mb-3 bg-white/10" />
          <Skeleton className="h-10 sm:h-12 w-full mb-3 bg-white/10" />
          <Skeleton className="h-10 sm:h-12 w-3/4 mb-6 bg-white/10" />
          <Skeleton className="h-5 w-full mb-2 bg-white/10" />
          <Skeleton className="h-5 w-2/3 bg-white/10" />
        </div>
      </div>
    </div>

    {/* Article content */}
    <div className="py-12 sm:py-16 container px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <Skeleton className="h-7 w-3/4 mb-4" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            
            <Skeleton className="h-6 w-1/2 mt-8 mb-4" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>

            {/* Callout box */}
            <div className="p-6 rounded-xl border border-border bg-muted/30">
              <Skeleton className="h-5 w-1/3 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>

            <Skeleton className="h-6 w-2/5 mt-8 mb-4" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card">
              <Skeleton className="h-5 w-2/3 mb-4" />
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
              </div>
              <Skeleton className="h-10 w-full mt-6" />
            </div>
            
            <div className="p-6 rounded-xl border border-border bg-card">
              <Skeleton className="h-5 w-1/2 mb-4" />
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-lg flex-shrink-0" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));
ArticleSkeleton.displayName = 'ArticleSkeleton';

// Service detail skeleton
export const ServiceDetailSkeleton = memo(() => (
  <div className="min-h-screen bg-background animate-fade-in">
    <HeaderSkeleton />

    {/* Hero */}
    <div className="py-16 lg:py-24 bg-primary">
      <div className="container px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-6">
          <Skeleton className="h-3 w-12 bg-white/10" />
          <Skeleton className="h-3 w-2 bg-white/10" />
          <Skeleton className="h-3 w-16 bg-white/10" />
          <Skeleton className="h-3 w-2 bg-white/10" />
          <Skeleton className="h-3 w-32 bg-white/10" />
        </div>
        <div className="flex items-start gap-6">
          <Skeleton className="hidden md:block h-20 w-20 rounded-xl bg-white/10 flex-shrink-0" />
          <div className="flex-1 max-w-3xl">
            <Skeleton className="h-10 sm:h-12 w-full mb-4 bg-white/10" />
            <Skeleton className="h-10 sm:h-12 w-3/4 mb-6 bg-white/10" />
            <Skeleton className="h-5 w-full mb-2 bg-white/10" />
            <Skeleton className="h-5 w-2/3 bg-white/10" />
          </div>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="py-12 sm:py-16 container px-4 sm:px-6">
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-12">
          {/* About section */}
          <div>
            <Skeleton className="h-7 w-1/3 mb-4" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>

          {/* Who it's for */}
          <div>
            <Skeleton className="h-7 w-1/4 mb-4" />
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-5 w-5 rounded-full flex-shrink-0" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>

          {/* What's included */}
          <div>
            <Skeleton className="h-7 w-1/3 mb-4" />
            <div className="grid sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-border">
                  <Skeleton className="h-5 w-5 rounded-full flex-shrink-0" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="p-6 rounded-xl border border-border bg-card sticky top-24">
            <Skeleton className="h-6 w-2/3 mb-4" />
            <div className="space-y-3 mb-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-5 w-5 flex-shrink-0" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
            <Skeleton className="h-12 w-full mb-3" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
));
ServiceDetailSkeleton.displayName = 'ServiceDetailSkeleton';

export default SkeletonPage;