import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_0SigqSeh.mjs';
import { g as getEntry, $ as $$Layout, a as getCollection } from '../../chunks/Layout_C7-2kf55.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const items = await getCollection("legalInfo");
  return items.map((e) => ({ params: { slug: e.slug } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const entry = await getEntry("legalInfo", slug);
  if (!entry) {
    throw new Error(`legalInfo entry not found: ${slug}`);
  }
  const { Content } = await entry.render();
  const { data } = entry;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center"> <h1 class="text-3xl font-bold text-center my-8">${data.title}</h1> <article class="w-full md:w-[70%] text-left mx-[15%]"> ${renderComponent($$result2, "Content", Content, {})} </article> </main> ` })}`;
}, "/Users/yhavrylenko/astro-platform/apps/shell/src/pages/legalInfo/[slug].astro", void 0);

const $$file = "/Users/yhavrylenko/astro-platform/apps/shell/src/pages/legalInfo/[slug].astro";
const $$url = "/legalInfo/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
