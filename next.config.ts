import type { NextConfig } from "next";
import createMDX from '@next/mdx';

// Security headers
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  // Note: Content-Security-Policy commented out for now - add after auditing all inline scripts/styles
  // { key: 'Content-Security-Policy', value: "default-src 'self'; img-src 'self' https: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:;" },
];

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drm.my.salesforce.com',
        port: '',
        pathname: '/servlet/servlet.ImageServer**',
      },
      {
        protocol: 'https',
        hostname: 'trailhead.salesforce.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'certification.salesforce.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
