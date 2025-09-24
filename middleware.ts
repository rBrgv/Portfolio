import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Only log API requests in non-production environments
  if (process.env.NODE_ENV !== 'production' && request.nextUrl.pathname.startsWith('/api/')) {
    const requestId = Math.random().toString(36).substring(7);
    const timestamp = new Date().toISOString();
    
    console.log(`[${timestamp}] ${request.method} ${request.nextUrl.pathname} - Request ID: ${requestId}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
