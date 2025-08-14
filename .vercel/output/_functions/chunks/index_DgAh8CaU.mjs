import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderScript, e as renderTransition, d as renderTemplate, f as renderComponent } from './astro/server_XONErzoU.mjs';
import 'kleur/colors';
import { t, g as getLocale } from './i18n_N2D6iQyo.mjs';
/* empty css                              */
import { $ as $$RecipeCard } from './index_CiukxvVT.mjs';
/* empty css                            */

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const currentLang = getLocale();
  const recipes = t("items", { namespace: "recipes", locale: currentLang });
  return renderTemplate`${maybeRenderHead()}<div id="hero" class="w-full aspect-[4/3] md:h-[32rem] bg-cover bg-center" style="background-image: url('https://snack.yummiespromociones.com/taqueritos/banner_recetas.webp'); background-size: cover; background-position: center;"${addAttribute(renderTransition($$result, "e4uk3ili", "fade", ""), "data-astro-transition-scope")}></div> <div class="bg-white py-12"> <div class="container mx-auto px-4 mt-12"> ${recipes.length === 0 ? renderTemplate`<p class="text-center text-gray-500">${t("page.no_recipes", { namespace: "recipes" })}</p>` : renderTemplate`<div class="md:w-[80%] w-full mx-auto grid grid-cols-2 md:grid-cols-3 md:gap-32 gap-6"${addAttribute(renderTransition($$result, "v44rdvw3", "slide", ""), "data-astro-transition-scope")}> ${recipes.map((recipe) => renderTemplate`${renderComponent($$result, "RecipeCard", $$RecipeCard, { "image": recipe.image || "/images/recipes/placeholder.jpg", "title": recipe.title, "time": `${recipe.preparation_time}MIN`, "id": recipe.id, "textColor": "text-gray-800", "iconColor": "text-gray-800" })}`)} </div>`} </div> </div> ${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/views/Recipes/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/views/Recipes/index.astro", "self");

const $$file = "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/views/Recipes/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, $$url as url };
