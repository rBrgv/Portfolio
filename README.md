# SB Consulting Cloud

A professional personal consulting website for Salesforce Marketing Cloud and Data Cloud expertise. Built with Next.js 14, TypeScript, Tailwind CSS, and MDX support.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Dark/Light Mode**: Built-in theme toggle with next-themes
- **MDX Blog**: Full MDX support for blog posts with syntax highlighting
- **Responsive Design**: Mobile-first design that works on all devices
- **SEO Optimized**: Comprehensive metadata and Open Graph tags
- **Professional UI**: Clean, modern design with subtle animations
- **Vercel Ready**: Optimized for deployment on Vercel

## 📁 Project Structure

```
sb-consulting-cloud/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── blog/                     # Blog pages
│   │   ├── [slug]/              # Individual blog posts (MDX)
│   │   └── page.tsx             # Blog index
│   ├── contact/                  # Contact page
│   ├── services/                 # Services page
│   ├── testimonials/             # Testimonials page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # React components
│   ├── Footer.tsx               # Site footer
│   ├── Navbar.tsx               # Navigation bar
│   └── ThemeToggle.tsx          # Dark/light mode toggle
├── public/                      # Static assets
│   └── headshots/               # Professional headshots
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── package.json                 # Dependencies and scripts
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Typography**: @tailwindcss/typography
- **Animations**: Framer Motion
- **Theming**: next-themes
- **Content**: MDX for blog posts
- **Deployment**: Vercel

## 🎨 Design System

### Colors
- **Ink**: #0b1220 (Primary dark color)
- **Muted**: #5a6374 (Secondary text)
- **Accent**: #0ea5e9 (Primary accent)
- **Accent2**: #06b6d4 (Secondary accent)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, accessible sizing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sb-consulting-cloud
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Content Management

### Blog Posts

Blog posts are written in MDX format and located in `app/blog/[slug]/page.mdx`. Each post includes:

- Frontmatter with metadata
- MDX content with React components
- Automatic SEO optimization

### Adding New Blog Posts

1. Create a new directory in `app/blog/[slug]/`
2. Add a `page.mdx` file with frontmatter
3. Write your content in MDX format
4. The post will automatically appear in the blog index

### Example Blog Post Structure

```mdx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Post Title - SB Consulting Cloud",
  description: "Your post description",
  keywords: ["keyword1", "keyword2"],
};

# Your Post Title

*Published on Date • X min read*

Your content here...
```

## 🎨 Customization

### Branding

Update the following files to customize the branding:

- `app/layout.tsx` - Site title and metadata
- `components/Navbar.tsx` - Navigation branding
- `app/globals.css` - Color scheme and fonts
- `tailwind.config.ts` - Design tokens

### Content

- **Homepage**: `app/page.tsx`
- **About**: `app/about/page.tsx`
- **Services**: `app/services/page.tsx`
- **Contact**: `app/contact/page.tsx`
- **Testimonials**: `app/testimonials/page.tsx`

### Images

Replace placeholder images in `public/headshots/` with actual professional headshots.

## 🚀 Deployment

### Environment Variables

Copy `.env.example` to `.env.local` and configure the following variables:

```bash
# Build-time variables (available in both client and server)
NEXT_PUBLIC_SITE_URL=https://sbcon.co
NEXT_PUBLIC_SITE_NAME=SB Consulting

# Server-side only variables
COMMIT_HASH=dev

# Optional: Analytics
# NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id

# Optional: Contact form (if using a different service)
# CONTACT_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

### Deploying to Vercel

#### Step 1: Prepare the Repository

1. **Ensure scripts in package.json match:**
   ```json
   {
     "scripts": {
       "dev": "next dev",
       "build": "next build", 
       "start": "next start -p $PORT",
       "lint": "next lint"
     },
     "engines": { "node": ">=18.18 <23" }
   }
   ```

2. **Add .env.example and commit:**
   ```bash
   git add .env.example
   git commit -m "Add environment variables template"
   git push origin main
   ```

#### Step 2: Create Project on Vercel

1. **Login to Vercel** → New Project → Import GitHub repo
2. **Framework auto-detect**: Next.js
3. **Set Production environment variables** (copy from `.env.example`)
4. **Deploy**

#### Step 3: Verify Basic Health

1. **Test health endpoint**: `https://<vercel-deployment>.vercel.app/api/health`
   - Should return: `{ "status": "ok", "ts": "...", "commitHash": "..." }`
2. **Smoke test** key pages and API routes

#### Step 4: Add Custom Domain (sbcon.co)

1. **Vercel** → Project → Settings → Domains → Add `sbcon.co`
2. **Add `www.sbcon.co`** as well
3. **Set redirect** `www → sbcon.co` (or vice versa)

#### Step 5: Configure GoDaddy DNS

1. **For apex `sbcon.co`**:
   - Use ALIAS/ANAME if supported by GoDaddy
   - If not, follow Vercel's instructions for A records or nameserver switch
2. **For `www.sbcon.co`**:
   - CNAME `www` → Vercel domain target (e.g., `cname.vercel-dns.com`)
3. **Save DNS** - propagation usually takes minutes
4. **SSL** - Vercel auto-provisions SSL once DNS is correct

#### Step 6: Production Environment Variables

1. **Vercel** → Project → Settings → Environment Variables
2. **Set all required keys** for Production (and optionally Preview)
3. **Re-deploy** if needed

#### Step 7: Post-Deploy Checks

1. **Test pages** on real domain: `https://sbcon.co`
2. **Test health endpoint**: `https://sbcon.co/api/health`
3. **Check Vercel logs** for runtime warnings
4. **Validate images load** (remote domains allowed in `next.config.js`)

### Health Check Endpoint

The application includes a health check endpoint at `/api/health` that returns:

```json
{
  "status": "ok",
  "ts": "2024-01-01T00:00:00.000Z",
  "commitHash": "abc1234"
}
```

### Security Headers

The application includes production-ready security headers:

- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

### Error Handling

- **Global error boundary**: `app/error.tsx` for application errors
- **404 page**: `app/not-found.tsx` for missing pages
- **Development error details** shown in non-production environments

### Other Platforms

This project can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js build command
- **AWS Amplify**: Connect your repository
- **Railway**: Deploy directly from GitHub
- **DigitalOcean App Platform**: Use the Next.js preset

## 📊 SEO Features

- **Metadata**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 🔧 Configuration

### Tailwind CSS

Customize the design system in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      ink: "#0b1220",
      muted: "#5a6374",
      accent: "#0ea5e9",
      accent2: "#06b6d4",
    },
  },
}
```

### Next.js

Configure Next.js in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
};
```

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: ARIA labels and descriptions
- **Color Contrast**: WCAG AA compliant color combinations
- **Focus Management**: Clear focus indicators

## 🧪 Testing

### Manual Testing

1. **Responsive Design**: Test on various screen sizes
2. **Theme Toggle**: Verify dark/light mode functionality
3. **Navigation**: Test all navigation links
4. **Forms**: Test contact form functionality
5. **Blog**: Verify MDX rendering and navigation

### Performance Testing

- Use Lighthouse for performance audits
- Test Core Web Vitals
- Optimize images and assets
- Monitor bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support:

- **Email**: hello@sbconsulting.cloud
- **Website**: [sbconsulting.cloud](https://sbconsulting.cloud)

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Vercel**: For the deployment platform
- **MDX**: For the content authoring experience

---

Built with ❤️ for the Salesforce community