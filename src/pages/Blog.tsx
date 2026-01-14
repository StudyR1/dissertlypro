import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/schemas";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { ArrowRight, Clock, User, Sparkles, Filter } from "lucide-react";
import { blogPosts, blogCategories, getFeaturedPosts, getPostImage } from "@/data/blogPosts";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [isScrolled, setIsScrolled] = useState(false);
  const featuredPosts = getFeaturedPosts();
  
  const filteredPosts = activeCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <SEO 
        title="Blog & Research Resources"
        description="Expert insights on dissertation writing, research methodology, data analysis, and academic success. Free guides and tips for Master's and PhD students."
        canonical="/blog"
        keywords={['dissertation tips', 'thesis writing guide', 'research methods blog', 'academic writing tips', 'PhD advice', 'literature review help']}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" }
      ]} />

      {/* Breadcrumbs */}
      <div className="bg-midnight-rich">
        <div className="container px-4 sm:px-6">
          <Breadcrumbs className="text-white/60" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-hero-gradient py-16 lg:py-24">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-sans font-semibold text-sm tracking-wider uppercase mb-4">
              Blog & Resources
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Insights for Graduate Researchers
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 font-sans leading-relaxed">
              Expert advice, practical tips, and research strategies from PhD-qualified academics 
              to support your postgraduate journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-cream-warm border-b border-border">
          <div className="container px-4 sm:px-6">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-copper" />
              <h2 className="text-lg font-serif font-bold text-foreground">Featured Guides</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredPosts.slice(0, 4).map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-card transition-all"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={getPostImage(post)} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-copper text-xs font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h3 className="text-sm font-serif font-semibold text-foreground mt-2 group-hover:text-copper transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2">{post.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sticky Category Navigation */}
      <motion.section 
        className={`py-4 bg-background/95 backdrop-blur-md border-b border-border sticky top-16 sm:top-20 z-40 transition-shadow ${
          isScrolled ? "shadow-md" : ""
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-muted-foreground shrink-0">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium hidden sm:inline">Filter:</span>
            </div>
            <div className="flex flex-wrap gap-2 overflow-x-auto scrollbar-hide pb-1">
              {blogCategories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-sans font-medium transition-all whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                  {activeCategory === category && (
                    <motion.span
                      className="ml-2 text-xs opacity-80"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      ({category === "All Posts" ? blogPosts.length : filteredPosts.length})
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-card rounded-xl border border-border shadow-subtle hover:shadow-card transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={getPostImage(post)} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {post.featured && (
                    <div className="absolute top-3 right-3 bg-copper text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Featured
                    </div>
                  )}
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
      <section className="py-16 lg:py-24 bg-ivory-warm">
        <div className="container px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
