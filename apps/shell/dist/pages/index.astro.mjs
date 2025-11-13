import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_0SigqSeh.mjs';
import { $ as $$Layout, b as $$PersonalGreeting } from '../chunks/Layout_C7-2kf55.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PersonalGreeting", $$PersonalGreeting, { "userName": "Astro User" })} ` })}`;
}, "/Users/yhavrylenko/astro-platform/apps/shell/src/pages/index.astro", void 0);

const $$file = "/Users/yhavrylenko/astro-platform/apps/shell/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
