import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";

// Import all blog posts data (same as in the main blog page)
const blogPosts = [
  // September 2025 (Latest)
  {
    slug: "2025-look-ahead-where-salesforce-marketing-is-headed",
    title: "2025 Look Ahead: Where Salesforce Marketing Is Headed",
    excerpt: "Explore the future of Salesforce Marketing Cloud and Data Cloud, from AI-powered personalization to privacy-first marketing and beyond.",
    date: "2025-09-17",
    readTime: "7 min read",
    category: "Future Trends",
    tags: ["Marketing Cloud", "Data Cloud", "Future", "AI", "Privacy", "Trends"]
  },
  {
    slug: "champion-level-blogging-sharing-knowledge-with-the-ecosystem",
    title: "Champion-Level Blogging: Sharing Knowledge with the Ecosystem",
    excerpt: "Learn how to build a thought leadership blog that establishes you as a Marketing Cloud expert and drives business growth through knowledge sharing.",
    date: "2025-09-03",
    readTime: "7 min read",
    category: "Thought Leadership",
    tags: ["Marketing Cloud", "Thought Leadership", "Blogging", "Content Marketing", "Community"]
  },
  // August 2025
  {
    slug: "marketing-ops-metrics-that-prove-program-roi",
    title: "Marketing Ops Metrics That Prove Program ROI",
    excerpt: "Learn how to measure Marketing Cloud program success with metrics that demonstrate clear business value and ROI to stakeholders.",
    date: "2025-08-20",
    readTime: "7 min read",
    category: "Analytics",
    tags: ["Marketing Cloud", "Marketing Ops", "ROI", "Metrics", "Analytics", "Business Value"]
  },
  {
    slug: "healthcare-use-cases-privacy-first-journeys-with-data-cloud",
    title: "Healthcare Use Cases: Privacy-First Journeys with Data Cloud",
    excerpt: "Learn how to build Marketing Cloud journeys for healthcare that prioritize patient privacy while delivering personalized experiences and improving outcomes.",
    date: "2025-08-06",
    readTime: "7 min read",
    category: "Healthcare",
    tags: ["Marketing Cloud", "Healthcare", "Privacy", "Data Cloud", "HIPAA", "Patient Engagement"]
  },
  // July 2025
  {
    slug: "from-poc-to-scale-growing-data-cloud-value-in-12-months",
    title: "From POC to Scale: Growing Data Cloud Value in 12 Months",
    excerpt: "Learn how to scale Data Cloud from proof-of-concept to enterprise-wide deployment while maintaining value and avoiding common pitfalls.",
    date: "2025-07-16",
    readTime: "7 min read",
    category: "Data Cloud",
    tags: ["Data Cloud", "Scaling", "POC", "Enterprise", "Value Realization"]
  },
  {
    slug: "the-human-side-of-marketing-automation-change-management-tips",
    title: "The Human Side of Marketing Automation: Change Management Tips",
    excerpt: "Learn how to manage the human side of Marketing Cloud implementations, from stakeholder buy-in to user adoption and ongoing success.",
    date: "2025-07-02",
    readTime: "7 min read",
    category: "Change Management",
    tags: ["Marketing Cloud", "Change Management", "User Adoption", "Stakeholder Management", "Training"]
  },
  // June 2025
  {
    slug: "future-proofing-integrations-webhooks-events-and-apis",
    title: "Future-Proofing Integrations: Webhooks, Events, and APIs",
    excerpt: "Learn how to build Marketing Cloud integrations that are resilient, scalable, and adaptable to changing business needs and technology.",
    date: "2025-06-18",
    readTime: "7 min read",
    category: "Integrations",
    tags: ["Marketing Cloud", "Integration", "APIs", "Webhooks", "Future-Proofing"]
  },
  {
    slug: "journey-design-systems-why-templates-save-more-than-time",
    title: "Journey Design Systems: Why Templates Save More Than Time",
    excerpt: "Learn how to build journey design systems that standardize best practices, improve quality, and scale your Marketing Cloud operations.",
    date: "2025-06-04",
    readTime: "7 min read",
    category: "Best Practices",
    tags: ["Marketing Cloud", "Journey Builder", "Design Systems", "Templates", "Scalability"]
  },
  // May 2025
  {
    slug: "data-cloud-activation-turning-segments-into-revenue",
    title: "Data Cloud Activation: Turning Segments into Revenue",
    excerpt: "Learn how to activate Data Cloud segments in Marketing Cloud to drive real business results and measurable revenue impact.",
    date: "2025-05-21",
    readTime: "7 min read",
    category: "Data Cloud",
    tags: ["Data Cloud", "Marketing Cloud", "Segmentation", "Activation", "Revenue"]
  },
  {
    slug: "how-to-plan-multi-region-marketing-cloud-deployments",
    title: "How to Plan Multi-Region Marketing Cloud Deployments",
    excerpt: "Learn how to design and implement Marketing Cloud across multiple regions while maintaining compliance, performance, and operational efficiency.",
    date: "2025-05-07",
    readTime: "7 min read",
    category: "Global",
    tags: ["Marketing Cloud", "Multi-Region", "Global", "Compliance", "Data Residency"]
  },
  // April 2025
  {
    slug: "integrating-bigcommerce-with-salesforce-clean-patterns",
    title: "Integrating BigCommerce with Salesforce: Clean Patterns",
    excerpt: "Learn the best practices for integrating BigCommerce with Salesforce Marketing Cloud and CRM to create seamless customer experiences.",
    date: "2025-04-16",
    readTime: "7 min read",
    category: "E-commerce",
    tags: ["Marketing Cloud", "BigCommerce", "E-commerce", "Integration", "Salesforce"]
  },
  {
    slug: "retail-loyalty-journeys-that-actually-drive-repeat-spend",
    title: "Retail Loyalty Journeys That Actually Drive Repeat Spend",
    excerpt: "Learn how to design Marketing Cloud journeys that go beyond points and discounts to create genuine customer engagement and repeat purchases.",
    date: "2025-04-02",
    readTime: "7 min read",
    category: "Retail",
    tags: ["Marketing Cloud", "Retail", "Loyalty Programs", "Customer Engagement", "Journey Builder"]
  },
  // March 2025
  {
    slug: "attribution-guardrails-moving-beyond-last-click",
    title: "Attribution Guardrails: Moving Beyond Last-Click",
    excerpt: "Learn how to implement proper attribution models in Marketing Cloud that give credit where it's due and provide actionable insights for optimization.",
    date: "2025-03-19",
    readTime: "7 min read",
    category: "Analytics",
    tags: ["Marketing Cloud", "Attribution", "Analytics", "Data Cloud", "Marketing Measurement"]
  },
  {
    slug: "manufacturing-journeys-aligning-crm-erp-and-marketing",
    title: "Manufacturing Journeys: Aligning CRM, ERP, and Marketing",
    excerpt: "Learn how to build Marketing Cloud journeys that work seamlessly across CRM, ERP, and marketing systems in manufacturing environments.",
    date: "2025-03-05",
    readTime: "7 min read",
    category: "Manufacturing",
    tags: ["Marketing Cloud", "Manufacturing", "CRM", "ERP", "Journey Builder", "B2B"]
  },
  // February 2025
  {
    slug: "segment-hygiene-in-data-cloud-stop-the-dupes-before-they-spread",
    title: "Segment Hygiene in Data Cloud: Stop the Dupes Before They Spread",
    excerpt: "Learn how to maintain clean, accurate segments in Data Cloud that prevent duplicate customers and ensure reliable marketing campaigns.",
    date: "2025-02-19",
    readTime: "7 min read",
    category: "Data Cloud",
    tags: ["Data Cloud", "Segmentation", "Data Quality", "Duplicate Management", "Data Hygiene"]
  },
  {
    slug: "why-most-triggered-sends-fail-after-launch-and-how-to-prevent-it",
    title: "Why Most Triggered Sends Fail After Launch (and How to Prevent It)",
    excerpt: "Learn the common reasons triggered sends fail after launch and how to build robust, reliable triggered send programs that work long-term.",
    date: "2025-02-05",
    readTime: "7 min read",
    category: "Email Marketing",
    tags: ["Marketing Cloud", "Triggered Sends", "Reliability", "Testing", "Maintenance"]
  },
  // January 2025
  {
    slug: "marketing-cloud-audit-5-quick-wins-for-the-new-year",
    title: "Marketing Cloud Audit: 5 Quick Wins for the New Year",
    excerpt: "Start the new year with these five Marketing Cloud optimizations that deliver immediate impact with minimal effort.",
    date: "2025-01-22",
    readTime: "7 min read",
    category: "Optimization",
    tags: ["Marketing Cloud", "Audit", "Optimization", "Quick Wins", "Performance"]
  },
  {
    slug: "web-to-crm-lightweight-handoff-that-sales-teams-wont-hate",
    title: "Web-to-CRM: A Lightweight Handoff That Sales Teams Won't Hate",
    excerpt: "Build a web-to-CRM integration that sales teams actually want to use, with clean data and context that helps them close deals faster.",
    date: "2025-01-08",
    readTime: "7 min read",
    category: "Sales Operations",
    tags: ["Marketing Cloud", "CRM Integration", "Lead Management", "Sales Operations", "Web-to-Lead"]
  },
  // December 2024
  {
    slug: "designing-a-compliance-aware-data-cloud-rollout",
    title: "Designing a Compliance-Aware Data Cloud Rollout",
    excerpt: "Learn how to implement Data Cloud with privacy and compliance built-in from day one, avoiding costly mistakes and regulatory issues.",
    date: "2024-12-18",
    readTime: "7 min read",
    category: "Compliance",
    tags: ["Data Cloud", "Compliance", "Privacy", "GDPR", "CCPA", "Data Governance"]
  },
  {
    slug: "2024-year-end-lessons-from-27-journeys-in-production",
    title: "2024 Year-End: Lessons from 27 Journeys in Production",
    excerpt: "Reflecting on a year of implementing Marketing Cloud journeys across retail, manufacturing, and healthcare—what worked, what didn't, and what we learned.",
    date: "2024-12-04",
    readTime: "7 min read",
    category: "Lessons Learned",
    tags: ["Marketing Cloud", "Journey Builder", "Lessons Learned", "Year-End", "Best Practices"]
  },
  // November 2024
  {
    slug: "from-excel-to-experience-cloud-automating-partner-submissions",
    title: "From Excel to Experience Cloud: Automating Partner Submissions",
    excerpt: "Transform your partner submission process from manual Excel workflows to automated Experience Cloud solutions that scale with your business.",
    date: "2024-11-20",
    readTime: "7 min read",
    category: "Automation",
    tags: ["Experience Cloud", "Partner Management", "Automation", "Salesforce", "B2B"]
  },
  {
    slug: "erp-marketing-cloud-integrations-top-3-patterns",
    title: "ERP → Marketing Cloud Integrations: Top 3 Patterns",
    excerpt: "Learn the three most effective patterns for integrating ERP systems with Marketing Cloud, from simple data sync to real-time orchestration.",
    date: "2024-11-06",
    readTime: "7 min read",
    category: "Integrations",
    tags: ["Marketing Cloud", "ERP Integration", "Data Cloud", "Manufacturing", "B2B"]
  },
  // October 2024
  {
    slug: "triggered-send-monitoring-dashboards-your-team-will-thank-you-for",
    title: "Triggered Send Monitoring: Dashboards Your Team Will Thank You For",
    excerpt: "Build monitoring dashboards that actually help your team identify and fix triggered send issues before they impact customers.",
    date: "2024-10-23",
    readTime: "7 min read",
    category: "Operations",
    tags: ["Marketing Cloud", "Triggered Sends", "Monitoring", "Dashboards", "Operations"]
  },
  {
    slug: "multi-brand-retail-journeys-scaling-across-regions-without-breaking",
    title: "Multi-Brand Retail Journeys: Scaling Across Regions Without Breaking",
    excerpt: "Learn how to design Marketing Cloud journeys that work seamlessly across multiple brands and regions while maintaining personalization and compliance.",
    date: "2024-10-09",
    readTime: "7 min read",
    category: "Journey Builder",
    tags: ["Marketing Cloud", "Journey Builder", "Multi-Brand", "Retail", "Global"]
  },
  // September 2024
  {
    slug: "data-cloud-identity-resolution-practical-guardrails",
    title: "Data Cloud Identity Resolution: Practical Guardrails",
    excerpt: "Identity resolution is powerful but risky. Here's how to implement it safely with proper guardrails and governance.",
    date: "2024-09-18",
    readTime: "7 min read",
    category: "Data Cloud",
    tags: ["Data Cloud", "Identity Resolution", "Data Governance", "Privacy"]
  },
  {
    slug: "the-hidden-costs-of-manual-lead-routing-and-how-to-fix-it",
    title: "The Hidden Costs of Manual Lead Routing — And How to Fix It",
    excerpt: "Manual lead routing isn't just inefficient—it's expensive, error-prone, and damaging to customer experience. Here's how to automate it properly.",
    date: "2024-09-04",
    readTime: "7 min read",
    category: "Sales Operations",
    tags: ["Marketing Cloud", "Lead Routing", "Automation", "Sales Operations"]
  },
  // August 2024
  {
    slug: "snowflake-to-marketing-cloud-clean-data-in-clean-campaigns-out",
    title: "Snowflake to Marketing Cloud: Clean Data In, Clean Campaigns Out",
    excerpt: "Learn how to build reliable data pipelines from Snowflake to Marketing Cloud that ensure data quality and campaign performance.",
    date: "2024-08-21",
    readTime: "7 min read",
    category: "Data Integration",
    tags: ["Data Cloud", "Snowflake", "Data Integration", "Data Quality"]
  },
  {
    slug: "how-to-design-preference-centers-that-customers-actually-use",
    title: "How to Design Preference Centers That Customers Actually Use",
    excerpt: "Most preference centers are designed for compliance, not customer experience. Here's how to build ones that customers actually want to use.",
    date: "2024-08-07",
    readTime: "7 min read",
    category: "Customer Experience",
    tags: ["Marketing Cloud", "Preference Centers", "Customer Experience", "Compliance"]
  },
  // July 2024 (Oldest)
  {
    slug: "3-lightweight-data-cloud-use-cases-to-prove-early-value",
    title: "3 Lightweight Data Cloud Use Cases to Prove Early Value",
    excerpt: "Start your Data Cloud journey with these three low-effort, high-impact use cases that demonstrate immediate value and build organizational confidence.",
    date: "2024-07-24",
    readTime: "7 min read",
    category: "Data Cloud",
    tags: ["Data Cloud", "Customer Data", "Segmentation", "Quick Wins"]
  },
  {
    slug: "why-reliable-triggered-sends-matter-more-than-fancy-journeys",
    title: "Why Reliable Triggered Sends Matter More Than Fancy Journeys",
    excerpt: "While complex journey orchestration gets the spotlight, reliable triggered sends often drive more revenue with less complexity and better deliverability.",
    date: "2024-07-10",
    readTime: "7 min read",
    category: "Email Marketing",
    tags: ["Marketing Cloud", "Triggered Sends", "Journey Builder", "Deliverability"]
  }
];

// Function to get post by slug
function getPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}

// Function to get related posts
function getRelatedPosts(currentSlug: string, category: string, limit: number = 3) {
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found - SB Consulting Cloud",
    };
  }

  return {
    title: `${post.title} - SB Consulting Cloud`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: "SB Consulting Cloud" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="text-accent hover:text-accent2 font-semibold flex items-center"
          >
            ← Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <span className="text-muted dark:text-gray-400 text-sm">
              {post.date}
            </span>
            <span className="text-muted dark:text-gray-400 text-sm">
              {post.readTime}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-ink dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted dark:text-gray-300 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-ink dark:text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-muted dark:text-gray-300 mb-6">
              This article is currently being prepared. The full content will be available soon with detailed insights, practical examples, and actionable strategies.
            </p>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <p className="text-accent font-medium mb-2">
                What you'll learn in this article:
              </p>
              <ul className="text-muted dark:text-gray-300 space-y-1">
                <li>• Practical strategies and best practices</li>
                <li>• Real-world examples and case studies</li>
                <li>• Step-by-step implementation guides</li>
                <li>• Common pitfalls and how to avoid them</li>
                <li>• ROI measurement and success metrics</li>
              </ul>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-ink dark:text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 dark:bg-gray-700 text-ink dark:text-white px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h3 className="text-2xl font-bold text-ink dark:text-white mb-8">
              Related Articles
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {relatedPost.category}
                    </span>
                    <span className="text-xs text-muted dark:text-gray-400">
                      {relatedPost.readTime}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-ink dark:text-white mb-2">
                    <Link 
                      href={`/blog/${relatedPost.slug}`}
                      className="hover:text-accent transition-colors"
                    >
                      {relatedPost.title}
                    </Link>
                  </h4>
                  
                  <p className="text-sm text-muted dark:text-gray-300 mb-3">
                    {relatedPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted dark:text-gray-400">
                      {relatedPost.date}
                    </span>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-accent hover:text-accent2 font-semibold text-sm"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-accent to-accent2 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get the latest insights on Salesforce Marketing Cloud, Data Cloud, and lifecycle marketing delivered to your inbox.
            </p>
            <a
              href="mailto:hello@sbconsulting.cloud?subject=Subscribe%20to%20blog%20updates"
              className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              Subscribe to Updates
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
