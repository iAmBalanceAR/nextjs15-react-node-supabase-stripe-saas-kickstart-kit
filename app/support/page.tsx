"use client"

import Link from "next/link"
import { 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Phone,
  Mail,
  FileText,
  BookOpen
} from "lucide-react"

export default function SupportPage() {
  return (
    <div className="container py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Help Center</h1>
        <p className="mt-2 text-muted-foreground">
          Find answers to your questions or get in touch with our support team
        </p>
      </div>

      {/* Search */}
      <div className="mx-auto mb-12 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full rounded-lg border bg-background py-3 pl-10 pr-4 text-sm"
          />
        </div>
      </div>

      {/* Quick Help Categories */}
      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Getting Started",
            description: "New to our platform? Start here",
            icon: BookOpen,
            articles: ["Platform Overview", "Account Setup", "First Steps"]
          },
          {
            title: "Account & Billing",
            description: "Manage your account and payments",
            icon: FileText,
            articles: ["Billing FAQ", "Subscription Management", "Payment Methods"]
          },
          {
            title: "API Support",
            description: "Technical documentation and help",
            icon: HelpCircle,
            articles: ["API Basics", "Authentication", "Rate Limits"]
          }
        ].map((category) => (
          <div key={category.title} className="rounded-lg border p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-md bg-primary/10 p-2">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-semibold">{category.title}</h2>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              {category.description}
            </p>
            <ul className="space-y-2">
              {category.articles.map((article) => (
                <li key={article}>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    {article}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact Options */}
      <div className="rounded-lg border bg-card">
        <div className="border-b p-4">
          <h2 className="text-xl font-semibold">Contact Support</h2>
        </div>
        <div className="grid gap-6 p-6 md:grid-cols-3">
          <div className="rounded-lg border p-4">
            <div className="mb-3 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Live Chat</h3>
            </div>
            <p className="mb-3 text-sm text-muted-foreground">
              Chat with our support team in real-time
            </p>
            <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Start Chat
            </button>
          </div>

          <div className="rounded-lg border p-4">
            <div className="mb-3 flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Phone Support</h3>
            </div>
            <p className="mb-3 text-sm text-muted-foreground">
              Call us Monday to Friday, 9am-5pm
            </p>
            <button className="w-full rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent">
              +1 (555) 123-4567
            </button>
          </div>

          <div className="rounded-lg border p-4">
            <div className="mb-3 flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Email Support</h3>
            </div>
            <p className="mb-3 text-sm text-muted-foreground">
              Get help via email. We usually respond within 24 hours.
            </p>
            <button className="w-full rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent">
              support@example.com
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "How do I reset my password?",
              answer: "You can reset your password by clicking the 'Forgot password' link on the login page."
            },
            {
              question: "How do I upgrade my subscription?",
              answer: "Go to your account settings and click on the 'Billing' tab to manage your subscription."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, PayPal, and bank transfers for business accounts."
            },
            {
              question: "How do I generate an API key?",
              answer: "API keys can be generated from your dashboard under the 'API Keys' section."
            }
          ].map((faq, i) => (
            <div key={i} className="rounded-lg border p-4">
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 