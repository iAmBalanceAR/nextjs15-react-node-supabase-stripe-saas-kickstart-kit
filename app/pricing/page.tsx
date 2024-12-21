"use client"

import Link from "next/link"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Hobby",
    price: "$0",
    interval: "forever",
    description: "Perfect for side projects and learning",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Community support",
      "1GB storage",
      "API access"
    ],
    cta: "Start for Free",
    href: "/register"
  },
  {
    name: "Pro",
    price: "$19",
    interval: "per month",
    description: "For professional developers and small teams",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "API access",
      "Custom domains",
      "Team collaboration",
      "Audit logs"
    ],
    cta: "Start Free Trial",
    href: "/register?plan=pro",
    featured: true
  },
  {
    name: "Enterprise",
    price: "$99",
    interval: "per month",
    description: "For large teams with advanced needs",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "24/7 phone support",
      "Custom contracts",
      "SSO authentication",
      "Advanced security",
      "Custom integrations",
      "Dedicated account manager"
    ],
    cta: "Contact Sales",
    href: "/contact"
  }
]

export default function PricingPage() {
  return (
    <div className="container py-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Choose the plan that&apos;s right for you
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-lg border p-8 ${
              tier.featured
                ? "border-primary bg-primary/5 shadow-lg"
                : "bg-background"
            }`}
          >
            {tier.featured && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <div className="rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Most Popular
                </div>
              </div>
            )}
            <div className="mb-6">
              <h2 className="text-2xl font-bold">{tier.name}</h2>
              <div className="mt-2">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">/{tier.interval}</span>
              </div>
              <p className="mt-4 text-muted-foreground">{tier.description}</p>
            </div>

            <ul className="mb-8 space-y-4">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={tier.href}
              className={`block w-full rounded-md px-4 py-2 text-center font-medium ${
                tier.featured
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border hover:bg-accent"
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">Enterprise Features</h2>
        <p className="mt-4 text-muted-foreground">
          Need a custom plan? Contact us for a tailored solution that meets your specific requirements.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-md border px-6 py-2 font-medium hover:bg-accent"
        >
          Contact Sales
        </Link>
      </div>

      <div className="mx-auto mt-8 max-w-md">
        <p className="text-center text-sm text-muted-foreground">
          Can&apos;t find the right plan? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> for custom pricing.
        </p>
      </div>
    </div>
  )
} 