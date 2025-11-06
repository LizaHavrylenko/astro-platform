import { useStore } from "@nanostores/react";

import { authStore, logout } from "../stores/auth";

export const DashboardInfo = () => {
  const { user, status } = useStore(authStore);
  console.log("DashboardInfo mounted", { ssr: import.meta.env.SSR });
  console.log("user", user, status);
  /*   if (status === "unknown")
    return <span className="text-gray-500">Loading…</span>; */

  return (
    <div className="flex items-center gap-3">
      {user && status && status === "authenticated" ? (
        <>
          <span>Hello, {user.name ?? user.email}</span>
          <button
            className="rounded bg-gray-900 px-3 py-1 text-white"
            onClick={() => {
              // call your /logout endpoint; on success:
              logout();
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <a className="rounded bg-gray-900 px-3 py-1 text-white" href="/login">
          Login
        </a>
      )}
    </div>
  );
};
