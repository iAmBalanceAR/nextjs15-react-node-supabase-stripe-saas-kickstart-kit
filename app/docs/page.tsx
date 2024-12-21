"use client"

import Link from "next/link"
import { BookOpen, Code, Terminal, Zap, FileText, Puzzle } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Documentation</h1>
        <p className="mt-2 text-muted-foreground">
          Everything you need to integrate and build with our platform
        </p>
      </div>

      {/* Quick Links */}
      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Getting Started',
            description: 'Quick start guide and basic concepts',
            icon: Zap,
            href: '/docs/getting-started'
          },
          {
            title: 'API Reference',
            description: 'Complete API endpoints documentation',
            icon: Code,
            href: '/docs/api'
          },
          {
            title: 'CLI Tools',
            description: 'Command line interface documentation',
            icon: Terminal,
            href: '/docs/cli'
          },
          {
            title: 'Guides',
            description: 'Step-by-step integration guides',
            icon: FileText,
            href: '/docs/guides'
          },
          {
            title: 'SDK Reference',
            description: 'Client libraries and SDKs',
            icon: Puzzle,
            href: '/docs/sdk'
          },
          {
            title: 'Examples',
            description: 'Code examples and templates',
            icon: BookOpen,
            href: '/docs/examples'
          }
        ].map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-start gap-4 rounded-lg border p-6 transition-colors hover:bg-accent"
          >
            <div className="rounded-md bg-primary/10 p-2">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Popular Guides */}
      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Popular Guides</h2>
        <div className="space-y-4">
          {[
            {
              title: 'Authentication',
              description: 'Learn how to implement authentication in your application',
              time: '5 min read'
            },
            {
              title: 'Webhooks',
              description: 'Setting up and handling webhook events',
              time: '8 min read'
            },
            {
              title: 'Rate Limiting',
              description: 'Understanding API rate limits and best practices',
              time: '3 min read'
            },
            {
              title: 'Error Handling',
              description: 'Properly handling API errors and edge cases',
              time: '6 min read'
            }
          ].map((guide) => (
            <Link
              key={guide.title}
              href="#"
              className="block rounded-lg border p-4 transition-colors hover:bg-accent"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{guide.title}</h3>
                <span className="text-sm text-muted-foreground">{guide.time}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* API Reference Preview */}
      <div className="rounded-lg border">
        <div className="border-b p-4">
          <h2 className="text-xl font-semibold">API Reference</h2>
        </div>
        <div className="p-4">
          <div className="rounded-lg bg-muted p-4">
            <pre className="text-sm"><code>
              curl -X POST https://api.example.com/v1/data \
              -H &quot;Authorization: Bearer YOUR_API_KEY&quot; \
              -H &quot;Content-Type: application/json&quot; \
              -d {`{"key": "value"}`}
            </code></pre>
          </div>
          <div className="mt-4 flex justify-end">
            <Link
              href="/docs/api"
              className="text-sm text-primary hover:underline"
            >
              View Full API Reference →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 