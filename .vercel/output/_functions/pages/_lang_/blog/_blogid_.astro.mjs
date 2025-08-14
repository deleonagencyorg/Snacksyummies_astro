/* empty css                                            */
import { _ as __variableDynamicImportRuntimeHelper } from '../../../chunks/dynamic-import-helper_uMTE3ehW.mjs';
import { c as createComponent, a as createAstro, f as renderComponent, d as renderTemplate } from '../../../chunks/astro/server_XONErzoU.mjs';
import 'kleur/colors';
import { $ as $$Index } from '../../../chunks/index_XqQtCGv0.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const locales = ["en", "es"];
  const paths = [];
  for (const locale of locales) {
    const blogPosts = (await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../../../locales/en/news.json": () => import('../../../chunks/i18n_N2D6iQyo.mjs').then(n => n.a),"../../../locales/es/news.json": () => import('../../../chunks/i18n_N2D6iQyo.mjs').then(n => n.n)})), `../../../locales/${locale}/news.json`, 6)).items || [];
    for (const blogPost of blogPosts) {
      paths.push({
        params: {
          lang: locale,
          blogId: blogPost.slug || blogPost.id
        },
        props: {
          blogPost,
          currentLang: locale,
          allBlogPosts: blogPosts
        }
      });
    }
  }
  return paths;
}
const $$blogId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$blogId;
  const { blogPost, currentLang, allBlogPosts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BlogDetail", $$Index, { "blogPost": blogPost, "currentLang": currentLang, "allBlogPosts": allBlogPosts })}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/[lang]/blog/[blogId].astro", void 0);

const $$file = "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/[lang]/blog/[blogId].astro";
const $$url = "/[lang]/blog/[blogId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$blogId,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
