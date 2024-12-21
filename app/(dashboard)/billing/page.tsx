"use client"

import { CreditCard, Download, Clock } from "lucide-react"

export default function BillingPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Billing & Subscription</h1>
        <p className="mt-2 text-muted-foreground">
          Manage your subscription and billing information
        </p>
      </div>

      {/* Current Plan */}
      <div className="mb-8 rounded-lg border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Current Plan</h2>
            <p className="text-sm text-muted-foreground">Pro Plan</p>
          </div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            Active
          </span>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-sm text-muted-foreground">Next billing date</p>
            <p className="font-medium">January 1, 2024</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Billing amount</p>
            <p className="font-medium">$19.00 / month</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Payment method</p>
            <div className="mt-1 flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span className="font-medium">•••• 4242</span>
            </div>
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Change Plan
          </button>
          <button className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent">
            Update Payment Method
          </button>
        </div>
      </div>

      {/* Usage */}
      <div className="mb-8 rounded-lg border p-6">
        <h2 className="mb-4 text-xl font-semibold">Usage</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { label: "API Calls", used: "8,421", limit: "10,000" },
            { label: "Storage", used: "2.1 GB", limit: "5 GB" },
            { label: "Team Members", used: "3", limit: "5" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="mt-1 text-2xl font-bold">{item.used}</p>
              <p className="text-sm text-muted-foreground">of {item.limit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Payment History */}
      <div className="rounded-lg border">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-semibold">Payment History</h2>
          <button className="flex items-center gap-2 rounded-md border px-3 py-1 text-sm hover:bg-accent">
            <Download className="h-4 w-4" />
            Download All
          </button>
        </div>
        <div className="p-4">
          <table className="w-full">
            <thead>
              <tr className="text-sm text-muted-foreground">
                <th className="pb-3 text-left font-medium">Date</th>
                <th className="pb-3 text-left font-medium">Description</th>
                <th className="pb-3 text-right font-medium">Amount</th>
                <th className="pb-3 text-right font-medium">Status</th>
                <th className="pb-3 text-right font-medium">Invoice</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  date: "Dec 1, 2023",
                  description: "Pro Plan - Monthly",
                  amount: "$19.00",
                  status: "Paid",
                },
                {
                  date: "Nov 1, 2023",
                  description: "Pro Plan - Monthly",
                  amount: "$19.00",
                  status: "Paid",
                },
                {
                  date: "Oct 1, 2023",
                  description: "Pro Plan - Monthly",
                  amount: "$19.00",
                  status: "Paid",
                },
              ].map((payment, i) => (
                <tr key={i} className="border-t text-sm">
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      {payment.date}
                    </div>
                  </td>
                  <td className="py-4">{payment.description}</td>
                  <td className="py-4 text-right">{payment.amount}</td>
                  <td className="py-4 text-right">
                    <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs text-green-500">
                      {payment.status}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <button className="text-primary hover:underline">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 