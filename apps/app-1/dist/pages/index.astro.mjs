import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_CuCaTkLm.mjs';
import 'html-escaper';
import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { atom, map } from 'nanostores';
export { renderers } from '../renderers.mjs';

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

const LoginPage = () => {
  const { user, status } = useStore(authStore);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (status === "authenticated" && user) {
    return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center gap-3" }, /* @__PURE__ */ React.createElement("p", { className: "text-lg" }, "Welcome, ", user.email, "!"), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "rounded bg-gray-900 px-4 py-2 text-white",
        onClick: logout
      },
      "Logout"
    ));
  }
  return /* @__PURE__ */ React.createElement(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        login(email);
      },
      className: "mx-auto  flex w-full max-w-sm   flex-col gap-3 rounded-2xl bg-white p-6 shadow"
    },
    /* @__PURE__ */ React.createElement("h2", { className: "text-xl font-semibold" }, "Demo Login"),
    /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "email",
        required: true,
        placeholder: "Email",
        className: "rounded-lg border border-gray-300 px-3 py-2",
        value: email,
        onChange: (e) => setEmail(e.target.value)
      }
    ),
    /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "password",
        required: true,
        placeholder: "Password",
        className: "rounded-lg border border-gray-300 px-3 py-2",
        value: password,
        onChange: (e) => setPassword(e.target.value)
      }
    ),
    /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        className: "rounded-lg bg-gray-900 px-4 py-2 font-medium text-white"
      },
      "Login"
    )
  );
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LoginPage", LoginPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/yhavrylenko/astro-platform/apps/app-1/src/pages/Login", "client:component-export": "LoginPage" })}`;
}, "/Users/yhavrylenko/astro-platform/apps/app-1/src/pages/index.astro", void 0);

const $$file = "/Users/yhavrylenko/astro-platform/apps/app-1/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
