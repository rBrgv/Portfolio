'use client';

import Link from 'next/link';
import { useState, useMemo, useEffect } from 'react';

// BlogPost interface
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

// Add line-clamp styles
const lineClampStyles = `
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

// Particle Background Component
const ParticleBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-accent/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

// Floating Elements Component
const FloatingElements = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-20 h-20 bg-gradient-to-br from-accent/10 to-accent2/10 rounded-full blur-xl animate-bounce"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 20}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + i}s`,
          }}
        />
      ))}
    </>
  );
};

// Glassmorphism Card Component
const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={`backdrop-blur-md bg-white/10 dark:bg-ink/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 shadow-2xl transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

// Blog Directory Sidebar Component
const BlogDirectory = ({ posts, onPostClick }: { posts: BlogPost[], onPostClick: (slug: string) => void }) => {
  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, typeof blogPosts>);

  return (
    <div className="w-80 bg-white/5 dark:bg-gray-900/50 backdrop-blur-sm border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 h-[calc(100vh-8rem)] overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-ink dark:text-white">Blog Directory</h3>
        <div className="text-sm text-muted dark:text-gray-400">
          {posts.length} posts
        </div>
      </div>
      
      <div className="overflow-y-auto h-full pr-2 space-y-6">
        {Object.entries(postsByYear)
          .sort(([a], [b]) => parseInt(b) - parseInt(a))
          .map(([year, yearPosts]) => (
            <div key={year} className="space-y-3">
              <h4 className="text-sm font-semibold text-accent dark:text-accent2 sticky top-0 bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm py-2 -mx-2 px-2 rounded">
                {year}
              </h4>
              <div className="space-y-2">
                {yearPosts.map((post) => (
                  <button
                    key={post.slug}
                    onClick={() => onPostClick(post.slug)}
                    className="w-full text-left p-3 rounded-lg hover:bg-white/10 dark:hover:bg-gray-800/50 transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <h5 className="text-sm font-medium text-ink dark:text-white group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h5>
                      <span className="text-xs text-muted dark:text-gray-400 ml-2 flex-shrink-0">
                        {post.readTime}
                      </span>
                    </div>
                    <p className="text-xs text-muted dark:text-gray-400 line-clamp-2 mb-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-accent/70 dark:text-accent2/70 font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted dark:text-gray-400">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

// All blog posts data - sorted by date (latest first) - NO DUPLICATES
const blogPosts = [
  // 2025 (Latest)
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
    tags: ["Marketing Cloud", "Data Cloud", "Healthcare", "Privacy", "Compliance", "Personalization"]
  },
  {
    slug: "from-poc-to-scale-growing-data-cloud-value-in-12-months",
    title: "From POC to Scale: Growing Data Cloud Value in 12 Months",
    excerpt: "Learn how to scale Data Cloud from proof-of-concept to enterprise-wide deployment while maintaining value and avoiding common pitfalls.",
    date: "2025-07-23",
    readTime: "7 min read",
    category: "Data Cloud",
    tags: ["Data Cloud", "Scaling", "Implementation", "Strategy", "Value", "Enterprise"]
  },
  {
    slug: "building-triggered-sends-that-convert",
    title: "Building Triggered Sends That Convert",
    excerpt: "Master the art of creating high-converting triggered email campaigns in Marketing Cloud with advanced personalization and behavioral triggers.",
    date: "2025-07-09",
    readTime: "7 min read",
    category: "Triggered Sends",
    tags: ["Triggered Sends", "Email Marketing", "Conversion", "Personalization", "Behavioral Triggers", "Best Practices"]
  },
  {
    slug: "erp-integration-patterns-marketing-cloud",
    title: "ERP Integration Patterns for Marketing Cloud",
    excerpt: "Learn the essential patterns for integrating ERP systems with Marketing Cloud, from batch processing to real-time events, with practical implementation guidance.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Integration",
    tags: ["ERP Integration", "Marketing Cloud", "Data Cloud", "Integration Patterns", "B2B Marketing", "Data Architecture"]
  },
  {
    slug: "multi-brand-lifecycle-marketing",
    title: "Multi-Brand Lifecycle Marketing: One Platform, Many Brands",
    excerpt: "Learn how to manage complex multi-brand marketing programs in Marketing Cloud while maintaining brand consistency and operational efficiency.",
    date: "2025-06-11",
    readTime: "7 min read",
    category: "Multi-Brand",
    tags: ["Marketing Cloud", "Multi-Brand", "Lifecycle Marketing", "Brand Management", "Operational Efficiency", "Strategy"]
  },
  {
    slug: "email-relevance-personalization-strategies",
    title: "Email Relevance: Advanced Personalization Strategies",
    excerpt: "Discover advanced personalization techniques that dramatically improve email relevance and engagement rates in Marketing Cloud.",
    date: "2025-05-28",
    readTime: "7 min read",
    category: "Personalization",
    tags: ["Email Marketing", "Personalization", "Relevance", "Engagement", "Advanced Techniques", "Marketing Cloud"]
  },
  {
    slug: "data-cloud-rollout-strategic-approach",
    title: "Data Cloud Rollout: A Strategic Approach",
    excerpt: "A comprehensive guide to planning and executing a successful Data Cloud implementation that delivers immediate value and long-term growth.",
    date: "2025-05-14",
    readTime: "7 min read",
    category: "Data Cloud",
    tags: ["Data Cloud", "Implementation", "Strategy", "Planning", "Value", "Growth"]
  },
  {
    slug: "journey-builder-advanced-techniques",
    title: "Journey Builder Advanced Techniques",
    excerpt: "Master advanced Journey Builder techniques including complex decision splits, wait activities, and cross-channel orchestration.",
    date: "2025-04-30",
    readTime: "7 min read",
    category: "Journey Builder",
    tags: ["Journey Builder", "Advanced Techniques", "Decision Splits", "Wait Activities", "Cross-Channel", "Orchestration"]
  },
  {
    slug: "mobile-studio-best-practices",
    title: "Mobile Studio Best Practices for 2025",
    excerpt: "Learn the latest best practices for mobile marketing in Marketing Cloud, from push notifications to in-app messaging and SMS campaigns.",
    date: "2025-04-16",
    readTime: "7 min read",
    category: "Mobile Marketing",
    tags: ["Mobile Studio", "Mobile Marketing", "Push Notifications", "SMS", "In-App Messaging", "Best Practices"]
  },
  {
    slug: "marketing-cloud-architecture-patterns",
    title: "Marketing Cloud Architecture Patterns",
    excerpt: "Explore proven architecture patterns for Marketing Cloud implementations that scale with your business and support complex use cases.",
    date: "2025-03-26",
    readTime: "7 min read",
    category: "Architecture",
    tags: ["Marketing Cloud", "Architecture", "Patterns", "Scalability", "Implementation", "Best Practices"]
  },
  {
    slug: "data-modeling-customer-360",
    title: "Data Modeling for Customer 360",
    excerpt: "Learn how to design effective data models in Data Cloud that create a unified view of your customers across all touchpoints.",
    date: "2025-03-12",
    readTime: "7 min read",
    category: "Data Modeling",
    tags: ["Data Cloud", "Data Modeling", "Customer 360", "Unified View", "Touchpoints", "Design"]
  },
  {
    slug: "compliance-gdpr-ccpa-marketing-cloud",
    title: "Compliance in Marketing Cloud: GDPR & CCPA",
    excerpt: "Navigate the complex world of data privacy regulations with Marketing Cloud, ensuring compliance while maintaining marketing effectiveness.",
    date: "2025-02-26",
    readTime: "7 min read",
    category: "Compliance",
    tags: ["Marketing Cloud", "Compliance", "GDPR", "CCPA", "Privacy", "Regulations"]
  },
  {
    slug: "ampscript-advanced-techniques",
    title: "AMPscript Advanced Techniques",
    excerpt: "Master advanced AMPscript techniques for creating dynamic, personalized content that engages customers and drives conversions.",
    date: "2025-02-12",
    readTime: "7 min read",
    category: "AMPscript",
    tags: ["AMPscript", "Advanced Techniques", "Dynamic Content", "Personalization", "Engagement", "Conversions"]
  },
  {
    slug: "marketing-cloud-analytics-dashboard",
    title: "Building Marketing Cloud Analytics Dashboards",
    excerpt: "Create comprehensive analytics dashboards that provide actionable insights into your Marketing Cloud program performance and ROI.",
    date: "2025-01-29",
    readTime: "7 min read",
    category: "Analytics",
    tags: ["Marketing Cloud", "Analytics", "Dashboards", "ROI", "Performance", "Insights"]
  },
  {
    slug: "cross-channel-orchestration-strategies",
    title: "Cross-Channel Orchestration Strategies",
    excerpt: "Learn how to create seamless cross-channel customer experiences that coordinate messaging across email, mobile, web, and social platforms.",
    date: "2025-01-15",
    readTime: "7 min read",
    category: "Cross-Channel",
    tags: ["Cross-Channel", "Orchestration", "Customer Experience", "Email", "Mobile", "Social"]
  },
  // December 2024 (Latest 2024 posts)
  {
    slug: "2024-year-end-lessons-from-27-journeys-in-production",
    title: "2024 Year-End: Lessons from 27 Journeys in Production",
    excerpt: "Reflecting on key learnings from 27 Marketing Cloud journey implementations across different industries and use cases.",
    date: "2024-12-31",
    readTime: "8 min read",
    category: "Lessons Learned",
    tags: ["Marketing Cloud", "Journey Builder", "Lessons Learned", "Production", "Best Practices"]
  },
  {
    slug: "email-deliverability-advanced-strategies",
    title: "Email Deliverability: Advanced Strategies",
    excerpt: "Learn advanced email deliverability strategies that go beyond the basics to ensure your emails land in the inbox and drive engagement.",
    date: "2024-12-15",
    readTime: "6 min read",
    category: "Email Marketing",
    tags: ["Email Marketing", "Deliverability", "Marketing Cloud", "Best Practices", "Email Strategy"]
  },
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
    slug: "3-lightweight-data-cloud-use-cases-to-prove-early-value",
    title: "3 Lightweight Data Cloud Use Cases to Prove Early Value",
    excerpt: "Start your Data Cloud journey with these three lightweight use cases that deliver quick wins and prove value to stakeholders.",
    date: "2024-12-10",
    readTime: "6 min read",
    category: "Data Cloud",
    tags: ["Data Cloud", "Use Cases", "Quick Wins", "Value", "Implementation"]
  },
  {
    slug: "data-cloud-activation-turning-segments-into-revenue",
    title: "Data Cloud Activation: Turning Segments into Revenue",
    excerpt: "Learn how to activate Data Cloud segments effectively to drive revenue growth and customer engagement.",
    date: "2024-12-04",
    readTime: "6 min read",
    category: "Data Cloud",
    tags: ["Data Cloud", "Segmentation", "Revenue", "Activation", "Customer Engagement"]
  },
  // November 2024
  {
    slug: "attribution-guardrails-moving-beyond-last-click",
    title: "Attribution Guardrails: Moving Beyond Last-Click",
    excerpt: "Learn how to implement proper attribution models in Marketing Cloud to accurately measure campaign performance and ROI.",
    date: "2024-11-28",
    readTime: "7 min read",
    category: "Analytics",
    tags: ["Attribution", "Analytics", "ROI", "Measurement", "Marketing Cloud"]
  },
  {
    slug: "future-proofing-integrations-webhooks-events-and-apis",
    title: "Future-Proofing Integrations: Webhooks, Events, and APIs",
    excerpt: "Learn how to build resilient integrations that can adapt to changing business needs and technology evolution.",
    date: "2024-11-06",
    readTime: "8 min read",
    category: "Integrations",
    tags: ["Integrations", "Webhooks", "APIs", "Future-Proofing", "Architecture"]
  },
  // October 2024
  {
    slug: "how-to-design-preference-centers-that-customers-actually-use",
    title: "How to Design Preference Centers That Customers Actually Use",
    excerpt: "Create preference centers that customers want to use, improving engagement and compliance while reducing unsubscribe rates.",
    date: "2024-10-30",
    readTime: "6 min read",
    category: "User Experience",
    tags: ["Marketing Cloud", "Preference Centers", "User Experience", "Engagement", "Compliance"]
  },
  {
    slug: "how-to-plan-multi-region-marketing-cloud-deployments",
    title: "How to Plan Multi-Region Marketing Cloud Deployments",
    excerpt: "Learn how to design and implement Marketing Cloud across multiple regions for global organizations.",
    date: "2024-10-16",
    readTime: "7 min read",
    category: "Architecture",
    tags: ["Marketing Cloud", "Multi-Region", "Global", "Architecture", "Deployment"]
  },
  // September 2024
  {
    slug: "integrating-bigcommerce-with-salesforce-clean-patterns",
    title: "Integrating BigCommerce with Salesforce: Clean Patterns",
    excerpt: "Discover the best patterns for integrating BigCommerce with Salesforce Marketing Cloud for seamless e-commerce marketing.",
    date: "2024-09-25",
    readTime: "6 min read",
    category: "Integrations",
    tags: ["BigCommerce", "Salesforce", "Integration", "E-commerce", "Marketing Cloud"]
  },
  {
    slug: "journey-design-systems-why-templates-save-more-than-time",
    title: "Journey Design Systems: Why Templates Save More Than Time",
    excerpt: "Learn how to build journey design systems that improve consistency, reduce errors, and accelerate development.",
    date: "2024-09-11",
    readTime: "7 min read",
    category: "Journey Builder",
    tags: ["Marketing Cloud", "Journey Builder", "Templates", "Design Systems", "Efficiency"]
  },
  // August 2024
  {
    slug: "erp-marketing-cloud-integrations-top-3-patterns",
    title: "ERP-Marketing Cloud Integrations: Top 3 Patterns",
    excerpt: "Discover the three most effective patterns for integrating ERP systems with Marketing Cloud to streamline data flow and improve efficiency.",
    date: "2024-08-22",
    readTime: "7 min read",
    category: "Integrations",
    tags: ["ERP", "Integrations", "Marketing Cloud", "Data Flow", "Efficiency"]
  },
  {
    slug: "from-excel-to-experience-cloud-automating-partner-submissions",
    title: "From Excel to Experience Cloud: Automating Partner Submissions",
    excerpt: "Transform manual Excel-based partner submission processes into automated Experience Cloud workflows that save time and reduce errors.",
    date: "2024-08-08",
    readTime: "6 min read",
    category: "Automation",
    tags: ["Experience Cloud", "Automation", "Excel", "Workflow", "Efficiency"]
  },
  // July 2024
  {
    slug: "manufacturing-journeys-aligning-crm-erp-and-marketing",
    title: "Manufacturing Journeys: Aligning CRM, ERP, and Marketing",
    excerpt: "Learn how to create effective marketing journeys for manufacturing companies by aligning CRM, ERP, and Marketing Cloud data.",
    date: "2024-07-25",
    readTime: "7 min read",
    category: "Manufacturing",
    tags: ["Manufacturing", "CRM", "ERP", "Marketing Cloud", "Journey Builder"]
  },
  {
    slug: "marketing-cloud-audit-5-quick-wins-for-the-new-year",
    title: "Marketing Cloud Audit: 5 Quick Wins for the New Year",
    excerpt: "Start the year right with these five quick wins that will improve your Marketing Cloud performance and efficiency.",
    date: "2024-07-11",
    readTime: "6 min read",
    category: "Optimization",
    tags: ["Marketing Cloud", "Audit", "Quick Wins", "Optimization", "Performance"]
  },
  // June 2024
  {
    slug: "multi-brand-retail-journeys-scaling-across-regions-without-breaking",
    title: "Multi-Brand Retail Journeys: Scaling Across Regions Without Breaking",
    excerpt: "Learn how to scale retail marketing journeys across multiple brands and regions while maintaining consistency and efficiency.",
    date: "2024-06-27",
    readTime: "8 min read",
    category: "Retail",
    tags: ["Retail", "Multi-Brand", "Scaling", "Journey Builder", "Global"]
  },
  {
    slug: "retail-loyalty-journeys-that-actually-drive-repeat-spend",
    title: "Retail Loyalty Journeys That Actually Drive Repeat Spend",
    excerpt: "Create loyalty programs that drive real business value with these proven journey strategies for retail marketing.",
    date: "2024-06-13",
    readTime: "7 min read",
    category: "Retail",
    tags: ["Retail", "Loyalty", "Journey Builder", "Customer Retention", "Revenue"]
  },
  // May 2024
  {
    slug: "segment-hygiene-in-data-cloud-stop-the-dupes-before-they-spread",
    title: "Segment Hygiene in Data Cloud: Stop the Dupes Before They Spread",
    excerpt: "Learn how to maintain clean, accurate segments in Data Cloud to improve campaign performance and customer experience.",
    date: "2024-05-30",
    readTime: "6 min read",
    category: "Data Quality",
    tags: ["Data Cloud", "Segmentation", "Data Quality", "Deduplication", "Best Practices"]
  },
  {
    slug: "snowflake-to-marketing-cloud-clean-data-in-clean-campaigns-out",
    title: "Snowflake to Marketing Cloud: Clean Data In, Clean Campaigns Out",
    excerpt: "Learn how to create clean data pipelines from Snowflake to Marketing Cloud for better campaign performance.",
    date: "2024-05-16",
    readTime: "7 min read",
    category: "Data Integration",
    tags: ["Snowflake", "Marketing Cloud", "Data Pipeline", "Data Quality", "Integration"]
  },
  // April 2024
  {
    slug: "the-hidden-costs-of-manual-lead-routing-and-how-to-fix-it",
    title: "The Hidden Costs of Manual Lead Routing and How to Fix It",
    excerpt: "Discover the true cost of manual lead routing and learn how to automate the process for better efficiency and accuracy.",
    date: "2024-04-25",
    readTime: "6 min read",
    category: "Automation",
    tags: ["Lead Routing", "Automation", "Efficiency", "Sales", "Marketing Cloud"]
  },
  {
    slug: "the-human-side-of-marketing-automation-change-management-tips",
    title: "The Human Side of Marketing Automation: Change Management Tips",
    excerpt: "Learn how to successfully manage change when implementing marketing automation, focusing on people and processes.",
    date: "2024-04-11",
    readTime: "7 min read",
    category: "Change Management",
    tags: ["Change Management", "Marketing Automation", "People", "Process", "Implementation"]
  },
  // March 2024
  {
    slug: "triggered-send-monitoring-dashboards-your-team-will-thank-you-for",
    title: "Triggered Send Monitoring Dashboards Your Team Will Thank You For",
    excerpt: "Create monitoring dashboards that help your team quickly identify and resolve triggered send issues before they impact customers.",
    date: "2024-03-28",
    readTime: "6 min read",
    category: "Monitoring",
    tags: ["Triggered Sends", "Monitoring", "Dashboards", "Troubleshooting", "Performance"]
  },
  {
    slug: "web-to-crm-lightweight-handoff-that-sales-teams-wont-hate",
    title: "Web-to-CRM: Lightweight Handoff That Sales Teams Won't Hate",
    excerpt: "Learn how to create seamless web-to-CRM lead handoffs that sales teams actually want to use.",
    date: "2024-03-14",
    readTime: "7 min read",
    category: "Sales Integration",
    tags: ["Web-to-CRM", "Sales", "Lead Handoff", "Integration", "User Experience"]
  },
  // February 2024
  {
    slug: "why-most-triggered-sends-fail-after-launch-and-how-to-prevent-it",
    title: "Why Most Triggered Sends Fail After Launch and How to Prevent It",
    excerpt: "Learn the common reasons triggered sends fail and how to prevent these issues before they impact your campaigns.",
    date: "2024-02-29",
    readTime: "8 min read",
    category: "Triggered Sends",
    tags: ["Triggered Sends", "Troubleshooting", "Best Practices", "Reliability", "Testing"]
  },
  {
    slug: "why-reliable-triggered-sends-matter-more-than-fancy-journeys",
    title: "Why Reliable Triggered Sends Matter More Than Fancy Journeys",
    excerpt: "Discover why reliable triggered sends are more important than complex journeys for driving business results.",
    date: "2024-02-15",
    readTime: "6 min read",
    category: "Triggered Sends",
    tags: ["Triggered Sends", "Reliability", "Business Value", "Journey Builder", "Strategy"]
  },
  // December 2024 (Additional posts)
  {
    slug: "marketing-cloud-holiday-campaigns",
    title: "Holiday Campaigns in Marketing Cloud",
    excerpt: "Plan and execute successful holiday marketing campaigns using Marketing Cloud's advanced features for maximum impact and ROI.",
    date: "2024-12-18",
    readTime: "7 min read",
    category: "Campaigns",
    tags: ["Marketing Cloud", "Holiday Campaigns", "Seasonal", "Retail", "E-commerce", "Strategy"]
  },
  {
    slug: "data-cloud-segmentation-strategies",
    title: "Data Cloud Segmentation Strategies",
    excerpt: "Master advanced segmentation techniques in Data Cloud to create highly targeted and effective marketing campaigns.",
    date: "2024-12-04",
    readTime: "7 min read",
    category: "Segmentation",
    tags: ["Data Cloud", "Segmentation", "Targeting", "Personalization", "Customer Data", "Campaigns"]
  },
  // November 2024
  {
    slug: "marketing-cloud-api-integration",
    title: "Marketing Cloud API Integration Guide",
    excerpt: "A comprehensive guide to integrating Marketing Cloud with external systems using REST and SOAP APIs for seamless data synchronization.",
    date: "2024-11-20",
    readTime: "7 min read",
    category: "API Integration",
    tags: ["Marketing Cloud", "API", "Integration", "REST", "SOAP", "Data Sync"]
  },
  {
    slug: "customer-journey-mapping-techniques",
    title: "Customer Journey Mapping Techniques",
    excerpt: "Learn how to map complex customer journeys and translate them into effective Marketing Cloud automation programs.",
    date: "2024-11-06",
    readTime: "7 min read",
    category: "Journey Mapping",
    tags: ["Marketing Cloud", "Journey Mapping", "Customer Experience", "Automation", "Strategy", "Design"]
  },
  // October 2024
  {
    slug: "marketing-cloud-performance-optimization",
    title: "Marketing Cloud Performance Optimization",
    excerpt: "Optimize your Marketing Cloud instance for peak performance with proven techniques for data management, automation, and resource utilization.",
    date: "2024-10-23",
    readTime: "7 min read",
    category: "Performance",
    tags: ["Marketing Cloud", "Performance", "Optimization", "Data Management", "Automation", "Best Practices"]
  },
  {
    slug: "personalization-engine-advanced-features",
    title: "Personalization Engine Advanced Features",
    excerpt: "Unlock the full potential of Marketing Cloud's Personalization Engine with advanced features and real-time personalization techniques.",
    date: "2024-10-09",
    readTime: "7 min read",
    category: "Personalization",
    tags: ["Marketing Cloud", "Personalization Engine", "Real-time", "Advanced", "AI", "Machine Learning"]
  },
  // September 2024
  {
    slug: "marketing-cloud-data-extension-optimization",
    title: "Data Extension Optimization Strategies",
    excerpt: "Optimize your Data Extensions for better performance, data quality, and easier management in Marketing Cloud.",
    date: "2024-09-25",
    readTime: "7 min read",
    category: "Data Management",
    tags: ["Marketing Cloud", "Data Extensions", "Optimization", "Data Quality", "Performance", "Management"]
  },
  {
    slug: "cross-cloud-integration-patterns",
    title: "Cross-Cloud Integration Patterns",
    excerpt: "Learn how to integrate Marketing Cloud with other Salesforce clouds and external systems for unified customer experiences.",
    date: "2024-09-11",
    readTime: "7 min read",
    category: "Integration",
    tags: ["Marketing Cloud", "Salesforce", "Cross-Cloud", "Integration", "Unified Experience", "Ecosystem"]
  },
  // August 2024
  {
    slug: "marketing-cloud-automation-best-practices",
    title: "Marketing Cloud Automation Best Practices",
    excerpt: "Master the art of Marketing Cloud automation with proven best practices for Journey Builder, Automation Studio, and triggered campaigns.",
    date: "2024-08-28",
    readTime: "7 min read",
    category: "Automation",
    tags: ["Marketing Cloud", "Automation", "Journey Builder", "Automation Studio", "Best Practices", "Campaigns"]
  },
  {
    slug: "data-cloud-identity-resolution",
    title: "Data Cloud Identity Resolution",
    excerpt: "Master identity resolution in Data Cloud to create unified customer profiles and enable advanced personalization and targeting.",
    date: "2024-08-14",
    readTime: "7 min read",
    category: "Identity Resolution",
    tags: ["Data Cloud", "Identity Resolution", "Customer Profiles", "Unified View", "Personalization", "CDP"]
  },
  // July 2024
  {
    slug: "marketing-cloud-implementation-roadmap",
    title: "Marketing Cloud Implementation Roadmap",
    excerpt: "A comprehensive roadmap for implementing Marketing Cloud successfully, from planning to go-live and beyond.",
    date: "2024-07-31",
    readTime: "7 min read",
    category: "Implementation",
    tags: ["Marketing Cloud", "Implementation", "Roadmap", "Planning", "Strategy", "Best Practices"]
  }
];

// Get unique categories
const categories = [...new Set(blogPosts.map(post => post.category))];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Navigation function for sidebar
  const handlePostClick = (slug: string) => {
    window.location.href = `/blog/${slug}`;
  };

  // Get all unique tags (commented out as not currently used)
  // const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  // Filter posts based on search, category, and tag
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchTerm, selectedCategory, selectedTag]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Reset to first page when filters change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? '' : tag);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTag('');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen relative">
      {/* Add line-clamp styles */}
      <style dangerouslySetInnerHTML={{ __html: lineClampStyles }} />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Hero Section with Enhanced Animations */}
      <section className="bg-gradient-to-br from-white to-gray-50 dark:from-ink dark:to-gray-900 py-20 relative overflow-hidden">
        <FloatingElements />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-ink dark:text-white mb-6 font-display">
              Marketing Cloud Insights
            </h1>
            <p className="text-xl text-muted dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Expert insights, strategies, and best practices for Salesforce Marketing Cloud and Data Cloud implementations.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-700 text-ink dark:text-white transition-colors"
                />
              </div>
              <div className="md:w-64">
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-700 text-ink dark:text-white transition-colors"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Results count */}
            <div className="text-center mb-8">
              <p className="text-muted dark:text-gray-300 font-medium">
                Showing {filteredPosts.length} of {blogPosts.length} articles
              </p>
            </div>

            {/* Filterable Chips */}
            <div className="mb-8">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-ink dark:text-white mb-2 font-heading">
                  Filter by Technology
                </h3>
                <p className="text-sm text-muted dark:text-gray-300">
                  Click on any technology to filter articles
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                {[
                  "Marketing Cloud", "Data Cloud", "Journey Builder", "Email Studio", 
                  "Mobile Studio", "Personalization", "AMPscript", "SSJS", 
                  "API Integration", "Data Modeling", "Lifecycle Marketing", "Compliance"
                ].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => handleTagClick(chip)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedTag === chip
                        ? 'bg-accent text-white shadow-lg scale-105'
                        : 'bg-white dark:bg-gray-700 text-muted dark:text-gray-300 hover:bg-accent hover:text-white hover:scale-105 shadow-sm hover:shadow-md'
                    }`}
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Active Filters */}
              {(searchTerm || selectedCategory || selectedTag) && (
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2">
                    <span className="text-sm text-muted dark:text-gray-300">Active filters:</span>
                    {searchTerm && (
                      <span className="bg-accent text-white px-2 py-1 rounded text-xs">
                        Search: "{searchTerm}"
                      </span>
                    )}
                    {selectedCategory && (
                      <span className="bg-accent text-white px-2 py-1 rounded text-xs">
                        Category: {selectedCategory}
                      </span>
                    )}
                    {selectedTag && (
                      <span className="bg-accent text-white px-2 py-1 rounded text-xs">
                        Technology: {selectedTag}
                      </span>
                    )}
                    <button
                      onClick={clearFilters}
                      className="text-accent hover:text-accent2 text-xs font-medium ml-2"
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content with Sidebar */}
          <div className="flex gap-8">
          {/* Blog Posts Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {paginatedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block min-h-[400px] md:min-h-[450px] touch-manipulation">
                <GlassCard className="h-full cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300 active:scale-95 select-none">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted dark:text-gray-300">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-ink dark:text-white mb-3 group-hover:text-accent transition-colors duration-300 font-heading line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted dark:text-gray-300 leading-relaxed font-medium line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-muted dark:text-gray-300 font-medium">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <div className="text-accent hover:text-accent2 font-semibold transition-colors group-hover:translate-x-1 transform duration-300 flex items-center text-base md:text-sm">
                      Read More 
                      <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-accent text-white'
                      : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Next
              </button>
            </div>
          )}

          {/* No results message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <GlassCard className="max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-ink dark:text-white mb-2 font-heading">
                  No articles found
                </h3>
                <p className="text-muted dark:text-gray-300 font-medium">
                  Try adjusting your search terms or category filter.
                </p>
              </GlassCard>
            </div>
          )}
            </div>
            
            {/* Blog Directory Sidebar */}
            <div className="hidden xl:block">
              <BlogDirectory posts={blogPosts} onPostClick={handlePostClick} />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}