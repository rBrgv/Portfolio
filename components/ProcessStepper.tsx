'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

type Step = {
  id: number;
  title: string;
  subtitle?: string;
  content?: string;
  icon?: React.ReactNode;
};

type ProcessStepperProps = {
  steps: Step[];
  autoPlay?: boolean;
  autoPlayIntervalMs?: number;
  loop?: boolean;
  startIndex?: number;
  showControls?: boolean;
  showProgressBar?: boolean;
  onStepChange?: (currentIndex: number) => void;
};

const ProcessStepper: React.FC<ProcessStepperProps> = ({
  steps,
  autoPlay = true,
  autoPlayIntervalMs = 3000,
  loop = true,
  startIndex = 0,
  showControls = true,
  showProgressBar = true,
  onStepChange
}) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Calculate maxSteps early to avoid hoisting issues
  const maxSteps = steps ? Math.min(steps.length, 4) : 0;

  // Progress bar animation
  const animateProgress = useCallback(() => {
    if (shouldReduceMotion) {
      setProgress(100);
      return;
    }

    setProgress(0);
    const startTime = Date.now();
    const duration = autoPlayIntervalMs;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100 && !isPaused) {
        progressIntervalRef.current = requestAnimationFrame(updateProgress);
      }
    };

    progressIntervalRef.current = requestAnimationFrame(updateProgress);
  }, [autoPlayIntervalMs, isPaused, shouldReduceMotion]);

  // Auto-advance logic
  const advanceStep = useCallback(() => {
    if (!autoPlay || isPaused) return;

    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (next >= maxSteps) {
        return loop ? 0 : prev;
      }
      return next;
    });
  }, [autoPlay, isPaused, maxSteps, loop]);

  // Start auto-play
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    // Clear existing intervals
    if (intervalRef.current) clearTimeout(intervalRef.current);
    if (progressIntervalRef.current) cancelAnimationFrame(progressIntervalRef.current);

    // Start progress animation
    animateProgress();

    // Set up auto-advance
    intervalRef.current = setTimeout(() => {
      advanceStep();
    }, autoPlayIntervalMs);

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
      if (progressIntervalRef.current) cancelAnimationFrame(progressIntervalRef.current);
    };
  }, [currentIndex, autoPlay, isPaused, autoPlayIntervalMs, animateProgress, advanceStep]);

  // Notify parent of step changes
  useEffect(() => {
    onStepChange?.(currentIndex);
  }, [currentIndex, onStepChange]);

  // Guard against invalid steps
  if (!steps || steps.length === 0) {
    return <div className="p-8 text-center text-gray-500">No steps provided</div>;
  }

  const currentStep = steps[currentIndex];

  // Manual navigation
  const goToStep = (index: number) => {
    if (index < 0 || index >= maxSteps) return;
    
    setCurrentIndex(index);
    setProgress(0);
    
    // Clear existing intervals
    if (intervalRef.current) clearTimeout(intervalRef.current);
    if (progressIntervalRef.current) cancelAnimationFrame(progressIntervalRef.current);
  };

  const goToPrevious = () => {
    const prev = currentIndex - 1;
    if (prev >= 0) {
      goToStep(prev);
    } else if (loop) {
      goToStep(maxSteps - 1);
    }
  };

  const goToNext = () => {
    const next = currentIndex + 1;
    if (next < maxSteps) {
      goToStep(next);
    } else if (loop) {
      goToStep(0);
    }
  };

  const goToFirst = () => goToStep(0);
  const goToLast = () => goToStep(maxSteps - 1);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        goToPrevious();
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        goToNext();
        break;
      case 'Home':
        e.preventDefault();
        goToFirst();
        break;
      case 'End':
        e.preventDefault();
        goToLast();
        break;
    }
  };

  // Pause/resume on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Animation variants
  const contentVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: shouldReduceMotion ? 0 : -8 }
  };

  const stepPillVariants = {
    inactive: { scale: 1, opacity: 0.6 },
    active: { scale: 1.1, opacity: 1 },
    completed: { scale: 1, opacity: 0.8 }
  };

  return (
    <div
      className="w-full max-w-6xl mx-auto p-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Mobile Layout */}
      <div className="lg:hidden space-y-6">
        {/* Progress Bar */}
        {showProgressBar && (
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.1, ease: "linear" }}
            />
          </div>
        )}

        {/* Step Pills */}
        <div className="flex justify-center space-x-2" role="tablist">
          {steps.slice(0, maxSteps).map((_, index) => (
            <motion.button
              key={index}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                index === currentIndex
                  ? 'bg-blue-500 text-white'
                  : index < currentIndex
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`}
              onClick={() => goToStep(index)}
              variants={stepPillVariants}
              animate={
                index === currentIndex
                  ? 'active'
                  : index < currentIndex
                  ? 'completed'
                  : 'inactive'
              }
              role="tab"
              aria-selected={index === currentIndex}
              aria-controls={`step-panel-${index}`}
            >
              {index + 1}
            </motion.button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
              role="tabpanel"
              id={`step-panel-${currentIndex}`}
              aria-live="polite"
            >
              <div className="text-center">
                {currentStep.icon && (
                  <div className="mb-4 flex justify-center">
                    {currentStep.icon}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {currentStep.title}
                </h3>
                {currentStep.subtitle && (
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                    {currentStep.subtitle}
                  </p>
                )}
                {currentStep.content && (
                  <p className="text-gray-700 dark:text-gray-400">
                    {currentStep.content}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        {showControls && (
          <div className="flex justify-center space-x-4">
            <button
              onClick={goToPrevious}
              disabled={!loop && currentIndex === 0}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button
              onClick={goToNext}
              disabled={!loop && currentIndex === maxSteps - 1}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
            <button
              onClick={() => goToStep(0)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Restart
            </button>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Left Column - Step List */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Process Steps
          </h2>
          {steps.slice(0, maxSteps).map((step, index) => (
            <motion.button
              key={step.id}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                index === currentIndex
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : index < currentIndex
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
              }`}
              onClick={() => goToStep(index)}
              variants={stepPillVariants}
              animate={
                index === currentIndex
                  ? 'active'
                  : index < currentIndex
                  ? 'completed'
                  : 'inactive'
              }
              role="tab"
              aria-selected={index === currentIndex}
              aria-controls={`step-panel-${index}`}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    index === currentIndex
                      ? 'bg-blue-500 text-white'
                      : index < currentIndex
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {index < currentIndex ? '✓' : index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  {step.subtitle && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {step.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Right Column - Content Panel */}
        <div className="space-y-6">
          {/* Progress Bar */}
          {showProgressBar && (
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.1, ease: "linear" }}
              />
            </div>
          )}

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
                role="tabpanel"
                id={`step-panel-${currentIndex}`}
                aria-live="polite"
                className="h-full flex flex-col justify-center"
              >
                {currentStep.icon && (
                  <div className="mb-6 flex justify-center">
                    {currentStep.icon}
                  </div>
                )}
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {currentStep.title}
                </h3>
                {currentStep.subtitle && (
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 text-center">
                    {currentStep.subtitle}
                  </p>
                )}
                {currentStep.content && (
                  <p className="text-gray-700 dark:text-gray-400 text-center leading-relaxed">
                    {currentStep.content}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          {showControls && (
            <div className="flex justify-center space-x-4">
              <button
                onClick={goToPrevious}
                disabled={!loop && currentIndex === 0}
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <button
                onClick={goToNext}
                disabled={!loop && currentIndex === maxSteps - 1}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
              <button
                onClick={() => goToStep(0)}
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Restart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProcessStepper;


