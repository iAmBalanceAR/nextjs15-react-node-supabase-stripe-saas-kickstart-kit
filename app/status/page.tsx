"use client"

import { 
  CheckCircle2, 
  AlertCircle,
  Clock,
  Activity
} from "lucide-react"

export default function StatusPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">System Status</h1>
          <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-500">
            <CheckCircle2 className="h-4 w-4" />
            All Systems Operational
          </div>
        </div>
        <p className="mt-2 text-muted-foreground">
          Current status of all system components and services
        </p>
      </div>

      {/* Current Metrics */}
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        {[
          {
            label: "Uptime",
            value: "99.99%",
            subtext: "Last 90 days"
          },
          {
            label: "Response Time",
            value: "187ms",
            subtext: "Last 24 hours"
          },
          {
            label: "API Requests",
            value: "1.2M",
            subtext: "Last 24 hours"
          }
        ].map((metric) => (
          <div key={metric.label} className="rounded-lg border p-6">
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <p className="mt-2 text-3xl font-bold">{metric.value}</p>
            <p className="text-sm text-muted-foreground">{metric.subtext}</p>
          </div>
        ))}
      </div>

      {/* Services Status */}
      <div className="mb-8 rounded-lg border">
        <div className="border-b p-4">
          <h2 className="text-xl font-semibold">Services</h2>
        </div>
        <div className="divide-y">
          {[
            {
              name: "API",
              status: "operational",
              responseTime: "156ms"
            },
            {
              name: "Dashboard",
              status: "operational",
              responseTime: "234ms"
            },
            {
              name: "Database",
              status: "operational",
              responseTime: "45ms"
            },
            {
              name: "Storage",
              status: "degraded",
              responseTime: "789ms"
            },
            {
              name: "Authentication",
              status: "operational",
              responseTime: "123ms"
            }
          ].map((service) => (
            <div key={service.name} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                {service.status === "operational" ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                )}
                <span className="font-medium">{service.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {service.responseTime}
                </div>
                <span className={`rounded-full px-2 py-1 text-xs ${
                  service.status === "operational"
                    ? "bg-green-500/10 text-green-500"
                    : "bg-yellow-500/10 text-yellow-500"
                }`}>
                  {service.status === "operational" ? "Operational" : "Degraded"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Incident History */}
      <div className="rounded-lg border">
        <div className="border-b p-4">
          <h2 className="text-xl font-semibold">Recent Incidents</h2>
        </div>
        <div className="divide-y">
          {[
            {
              date: "2024-01-15",
              title: "API Performance Degradation",
              status: "resolved",
              duration: "23 minutes"
            },
            {
              date: "2024-01-10",
              title: "Database Maintenance",
              status: "resolved",
              duration: "45 minutes"
            },
            {
              date: "2024-01-05",
              title: "Storage System Issues",
              status: "resolved",
              duration: "12 minutes"
            }
          ].map((incident) => (
            <div key={incident.date} className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">{incident.title}</h3>
                </div>
                <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs text-green-500">
                  {incident.status}
                </span>
              </div>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>{incident.date}</span>
                <span>Duration: {incident.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 