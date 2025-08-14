/* empty css                                         */
import { _ as __variableDynamicImportRuntimeHelper } from '../../chunks/dynamic-import-helper_uMTE3ehW.mjs';
import { c as createComponent, a as createAstro, f as renderComponent, d as renderTemplate } from '../../chunks/astro/server_XONErzoU.mjs';
import 'kleur/colors';
import $$Index$1 from '../../chunks/index_-FQ3sLxh.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const locales = ["en", "es"];
  return locales.map((locale) => ({
    params: { lang: locale },
    props: { currentLang: locale }
  }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { currentLang } = Astro2.props;
  const blogPosts = (await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../../../locales/en/news.json": () => import('../../chunks/i18n_N2D6iQyo.mjs').then(n => n.a),"../../../locales/es/news.json": () => import('../../chunks/i18n_N2D6iQyo.mjs').then(n => n.n)})), `../../../locales/${currentLang}/news.json`, 6)).items || [];
  return renderTemplate`${renderComponent($$result, "BlogListing", $$Index$1, { "blogPosts": blogPosts, "currentLang": currentLang })}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/[lang]/blog/index.astro", void 0);

const $$file = "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/[lang]/blog/index.astro";
const $$url = "/[lang]/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
