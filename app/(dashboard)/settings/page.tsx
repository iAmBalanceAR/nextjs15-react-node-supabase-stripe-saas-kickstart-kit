"use client"

export default function SettingsPage() {
  return (
    <div className="container py-10">
      <h1 className="mb-8 text-3xl font-bold">Settings</h1>

      <div className="mx-auto max-w-2xl space-y-8">
        {/* Profile Settings */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Profile Settings</h2>
          <div className="rounded-lg border p-6">
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium leading-none">
                  Display Name
                </label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
                />
              </div>
              <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Update Profile
              </button>
            </form>
          </div>
        </div>

        {/* Password Settings */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Change Password</h2>
          <div className="rounded-lg border p-6">
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium leading-none">
                  Current Password
                </label>
                <input
                  type="password"
                  className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none">
                  New Password
                </label>
                <input
                  type="password"
                  className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium leading-none">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
                />
              </div>
              <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Change Password
              </button>
            </form>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Notification Settings</h2>
          <div className="rounded-lg border p-6">
            <div className="space-y-4">
              {[
                "Email notifications for updates",
                "Email notifications for comments",
                "Email notifications for mentions",
                "Browser notifications",
              ].map((setting) => (
                <div key={setting} className="flex items-center justify-between">
                  <span className="text-sm">{setting}</span>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="h-6 w-11 rounded-full bg-muted peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 