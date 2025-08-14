import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, f as renderComponent, e as renderTransition, d as renderTemplate } from './astro/server_XONErzoU.mjs';
import 'kleur/colors';
import { $ as $$LazyImage } from './MainLayout_C_bIfuhT.mjs';
import { g as getLocale } from './i18n_N2D6iQyo.mjs';
/* empty css                            */

const $$Astro = createAstro();
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const {
    image,
    title,
    id,
    slug,
    textColor = "text-blue-900",
    iconColor = "text-blue-900",
    hoverImage = image,
    currentLang = getLocale()
  } = Astro2.props;
  const blogLink = `/${currentLang}/blog/${slug || id}`;
  const viewBlogText = currentLang === "es" ? "Leer m\xE1s" : "Read more";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(blogLink, "href")} class="block group relative overflow-hidden rounded-[2rem] transition-all duration-300 ease-in-out h-[350px] md:h-[450px] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]" data-astro-cid-fkyubztb${addAttribute(renderTransition($$result, "anf62iq5", "fade", ""), "data-astro-transition-scope")}> <!-- Imagen de fondo (siempre visible) --> <div class="absolute inset-0 w-full h-full" data-astro-cid-fkyubztb> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": image, "alt": title, "class": "w-full h-full object-cover", "data-astro-cid-fkyubztb": true, "data-astro-transition-scope": renderTransition($$result, "sriqbu3u", "", `blog-image-${id}`) })} </div> <!-- Overlay con gradiente para el estado normal --> <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300" data-astro-cid-fkyubztb></div> <!-- Información en estado normal --> <div class="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90 group-hover:opacity-0 transition-opacity duration-300" data-astro-cid-fkyubztb> <h3 class="font-sans text-sm md:text-lg font-bold text-primary text-center mb-3" data-astro-cid-fkyubztb>${title}</h3> <div class="flex justify-center" data-astro-cid-fkyubztb> <div class="border-2 border-primary bg-white text-primary py-2 px-8 rounded-full text-center text-sm font-medium" data-astro-cid-fkyubztb> ${viewBlogText} </div> </div> </div> <!-- Overlay para hover --> <div class="absolute inset-0 bg-gradient-to-t from-blue-900 to-blue-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-fkyubztb></div> <!-- Información en hover --> <div class="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-fkyubztb> <!-- Toda la información en la parte inferior --> <div class="p-5 flex flex-col gap-3" data-astro-cid-fkyubztb> <!-- Título en hover (al inicio de la información) --> <h3 class="font-sans text-lg font-bold text-white text-center mb-3" data-astro-cid-fkyubztb>${title}</h3> <!-- Botón de leer más --> <div class="flex justify-center mt-4" data-astro-cid-fkyubztb> <div class="border-2 border-white bg-transparent text-white py-2 px-8 rounded-full text-center text-sm font-medium" data-astro-cid-fkyubztb> ${viewBlogText} </div> </div> </div> </div> </a> `;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/blog/BlogCard.astro", "self");

export { $$BlogCard as $ };
