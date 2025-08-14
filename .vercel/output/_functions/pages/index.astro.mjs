/* empty css                                      */
import { c as createComponent, a as createAstro, b as addAttribute, i as renderHead, d as renderTemplate } from '../chunks/astro/server_XONErzoU.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const defaultLocale = "es";
  Astro2.redirect(`/${defaultLocale}/`);
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta http-equiv="refresh"${addAttribute(`0;url=/${defaultLocale}/`, "content")}>${renderHead()}</head> <body></body></html>`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/index.astro", void 0);

const $$file = "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
