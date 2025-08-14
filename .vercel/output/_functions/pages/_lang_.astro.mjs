/* empty css                                      */
import { c as createComponent, a as createAstro, f as renderComponent, d as renderTemplate } from '../chunks/astro/server_XONErzoU.mjs';
import 'kleur/colors';
import { g as getRouteById } from '../chunks/routes_CM_-Pvqa.mjs';
import { s as setLocale, t } from '../chunks/i18n_N2D6iQyo.mjs';
import { a as $$MainLayout } from '../chunks/MainLayout_C_bIfuhT.mjs';
import $$Index$1 from '../chunks/index_Ot8vHbP3.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const homeRoute = getRouteById("home");
  if (!homeRoute) return [];
  return Object.keys(homeRoute.slugs).map((lang) => ({
    params: { lang }
  }));
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  setLocale(lang);
  const homeRoute = getRouteById("home");
  if (!homeRoute) {
    throw new Error("Home route configuration is missing.");
  }
  const pageTitle = homeRoute.metaTitleKey ? t(homeRoute.metaTitleKey) : "Home";
  const pageDescription = homeRoute.metaDescriptionKey ? t(homeRoute.metaDescriptionKey) : "";
  const ContentComponent = $$Index$1;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentComponent", ContentComponent, {})} ` })}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/[lang]/index.astro", void 0);

const $$file = "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
