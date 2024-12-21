"use client"

export default function PrivacyPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="lead">
            This Privacy Policy describes how we collect, use, and handle your personal information when you use our services.
          </p>

          <h2>Information Collection</h2>
          <p>
            We collect information to provide better services to our users. The types of information we collect include:
          </p>
          <ul>
            <li>Information you provide to us (name, email address, billing information)</li>
            <li>Information we get from your use of our services</li>
            <li>Information from third-party services</li>
          </ul>

          <h2>How We Use Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Develop new features and functionality</li>
            <li>Protect our users and the public</li>
            <li>Communicate with you about our services</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not share personal information with companies, organizations, or individuals outside of our company except in the following cases:
          </p>
          <ul>
            <li>With your consent</li>
            <li>For legal reasons</li>
            <li>With our trusted service providers</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We work hard to protect our users from unauthorized access, alteration, disclosure, or destruction of information we hold. We:
          </p>
          <ul>
            <li>Use encryption to keep your data private while in transit</li>
            <li>Review our information collection, storage, and processing practices</li>
            <li>Restrict access to personal information</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. When we no longer need the information, we securely delete it.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have certain rights regarding your personal information:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to our use of your information</li>
          </ul>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us at:
          </p>
          <ul>
            <li>Email: privacy@example.com</li>
            <li>Address: 123 Privacy Street, City, Country</li>
          </ul>

          <div className="mt-8 rounded-lg border bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground">
              Last updated: January 1, 2024
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              This privacy policy is intended to help you understand what information we collect and how we use it.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 