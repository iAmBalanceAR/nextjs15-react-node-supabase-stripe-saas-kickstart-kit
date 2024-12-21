"use client"

import { Terminal, Puzzle, Zap } from "lucide-react"

export default function GettingStartedPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold">Getting Started</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="lead">
            Welcome to our platform! This guide will help you get up and running quickly with our services.
          </p>

          <div className="not-prose mb-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Quick Setup</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Get your environment ready in minutes
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Puzzle className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Integration</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Easy integration with your existing stack
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Fast Deploy</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Deploy to production in minutes
              </p>
            </div>
          </div>

          <h2>Prerequisites</h2>
          <p>Before you begin, make sure you have:</p>
          <ul>
            <li>Node.js 18.0 or higher</li>
            <li>A Supabase account</li>
            <li>A Stripe account (for payment processing)</li>
          </ul>

          <h2>Installation</h2>
          <p>1. Clone the repository:</p>
          <pre><code>git clone https://github.com/yourusername/your-project.git
cd your-project</code></pre>

          <p>2. Install dependencies:</p>
          <pre><code>pnpm install</code></pre>

          <p>3. Set up environment variables:</p>
          <pre><code>cp .env.example .env.local</code></pre>

          <h2>Configuration</h2>
          <h3>Supabase Setup</h3>
          <ol>
            <li>Create a new project in Supabase</li>
            <li>Copy your project URL and anon key from Project Settings {">"} API</li>
            <li>Add your Supabase credentials to .env.local</li>
            <li>Run the SQL commands from supabase/schema.sql in the SQL editor</li>
          </ol>

          <h3>Stripe Setup</h3>
          <ol>
            <li>Create a Stripe account</li>
            <li>Get your API keys from the Stripe Dashboard</li>
            <li>Add your Stripe credentials to .env.local</li>
            <li>Create subscription products and prices</li>
            <li>Set up webhooks for subscription management</li>
          </ol>

          <h2>Running the Application</h2>
          <p>Start the development server:</p>
          <pre><code>pnpm dev</code></pre>
          <p>Your application should now be running at <code>http://localhost:3000</code></p>

          <h2>Next Steps</h2>
          <ul>
            <li>Review the <a href="/docs/api" className="text-primary hover:underline">API documentation</a></li>
            <li>Check out our <a href="/docs/examples" className="text-primary hover:underline">example implementations</a></li>
            <li>Join our <a href="/support" className="text-primary hover:underline">community</a></li>
          </ul>

          <div className="mt-8 rounded-lg border bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground">
              Need help? Check out our <a href="/docs" className="text-primary hover:underline">documentation</a> or <a href="/support" className="text-primary hover:underline">contact support</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 