import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-ink dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">
            Page not found
          </h2>
          <p className="text-muted dark:text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-accent hover:bg-accent2 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Go home
          </Link>
          
          <Link
            href="/contact"
            className="block w-full bg-white dark:bg-slate-800 text-ink dark:text-white border border-gray-300 dark:border-gray-600 font-semibold py-3 px-6 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-slate-700"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
