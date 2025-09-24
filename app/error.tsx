'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-ink dark:text-white mb-4">Oops!</h1>
          <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">
            Something went wrong
          </h2>
          <p className="text-muted dark:text-gray-300 mb-8">
            We encountered an unexpected error. Please try again or contact us if the problem persists.
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full bg-accent hover:bg-accent2 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Try again
          </button>
          
          <Link
            href="/"
            className="block w-full bg-white dark:bg-slate-800 text-ink dark:text-white border border-gray-300 dark:border-gray-600 font-semibold py-3 px-6 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-slate-700"
          >
            Go home
          </Link>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-muted dark:text-gray-400 mb-2">
              Error Details (Development)
            </summary>
            <pre className="text-xs text-muted dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
