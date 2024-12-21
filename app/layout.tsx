import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/theme-provider'
import { ThemeToggle } from '../components/theme-toggle'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export const metadata: Metadata = {
  title: 'Next.js 15 SaaS Template',
  description: 'A modern SaaS template built with Next.js 15, Supabase, and Stripe',
  keywords: ['Next.js', 'React', 'Supabase', 'Stripe', 'SaaS', 'Template'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Company',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: 'Next.js 15 SaaS Template',
    description: 'A modern SaaS template built with Next.js 15, Supabase, and Stripe',
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js 15 SaaS Template',
    description: 'A modern SaaS template built with Next.js 15, Supabase, and Stripe',
    creator: '@yourusername',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed top-4 right-4">
            <ThemeToggle />
          </div>
          <main className="min-h-screen bg-background">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
} 