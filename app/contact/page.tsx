"use client"

export default function ContactPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold">Contact Sales</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with our team to discuss your requirements
          </p>
        </div>

        <div className="rounded-lg border bg-card p-8">
          <form className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium leading-none">
                  First Name
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none">
                  Last Name
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium leading-none">
                Work Email
              </label>
              <input
                type="email"
                className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-medium leading-none">
                Company
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-medium leading-none">
                Message
              </label>
              <textarea
                rows={4}
                className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
              />
            </div>

            <button className="w-full rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-4 text-center">
          <h2 className="text-xl font-semibold">Other Ways to Connect</h2>
          <div className="flex justify-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Support Center
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Schedule a Call
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 