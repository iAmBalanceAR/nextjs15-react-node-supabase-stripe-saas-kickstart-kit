"use client"

import Link from "next/link"
import {
  LayoutDashboard,
  BarChart,
  Settings,
  CreditCard,
  Users,
  Key,
  FileText,
  HelpCircle,
  Home
} from "lucide-react"

export default function DashboardNav() {
  const links = [
    {
      title: "Home",
      href: "/",
      icon: Home
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: BarChart
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings
    },
    {
      title: "Billing",
      href: "/billing",
      icon: CreditCard
    },
    {
      title: "Team",
      href: "/team",
      icon: Users
    },
    {
      title: "API Keys",
      href: "/api-keys",
      icon: Key
    },
    {
      title: "Documentation",
      href: "/docs",
      icon: FileText
    },
    {
      title: "Support",
      href: "/support",
      icon: HelpCircle
    }
  ]

  return (
    <nav className="grid items-start gap-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        >
          <link.icon className="mr-2 h-4 w-4" />
          <span>{link.title}</span>
        </Link>
      ))}
    </nav>
  )
} 