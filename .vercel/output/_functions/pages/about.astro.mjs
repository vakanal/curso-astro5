import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ByM2_oJQ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_PZPDPN8p.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-center text-7xl font-extrabold mb-24">About Page</h1> </main> ` })}`;
}, "C:/workspace/curso-astro5/src/pages/about.astro", void 0);

const $$file = "C:/workspace/curso-astro5/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
