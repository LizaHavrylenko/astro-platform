import { persistentAtom } from "@nanostores/persistent";

export interface DemoUser {
  id: string;
  email: string;
  name?: string;
  status?: "authenticated" | "anonymous" | "unknown";
}

export interface AuthState {
  user: DemoUser | null;
  token: string | null;
  status: "authenticated" | "anonymous";
}

const DEFAULT: AuthState = { user: null, token: null, status: "anonymous" };

// persistentAtom automatically syncs with localStorage
export const authStore = persistentAtom("auth:v1", DEFAULT, {
  // optional serializers:
  encode: (v) => JSON.stringify(v),
  decode: (s) => JSON.parse(s) as AuthState,
});

// Mock login (normally you'd call an API)
export function login(email: string, password: string) {
  // Fake user and token
  const mockUser = {
    id: "u1",
    email,
    name: "Demo User",
  };
  const fakeToken = "demo-token-" + Date.now();
  authStore.set({ user: mockUser, token: fakeToken, status: "authenticated" });
}

export function logout() {
  authStore.set({ user: null, token: null, status: "anonymous" });
}
