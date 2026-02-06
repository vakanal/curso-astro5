import { c as createComponent, e as addAttribute, v as renderScript, a as renderTemplate, b as createAstro, m as maybeRenderHead, r as renderComponent, w as renderHead, x as renderSlot } from './astro/server_ByM2_oJQ.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/workspace/curso-astro5/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/workspace/curso-astro5/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="navbar bg-base-100 shadow-sm"> <div class="navbar-start"> <div class="dropdown"> <div tabindex="0" role="button" class="btn btn-ghost lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path> </svg> </div> <ul tabindex="-1" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"> <li><a href="/">Home</a></li> <li><a href="/about">About</a></li> <li><a href="/contact">Contact</a></li> </ul> </div> <a class="btn btn-ghost text-xl">daisyUI</a> </div> <div class="navbar-center hidden lg:flex"> <ul class="menu menu-horizontal px-1"> <li><a href="/">Home</a></li> <li><a href="/about">About</a></li> <li><a href="/contact">Contact</a></li> </ul> </div> <div class="navbar-end"> <a class="btn">Button</a> </div> </div>`;
}, "C:/workspace/curso-astro5/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es-ES"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> <div> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "C:/workspace/curso-astro5/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
