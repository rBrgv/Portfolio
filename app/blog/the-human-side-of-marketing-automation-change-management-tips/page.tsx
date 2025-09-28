import type { Metadata } from "next";
import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: "The Human Side of Marketing Automation: Change Management Tips",
  description: "Learn how to manage the human side of marketing automation adoption and change management.",
  keywords: ["Change Management", "Adoption", "Human Factors", "Training", "Leadership"],
  authors: [{ name: "Bhargav Ramesh" }],
  openGraph: {
    title: "The Human Side of Marketing Automation: Change Management Tips",
    description: "Learn how to manage the human side of marketing automation adoption and change management.",
    type: "article",
    publishedTime: "2024-08-14",
  },
  twitter: {
    card: "summary",
    title: "The Human Side of Marketing Automation: Change Management Tips",
    description: "Learn how to manage the human side of marketing automation adoption and change management.",
  },
};

export default function BlogPost() {
  const mdxPath = path.join(process.cwd(), 'app/blog/the-human-side-of-marketing-automation-change-management-tips.mdx');
  const mdxContent = fs.readFileSync(mdxPath, 'utf8');
  
  // Remove frontmatter from MDX content
  const contentWithoutFrontmatter = mdxContent.replace(/^---\n[\s\S]*?\n---\n/, '');

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <a 
            href="/blog" 
            className="text-accent hover:text-accent2 font-semibold flex items-center"
          >
            ← Back to Blog
          </a>
        </div>

        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
              Change Management
            </span>
            <span className="text-muted dark:text-gray-400 text-sm">2024-08-14</span>
            <span className="text-muted dark:text-gray-400 text-sm">8 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-ink dark:text-white mb-6 leading-tight">
            The Human Side of Marketing Automation: Change Management Tips
          </h1>
          <p className="text-xl text-muted dark:text-gray-300 leading-relaxed">
            Learn how to manage the human side of marketing automation adoption and change management.
          </p>
        </header>

        <article className="prose prose-lg max-w-none dark:prose-invert">
          <MDXRemote source={contentWithoutFrontmatter} />
        </article>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-accent to-accent2 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-lg mb-6 opacity-90">
              Get the latest insights on Salesforce Marketing Cloud, Data Cloud, and lifecycle marketing delivered to your inbox.
            </p>
            <a
              href="mailto:bhargav.ramesh@outlook.com?subject=Subscribe%20to%20blog%20updates"
              className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              Subscribe to Updates
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}