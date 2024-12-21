"use client"

import { Code, Lock, Clock } from "lucide-react"

export default function ApiReferencePage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold">API Reference</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="lead">
            Complete reference documentation for our REST API. Learn how to authenticate requests and use our endpoints.
          </p>

          <div className="not-prose mb-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Authentication</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Secure your API requests with authentication tokens
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Rate Limits</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Understand our rate limiting policies
              </p>
            </div>
          </div>

          <h2>Authentication</h2>
          <p>
            All API requests must include your API key in the Authorization header:
          </p>
          <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>

          <h2>Base URL</h2>
          <p>All API requests should be made to:</p>
          <pre><code>https://api.example.com/v1</code></pre>

          <h2>Endpoints</h2>

          <h3>Users</h3>
          <div className="rounded-lg border">
            <div className="border-b p-4">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <code className="text-sm">GET /users</code>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm">List all users</p>
              <h4 className="mt-4 text-sm font-semibold">Parameters</h4>
              <table className="mt-2 w-full text-sm">
                <thead>
                  <tr>
                    <th className="border-b py-2 text-left">Name</th>
                    <th className="border-b py-2 text-left">Type</th>
                    <th className="border-b py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">page</td>
                    <td className="py-2">integer</td>
                    <td className="py-2">Page number for pagination</td>
                  </tr>
                  <tr>
                    <td className="py-2">limit</td>
                    <td className="py-2">integer</td>
                    <td className="py-2">Number of items per page</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 rounded-lg border">
            <div className="border-b p-4">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <code className="text-sm">GET /users/{"{id}"}</code>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm">Get a specific user</p>
              <h4 className="mt-4 text-sm font-semibold">Path Parameters</h4>
              <table className="mt-2 w-full text-sm">
                <thead>
                  <tr>
                    <th className="border-b py-2 text-left">Name</th>
                    <th className="border-b py-2 text-left">Type</th>
                    <th className="border-b py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">id</td>
                    <td className="py-2">string</td>
                    <td className="py-2">The user&apos;s unique identifier</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3>Teams</h3>
          <div className="rounded-lg border">
            <div className="border-b p-4">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <code className="text-sm">POST /teams</code>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm">Create a new team</p>
              <h4 className="mt-4 text-sm font-semibold">Request Body</h4>
              <pre><code>{`{
  "name": "string",
  "description": "string",
  "members": string[]
}`}</code></pre>
            </div>
          </div>

          <h2>Rate Limits</h2>
          <p>
            API requests are limited to:
          </p>
          <ul>
            <li>100 requests per minute for free tier</li>
            <li>1000 requests per minute for pro tier</li>
            <li>Custom limits for enterprise tier</li>
          </ul>

          <h2>Errors</h2>
          <p>
            The API uses standard HTTP response codes to indicate success or failure:
          </p>
          <ul>
            <li><code>200</code> - Success</li>
            <li><code>400</code> - Bad Request</li>
            <li><code>401</code> - Unauthorized</li>
            <li><code>403</code> - Forbidden</li>
            <li><code>404</code> - Not Found</li>
            <li><code>429</code> - Too Many Requests</li>
            <li><code>500</code> - Internal Server Error</li>
          </ul>

          <div className="mt-8 rounded-lg border bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground">
              Need help with the API? Check out our <a href="/docs/examples" className="text-primary hover:underline">examples</a> or <a href="/support" className="text-primary hover:underline">contact support</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 