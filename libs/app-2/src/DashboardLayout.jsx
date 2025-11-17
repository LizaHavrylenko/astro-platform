import { Outlet, Link } from "@tanstack/react-router";
import { useStore } from "@nanostores/react";
import { authStore, logout } from "../../state/src/index.ts";

export function DashboardLayout() {
  const { user, status } = useStore(authStore);

  //
  // 1. Handle loading / unknown state
  //
  if (status === "unknown") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="text-gray-500">Loading…</span>
      </div>
    );
  }

  //
  // 2. If NOT authenticated → show login prompt
  //
  if (!user || status !== "authenticated") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center space-y-4">
          <p>You are currently not logged in.</p>

          <a
            href="/login"
            className="rounded bg-gray-900 px-3 py-1 text-white inline-block"
          >
            Login
          </a>
        </div>
      </div>
    );
  }

  //
  // 3. Authenticated view → show dashboard layout + nested routes
  //
  return (
    <div>
      {/* Top navigation bar */}
      <header className="flex items-center justify-between px-4 py-3 bg-gray-900 text-white">
        <div className="flex items-center gap-3">
          <span>Hello, {user.name ?? user.email}</span>

          <button
            className="rounded bg-gray-700 px-3 py-1"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Section navigation */}
      <nav className="flex gap-6 px-4 py-4 border-b bg-gray-100">
        <Link
          to="/info"
          className="text-blue-600 data-[status=active]:font-semibold"
        >
          Info
        </Link>

        <Link
          to="/settings"
          className="text-blue-600 data-[status=active]:font-semibold"
        >
          Settings
        </Link>
      </nav>

      {/* Nested routes (info/settings) */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
