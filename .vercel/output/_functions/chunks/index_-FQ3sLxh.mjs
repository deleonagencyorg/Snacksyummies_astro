import { c as createComponent, m as maybeRenderHead, b as addAttribute, e as renderTransition, g as fade, d as renderTemplate, a as createAstro, r as renderScript, f as renderComponent } from './astro/server_XONErzoU.mjs';
import 'kleur/colors';
import { $ as $$LazyImage, a as $$MainLayout } from './MainLayout_C_bIfuhT.mjs';
import { $ as $$BlogCard } from './BlogCard_CBvwTX1k.mjs';
import 'clsx';
/* empty css                            */
import { $ as $$Breadcrumb } from './Breadcrumb_B2nuBQfw.mjs';
import { g as getLocale } from './i18n_N2D6iQyo.mjs';
/* empty css                         */

const $$BlogCardSkeleton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="animate-pulse rounded-lg overflow-hidden bg-gray-100"${addAttribute(renderTransition($$result, "isiflnhx", fade({ duration: "0.5s" }), ""), "data-astro-transition-scope")}> <div class="aspect-square bg-gray-200"></div> <div class="p-4"> <div class="h-6 w-3/4 bg-gray-200 rounded mb-2 mx-auto"></div> </div> </div>`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/blog/BlogCardSkeleton.astro", "self");

const $$Astro$1 = createAstro();
const $$BlogCarouselHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogCarouselHero;
  const { news = [], currentLang = getLocale() } = Astro2.props;
  const latestNews = [...news].map((item) => {
    let date = item.published_date;
    if (typeof date === "string") date = new Date(date);
    return { ...item, date };
  }).filter((item) => item.date instanceof Date && !isNaN(item.date.getTime())).sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 3);
  const viewBlogText = currentLang === "es" ? "Leer m\xE1s" : "Read more";
  return renderTemplate`${latestNews.length === 0 ? renderTemplate`${maybeRenderHead()}<div class="w-full h-[60vh] flex items-center justify-center bg-primary text-white text-2xl font-bold" data-astro-cid-o6yphc7s>
No hay noticias disponibles
</div>` : renderTemplate`<div class="relative w-full h-[60vh] overflow-hidden blog-hero-carousel" data-astro-cid-o6yphc7s><div class="relative w-full h-full" data-astro-cid-o6yphc7s>${latestNews.map((item, index) => renderTemplate`<div${addAttribute("absolute inset-0 transition-opacity duration-700 " + (index === 0 ? "opacity-100 z-10" : "opacity-0 z-0"), "class")}${addAttribute(index, "data-slide")}${addAttribute(index !== 0, "aria-hidden")} data-astro-cid-o6yphc7s><div class="absolute inset-0 w-full h-full overflow-hidden" data-astro-cid-o6yphc7s>${renderComponent($$result, "LazyImage", $$LazyImage, { "src": item.image, "alt": item.title, "class": "w-full h-full object-cover animate-zoom", "data-astro-cid-o6yphc7s": true })}</div><div class="absolute inset-0 bg-black bg-opacity-40" data-astro-cid-o6yphc7s></div><div class="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-8 font-sans" data-astro-cid-o6yphc7s><div class="max-w-4xl mx-auto" data-astro-cid-o6yphc7s><h2 class="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-sans" data-astro-cid-o6yphc7s>${item.title}</h2>${item.excerpt && renderTemplate`<p class="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto opacity-90" data-astro-cid-o6yphc7s>${item.excerpt}</p>`}<a${addAttribute(`/${currentLang}/blog/${item.slug || item.id}`, "href")} class="inline-block bg-white text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl" data-astro-cid-o6yphc7s>${viewBlogText}</a></div></div></div>`)}</div><div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20" data-astro-cid-o6yphc7s>${latestNews.map((_, idx) => renderTemplate`<button class="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-300"${addAttribute(idx, "data-indicator")}${addAttribute(`Go to slide ${idx + 1}`, "aria-label")} data-astro-cid-o6yphc7s></button>`)}</div><button class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all duration-300" id="prev-slide" aria-label="Previous slide" data-astro-cid-o6yphc7s><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-o6yphc7s><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-o6yphc7s></path></svg></button><button class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all duration-300" id="next-slide" aria-label="Next slide" data-astro-cid-o6yphc7s><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-o6yphc7s><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-o6yphc7s></path></svg></button></div>`}${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/blog/BlogCarouselHero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/blog/BlogCarouselHero.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { blogPosts, currentLang, isLoading = false } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Blog", "class": "bg-primary", "description": "Latest blog posts", "data-astro-cid-tjdpv4jl": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "BlogCarouselHero", $$BlogCarouselHero, { "news": blogPosts, "currentLang": currentLang, "data-astro-cid-tjdpv4jl": true })} ${maybeRenderHead()}<div class="container mx-auto px-4 pt-6" data-astro-cid-tjdpv4jl> ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "bgColor": "bg-primary", "textColor": "text-white", "hoverColor": "hover:text-white", "data-astro-cid-tjdpv4jl": true })} <div class="text-center mb-12" data-astro-cid-tjdpv4jl${addAttribute(renderTransition($$result2, "r5hmcimd", fade({ duration: "0.5s" }), ""), "data-astro-transition-scope")}> <h1 class="font-sans text-4xl font-bold mb-4 text-white" data-astro-cid-tjdpv4jl>Blog</h1> <p class="text-xl text-gray-600 max-w-2xl mx-auto text-white" data-astro-cid-tjdpv4jl>
Stay updated with our latest news and articles
</p> </div> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-6 mx-auto max-w-7xl" data-astro-cid-tjdpv4jl> ${isLoading ? [...Array(8)].map((_, i) => renderTemplate`${renderComponent($$result2, "BlogCardSkeleton", $$BlogCardSkeleton, { "key": i, "data-astro-cid-tjdpv4jl": true })}`) : blogPosts.map((post, index) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "image": post.image, "title": post.title, "summary": post.summary, "date": post.published_date, "slug": post.slug || post.id, "class": "transition-all duration-500 ease-out", "style": `opacity: 0; transform: translateY(20px); animation: fadeInUp 0.5s ease-out forwards ${index * 0.1}s`, "data-astro-cid-tjdpv4jl": true })}`)} </div> </div> ` })} `;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/views/Blog/index.astro", "self");

const $$file = "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/views/Blog/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, $$url as url };
