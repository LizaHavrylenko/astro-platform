import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_0SigqSeh.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { a as authStore, l as logout } from '../chunks/users_DSSH0EFa.mjs';
import { $ as $$Layout } from '../chunks/Layout_C7-2kf55.mjs';
export { renderers } from '../renderers.mjs';

const DashboardInfo = () => {
  const { user, status } = useStore(authStore);
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: user && status && status === "authenticated" ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("span", { children: [
      "Hello, ",
      user.name ?? user.email
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "rounded bg-gray-900 px-3 py-1 text-white",
        onClick: () => {
          logout();
        },
        children: "Logout"
      }
    )
  ] }) : /* @__PURE__ */ jsx("div", { class: "flex min-h-[80vh] items-center justify-center", children: /* @__PURE__ */ jsxs("div", { class: "text-center", children: [
    /* @__PURE__ */ jsx("p", { children: "You are currently not logged in." }),
    /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsx(
      "a",
      {
        className: "rounded bg-gray-900 px-3 py-1 text-white",
        href: "/login",
        children: "Login"
      }
    ) })
  ] }) }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DashboardInfo", DashboardInfo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@app2", "client:component-export": "DashboardInfo" })}` })}`;
}, "/Users/yhavrylenko/astro-platform/apps/shell/src/pages/dashboard/index.astro", void 0);

const $$file = "/Users/yhavrylenko/astro-platform/apps/shell/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
