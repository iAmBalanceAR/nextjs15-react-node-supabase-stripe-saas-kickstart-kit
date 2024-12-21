"use client"

export default function RegisterPage() {
  return (
    <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-muted-foreground">Enter your details to get started</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium leading-none">
              Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium leading-none">
              Email
            </label>
            <input
              type="email"
              placeholder="m@example.com"
              className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium leading-none">
              Password
            </label>
            <input
              type="password"
              className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
            />
          </div>
          <button className="w-full rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Create Account
          </button>
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a href="/login" className="text-primary hover:underline">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 