/* empty css                                            */
import { c as createComponent, a as createAstro, f as renderComponent, d as renderTemplate } from '../../../chunks/astro/server_XONErzoU.mjs';
import 'kleur/colors';
import { s as setLocale, t } from '../../../chunks/i18n_N2D6iQyo.mjs';
import { a as $$MainLayout } from '../../../chunks/MainLayout_C_bIfuhT.mjs';
import { a as $$Index } from '../../../chunks/index_CiukxvVT.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  const locales = ["en", "es"];
  const paths = [];
  for (const locale of locales) {
    const recipes = t("items", { namespace: "recipes", locale }) || [];
    console.log(`Found ${recipes.length} recipes for language ${locale}`);
    for (const recipe of recipes) {
      paths.push({
        params: { lang: locale, recipeId: recipe.id },
        props: { recipe, currentLang: locale }
      });
    }
  }
  console.log(`Generated ${paths.length} recipe routes`);
  return paths;
}
const $$recipeId = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$recipeId;
  const { recipe, currentLang } = Astro2.props;
  const { lang, recipeId } = Astro2.params;
  setLocale(lang);
  console.log(`Rendering recipe: ${recipeId} in language: ${lang}`);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": recipe.title, "currentLang": currentLang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "RecipeDetail", $$Index, { "currentLang": currentLang, "recipeId": recipeId })} ` })}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/[lang]/recipes/[recipeId].astro", void 0);

const $$file = "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/[lang]/recipes/[recipeId].astro";
const $$url = "/[lang]/recipes/[recipeId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$recipeId,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
