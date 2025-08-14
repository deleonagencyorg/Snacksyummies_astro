/* empty css                                            */
import { c as createComponent, a as createAstro, f as renderComponent, d as renderTemplate } from '../../../chunks/astro/server_XONErzoU.mjs';
import 'kleur/colors';
import { s as setLocale, t } from '../../../chunks/i18n_N2D6iQyo.mjs';
import { a as $$MainLayout } from '../../../chunks/MainLayout_C_bIfuhT.mjs';
import { $ as $$Index } from '../../../chunks/index_CBsFgWnJ.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  const locales = ["es"];
  const paths = [];
  for (const locale of locales) {
    const products = t("items", { namespace: "products", locale }) || [];
    console.log(`Encontrados ${products.length} productos para idioma ${locale}`);
    for (const product of products) {
      paths.push({
        params: { lang: locale, productId: product.id },
        props: { product, currentLang: locale }
      });
    }
  }
  console.log(`Generadas ${paths.length} rutas de productos en espa\xF1ol`);
  return paths;
}
const $$productId = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$productId;
  const { product, currentLang } = Astro2.props;
  const { lang, productId } = Astro2.params;
  setLocale(lang);
  console.log(`Renderizando producto: ${productId} en idioma: ${lang}`);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": product.name }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProductDetail", $$Index, { "currentLang": currentLang, "productId": productId })} ` })}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/[lang]/productos/[productId].astro", void 0);

const $$file = "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/[lang]/productos/[productId].astro";
const $$url = "/[lang]/productos/[productId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$productId,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
