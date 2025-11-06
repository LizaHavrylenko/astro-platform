import { atom } from "nanostores";

type Status = "unknown" | "authenticated" | "anonymous";
type User = { email: string; name?: string };

export const authStore = atom<{ status: Status; user: User | null }>({
  status: "unknown",
  user: null,
});

const STORAGE_KEY = "auth:v1";

function loadFromStorage() {
  if (typeof window === "undefined") return;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      authStore.set(parsed);
    } catch {}
  } else {
    authStore.set({ status: "anonymous", user: null });
  }
}

function persist() {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(authStore.get()));
}

export async function login(email: string, _password: string) {
  // call your API here; demo below:
  const user = { email, name: email.split("@")[0] };
  authStore.set({ status: "authenticated", user });
  persist();
}

export function logout() {
  authStore.set({ status: "anonymous", user: null });
  persist();
}

// Rehydrate on the client
if (typeof window !== "undefined") {
  loadFromStorage();
  authStore.listen(persist);
}
