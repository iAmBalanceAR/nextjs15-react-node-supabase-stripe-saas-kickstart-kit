# Next.js 15 SaaS Template with Supabase and Stripe

A modern, production-ready SaaS template built with Next.js 15, Supabase, and Stripe. Features include authentication, subscription management, and a beautiful UI powered by Tailwind CSS.

## Features

- 🚀 Next.js 15 with App Router
- 🔐 Authentication with Supabase SSR
- 💳 Subscription Management with Stripe
- 🎨 Beautiful UI with Tailwind CSS and Radix UI
- 📱 Fully Responsive Design
- 🌙 Dark Mode Support
- 🔒 Role-Based Access Control
- 📊 Dashboard Interface
- 💰 Subscription Plans and Billing
- ⚡ Optimized Performance
- 🔍 SEO Friendly

## Prerequisites

- Node.js 18.17 or later
- PNPM package manager
- Supabase account
- Stripe account

## Getting Started

1. Clone the repository:

   ```bash
   git clone [your-repo-url]
   cd [your-repo-name]
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Copy the environment variables:

   ```bash
   cp .env.example .env.local
   ```

4. Set up Supabase:
   - Create a new project in Supabase
   - Copy the project URL and anon key to .env.local
   - Run the database migrations (instructions below)

5. Set up Stripe:
   - Create a Stripe account
   - Add your Stripe API keys to .env.local
   - Create your subscription products and prices
   - Update the price IDs in .env.local

6. Run the development server:

   ```bash
   pnpm dev
   ```

## Supabase Setup

1. Create a new project in Supabase
2. Go to Project Settings > API
3. Copy the following values to your .env.local:
   - Project URL (NEXT_PUBLIC_SUPABASE_URL)
   - Anon Key (NEXT_PUBLIC_SUPABASE_ANON_KEY)
   - Service Role Key (SUPABASE_SERVICE_ROLE_KEY)

4. Set up the database schema:
   - Navigate to the SQL editor
   - Copy the contents of `supabase/schema.sql`
   - Run the SQL commands

## Stripe Setup

1. Create a Stripe account
2. Get your API keys from the Stripe Dashboard
3. Add them to your .env.local:
   - Publishable Key (NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
   - Secret Key (STRIPE_SECRET_KEY)

4. Create your subscription products:
   - Go to Stripe Dashboard > Products
   - Create products with recurring prices
   - Copy the price IDs to your .env.local

5. Set up webhooks:
   - Go to Stripe Dashboard > Webhooks
   - Add an endpoint: `[your-domain]/api/webhooks/stripe`
   - Select events to listen to:
     - customer.subscription.created
     - customer.subscription.updated
     - customer.subscription.deleted
   - Copy the webhook secret to STRIPE_WEBHOOK_SECRET in .env.local

## Project Structure

``` nextjs
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── register/
│   │   └── reset-password/
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   ├── settings/
│   │   └── billing/
│   ├── api/
│   └── layout.tsx
├── components/
│   ├── auth/
│   ├── billing/
│   ├── dashboard/
│   ├── layout/
│   ├── shared/
│   └── ui/
├── lib/
│   ├── supabase/
│   └── stripe/
├── types/
└── middleware.ts
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## Environment Variables

See `.env.example` for all required environment variables.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email [your-email] or open an issue in the repository.
