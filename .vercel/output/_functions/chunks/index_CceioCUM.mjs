import { c as createComponent, m as maybeRenderHead, r as renderScript, b as addAttribute, d as renderTemplate, e as renderTransition } from './astro/server_XONErzoU.mjs';
import 'kleur/colors';
import 'clsx';
import { t, g as getLocale } from './i18n_N2D6iQyo.mjs';
/* empty css                              */
/* empty css                            */

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const currentLang = getLocale();
  const products = t("items", { namespace: "products", locale: currentLang });
  const categories = t("categories", { namespace: "products", locale: currentLang });
  const uniqueCategories = Object.keys(categories);
  return renderTemplate`${maybeRenderHead()}<div class="bg-white py-12"> <div class="container mx-auto px-4"> <h1 class="text-4xl font-bold text-center mb-4">${t("page.title", { namespace: "products" })}</h1> <p class="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">${t("page.description", { namespace: "products" })}</p> <!-- Filtro de categorías --> <div class="flex flex-wrap justify-center mb-8 gap-2"> <button class="category-filter active" data-category="all"> ${categories.all} </button> ${uniqueCategories.filter((cat) => cat !== "all").map((category) => renderTemplate`<button class="category-filter"${addAttribute(category, "data-category")}> ${categories[category]} </button>`)} </div> ${products.length === 0 ? renderTemplate`<p class="text-center text-gray-500">${t("page.no_products", { namespace: "products" })}</p>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="products-grid"> ${products.map((product) => renderTemplate`<div class="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"${addAttribute(product.category, "data-category")}${addAttribute(renderTransition($$result, "3hccdwle", "fade", ""), "data-astro-transition-scope")}> <div class="relative h-48 overflow-hidden"> <img${addAttribute(product.image || "/images/products/placeholder.jpg", "src")}${addAttribute(product.title, "alt")} class="w-full h-full object-cover"${addAttribute(renderTransition($$result, "msnempd4", "", `product-image-${product.id}`), "data-astro-transition-scope")}> </div> <div class="p-6"> <h3 class="text-xl font-bold mb-2">${product.title}</h3> <p class="text-gray-600 mb-4 line-clamp-2">${product.short_description}</p> <div class="flex justify-between items-center"> <div class="text-sm text-gray-500 capitalize">${categories[product.category]}</div> <a${addAttribute(`/${currentLang}/productos/${product.id}`, "href")} class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md transition-colors duration-300"> ${t("page.view_details", { namespace: "products" })} </a> </div> </div> </div>`)} </div>`} </div> </div> ${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/views/Products/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/views/Products/index.astro", "self");

const $$file = "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/views/Products/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, $$url as url };
