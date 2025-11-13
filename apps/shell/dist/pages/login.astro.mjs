import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_0SigqSeh.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { a as authStore, l as logout, b as login } from '../chunks/users_DSSH0EFa.mjs';
import { $ as $$Layout } from '../chunks/Layout_C7-2kf55.mjs';
export { renderers } from '../renderers.mjs';

const LoginPage = () => {
  const { user, status } = useStore(authStore);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (status === "authenticated" && user) {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-3", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-lg", children: [
        "Welcome, ",
        user.email,
        "!"
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "rounded bg-gray-900 px-4 py-2 text-white",
          onClick: logout,
          children: "Logout"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        login(email);
      },
      className: "mx-auto  flex w-full max-w-sm   flex-col gap-3 rounded-2xl bg-white p-6 shadow",
      children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Demo Login" }),
        /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "rounded-lg bg-gray-900 px-4 py-2 font-medium text-white",
            children: "Login"
          }
        )
      ]
    }
  );
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto grid min-h-[80dvh] place-items-center p-6"> ${renderComponent($$result2, "LoginPage", LoginPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@app1", "client:component-export": "LoginPage" })} </main>` })}`;
}, "/Users/yhavrylenko/astro-platform/apps/shell/src/pages/login/index.astro", void 0);

const $$file = "/Users/yhavrylenko/astro-platform/apps/shell/src/pages/login/index.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
