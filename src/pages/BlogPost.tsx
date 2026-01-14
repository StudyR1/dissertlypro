import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BlogPostSchema, BreadcrumbSchema, FAQSchema } from "@/components/schemas";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, List } from "lucide-react";
import { blogPosts, getRelatedPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const relatedPosts = slug ? getRelatedPosts(slug, 3) : [];

  if (!post) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-serif font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">View All Posts</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO 
        title={post.title}
        description={post.metaDescription}
        canonical={`/blog/${slug}`}
        type="article"
        publishedTime={post.date}
        author={post.author}
        keywords={post.keywords}
      />
      <BlogPostSchema
        title={post.title}
        description={post.metaDescription}
        url={`/blog/${slug}`}
        datePublished={post.date}
        author={post.author}
        authorBio={post.authorBio}
        category={post.category}
        readTime={post.readTime}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: post.title, url: `/blog/${slug}` }
      ]} />
      {post.faqs && <FAQSchema faqs={post.faqs} />}

      {/* Breadcrumbs */}
      <div className="bg-midnight-rich">
        <div className="container px-4 sm:px-6">
          <Breadcrumbs className="text-white/60" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-hero-gradient py-12 lg:py-20">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-gold text-sm font-sans mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <span className="inline-block text-gold font-sans text-sm font-semibold tracking-wider uppercase mb-4">
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/70 text-sm font-sans">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Table of Contents */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="bg-cream-warm rounded-xl p-6 mb-10 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <List className="h-5 w-5 text-copper" />
                  <h2 className="font-serif font-bold text-foreground">Table of Contents</h2>
                </div>
                <nav>
                  <ol className="space-y-2">
                    {post.tableOfContents.map((item, index) => (
                      <li key={item.id}>
                        <a 
                          href={`#${item.id}`}
                          className="text-sm text-muted-foreground hover:text-copper transition-colors font-sans"
                        >
                          {index + 1}. {item.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            )}

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  const title = paragraph.replace("## ", "");
                  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return (
                    <h2 key={index} id={id} className="text-xl sm:text-2xl font-serif font-bold text-foreground mt-10 mb-4 scroll-mt-24">
                      {title}
                    </h2>
                  );
                }
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <p key={index} className="font-semibold text-foreground mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground font-sans leading-relaxed mb-4" 
                     dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} 
                  />
                );
              })}
            </article>

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <h2 className="text-xl font-serif font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {post.faqs.map((faq, index) => (
                    <div key={index} className="bg-cream-warm rounded-xl p-6">
                      <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-serif text-primary">{post.author.split(' ')[1]?.[0] || post.author[0]}</span>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground">{post.author}</h4>
                  <p className="text-muted-foreground font-sans text-sm">{post.authorBio}</p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <h2 className="text-xl font-serif font-bold text-foreground mb-6">Related Articles</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/blog/${related.slug}`}
                      className="group bg-card rounded-xl border border-border p-4 hover:shadow-card transition-all"
                    >
                      <span className="text-copper text-xs font-semibold uppercase">{related.category}</span>
                      <h3 className="text-sm font-serif font-semibold text-foreground mt-2 group-hover:text-copper transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-br from-midnight to-midnight-rich rounded-xl p-8 text-center">
              <h3 className="text-xl font-serif font-bold text-white mb-3">
                Need Expert Help With Your Research?
              </h3>
              <p className="text-white/70 font-sans mb-6">
                Our PhD-qualified experts can provide personalized support for your dissertation journey.
              </p>
              <Button variant="copper" size="lg" asChild>
                <Link to="/consultation">
                  Request Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
