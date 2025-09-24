'use client';

import React from 'react';
import ProcessStepper from '@/components/ProcessStepper';

const ProcessDemo: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Discovery & Analysis",
      subtitle: "Deep dive into current setup, challenges, and objectives.",
      content: "Workshops, audits, and stakeholder interviews to map gaps and opportunities.",
      icon: (
        <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Strategy & Planning",
      subtitle: "Roadmap tailored to your goals.",
      content: "Define channels, data flows, segmentation, journeys, KPIs, and governance.",
      icon: (
        <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Implementation",
      subtitle: "Iterative delivery with regular check-ins.",
      content: "Build, configure, QA, UAT; integrate Email/SMS, automations, and Data Cloud.",
      icon: (
        <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Optimization & Support",
      subtitle: "Continuous improvement and care.",
      content: "Monitor performance, A/B test, optimize journeys, and provide ongoing support.",
      icon: (
        <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          <circle cx="18" cy="6" r="3" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Process Stepper Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interactive process stepper with auto-progress, keyboard navigation, and accessibility features.
          </p>
        </div>

        <ProcessStepper
          steps={steps}
          autoPlay
          autoPlayIntervalMs={3200}
          loop
          showControls
          showProgressBar
          onStepChange={(currentIndex) => {
            console.log(`Current step: ${currentIndex + 1}`);
          }}
        />

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Features Demonstrated
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Interactions
              </h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Auto-play with progress bar</li>
                <li>• Hover to pause/resume</li>
                <li>• Click step pills to navigate</li>
                <li>• Previous/Next/Restart controls</li>
                <li>• Keyboard navigation (arrows, home, end)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Accessibility
              </h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>• ARIA roles and labels</li>
                <li>• Keyboard navigation</li>
                <li>• Screen reader announcements</li>
                <li>• Reduced motion support</li>
                <li>• Focus management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessDemo;


