/* empty css                                            */
import { c as createComponent, a as createAstro, f as renderComponent, d as renderTemplate } from '../../../chunks/astro/server_XONErzoU.mjs';
import 'kleur/colors';
import { s as setLocale, t } from '../../../chunks/i18n_N2D6iQyo.mjs';
import { a as $$MainLayout } from '../../../chunks/MainLayout_C_bIfuhT.mjs';
import { $ as $$Index } from '../../../chunks/index_XqQtCGv0.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  const locales = ["en"];
  const paths = [];
  for (const locale of locales) {
    const blogPosts = t("items", { namespace: "news", locale }) || [];
    console.log(`Found ${blogPosts.length} blog posts for language ${locale}`);
    for (const blogPost of blogPosts) {
      paths.push({
        params: { lang: locale, newsId: blogPost.id },
        props: { blogPost, currentLang: locale }
      });
    }
  }
  console.log(`Generated ${paths.length} blog routes in English`);
  return paths;
}
const $$newsId = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$newsId;
  const { blogPost, currentLang } = Astro2.props;
  const { lang, newsId } = Astro2.params;
  setLocale(currentLang);
  console.log(`Rendering blog: ${newsId} in language: ${lang}`);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": blogPost.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogDetail", $$Index, { "blogPost": blogPost, "currentLang": currentLang })} ` })}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/[lang]/news/[newsId].astro", void 0);

const $$file = "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/[lang]/news/[newsId].astro";
const $$url = "/[lang]/news/[newsId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$newsId,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
