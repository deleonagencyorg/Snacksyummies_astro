/* empty css                                         */
import { c as createComponent, a as createAstro, f as renderComponent, d as renderTemplate } from '../../chunks/astro/server_XONErzoU.mjs';
import 'kleur/colors';
import $$Index$1 from '../../chunks/index_C1n3PamK.mjs';
import { g as getHeaderColors } from '../../chunks/MainLayout_C_bIfuhT.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const locales = ["en"];
  return locales.map((locale) => ({
    params: { lang: locale },
    props: { currentLang: locale }
  }));
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { currentLang } = Astro2.props;
  const headerColorConfig = getHeaderColors("contact");
  return renderTemplate`${renderComponent($$result, "ContactView", $$Index$1, { "currentLang": currentLang, "headerColorConfig": headerColorConfig })}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/[lang]/contact/index.astro", void 0);

const $$file = "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/[lang]/contact/index.astro";
const $$url = "/[lang]/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
