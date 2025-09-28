'use client';

import { useState } from 'react';
import Image from 'next/image';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mldwylal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
              Get In Touch
            </h1>
            <p className="text-xl text-muted dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Ready to transform your marketing with Salesforce? Let's discuss your specific needs and how I can help.
            </p>
            
            {/* Contact Image */}
            <div className="mt-12 w-full">
              <Image
                src="/headshots/Contact.jpg"
                alt="Bhargav Ramesh"
                width={1200}
                height={400}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <GlassCard className="bg-white dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-ink dark:text-white mb-6 font-heading">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">
                          Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">
                          Sorry, there was an error sending your message. Please try again or email me directly at hello@sbconsulting.cloud
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink dark:text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-700 text-ink dark:text-white transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink dark:text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-700 text-ink dark:text-white transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-ink dark:text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-700 text-ink dark:text-white transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink dark:text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-700 text-ink dark:text-white transition-colors"
                    placeholder="Tell me about your project, challenges, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent2 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors hover:scale-105 transform disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </GlassCard>

            {/* Contact Information */}
            <div className="space-y-8">
              <GlassCard>
                <h2 className="text-2xl font-bold text-ink dark:text-white mb-6 font-heading">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 text-accent mr-3 mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-ink dark:text-white">Email</div>
                      <a href="mailto:bhargav.ramesh@outlook.com" className="text-accent hover:text-accent2 transition-colors">
                        bhargav.ramesh@outlook.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 text-accent mr-3 mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-ink dark:text-white">Location</div>
                      <div className="text-muted dark:text-gray-300">Bangalore</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 text-accent mr-3 mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-ink dark:text-white">Phone</div>
                      <a href="tel:+919632484104" className="text-accent hover:text-accent2 transition-colors">
                        +91 9632 484 104
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* LinkedIn Connect */}
              <GlassCard className="bg-gradient-to-br from-slate-50/50 to-slate-100/50 dark:from-slate-800/50 dark:to-slate-700/50 backdrop-blur-sm border border-slate-200/20 dark:border-slate-700/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-ink dark:text-white mb-2">Let's Connect on LinkedIn</h3>
                    <p className="text-muted dark:text-gray-300 mb-4">
                      Follow my professional journey and stay updated with the latest in Marketing Cloud and Data Cloud.
                    </p>
                    <a
                      href="https://www.linkedin.com/in/bhargav-ramesh-9a5587b3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2 hover:scale-105 transform"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </GlassCard>


              {/* Services Overview */}
              <GlassCard className="bg-gray-50 dark:bg-gray-800">
                <h3 className="text-xl font-bold text-ink dark:text-white mb-4 font-heading">What I Can Help With</h3>
                <ul className="space-y-2 text-muted dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Marketing Cloud strategy and implementation
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Data Cloud (CDP) setup and optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Lifecycle marketing program design
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    System integrations and data flows
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Compliance and preference management
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Team training and knowledge transfer
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}