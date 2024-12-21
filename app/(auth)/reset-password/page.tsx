"use client"

export default function ResetPasswordPage() {
  return (
    <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Reset Password</h1>
          <p className="text-muted-foreground">Enter your email to reset your password</p>
        </div>
        <div className="space-y-4">
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
          <button className="w-full rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Send Reset Link
          </button>
          <div className="text-center text-sm">
            <a href="/login" className="text-muted-foreground hover:text-foreground">
              Back to login
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 