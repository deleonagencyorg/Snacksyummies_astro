import { c as createComponent, a as createAstro, b as addAttribute, r as renderScript, m as maybeRenderHead, d as renderTemplate, e as renderTransition } from './astro/server_XONErzoU.mjs';
import 'kleur/colors';
import 'clsx';
import { t } from './i18n_N2D6iQyo.mjs';
/* empty css                               */
/* empty css                            */

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { currentLang, productId } = Astro2.props;
  const productsAssets = t("home", { namespace: "products", locale: currentLang }) || {};
  const products = t("items", { namespace: "products", locale: currentLang }) || [];
  const product = products.find((item) => item.id === productId);
  if (!product || Object.keys(product).length === 0) {
    throw new Error(t("errors.product_not_found", { locale: currentLang }));
  }
  const safeProduct = {
    id: product.id || "",
    name: product.name || "",
    image: product.image || "",
    background_image: product.background_image || "",
    background_color: product.background_color || "",
    sizes: Array.isArray(product.sizes) ? product.sizes : [],
    available: product.available || ""
  };
  const productsData = t("items", { locale: currentLang, namespace: "products" }) || [];
  const allProductsArray = Array.isArray(productsData) ? productsData : [];
  let relatedProducts = [];
  if (allProductsArray.length > 1) {
    relatedProducts = allProductsArray.filter((p) => p.id !== productId).slice(0, 3);
  }
  return renderTemplate`${currentLang === "en" && renderTemplate`${maybeRenderHead()}<div id="hero" class="w-full aspect-[4/3] md:h-[32rem] bg-cover bg-center" style="background-image: url('https://snack.yummiespromociones.com/taqueritos/banner_productos_en.webp'); background-size: cover; background-position: center;"></div>`}${safeProduct.background_color && renderTemplate`<article id="product-detail" class="product-detail pt-12 md:pt-29 md:bg-[image:var(--desktop-bg)] bg-cover bg-center bg-[var(--mobile-bg)] relative min-h-screen flex items-center"${addAttribute(`
      --mobile-bg: ${safeProduct.background_color};
      --desktop-bg: url('${safeProduct.background_image}');
    `, "style")}${addAttribute(renderTransition($$result, "6pxizj2v", "slide", ""), "data-astro-transition-scope")}><div class="md:mt-[0] container mx-auto px-4 py-12 flex flex-col md:flex-row items-center"><img id="product-image" class="mb-[2rem] w-[100%] md:hidden"${addAttribute(safeProduct.image, "src")}${addAttribute(safeProduct.name, "alt")}${addAttribute(renderTransition($$result, "fzdr7s3a", "", `product-image-${safeProduct.id}`), "data-astro-transition-scope")}><div class="w-full md:w-1/2 md:ml-auto"><h1 class="md:text-4xl text-3xl font-bold mb-6 text-white">${safeProduct.name}</h1><h2 class="font-heading md:text-3xl text-2xl text-white">${productsAssets.presentations}</h2>${safeProduct.sizes && safeProduct.sizes.length > 0 && renderTemplate`<div class="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-2 my-4">${safeProduct.sizes.slice().sort((a, b) => parseInt(b.value) - parseInt(a.value)).map((size) => renderTemplate`<div class="flex flex-col items-center"><img${addAttribute(size.image, "src")}${addAttribute(`Size ${size.value}`, "alt")} class="w-24"></div>`)}</div>`}<h2 class="font-heading md:text-2xl text-xl text-white">${productsAssets.product_available}</h2>${safeProduct.available && renderTemplate`<div class="mb-8 mt-4"><img${addAttribute(safeProduct.available, "src")} alt="Available in" class="md:h-[35px] h-[35px]"></div>`}<p class="font-medium text-md text-white">${productsAssets.text}</p></div></div></article>`}<div id="related-products" class="container mx-auto px-4 py-12"${addAttribute(renderTransition($$result, "2cdqgn6u", "fade", ""), "data-astro-transition-scope")}> <h2 class="text-2xl font-bold mb-8 text-white text-center">${productsAssets.related_products}</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${relatedProducts.slice(0, 2).map((product2) => renderTemplate`<a${addAttribute(`/${currentLang}/${currentLang === "es" ? "productos" : "products"}/${product2.id}`, "href")} class="block hover:scale-105 transition-transform"> <div class="aspect-square overflow-hidden w-full h-[400px]"${addAttribute(`background-image: url('${product2.image}'); background-size: cover; background-position: center;`, "style")}></div> </a>`)} </div> </div> ${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/views/Products/Detail/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/views/Products/Detail/index.astro", "self");

export { $$Index as $ };
