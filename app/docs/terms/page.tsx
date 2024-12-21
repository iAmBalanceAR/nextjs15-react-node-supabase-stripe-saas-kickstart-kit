"use client"

import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold">Terms of Service</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="lead">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of our services, including our website, APIs, and any software provided by us (collectively, the &quot;Service&quot;).
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
          </p>

          <h2>2. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect.
          </p>

          <h2>3. Account Terms</h2>
          <ul>
            <li>You must be 13 years or older to use this Service.</li>
            <li>You must provide accurate and complete information when creating an account.</li>
            <li>You are responsible for safeguarding your account credentials.</li>
            <li>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
          </ul>

          <h2>4. API Terms</h2>
          <p>
            Users with API access must respect rate limits and use the API in accordance with our documentation. Abuse of the API may result in temporary or permanent suspension of access.
          </p>

          <h2>5. Payment Terms</h2>
          <ul>
            <li>All paid plans must provide valid payment information.</li>
            <li>The Service is billed in advance on a monthly or annual basis.</li>
            <li>There will be no refunds for partial months of service or unused features.</li>
          </ul>

          <h2>6. Cancellation and Termination</h2>
          <p>
            You are solely responsible for properly canceling your account. You can cancel your account at any time through your account settings page.
          </p>

          <h2>7. Copyright and Content Ownership</h2>
          <p>
            The Service and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>

          <h2>8. Privacy</h2>
          <p>
            Your use of the Service is also governed by our Privacy Policy, which can be found at <Link href="/docs/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>

          <h2>9. Disclaimer of Warranties</h2>
          <p>
            The Service is provided &quot;as is&quot; and &quot;as available&quot; without any warranty of any kind, either express or implied.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            In no event shall we be liable for any indirect, incidental, special, consequential or punitive damages arising out of or relating to your use of the Service.
          </p>

          <div className="mt-8 rounded-lg border bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground">
              Last updated: January 1, 2024
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              If you have any questions about these Terms, please contact us at legal@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 