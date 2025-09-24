'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';

// Particle Background Component
const ParticleBackground = () => {
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
      className={`backdrop-blur-md bg-white/10 dark:bg-ink/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

// All 28 blog posts data - sorted by date (latest first)
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
    date: "2025-07-23",
    readTime: "7 min read",
    category: "Data Cloud",
    tags: ["Data Cloud", "Scaling", "Implementation", "Strategy", "Enterprise", "ROI"]
  },
  {
    slug: "building-triggered-sends-that-convert",
    title: "Building Triggered Sends That Convert",
    excerpt: "Master the art of creating high-converting triggered email campaigns in Marketing Cloud with advanced personalization and behavioral triggers.",
    date: "2025-07-09",
    readTime: "7 min read",
    category: "Email Marketing",
    tags: ["Marketing Cloud", "Email Studio", "Triggered Sends", "Personalization", "Conversion", "Automation"]
  },
  // June 2025
  {
    slug: "erp-integration-patterns-marketing-cloud",
    title: "ERP Integration Patterns for Marketing Cloud",
    excerpt: "Explore proven patterns for integrating ERP systems with Marketing Cloud to create unified customer experiences and streamline data flows.",
    date: "2025-06-25",
    readTime: "7 min read",
    category: "Integrations",
    tags: ["Marketing Cloud", "ERP", "Integration", "Data Flow", "Manufacturing", "B2B"]
  },
  {
    slug: "multi-brand-lifecycle-marketing",
    title: "Multi-Brand Lifecycle Marketing: One Platform, Many Brands",
    excerpt: "Learn how to manage complex multi-brand marketing programs in Marketing Cloud while maintaining brand consistency and operational efficiency.",
    date: "2025-06-11",
    readTime: "7 min read",
    category: "Lifecycle Marketing",
    tags: ["Marketing Cloud", "Multi-Brand", "Lifecycle", "Brand Management", "Retail", "Strategy"]
  },
  // May 2025
  {
    slug: "email-relevance-personalization-strategies",
    title: "Email Relevance: Advanced Personalization Strategies",
    excerpt: "Discover advanced personalization techniques that dramatically improve email relevance and engagement rates in Marketing Cloud.",
    date: "2025-05-28",
    readTime: "7 min read",
    category: "Personalization",
    tags: ["Marketing Cloud", "Personalization", "Email", "Relevance", "Engagement", "AI"]
  },
  {
    slug: "data-cloud-rollout-strategic-approach",
    title: "Data Cloud Rollout: A Strategic Approach",
    excerpt: "A comprehensive guide to planning and executing a successful Data Cloud implementation that delivers immediate value and long-term growth.",
    date: "2025-05-14",
    readTime: "7 min read",
    category: "Data Cloud",
    tags: ["Data Cloud", "Implementation", "Strategy", "Planning", "CDP", "Customer Data"]
  },
  // April 2025
  {
    slug: "journey-builder-advanced-techniques",
    title: "Journey Builder Advanced Techniques",
    excerpt: "Master advanced Journey Builder techniques including complex decision splits, wait activities, and cross-channel orchestration.",
    date: "2025-04-30",
    readTime: "7 min read",
    category: "Journey Builder",
    tags: ["Marketing Cloud", "Journey Builder", "Automation", "Cross-Channel", "Advanced", "Orchestration"]
  },
  {
    slug: "mobile-studio-best-practices",
    title: "Mobile Studio Best Practices for 2025",
    excerpt: "Learn the latest best practices for mobile marketing in Marketing Cloud, from push notifications to in-app messaging and SMS campaigns.",
    date: "2025-04-16",
    readTime: "7 min read",
    category: "Mobile Marketing",
    tags: ["Marketing Cloud", "Mobile Studio", "Push Notifications", "SMS", "Mobile", "Best Practices"]
  },
  // March 2025
  {
    slug: "marketing-cloud-architecture-patterns",
    title: "Marketing Cloud Architecture Patterns",
    excerpt: "Explore proven architecture patterns for Marketing Cloud implementations that scale with your business and support complex use cases.",
    date: "2025-03-26",
    readTime: "7 min read",
    category: "Architecture",
    tags: ["Marketing Cloud", "Architecture", "Scalability", "Patterns", "Enterprise", "Design"]
  },
  {
    slug: "data-modeling-customer-360",
    title: "Data Modeling for Customer 360",
    excerpt: "Learn how to design effective data models in Data Cloud that create a unified view of your customers across all touchpoints.",
    date: "2025-03-12",
    readTime: "7 min read",
    category: "Data Modeling",
    tags: ["Data Cloud", "Data Modeling", "Customer 360", "Unified View", "Data Architecture", "CDP"]
  },
  // February 2025
  {
    slug: "compliance-gdpr-ccpa-marketing-cloud",
    title: "Compliance in Marketing Cloud: GDPR & CCPA",
    excerpt: "Navigate the complex world of data privacy regulations with Marketing Cloud, ensuring compliance while maintaining marketing effectiveness.",
    date: "2025-02-26",
    readTime: "7 min read",
    category: "Compliance",
    tags: ["Marketing Cloud", "GDPR", "CCPA", "Compliance", "Privacy", "Data Protection"]
  },
  {
    slug: "ampscript-advanced-techniques",
    title: "AMPscript Advanced Techniques",
    excerpt: "Master advanced AMPscript techniques for creating dynamic, personalized content that engages customers and drives conversions.",
    date: "2025-02-12",
    readTime: "7 min read",
    category: "AMPscript",
    tags: ["Marketing Cloud", "AMPscript", "Personalization", "Dynamic Content", "Advanced", "Email"]
  },
  // January 2025
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
    tags: ["Marketing Cloud", "Cross-Channel", "Orchestration", "Omnichannel", "Customer Experience", "Strategy"]
  },
  // December 2024
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
  },
  {
    slug: "email-deliverability-advanced-strategies",
    title: "Email Deliverability: Advanced Strategies",
    excerpt: "Master email deliverability in Marketing Cloud with advanced strategies for inbox placement, reputation management, and engagement optimization.",
    date: "2024-07-17",
    readTime: "7 min read",
    category: "Deliverability",
    tags: ["Marketing Cloud", "Email Deliverability", "Inbox Placement", "Reputation", "Engagement", "Best Practices"]
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

  // Get all unique tags
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

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedPosts.map((post) => (
              <div key={post.slug} className="group">
                <GlassCard className="h-full">
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

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted dark:text-gray-300 font-medium">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-accent hover:text-accent2 font-semibold transition-colors group-hover:translate-x-1 transform duration-300"
                    >
                      Read More →
                    </Link>
                  </div>
                </GlassCard>
              </div>
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
      </section>
    </div>
  );
}