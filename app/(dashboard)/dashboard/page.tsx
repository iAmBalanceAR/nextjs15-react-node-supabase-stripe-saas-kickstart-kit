"use client"

import { BarChart3, Users, CreditCard, Settings } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container py-10">
      <h1 className="mb-8 text-3xl font-bold">Dashboard Overview</h1>

      {/* Stats Grid */}
      <div className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Users", value: "1,234", icon: Users },
          { label: "Monthly Revenue", value: "$12,345", icon: BarChart3 },
          { label: "Active Subscriptions", value: "890", icon: CreditCard },
          { label: "System Status", value: "Healthy", icon: Settings },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="mt-2 text-3xl font-bold">{stat.value}</p>
              </div>
              <stat.icon className="h-6 w-6 text-muted-foreground" />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <div className="rounded-lg border">
          <div className="p-4">
            <div className="space-y-4">
              {[
                { action: "New user signup", time: "2 minutes ago" },
                { action: "Subscription upgraded", time: "1 hour ago" },
                { action: "New payment received", time: "3 hours ago" },
                { action: "System update completed", time: "5 hours ago" },
              ].map((activity, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <span>{activity.action}</span>
                  <span className="text-sm text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 