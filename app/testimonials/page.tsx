import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials - SB Consulting Cloud",
  description: "Read what clients say about SB Consulting Cloud's Salesforce Marketing Cloud and Data Cloud expertise.",
};

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

export default function Testimonials() {
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
              Client Testimonials
            </h1>
            <p className="text-xl text-muted dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Hear from clients who have transformed their marketing operations with our Salesforce expertise.
            </p>
          </div>

          {/* Featured Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                quote: "The lifecycle programs we built together have transformed our customer engagement. Revenue from email marketing increased by 40% in just 6 months. SB's deep understanding of Marketing Cloud and ability to translate business requirements into technical solutions was exceptional.",
                author: "Retail Director",
                company: "Fortune 500 Retailer",
                industry: "Retail",
                results: "40% increase in email revenue"
              },
              {
                quote: "SB's expertise in Data Cloud helped us unify our customer data across multiple systems. The insights we gained were game-changing, and the implementation was flawless. We now have a single source of truth for all our customer interactions.",
                author: "Manufacturing Ops",
                company: "Global Manufacturing",
                industry: "Manufacturing",
                results: "Unified customer data platform"
              },
              {
                quote: "Working across APAC and US time zones was seamless. The technical implementation was flawless and the results speak for themselves. SB's attention to detail and ability to work with our global team was outstanding.",
                author: "APAC Lead",
                company: "International Brand",
                industry: "Retail",
                results: "Global implementation success"
              },
              {
                quote: "The integration between our ERP system and Marketing Cloud was complex, but SB made it look easy. We now have real-time data flowing between systems, enabling us to create highly personalized customer experiences.",
                author: "IT Director",
                company: "Healthcare Provider",
                industry: "Healthcare",
                results: "Real-time data integration"
              },
              {
                quote: "SB's approach to preference management and compliance was thorough and future-proof. We're now fully compliant with GDPR and CCPA while maintaining our marketing effectiveness. The training provided to our team was invaluable.",
                author: "Marketing Manager",
                company: "E-commerce Platform",
                industry: "Retail",
                results: "Full compliance implementation"
              },
              {
                quote: "The BigCommerce to Marketing Cloud integration exceeded our expectations. Our order data now flows seamlessly into our marketing campaigns, resulting in much more relevant and timely communications to our customers.",
                author: "E-commerce Director",
                company: "Multi-brand Retailer",
                industry: "Retail",
                results: "Seamless e-commerce integration"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group">
                <GlassCard className="h-full">
                  <div className="mb-4">
                    <div className="flex text-accent mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted dark:text-gray-300 italic mb-4 font-medium">"{testimonial.quote}"</p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="font-semibold text-ink dark:text-white">{testimonial.author}</div>
                    <div className="text-sm text-muted">{testimonial.company}</div>
                    <div className="text-xs text-accent mt-1">{testimonial.industry}</div>
                    <div className="text-sm font-medium text-accent2 mt-2">{testimonial.results}</div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>

          {/* Results Summary */}
          <div className="mb-20">
            <GlassCard className="bg-gradient-to-r from-accent to-accent2 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center font-heading">Results That Matter</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">40%</div>
                  <div className="text-sm opacity-90">Average Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">60%</div>
                  <div className="text-sm opacity-90">Improvement in Customer Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">3×</div>
                  <div className="text-sm opacity-90">Faster Campaign Deployment</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-90">Client Satisfaction Rate</div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Industries Served */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-ink dark:text-white mb-8 text-center font-heading">
              Industries Served
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  industry: "Retail",
                  description: "Multi-brand retailers, e-commerce platforms, and omnichannel experiences",
                  icon: "🛍️",
                  clients: "Fortune 500 retailers, e-commerce platforms, fashion brands"
                },
                {
                  industry: "Manufacturing",
                  description: "B2B manufacturers, supply chain optimization, and partner channel marketing",
                  icon: "🏭",
                  clients: "Global manufacturers, industrial equipment, automotive"
                },
                {
                  industry: "Healthcare",
                  description: "Healthcare providers, medical device companies, and pharmaceutical organizations",
                  icon: "🏥",
                  clients: "Healthcare systems, medical device companies, pharma"
                }
              ].map((industry, index) => (
                <div key={index} className="group">
                  <GlassCard className="h-full">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
                    <h3 className="text-xl font-semibold text-ink dark:text-white mb-3 group-hover:text-accent transition-colors duration-300 font-heading">{industry.industry}</h3>
                    <p className="text-muted dark:text-gray-300 mb-4 font-medium">{industry.description}</p>
                    <div className="text-sm text-accent font-medium">{industry.clients}</div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <GlassCard className="bg-gray-50 dark:bg-gray-800">
              <h3 className="text-3xl font-bold text-ink dark:text-white mb-4 font-heading">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-xl text-muted dark:text-gray-300 mb-8 font-medium">
                Let's discuss how I can help you achieve similar results for your organization.
              </p>
              <a
                href="mailto:hello@sbconsulting.cloud"
                className="bg-accent hover:bg-accent2 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
              >
                Start Your Success Story
              </a>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}