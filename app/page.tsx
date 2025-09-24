'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

// Simple Typewriter Component
const TypewriterText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span className={className}>{displayText}</span>;
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-ink dark:text-white mb-8 font-heading">
              <TypewriterText 
                text="Driving Growth Through Marketing Innovation" 
                className="block"
              />
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted dark:text-gray-300 mb-12 max-w-4xl mx-auto font-medium">
              Specialized in lifecycle marketing, data unification, and global implementations leveraging Salesforce Marketing Cloud & Data Cloud
            </p>


            {/* Headshot */}
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl">
                <Image
                  src="/headshots/headshot.JPG"
                  alt="Bhargav Ramesh - Salesforce Expert"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Credentials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink dark:text-white mb-6 font-heading">
              Certifications & Credentials
            </h2>
            <p className="text-xl text-muted dark:text-gray-300 max-w-3xl mx-auto font-medium">
              Validated expertise across the Salesforce ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {/* Marketing Cloud Email Specialist */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA6nT&oid=00DF0000000gZsu&lastMod=1746778963000"
                  alt="Salesforce Certified Marketing Cloud Email Specialist"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs font-semibold text-ink dark:text-white text-center leading-tight">Marketing Cloud Email Specialist</h3>
            </div>

            {/* Marketing Cloud Engagement Developer */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MACck&oid=00DF0000000gZsu&lastMod=1746779293000"
                  alt="Salesforce Certified Marketing Cloud Engagement Developer"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs font-semibold text-ink dark:text-white text-center leading-tight">Marketing Cloud Engagement Developer</h3>
            </div>

            {/* Marketing Cloud Engagement Administrator */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAExu&oid=00DF0000000gZsu&lastMod=1746779207000"
                  alt="Salesforce Certified Marketing Cloud Engagement Administrator"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs font-semibold text-ink dark:text-white text-center leading-tight">Marketing Cloud Engagement Administrator</h3>
            </div>

            {/* Marketing Cloud Engagement Consultant */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA6fO&oid=00DF0000000gZsu&lastMod=1746782543000"
                  alt="Salesforce Certified Marketing Cloud Engagement Consultant"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs font-semibold text-ink dark:text-white text-center leading-tight">Marketing Cloud Engagement Consultant</h3>
            </div>

            {/* Data Cloud Consultant */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MACb7&oid=00DF0000000gZsu&lastMod=1746777787000"
                  alt="Salesforce Certified Data Cloud Consultant"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs font-semibold text-ink dark:text-white text-center leading-tight">Data Cloud Consultant</h3>
            </div>

            {/* Platform Administrator */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAGlB&oid=00DF0000000gZsu&lastMod=1746780638000"
                  alt="Salesforce Certified Platform Administrator"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs font-semibold text-ink dark:text-white text-center leading-tight">Platform Administrator</h3>
            </div>

            {/* AI Associate */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=0153k00000BEqgH&oid=00DF0000000gZsu&lastMod=1753104539000"
                  alt="Salesforce Certified AI Associate"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs font-semibold text-ink dark:text-white text-center leading-tight">AI Associate</h3>
            </div>

            {/* Agentforce Specialist */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA14b&oid=00DF0000000gZsu&lastMod=1746774124000"
                  alt="Salesforce Certified Agentforce Specialist"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs font-semibold text-ink dark:text-white text-center leading-tight">Agentforce Specialist</h3>
            </div>

            {/* Platform Foundations */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA9LY&oid=00DF0000000gZsu&lastMod=1746780949000"
                  alt="Salesforce Certified Platform Foundations"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs font-semibold text-ink dark:text-white text-center leading-tight">Platform Foundations</h3>
            </div>

            {/* Platform Developer */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA9LY&oid=00DF0000000gZsu&lastMod=1746780949000"
                  alt="Salesforce Certified Platform Developer"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs font-semibold text-ink dark:text-white text-center leading-tight">Platform Developer</h3>
            </div>
          </div>
        </div>
      </section>


      {/* What I Do Section */}
      <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink dark:text-white mb-6 font-heading">
              What I Do
            </h2>
            <p className="text-xl text-muted dark:text-gray-300 max-w-3xl mx-auto font-medium">
              I specialize in Marketing Cloud and Data Cloud solutions that enable organizations to transform customer engagement and achieve measurable business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Marketing Cloud Architecture */}
            <div className="group bg-gradient-to-br from-slate-50/50 to-slate-100/50 dark:from-slate-800/50 dark:to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200/20 dark:border-slate-700/20">
              <div className="w-12 h-12 bg-slate-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-white mb-4">Marketing Cloud Architecture</h3>
              <p className="text-muted dark:text-gray-300 mb-4">
                Design and implement scalable Salesforce Marketing Cloud solutions that align with business strategy and integrate seamlessly with existing systems.
              </p>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">
                50+ end-to-end implementations delivered
              </div>
            </div>

            {/* Data Cloud & CDP */}
            <div className="group bg-gradient-to-br from-slate-50/50 to-slate-100/50 dark:from-slate-800/50 dark:to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200/20 dark:border-slate-700/20">
              <div className="w-12 h-12 bg-slate-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-white mb-4">Data Cloud & CDP</h3>
              <p className="text-muted dark:text-gray-300 mb-4">
                Unify customer data across all touchpoints to create a single, trusted view that powers personalized, data-driven experiences.
              </p>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">
                Expertise in building a 360° customer view
              </div>
            </div>

            {/* Integrations */}
            <div className="group bg-gradient-to-br from-slate-50/50 to-slate-100/50 dark:from-slate-800/50 dark:to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200/20 dark:border-slate-700/20">
              <div className="w-12 h-12 bg-slate-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-white mb-4">Seamless Integrations</h3>
              <p className="text-muted dark:text-gray-300 mb-4">
                Connect Marketing Cloud with CRM, e-commerce, and enterprise systems to ensure unified data flow and activation.
              </p>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">
                100+ integrations across global programs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink dark:text-white mb-6 font-heading">
              Core Technologies
            </h2>
            <p className="text-xl text-muted dark:text-gray-300 max-w-3xl mx-auto font-medium">
              <TypewriterText text="Expert in Marketing Cloud, Data Cloud, and Salesforce ecosystem" />
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              "Marketing Cloud", "Data Cloud", "Salesforce CRM", "Journey Builder",
              "Email Studio", "Mobile Studio", "Advertising Studio", "Interaction Studio",
              "MuleSoft", "Heroku", "Commerce Cloud", "Service Cloud"
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-slate-800 text-ink dark:text-white rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">9+ years experience</div>
            <div className="text-muted dark:text-gray-400">in Salesforce ecosystem</div>
          </div>
        </div>
      </section>

      {/* My Implementation Framework Section */}
      <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink dark:text-white mb-6 font-heading">
              My Implementation Framework
            </h2>
            <p className="text-xl text-muted dark:text-gray-300 max-w-3xl mx-auto font-medium">
              A structured approach to Marketing Cloud and Data Cloud implementations that ensures technical excellence and business alignment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent2 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-white mb-3">Assessment & Analysis</h3>
              <p className="text-muted dark:text-gray-300">Assess existing systems, data architecture, and business requirements to identify optimization opportunities</p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent2 to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-white mb-3">Architecture & Strategy</h3>
              <p className="text-muted dark:text-gray-300">Design scalable solution architecture and develop comprehensive implementation strategy</p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent2 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-white mb-3">Development & Deployment</h3>
              <p className="text-muted dark:text-gray-300">Execute implementation with technical precision, regular milestones, and stakeholder communication</p>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent2 to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-white mb-3">Optimization & Scale</h3>
              <p className="text-muted dark:text-gray-300">Monitor performance metrics, analyze results, and implement continuous improvements for sustained growth</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
