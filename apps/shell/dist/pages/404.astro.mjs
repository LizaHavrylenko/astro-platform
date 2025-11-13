import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_0SigqSeh.mjs';
import { $ as $$Layout } from '../chunks/Layout_C7-2kf55.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>404 - Page Not Found</h1> <p data-astro-cid-zetdm5md>Sorry, the page you are looking for does not exist.</p> <p data-astro-cid-zetdm5md><a href="/" data-astro-cid-zetdm5md>Go back to Home</a></p> </div> ` })} `;
}, "/Users/yhavrylenko/astro-platform/apps/shell/src/pages/404.astro", void 0);

const $$file = "/Users/yhavrylenko/astro-platform/apps/shell/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
