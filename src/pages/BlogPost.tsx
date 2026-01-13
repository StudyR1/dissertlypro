import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Share2, Bookmark } from "lucide-react";

const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  authorBio: string;
  date: string;
  readTime: string;
}> = {
  "how-to-structure-doctoral-dissertation": {
    title: "How to Structure a Doctoral Dissertation",
    excerpt: "A comprehensive guide to organizing your dissertation chapters, from introduction to conclusion.",
    content: [
      "A doctoral dissertation is the culmination of years of research, and its structure plays a crucial role in communicating your findings effectively. While specific requirements vary by institution and discipline, most dissertations follow a similar organizational framework.",
      "## The Standard Five-Chapter Structure",
      "Most dissertations in the social sciences, education, and business follow a five-chapter structure: Introduction, Literature Review, Methodology, Results, and Discussion. However, this isn't the only approach—humanities dissertations often follow a different pattern, and STEM fields may require additional chapters for multiple studies.",
      "## Chapter 1: Introduction",
      "Your introduction sets the stage for everything that follows. It should clearly articulate the research problem, explain why it matters, and preview your approach. Key elements include: background of the problem, statement of the problem, purpose of the study, research questions or hypotheses, significance of the study, and definitions of key terms.",
      "## Chapter 2: Literature Review",
      "The literature review demonstrates your mastery of existing scholarship and positions your research within the broader academic conversation. Organize it thematically rather than chronologically, and ensure you identify the gap your research will fill.",
      "## Chapter 3: Methodology",
      "Your methodology chapter must convince readers that your research design is appropriate for answering your research questions. Include your research paradigm, design, participants or data sources, data collection procedures, analysis methods, and ethical considerations.",
      "## Chapter 4: Results/Findings",
      "Present your findings objectively, without interpretation. Use tables and figures to illustrate key patterns. For qualitative research, this chapter presents themes and supporting evidence. For quantitative research, it presents statistical analyses.",
      "## Chapter 5: Discussion and Conclusion",
      "The final chapter interprets your findings, discusses implications, acknowledges limitations, and suggests directions for future research. This is where you demonstrate the contribution of your work to the field.",
      "## Tips for Success",
      "1. Start with an outline before writing any chapter. 2. Ensure logical flow between sections and chapters. 3. Use consistent formatting throughout. 4. Write regularly, even when you don't feel inspired. 5. Seek feedback early and often.",
    ],
    category: "Dissertation Planning",
    author: "Dr. Sarah Mitchell",
    authorBio: "PhD in Education, 15+ years of academic mentoring experience",
    date: "January 10, 2026",
    readTime: "12 min read",
  },
  "choosing-right-research-methodology": {
    title: "Choosing the Right Research Methodology",
    excerpt: "Learn how to select the methodology that best fits your research questions and objectives.",
    content: [
      "Selecting the right research methodology is one of the most critical decisions you'll make in your doctoral journey. Your methodology must align with your research questions, philosophical assumptions, and practical constraints.",
      "## Understanding Research Paradigms",
      "Before choosing specific methods, understand the philosophical foundations underlying research approaches. Positivism assumes objective reality can be measured; interpretivism emphasizes subjective meaning-making; critical theory focuses on power structures and social change.",
      "## Quantitative Research",
      "Quantitative methods are appropriate when you want to test hypotheses, measure variables, or generalize findings to larger populations. Common designs include experimental, quasi-experimental, correlational, and survey research.",
      "## Qualitative Research",
      "Qualitative methods are ideal for exploring complex phenomena, understanding lived experiences, or developing new theories. Common approaches include phenomenology, grounded theory, case study, ethnography, and narrative inquiry.",
      "## Mixed Methods Research",
      "Mixed methods combine quantitative and qualitative approaches to provide a more comprehensive understanding of research problems. Common designs include convergent, explanatory sequential, and exploratory sequential.",
      "## Key Questions to Ask",
      "1. What is the nature of my research questions? 2. What type of data will best answer these questions? 3. What resources and access do I have? 4. What are the norms in my discipline? 5. What are my philosophical assumptions?",
      "## Common Mistakes to Avoid",
      "Don't choose a methodology simply because it seems easier or because you're familiar with it. Don't ignore the alignment between your questions and your methods. Don't underestimate the time required for qualitative data analysis.",
    ],
    category: "Research Methods",
    author: "Dr. James Chen",
    authorBio: "PhD in Sociology, Research Methods specialist",
    date: "January 8, 2026",
    readTime: "15 min read",
  },
  "handling-supervisor-feedback": {
    title: "How to Handle Supervisor Feedback Effectively",
    excerpt: "Strategies for interpreting and responding to supervisor comments without losing momentum.",
    content: [
      "Receiving supervisor feedback can be emotionally challenging, especially when it requires significant revisions. However, learning to handle feedback constructively is essential for doctoral success and professional development.",
      "## Understanding Different Types of Feedback",
      "Supervisor feedback typically falls into several categories: structural feedback (organization and flow), conceptual feedback (theoretical arguments), methodological feedback (research design), and editorial feedback (writing quality).",
      "## Step 1: Take Time to Process",
      "Don't respond immediately to feedback, especially if it feels overwhelming. Give yourself 24-48 hours to process your emotions before engaging analytically with the comments.",
      "## Step 2: Seek Clarification",
      "If any feedback is unclear, schedule a meeting with your supervisor to discuss. It's better to ask questions than to make changes based on misunderstandings.",
      "## Step 3: Create a Response Plan",
      "Document all feedback points and categorize them by type and priority. Create a systematic plan for addressing each point, with realistic timelines.",
      "## Step 4: Communicate Your Progress",
      "Keep your supervisor informed about how you're addressing their feedback. This demonstrates responsiveness and helps prevent miscommunication.",
      "## When You Disagree",
      "Sometimes you may disagree with feedback. In these cases, prepare a respectful, evidence-based response explaining your perspective. Be open to discussion and compromise.",
    ],
    category: "Supervisor Tips",
    author: "Dr. Emily Rodriguez",
    authorBio: "PhD in Psychology, Academic coaching expert",
    date: "January 5, 2026",
    readTime: "8 min read",
  },
  "balancing-work-doctoral-research": {
    title: "Balancing Full-Time Work with Doctoral Research",
    excerpt: "Practical time management strategies for working professionals pursuing advanced degrees.",
    content: [
      "Pursuing a doctoral degree while maintaining full-time employment is increasingly common, but it requires intentional time management and boundary-setting. Here's how to make it work.",
      "## Accept That Something Has to Give",
      "You cannot maintain the same lifestyle you had before starting your doctorate. Identify areas where you can reduce commitments temporarily—social activities, hobbies, or extra work projects.",
      "## Create a Realistic Schedule",
      "Block specific times for research work and treat them as non-negotiable appointments. Early mornings, lunch breaks, and weekends are common productive windows for working doctoral students.",
      "## Use Dead Time Productively",
      "Commuting, waiting rooms, and travel time can be used for reading, listening to academic podcasts, or reviewing notes. These small pockets of time add up significantly.",
      "## Communicate with Your Employer",
      "If possible, be transparent with your employer about your doctoral studies. Some organizations offer flexible arrangements, study leave, or tuition support.",
      "## Build a Support System",
      "Enlist family members, friends, and colleagues who can provide practical and emotional support. Consider joining a cohort or study group of fellow working doctoral students.",
      "## Protect Your Mental Health",
      "Burnout is a real risk for working doctoral students. Schedule regular breaks, maintain some non-academic activities, and seek support if you're struggling.",
    ],
    category: "Work-Life Balance",
    author: "Dr. Michael Thompson",
    authorBio: "EdD in Organizational Leadership, Former working professional",
    date: "January 3, 2026",
    readTime: "10 min read",
  },
  "avoiding-plagiarism-graduate-research": {
    title: "Avoiding Plagiarism in Graduate Research",
    excerpt: "Understanding academic integrity and strategies for maintaining originality in your work.",
    content: [
      "Academic integrity is the foundation of scholarly work. Understanding what constitutes plagiarism and how to avoid it is essential for every graduate student.",
      "## Types of Plagiarism",
      "Plagiarism isn't just copying text verbatim. It includes: direct plagiarism (word-for-word copying), paraphrasing without citation, mosaic plagiarism (mixing sources without attribution), and self-plagiarism (reusing your own previous work without permission).",
      "## Proper Paraphrasing",
      "Effective paraphrasing involves truly understanding the source material and expressing it in your own words and sentence structure. Simply changing a few words is not sufficient.",
      "## When to Cite",
      "Cite whenever you use ideas, data, or language from another source. When in doubt, cite. The only exception is common knowledge that any educated reader would be expected to know.",
      "## Using Plagiarism Detection Tools",
      "Tools like Turnitin are not just for catching plagiarism—they're useful for checking your own work before submission. High similarity scores in properly cited sections may indicate over-reliance on sources.",
      "## Maintaining Research Integrity",
      "Beyond plagiarism, academic integrity includes accurate data reporting, ethical treatment of research participants, and honest representation of your contributions.",
    ],
    category: "Academic Integrity",
    author: "Dr. Amanda Foster",
    authorBio: "PhD in English, Academic integrity officer",
    date: "December 28, 2025",
    readTime: "9 min read",
  },
  "writing-effective-literature-review": {
    title: "Writing an Effective Literature Review",
    excerpt: "Master the art of synthesizing sources and building a compelling theoretical foundation.",
    content: [
      "A literature review is more than a summary of sources—it's a critical synthesis that demonstrates your scholarly expertise and positions your research within the field.",
      "## Purpose of the Literature Review",
      "Your literature review should: establish the importance of your topic, identify what's known and unknown, reveal patterns and themes, identify methodological approaches, and justify your research approach.",
      "## Finding and Organizing Sources",
      "Use academic databases strategically. Start with broad searches, then narrow based on relevance. Use citation management software from the beginning to organize sources and notes.",
      "## Thematic vs. Chronological Organization",
      "Organize by themes rather than by author or date. This allows you to synthesize ideas across sources and demonstrate critical thinking rather than mere summarization.",
      "## Synthesizing, Not Summarizing",
      "Move beyond describing what each source says. Instead, compare, contrast, and connect ideas across sources. Identify agreements, contradictions, and gaps.",
      "## Identifying the Gap",
      "Your literature review should naturally lead to the gap your research addresses. By the end, readers should understand exactly what's missing and why your study matters.",
    ],
    category: "Literature Review",
    author: "Dr. David Park",
    authorBio: "PhD in Communication, Published researcher",
    date: "December 22, 2025",
    readTime: "14 min read",
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPostsData[slug] : null;

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
        description={post.excerpt}
        canonical={`/blog/${slug}`}
        type="article"
        publishedTime={post.date}
        author={post.author}
        keywords={[post.category, 'dissertation advice', 'thesis tips', 'academic writing']}
      />
      {/* Hero Section */}
      <section className="bg-hero-gradient py-16 lg:py-24">
        <div className="container">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
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
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground font-sans leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </article>

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-serif text-primary">{post.author[4]}</span>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground">{post.author}</h4>
                  <p className="text-muted-foreground font-sans text-sm">{post.authorBio}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 bg-ivory-warm rounded-xl p-8 text-center">
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                Need Help With Your Research?
              </h3>
              <p className="text-muted-foreground font-sans mb-6">
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
