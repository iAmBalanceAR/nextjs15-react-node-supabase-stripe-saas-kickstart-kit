"use client"

import { 
  Key, 
  Plus, 
  Copy, 
  Clock, 
  AlertCircle,
  RefreshCw,
  Trash2
} from "lucide-react"

export default function ApiKeysPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">API Keys</h1>
        <p className="mt-2 text-muted-foreground">
          Manage your API keys for accessing the platform programmatically
        </p>
      </div>

      {/* API Key Warning */}
      <div className="mb-8 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900/50 dark:bg-yellow-900/20">
        <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
          <AlertCircle className="h-5 w-5" />
          <p className="text-sm">
            Your API keys carry many privileges. Please ensure they are kept secure and never shared or committed to version control.
          </p>
        </div>
      </div>

      {/* Create New Key */}
      <div className="mb-8 rounded-lg border p-6">
        <h2 className="mb-4 text-xl font-semibold">Create New API Key</h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium leading-none">
              Key Name
            </label>
            <input
              type="text"
              placeholder="e.g., Production API Key"
              className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium leading-none">
              Expiration
            </label>
            <select className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm">
              <option>Never</option>
              <option>30 days</option>
              <option>60 days</option>
              <option>90 days</option>
              <option>Custom</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium leading-none">
              Permissions
            </label>
            <div className="mt-2 space-y-2">
              {[
                "Read access",
                "Write access",
                "Delete access"
              ].map((permission) => (
                <label key={permission} className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-sm">{permission}</span>
                </label>
              ))}
            </div>
          </div>
          <button className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            Create API Key
          </button>
        </div>
      </div>

      {/* Active API Keys */}
      <div className="rounded-lg border">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-semibold">Active API Keys</h2>
          <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
            3 Active Keys
          </span>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {[
              {
                name: "Production API Key",
                key: "sk_prod_xxxxxxxxxxxx",
                created: "2023-12-01",
                lastUsed: "2 hours ago",
                expires: "Never"
              },
              {
                name: "Development API Key",
                key: "sk_dev_xxxxxxxxxxxx",
                created: "2023-11-15",
                lastUsed: "5 days ago",
                expires: "2024-02-15"
              },
              {
                name: "Testing API Key",
                key: "sk_test_xxxxxxxxxxxx",
                created: "2023-10-30",
                lastUsed: "1 month ago",
                expires: "2024-01-30"
              }
            ].map((apiKey, i) => (
              <div
                key={i}
                className="rounded-lg border p-4"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Key className="h-4 w-4 text-primary" />
                    <span className="font-medium">{apiKey.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="rounded-md p-2 hover:bg-accent">
                      <RefreshCw className="h-4 w-4" />
                    </button>
                    <button className="rounded-md p-2 text-red-500 hover:bg-accent">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-2">
                  <code className="text-sm">{apiKey.key}</code>
                  <button className="ml-auto rounded-md p-1 hover:bg-accent">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Created {apiKey.created}
                  </div>
                  <div>Last used {apiKey.lastUsed}</div>
                  <div>Expires: {apiKey.expires}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 