import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About - Bhargav Ramesh | RB Consulting",
  description: "Learn about Bhargav Ramesh's expertise in Salesforce Marketing Cloud and Data Cloud, with experience across retail, manufacturing, and healthcare sectors.",
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

export default function About() {
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
              About Bhargav Ramesh
            </h1>
            <p className="text-xl text-muted dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Salesforce-certified professional with deep expertise in Marketing Cloud and Data Cloud implementations across diverse industries.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mb-6 font-heading">
                My Background
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted dark:text-gray-300 mb-6 leading-relaxed">
                With extensive experience in Salesforce Marketing Cloud, Data Cloud, and the broader Salesforce ecosystem, I bring a strong understanding of platform capabilities and best practices. My work spans across industries, enabling me to design and deliver solutions that drive measurable business value.
                </p>
                <p className="text-muted dark:text-gray-300 mb-6 leading-relaxed">
                I specialize in transforming marketing operations through strategic lifecycle marketing programs, data unification, and seamless system integrations. My approach blends technical excellence with business acumen to deliver both scalability and impact.
                </p>
                <p className="text-muted dark:text-gray-300 leading-relaxed">
                Having led implementations across differentmarkets, I am well-versed in the challenges of global rollouts and committed to building solutions that are sustainable, adaptable, and effective across time zones and business cultures.                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-accent to-accent2 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                    <div className="hover:scale-110 transition-transform duration-300" style={{ transformOrigin: "25% 25%" }}>
                      <Image
                        src="/headshots/About.jpeg"
                        alt="Bhargav Ramesh"
                        width={256}
                        height={256}
                        className="w-64 h-64 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sectors */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mb-8 text-center font-heading">
              Industries I Have Served
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Retail",
                  description: "Multi-brand retailers, e-commerce platforms, and omnichannel experiences. Specialized in customer lifecycle management and personalization at scale.",
                  icon: "🛍️"
                },
                {
                  title: "Manufacturing",
                  description: "B2B manufacturers, supply chain optimization, and partner channel marketing. Focus on data-driven decision making and operational efficiency.",
                  icon: "🏭"
                },
                {
                  title: "Healthcare",
                  description: "Healthcare providers, medical device companies, and pharmaceutical organizations. Expertise in compliance, patient engagement, and regulatory requirements.",
                  icon: "🏥"
                }
              ].map((sector, index) => (
                <div key={index} className="group">
                  <GlassCard className="h-full">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{sector.icon}</div>
                    <h3 className="text-2xl font-bold text-ink dark:text-white mb-4 group-hover:text-accent transition-colors duration-300 font-heading">{sector.title}</h3>
                    <p className="text-muted dark:text-gray-300 leading-relaxed font-medium">{sector.description}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mb-8 text-center font-heading">
              Core Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <GlassCard>
                <h3 className="text-xl font-semibold text-ink dark:text-white mb-4">Technical Skills</h3>
                <ul className="space-y-2 text-muted dark:text-gray-300">
                  <li>• Salesforce Marketing Cloud (Journey Builder, Email Studio, Mobile Studio)</li>
                  <li>• Salesforce Data Cloud (CDP) implementation and optimization</li>
                  <li>• Marketing Cloud Personalization and Intelligence</li>
                  <li>• AMPscript, SSJS, and Marketing Cloud APIs</li>
                  <li>• Data modeling and ETL processes</li>
                  <li>• System integrations (CRM, ERP, e-commerce platforms)</li>
                </ul>
              </GlassCard>
              <GlassCard>
                <h3 className="text-xl font-semibold text-ink dark:text-white mb-4">Business Skills</h3>
                <ul className="space-y-2 text-muted dark:text-gray-300">
                  <li>• Lifecycle marketing strategy and program design</li>
                  <li>• Customer data platform (CDP) strategy</li>
                  <li>• Marketing automation and personalization</li>
                  <li>• Cross-channel campaign orchestration</li>
                  <li>• Data governance and compliance (GDPR, CCPA)</li>
                  <li>• Team training and knowledge transfer</li>
                </ul>
              </GlassCard>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <GlassCard className="bg-gradient-to-r from-accent to-accent2 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how I can help transform your marketing operations with Salesforce technology.
              </p>
              <a
                href="mailto:hello@sbconsulting.cloud"
                className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
              >
                Get in Touch
              </a>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}