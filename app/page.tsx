"use client"

import Link from "next/link"
import { 
  Database, 
  CreditCard, 
  Blocks, 
  Fingerprint,
  Layers,
  Paintbrush,
  Wrench,
  Box
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <span className="text-xl font-bold">SaaS Template</span>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground">Login</Link>
            <Link href="/register" className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold sm:text-6xl">Next.js 15 SaaS Template</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            A modern SaaS starter with Supabase Auth and Stripe Subscriptions
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/register" className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90">
              Start Free Trial
            </Link>
            <Link href="/pricing" className="rounded-md border px-6 py-3 font-medium hover:bg-accent">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="container py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">Built With Modern Tech</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Next.js 15",
              description: "React framework with App Router and Server Components",
              icon: Blocks,
              href: "https://nextjs.org"
            },
            {
              name: "Supabase",
              description: "Auth, Database, and Storage platform",
              icon: Database,
              href: "https://supabase.com"
            },
            {
              name: "Stripe",
              description: "Payment processing and subscription management",
              icon: CreditCard,
              href: "https://stripe.com"
            },
            {
              name: "TypeScript",
              description: "Type-safe JavaScript development",
              icon: Wrench,
              href: "https://www.typescriptlang.org"
            },
            {
              name: "Tailwind CSS",
              description: "Utility-first CSS framework",
              icon: Paintbrush,
              href: "https://tailwindcss.com"
            },
            {
              name: "shadcn/ui",
              description: "Re-usable UI components",
              icon: Box,
              href: "https://ui.shadcn.com"
            },
            {
              name: "Auth.js",
              description: "Authentication for Next.js",
              icon: Fingerprint,
              href: "https://authjs.dev"
            },
            {
              name: "React 18",
              description: "JavaScript library for user interfaces",
              icon: Layers,
              href: "https://react.dev"
            }
          ].map((tech) => (
            <Link
              key={tech.name}
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-lg border p-6 text-center transition-colors hover:bg-accent"
            >
              <div className="rounded-full bg-primary/10 p-3">
                <tech.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">{tech.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {tech.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Sample Pages Grid */}
      <section className="container py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">Available Pages</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Authentication', pages: [
              { name: 'Login', href: '/login' },
              { name: 'Register', href: '/register' },
              { name: 'Reset Password', href: '/reset-password' }
            ]},
            { title: 'Dashboard', pages: [
              { name: 'Overview', href: '/dashboard' },
              { name: 'Analytics', href: '/analytics' },
              { name: 'Settings', href: '/settings' }
            ]},
            { title: 'Billing', pages: [
              { name: 'Plans', href: '/pricing' },
              { name: 'Payment History', href: '/billing' },
              { name: 'Invoices', href: '/billing' }
            ]},
            { title: 'Account', pages: [
              { name: 'Profile', href: '/settings' },
              { name: 'Team', href: '/team' },
              { name: 'API Keys', href: '/api-keys' }
            ]},
            { title: 'Documentation', pages: [
              { name: 'Getting Started', href: '/docs/getting-started' },
              { name: 'API Reference', href: '/docs/api' },
              { name: 'Examples', href: '/docs/examples' }
            ]},
            { title: 'Support', pages: [
              { name: 'Help Center', href: '/support' },
              { name: 'Contact', href: '/contact' },
              { name: 'Status', href: '/status' }
            ]}
          ].map((section) => (
            <div key={section.title} className="rounded-lg border p-6">
              <h3 className="mb-4 text-xl font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.pages.map((page) => (
                  <li key={page.name}>
                    <Link href={page.href} className="text-muted-foreground hover:text-foreground">
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Setup Instructions */}
      <section className="border-t bg-muted/40">
        <div className="container py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">Setup Instructions</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-background p-6">
              <h3 className="mb-4 text-xl font-semibold">1. Supabase Setup</h3>
              <ol className="list-decimal space-y-2 pl-4">
                <li>Create a new project in Supabase</li>
                <li>Copy your project URL and anon key from Project Settings {">"} API</li>
                <li>Create a .env.local file from .env.example</li>
                <li>Add your Supabase credentials to .env.local</li>
                <li>Run the SQL commands from supabase/schema.sql in the SQL editor</li>
                <li>Uncomment the authentication code in middleware.ts</li>
              </ol>
            </div>

            <div className="rounded-lg border bg-background p-6">
              <h3 className="mb-4 text-xl font-semibold">2. Stripe Setup</h3>
              <ol className="list-decimal space-y-2 pl-4">
                <li>Create a Stripe account</li>
                <li>Get your API keys from the Stripe Dashboard</li>
                <li>Add your Stripe credentials to .env.local</li>
                <li>Create subscription products and prices</li>
                <li>Set up webhooks for subscription management</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Login Form */}
      <section className="container py-20">
        <div className="mx-auto max-w-md">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-6 text-center text-2xl font-semibold">Sample Login</h3>
            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border bg-background px-3 py-2"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-md border bg-background px-3 py-2"
                />
              </div>
              <button
                type="button"
                className="w-full rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90"
              >
                Sign In
              </button>
              <div className="text-center text-sm">
                <Link href="/reset-password" className="text-muted-foreground hover:text-foreground">
                  Forgot password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-8">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>© 2024 SaaS Template. All rights reserved.</span>
            <div className="flex gap-4">
              <Link href="/docs/terms" className="hover:text-foreground">Terms</Link>
              <Link href="/docs/privacy" className="hover:text-foreground">Privacy</Link>
              <Link href="/docs" className="hover:text-foreground">Documentation</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 