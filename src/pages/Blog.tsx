import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    slug: "how-to-structure-doctoral-dissertation",
    title: "How to Structure a Doctoral Dissertation",
    excerpt: "A comprehensive guide to organizing your dissertation chapters, from introduction to conclusion, with tips for maintaining coherence throughout.",
    category: "Dissertation Planning",
    author: "Dr. Sarah Mitchell",
    date: "January 10, 2026",
    readTime: "12 min read",
  },
  {
    slug: "choosing-right-research-methodology",
    title: "Choosing the Right Research Methodology",
    excerpt: "Qualitative, quantitative, or mixed methods? Learn how to select the methodology that best fits your research questions and objectives.",
    category: "Research Methods",
    author: "Dr. James Chen",
    date: "January 8, 2026",
    readTime: "15 min read",
  },
  {
    slug: "handling-supervisor-feedback",
    title: "How to Handle Supervisor Feedback Effectively",
    excerpt: "Strategies for interpreting, prioritizing, and responding to supervisor comments without losing momentum or confidence.",
    category: "Supervisor Tips",
    author: "Dr. Emily Rodriguez",
    date: "January 5, 2026",
    readTime: "8 min read",
  },
  {
    slug: "balancing-work-doctoral-research",
    title: "Balancing Full-Time Work with Doctoral Research",
    excerpt: "Practical time management strategies and mindset shifts for working professionals pursuing advanced degrees.",
    category: "Work-Life Balance",
    author: "Dr. Michael Thompson",
    date: "January 3, 2026",
    readTime: "10 min read",
  },
  {
    slug: "avoiding-plagiarism-graduate-research",
    title: "Avoiding Plagiarism in Graduate Research",
    excerpt: "Understanding academic integrity, proper citation practices, and strategies for maintaining originality in your scholarly work.",
    category: "Academic Integrity",
    author: "Dr. Amanda Foster",
    date: "December 28, 2025",
    readTime: "9 min read",
  },
  {
    slug: "writing-effective-literature-review",
    title: "Writing an Effective Literature Review",
    excerpt: "Master the art of synthesizing sources, identifying gaps, and building a compelling theoretical foundation for your research.",
    category: "Literature Review",
    author: "Dr. David Park",
    date: "December 22, 2025",
    readTime: "14 min read",
  },
];

const categories = [
  "All Posts",
  "Dissertation Planning",
  "Research Methods",
  "Data Analysis",
  "Writing Tips",
  "Supervisor Tips",
  "Work-Life Balance",
  "Academic Integrity",
];

const Blog = () => {
  return (
    <Layout>
      <SEO 
        title="Blog & Research Resources"
        description="Expert insights on dissertation writing, research methodology, data analysis, and academic success. Free guides and tips for Master's and PhD students."
        canonical="/blog"
        keywords={['dissertation tips', 'thesis writing guide', 'research methods blog', 'academic writing tips', 'PhD advice']}
      />
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-sans font-semibold text-sm tracking-wider uppercase mb-4">
              Blog & Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Insights for Graduate Researchers
            </h1>
            <p className="text-xl text-primary-foreground/80 font-sans leading-relaxed">
              Expert advice, practical tips, and research strategies from PhD-qualified academics 
              to support your postgraduate journey.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-sans font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.slug}`}
                className="group bg-card rounded-xl border border-border shadow-subtle hover:shadow-card transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center">
                  <span className="text-6xl font-serif text-primary/20">{post.title[0]}</span>
                </div>
                <div className="p-6">
                  <span className="inline-block text-gold font-sans text-xs font-semibold tracking-wider uppercase mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-sans">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-28 bg-ivory-warm">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Get Research Tips in Your Inbox
            </h2>
            <p className="text-muted-foreground font-sans text-lg mb-8">
              Join thousands of graduate students receiving weekly insights, resources, 
              and exclusive content to support your academic journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <Button variant="copper" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground font-sans mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
