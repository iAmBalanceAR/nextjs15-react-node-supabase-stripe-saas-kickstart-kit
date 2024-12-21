"use client"

import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Globe, 
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="container py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <div className="flex items-center gap-4">
          <select className="rounded-md border bg-background px-3 py-2 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last year</option>
          </select>
          <button className="rounded-md border px-4 py-2 text-sm hover:bg-accent">
            Export Data
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Total Users",
            value: "12,345",
            change: "+12%",
            trend: "up",
            icon: Users
          },
          {
            label: "Active Users",
            value: "8,674",
            change: "+8%",
            trend: "up",
            icon: Globe
          },
          {
            label: "Avg. Session",
            value: "4m 32s",
            change: "-3%",
            trend: "down",
            icon: Clock
          },
          {
            label: "Conversion Rate",
            value: "3.42%",
            change: "+2%",
            trend: "up",
            icon: TrendingUp
          }
        ].map((metric) => (
          <div key={metric.label} className="rounded-lg border bg-card p-6">
            <div className="flex items-center justify-between">
              <metric.icon className="h-5 w-5 text-muted-foreground" />
              <div className={`flex items-center gap-1 text-sm ${
                metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {metric.change}
                {metric.trend === 'up' ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}
              </div>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">User Growth</h3>
            <BarChart3 className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="h-[300px] w-full rounded-lg bg-muted/10">
            {/* Chart placeholder - In a real app, you'd use a charting library like recharts */}
            <div className="flex h-full items-center justify-center text-muted-foreground">
              User Growth Chart
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">Revenue Overview</h3>
            <TrendingUp className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="h-[300px] w-full rounded-lg bg-muted/10">
            <div className="flex h-full items-center justify-center text-muted-foreground">
              Revenue Chart
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="rounded-lg border bg-card">
        <div className="border-b p-4">
          <h3 className="font-semibold">Detailed Statistics</h3>
        </div>
        <div className="p-4">
          <table className="w-full">
            <thead>
              <tr className="border-b text-sm text-muted-foreground">
                <th className="pb-4 text-left font-medium">Page</th>
                <th className="pb-4 text-right font-medium">Views</th>
                <th className="pb-4 text-right font-medium">Bounce Rate</th>
                <th className="pb-4 text-right font-medium">Avg. Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  page: "/dashboard",
                  views: "5,238",
                  bounceRate: "21%",
                  avgTime: "2m 14s"
                },
                {
                  page: "/analytics",
                  views: "3,426",
                  bounceRate: "18%",
                  avgTime: "1m 45s"
                },
                {
                  page: "/settings",
                  views: "2,842",
                  bounceRate: "24%",
                  avgTime: "1m 12s"
                },
                {
                  page: "/profile",
                  views: "2,125",
                  bounceRate: "28%",
                  avgTime: "0m 45s"
                }
              ].map((stat) => (
                <tr key={stat.page} className="border-b last:border-0">
                  <td className="py-4">{stat.page}</td>
                  <td className="py-4 text-right">{stat.views}</td>
                  <td className="py-4 text-right">{stat.bounceRate}</td>
                  <td className="py-4 text-right">{stat.avgTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 