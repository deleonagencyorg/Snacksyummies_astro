/* empty css                                         */
import { c as createComponent, a as createAstro, f as renderComponent, d as renderTemplate } from '../../chunks/astro/server_XONErzoU.mjs';
import 'kleur/colors';
import { f as findRouteBySlug, r as routesConfig } from '../../chunks/routes_CM_-Pvqa.mjs';
import { s as setLocale, t } from '../../chunks/i18n_N2D6iQyo.mjs';
import { a as $$MainLayout } from '../../chunks/MainLayout_C_bIfuhT.mjs';
import { a as $$Index } from '../../chunks/index_CiukxvVT.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const paths = [];
  for (const route of routesConfig) {
    if (route.id === "home") continue;
    for (const lang in route.slugs) {
      paths.push({
        params: { lang, pageSlug: route.slugs[lang] },
        props: { routeId: route.id }
      });
    }
  }
  return paths;
}
const $$pageSlug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$pageSlug;
  await Astro2.glob(/* #__PURE__ */ Object.assign({"../../views/AboutUs/index.astro": () => import('../../chunks/index_6IDtr75W.mjs'),"../../views/Blog/index.astro": () => import('../../chunks/index_-FQ3sLxh.mjs'),"../../views/Brands/index.astro": () => import('../../chunks/index_D83lSKja.mjs'),"../../views/Contact/index.astro": () => import('../../chunks/index_C1n3PamK.mjs'),"../../views/Home/index.astro": () => import('../../chunks/index_Ot8vHbP3.mjs'),"../../views/Products/index.astro": () => import('../../chunks/index_CceioCUM.mjs'),"../../views/Recipes/index.astro": () => import('../../chunks/index_DgAh8CaU.mjs'),"../../views/YummiesOne/index.astro": () => import('../../chunks/index_VLYRlrl6.mjs')}), () => "../../views/*/index.astro");
  const { lang, pageSlug } = Astro2.params;
  const { routeId } = Astro2.props;
  setLocale(lang);
  console.log("URL completa:", Astro2.url.pathname);
  const urlParts = Astro2.url.pathname.split("/").filter(Boolean);
  console.log("Partes de URL:", urlParts);
  let isRecipeDetail = false;
  let recipeData = null;
  let recipeId = "";
  let langCode = "";
  if (urlParts.length === 3) {
    langCode = urlParts[0];
    const section = urlParts[1];
    const detailId = urlParts[2];
    console.log(`Verificando ruta: /${langCode}/${section}/${detailId}`);
    const isRecipesRoute = langCode === "es" && section === "recetas" || langCode === "en" && section === "recipes";
    if (isRecipesRoute) {
      console.log(`Detectada ruta de receta: ${detailId}`);
      try {
        const allRecipes = t("items", { namespace: "recipes", locale: langCode }) || [];
        console.log(`Total de recetas cargadas: ${allRecipes.length}`);
        console.log("IDs de recetas disponibles:", allRecipes.map((r) => r.id));
        const recipe = allRecipes.find((r) => r.id === detailId);
        console.log("Receta encontrada:", recipe ? recipe.id : "NO");
        if (recipe) {
          console.log("Renderizando detalle de receta:", recipe.title);
          isRecipeDetail = true;
          recipeData = recipe;
          recipeId = detailId;
        } else {
          console.error(`Receta con ID ${detailId} no encontrada`);
          return Astro2.redirect(`/${langCode}/404`);
        }
      } catch (error) {
        console.error("Error al cargar receta:", error);
        return Astro2.redirect(`/${langCode}/404`);
      }
    }
  }
  let pageTitle = "";
  let pageDescription = "";
  let ContentComponent;
  if (!isRecipeDetail) {
    const currentRoute = findRouteBySlug(lang, pageSlug);
    console.log("Ruta encontrada:", currentRoute?.id);
    if (!currentRoute) {
      console.error(`Ruta no encontrada para lang=${lang}, pageSlug=${pageSlug}`);
      return Astro2.redirect(`/${lang}/404`);
    }
    const modules = /* #__PURE__ */ Object.assign({"../../views/AboutUs/index.astro": () => import('../../chunks/index_6IDtr75W.mjs'),"../../views/Blog/index.astro": () => import('../../chunks/index_-FQ3sLxh.mjs'),"../../views/Brands/index.astro": () => import('../../chunks/index_D83lSKja.mjs'),"../../views/Contact/index.astro": () => import('../../chunks/index_C1n3PamK.mjs'),"../../views/Home/index.astro": () => import('../../chunks/index_Ot8vHbP3.mjs'),"../../views/Products/index.astro": () => import('../../chunks/index_CceioCUM.mjs'),"../../views/Recipes/index.astro": () => import('../../chunks/index_DgAh8CaU.mjs'),"../../views/YummiesOne/index.astro": () => import('../../chunks/index_VLYRlrl6.mjs')});
    console.log("M\xF3dulos de VISTAS encontrados por import.meta.glob():", Object.keys(modules));
    const targetModulePath = currentRoute.contentComponent.replace("@/", "../../");
    console.log(`Buscando m\xF3dulo con ruta: ${targetModulePath} para la ruta ID: ${currentRoute.id}`);
    const moduleLoader = modules[targetModulePath];
    if (!moduleLoader) {
      console.error(`Cargador de m\xF3dulo no encontrado para la ruta: ${currentRoute.id}. Se esperaba la ruta: ${targetModulePath}`);
      console.error("M\xF3dulos de VISTAS disponibles de import.meta.glob():", Object.keys(modules));
      return Astro2.redirect(`/${lang}/404`);
    }
    const loadedModule = await moduleLoader();
    const ContentComponentModule = loadedModule;
    ContentComponent = ContentComponentModule.default;
    if (!ContentComponent) {
      console.error(`Componente por defecto no exportado o no encontrado en el m\xF3dulo: ${targetModulePath} para la ruta ID: ${currentRoute.id}`);
      return Astro2.redirect(`/${lang}/404`);
    }
    pageTitle = currentRoute.metaTitleKey ? t(currentRoute.metaTitleKey) : "Page";
    pageDescription = currentRoute.metaDescriptionKey ? t(currentRoute.metaDescriptionKey) : "";
  }
  return renderTemplate`${isRecipeDetail && renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": recipeData.title ?? "", "description": "" }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "RecipeDetail", $$Index, { "currentLang": langCode, "recipeId": recipeId })}` })}`}${!isRecipeDetail && renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "description": pageDescription }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "ContentComponent", ContentComponent, {})}` })}`}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/[lang]/[pageSlug].astro", void 0);

const $$file = "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/pages/[lang]/[pageSlug].astro";
const $$url = "/[lang]/[pageSlug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$pageSlug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
