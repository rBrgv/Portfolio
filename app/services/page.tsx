import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - SB Consulting Cloud",
  description: "Comprehensive Salesforce Marketing Cloud and Data Cloud services including architecture, implementation, and integration solutions.",
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

export default function Services() {
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
              Services
            </h1>
            <p className="text-xl text-muted dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Comprehensive Salesforce Marketing Cloud and Data Cloud solutions designed to drive measurable business results.
            </p>
          </div>

          {/* Main Services */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Architecture & Journeys",
                icon: "🏗️",
                description: "Design and implement complex lifecycle marketing programs that drive engagement and revenue across all touchpoints.",
                features: [
                  "Journey Builder strategy and implementation",
                  "Cross-channel campaign orchestration",
                  "Customer lifecycle mapping and optimization",
                  "Personalization strategy and execution",
                  "A/B testing and optimization frameworks",
                  "Performance monitoring and analytics"
                ],
                deliverables: [
                  "Technical architecture documentation",
                  "Journey Builder implementation",
                  "Testing and optimization framework",
                  "Team training and knowledge transfer"
                ]
              },
              {
                title: "Data Cloud",
                icon: "☁️",
                description: "Unlock the power of unified customer data with strategic Data Cloud implementations and data model optimization.",
                features: [
                  "Data Cloud strategy and planning",
                  "Customer data model design",
                  "Identity resolution and unification",
                  "Real-time data activation",
                  "Privacy and compliance implementation",
                  "Data quality and governance"
                ],
                deliverables: [
                  "Data Cloud implementation plan",
                  "Custom data model design",
                  "Identity resolution configuration",
                  "Data governance framework"
                ]
              },
              {
                title: "Integrations",
                icon: "🔗",
                description: "Seamlessly connect your tech stack with custom integrations between Marketing Cloud, CRM, and external systems.",
                features: [
                  "Marketing Cloud to CRM synchronization",
                  "E-commerce platform integrations",
                  "ERP system connections",
                  "Third-party API integrations",
                  "Data transformation and mapping",
                  "Real-time data synchronization"
                ],
                deliverables: [
                  "Integration architecture design",
                  "Custom connector development",
                  "Data mapping documentation",
                  "Integration testing and validation"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <GlassCard className="h-full">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-ink dark:text-white mb-4 group-hover:text-accent transition-colors duration-300 font-heading">{service.title}</h3>
                  <p className="text-muted dark:text-gray-300 mb-6 leading-relaxed font-medium">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-ink dark:text-white mb-3">What's Included:</h4>
                    <ul className="space-y-2 text-sm text-muted dark:text-gray-300">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-ink dark:text-white mb-3">Deliverables:</h4>
                    <ul className="space-y-2 text-sm text-muted dark:text-gray-300">
                      {service.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent2 mr-2">✓</span>
                          <span className="font-medium">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mb-20">
            <GlassCard className="bg-gray-50 dark:bg-gray-900">
              <h2 className="text-3xl font-bold text-ink dark:text-white mb-8 text-center font-heading">
                Additional Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Preference & Compliance", description: "GDPR, CCPA, and consent management implementation" },
                  { title: "BigCommerce Integration", description: "Seamless connection between BigCommerce and Marketing Cloud" },
                  { title: "ERP Bridges", description: "Connect manufacturing and supply chain data to marketing" },
                  { title: "Training & Support", description: "Team training and ongoing technical support" }
                ].map((service, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="font-semibold text-ink dark:text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-muted dark:text-gray-300">{service.description}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-ink dark:text-white mb-12 text-center font-heading">
              My Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understand your business goals, current systems, and challenges through detailed discovery sessions."
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Develop a comprehensive strategy and technical architecture tailored to your specific needs."
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Execute the solution with regular check-ins, testing, and iterative improvements."
                },
                {
                  step: "04",
                  title: "Optimization",
                  description: "Monitor performance, optimize campaigns, and provide ongoing support and training."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-ink dark:text-white mb-3">{step.title}</h3>
                  <p className="text-muted dark:text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <GlassCard className="bg-gradient-to-r from-accent to-accent2 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss your specific needs and how I can help you achieve your marketing goals.
              </p>
              <a
                href="mailto:hello@sbconsulting.cloud"
                className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
              >
                Schedule a Consultation
              </a>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}