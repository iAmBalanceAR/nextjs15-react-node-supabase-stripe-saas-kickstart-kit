"use client"

import { 
  UserPlus, 
  Mail, 
  MoreVertical, 
  Shield, 
  UserCog,
  UserX 
} from "lucide-react"

export default function TeamPage() {
  return (
    <div className="container py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Team Management</h1>
          <p className="mt-2 text-muted-foreground">
            Manage your team members and their roles
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          <UserPlus className="h-4 w-4" />
          Invite Member
        </button>
      </div>

      {/* Team Members List */}
      <div className="rounded-lg border">
        <div className="border-b p-4">
          <h2 className="text-xl font-semibold">Team Members</h2>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {[
              {
                name: "John Doe",
                email: "john@example.com",
                role: "Admin",
                status: "Active",
                avatar: "JD"
              },
              {
                name: "Jane Smith",
                email: "jane@example.com",
                role: "Editor",
                status: "Active",
                avatar: "JS"
              },
              {
                name: "Mike Johnson",
                email: "mike@example.com",
                role: "Viewer",
                status: "Pending",
                avatar: "MJ"
              }
            ].map((member, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-medium">
                    {member.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      {member.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{member.role}</span>
                  </div>
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      member.status === "Active"
                        ? "bg-green-500/10 text-green-500"
                        : "bg-yellow-500/10 text-yellow-500"
                    }`}
                  >
                    {member.status}
                  </span>
                  <div className="relative">
                    <button className="rounded-md p-2 hover:bg-accent">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pending Invites */}
      <div className="mt-8 rounded-lg border">
        <div className="border-b p-4">
          <h2 className="text-xl font-semibold">Pending Invites</h2>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {[
              {
                email: "sarah@example.com",
                role: "Editor",
                sent: "2 days ago"
              },
              {
                email: "tom@example.com",
                role: "Viewer",
                sent: "5 days ago"
              }
            ].map((invite, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{invite.email}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{invite.role}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Sent {invite.sent}
                  </span>
                  <button className="rounded-md p-2 text-red-500 hover:bg-accent">
                    <UserX className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Role Management */}
      <div className="mt-8 rounded-lg border">
        <div className="border-b p-4">
          <h2 className="text-xl font-semibold">Role Management</h2>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {[
              {
                role: "Admin",
                description: "Full access to all features",
                permissions: ["Manage team", "Billing access", "API access"]
              },
              {
                role: "Editor",
                description: "Can edit and manage content",
                permissions: ["Edit content", "View analytics", "API access"]
              },
              {
                role: "Viewer",
                description: "View-only access",
                permissions: ["View content", "View analytics"]
              }
            ].map((role, i) => (
              <div key={i} className="rounded-lg border p-4">
                <div className="mb-2 flex items-center gap-2">
                  <UserCog className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-semibold">{role.role}</h3>
                </div>
                <p className="mb-2 text-sm text-muted-foreground">
                  {role.description}
                </p>
                <div className="space-y-1">
                  {role.permissions.map((permission, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-muted-foreground" />
                      {permission}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 