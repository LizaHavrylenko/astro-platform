import { atom, map } from 'nanostores';

const authStore = atom({
  status: "unknown",
  user: null
});
const STORAGE_KEY = "auth:v1";
function loadFromStorage() {
  if (typeof window === "undefined") return;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      authStore.set(parsed);
    } catch {
    }
  } else {
    authStore.set({ status: "anonymous", user: null });
  }
}
function persist() {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(authStore.get()));
}
async function login(email, _password) {
  const user = { email, name: email.split("@")[0] };
  authStore.set({ status: "authenticated", user });
  persist();
}
function logout() {
  authStore.set({ status: "anonymous", user: null });
  persist();
}
if (typeof window !== "undefined") {
  loadFromStorage();
  authStore.listen(persist);
}

map({});
atom(1);

export { authStore as a, login as b, logout as l };
