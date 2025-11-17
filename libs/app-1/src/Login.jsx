import { useState } from "react";
import { useStore } from "@nanostores/react";
import { authStore, login, logout } from "../../state/src/index.ts";

export const LoginPage = () => {
  const { user, status } = useStore(authStore);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (status === "authenticated" && user) {
    return (
      <div className="flex flex-col items-center gap-3">
        <p className="text-lg">Welcome, {user.email}!</p>
        <button
          className="rounded bg-gray-900 px-4 py-2 text-white"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login(email, password);
      }}
      className="mx-auto  flex w-full max-w-sm   flex-col gap-3 rounded-2xl bg-white p-6 shadow"
    >
      <h2 className="text-xl font-semibold">Demo Login</h2>

      <input
        type="email"
        required
        placeholder="Email"
        className="rounded-lg border border-gray-300 px-3 py-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        required
        placeholder="Password"
        className="rounded-lg border border-gray-300 px-3 py-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="rounded-lg bg-gray-900 px-4 py-2 font-medium text-white"
      >
        Login
      </button>
    </form>
  );
};
