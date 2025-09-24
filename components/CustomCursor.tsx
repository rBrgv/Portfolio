'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cloud cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`,
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" className="drop-shadow-lg">
          <path
            d="M30 20c0-5.5-4.5-10-10-10s-10 4.5-10 10c-2.8 0-5 2.2-5 5s2.2 5 5 5h20c2.8 0 5-2.2 5-5s-2.2-5-5-5z"
            fill="url(#cloudGradient)"
          />
          <defs>
            <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Cloud trail */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-40 transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 30}px, ${mousePosition.y - 30}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-30">
          <path
            d="M45 30c0-8.3-6.7-15-15-15s-15 6.7-15 15c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5h30c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5z"
            fill="url(#cloudTrailGradient)"
          />
          <defs>
            <linearGradient id="cloudTrailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hover effect - floating cloud particles */}
      {isHovering && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-30 transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${mousePosition.x - 50}px, ${mousePosition.y - 50}px)`,
          }}
        >
          <div className="relative">
            {/* Small floating clouds */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute animate-bounce"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${2 + i * 0.5}s`,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <path
                    d="M15 10c0-2.8-2.2-5-5-5s-5 2.2-5 5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h10c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5z"
                    fill="#0ea5e9"
                    opacity="0.6"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}