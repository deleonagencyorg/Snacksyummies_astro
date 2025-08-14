import { _ as __variableDynamicImportRuntimeHelper } from './dynamic-import-helper_uMTE3ehW.mjs';
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderScript, h as renderSlot, d as renderTemplate, f as renderComponent, e as renderTransition } from './astro/server_XONErzoU.mjs';
import 'kleur/colors';
import { a as $$MainLayout, $ as $$LazyImage } from './MainLayout_C_bIfuhT.mjs';
import { t } from './i18n_N2D6iQyo.mjs';
import { $ as $$Breadcrumb } from './Breadcrumb_B2nuBQfw.mjs';
import 'clsx';
/* empty css                         */
/* empty css                            */

const $$Astro$1 = createAstro();
const $$VideoHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$VideoHero;
  const {
    videoUrl,
    fallbackImageUrl,
    height = "400px",
    width = "100%",
    title,
    subtitle,
    overlayOpacity = "50",
    textColor = "text-white",
    showOverlay = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="video-hero-container"${addAttribute(`height: ${height}; width: ${width};`, "style")} data-astro-cid-2xbugcja> <!-- Fallback image that shows while video loads or if video fails --> <div class="fallback-image" data-astro-cid-2xbugcja> <img${addAttribute(fallbackImageUrl, "src")}${addAttribute(title || "Hero background", "alt")} width="1920" height="1080" loading="eager" data-astro-cid-2xbugcja> </div> <!-- Video background --> <div class="video-container" data-astro-cid-2xbugcja> <video autoplay muted loop playsinline class="hero-video" id="heroVideo" data-astro-cid-2xbugcja> <source${addAttribute(videoUrl, "src")} type="video/mp4" data-astro-cid-2xbugcja> <!-- If the browser doesn't support video, the fallback image will remain visible -->
Your browser does not support the video tag.
</video> </div> <!-- Mobile overlay with bg-primary (always visible on mobile) --> <div class="mobile-overlay" data-astro-cid-2xbugcja></div> <!-- Overlay with text (conditional) --> ${showOverlay && renderTemplate`<div${addAttribute(`overlay bg-black bg-opacity-${overlayOpacity}`, "class")} data-astro-cid-2xbugcja> ${title && renderTemplate`<div class="text-content" data-astro-cid-2xbugcja> <h1${addAttribute(`hero-title ${textColor}`, "class")} data-astro-cid-2xbugcja>${title}</h1> ${subtitle && renderTemplate`<p${addAttribute(`hero-subtitle ${textColor}`, "class")} data-astro-cid-2xbugcja>${subtitle}</p>`} </div>`} ${renderSlot($$result, $$slots["default"])} </div>`} <!-- If no overlay, still show content with transparent background --> ${!showOverlay && title && renderTemplate`<div class="overlay" style="background-color: transparent;" data-astro-cid-2xbugcja> <div class="text-content" data-astro-cid-2xbugcja> <h1${addAttribute(`hero-title ${textColor}`, "class")} data-astro-cid-2xbugcja>${title}</h1> ${subtitle && renderTemplate`<p${addAttribute(`hero-subtitle ${textColor}`, "class")} data-astro-cid-2xbugcja>${subtitle}</p>`} </div> ${renderSlot($$result, $$slots["default"])} </div>`} </div>  ${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/VideoHero/VideoHero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/VideoHero/VideoHero.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { currentLang, headerColorConfig } = Astro2.props;
  const title = t("about_us.title", { namespace: "common", locale: currentLang });
  const metaDescription = t("meta.about_us.description", { namespace: "common", locale: currentLang });
  const aboutUsContent = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../../locales/en/aboutus.json": () => import('./aboutus_DULGJJYp.mjs'),"../../locales/es/aboutus.json": () => import('./aboutus_BJ40GhSW.mjs')})), `../../locales/${currentLang}/aboutus.json`, 5);
  const historyTitle = aboutUsContent.title;
  const historySubtitle = aboutUsContent.subtitle;
  aboutUsContent.intro;
  const historyItems = aboutUsContent.items;
  aboutUsContent.conclusion;
  const videoUrl = "https://snack.yummiespromociones.com/SnacksyummiesAssets/YUMMIES_INSTITUCIONAL_1920X1080.webm";
  const fallbackImageUrl = "https://snack.yummiespromociones.com/SnacksyummiesAssets/portada_video.webp";
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": title, "class": "bg-brown", "description": metaDescription }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <div class="absolute mx-auto px-4 pt-6 z-10  md:translate-x-20 md:translate-y-20 translate-x-9 translate-y-12"> <p class="text-white text-center font-title uppercase font-bold text-[3rem]  bg-red  px-6 rounded-full z-10">${historyTitle}</p> <p class="text-white text-center pt-4 font-title uppercase font-bold md:text-[8rem] text-[5rem] z-10 md:mt-[-3rem] mt-[-2rem] text-shadow-xl">${historySubtitle}</p> </div> <div class="relative z-0"> <!-- Mobile overlay with bg-primary (only visible on mobile) --> <div class="absolute inset-0 z-5 md:hidden" style="background-color: rgba(10, 61, 126, 0.6); pointer-events: none;"></div> ${renderComponent($$result2, "VideoHero", $$VideoHero, { "videoUrl": videoUrl, "fallbackImageUrl": fallbackImageUrl, "height": "500px", "overlayOpacity": "100", "textColor": "text-white", "showOverlay": false })} </div> </div>  <div class="container mx-auto px-4 pt-6"> ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "textColor": "text-primary", "hoverColor": "hover:text-white" })} <div class="mb-16"> <div class="w-full mx-auto text-cente "> ${historyItems.map((item, index) => renderTemplate`<div${addAttribute(`year-${index}`, "id")} class="timeline-item flex flex-row justify-start w-full h-full items-stretch space-x-8"${addAttribute(`animation-delay: ${index * 0.3}s`, "style")}${addAttribute(item.year, "data-year")}${addAttribute(renderTransition($$result2, "g7gkti57", "", `timeline-item-${index}`), "data-astro-transition-scope")}> <div class="w-[40%] hidden md:flex items-start justify-end px-4 py-12"${addAttribute(renderTransition($$result2, "mzvkmjtw", "", `timeline-year-${index}`), "data-astro-transition-scope")}> <h2 class="timeline-year text-quinary font-title text-8xl animate-fade-in-up">${item.year}</h2> </div> <div id="line" class="bg-gradient-to-b from-brown via-quinary to-brown w-[10px] self-stretch py-12"> <svg class="timeline-svg relative -translate-x-[20px] animate-fade-in" width="50" height="50" viewBox="0 0 65 61" fill="none" xmlns="http://www.w3.org/2000/svg"${addAttribute(`animation-delay: ${index * 0.4}s`, "style")}> <path d="M45.1338 2.22363C45.7886 1.93579 46.4547 1.95674 46.9932 2.11621C48.0191 2.42014 48.8946 3.31148 49.0957 4.5L49.167 4.9248C50.1035 9.42462 51.0401 13.9262 51.9766 18.4277C52.9471 23.0928 53.9182 27.7579 54.8887 32.4209C54.9908 32.8773 55.0128 33.3134 54.9922 33.7148C54.9919 33.7217 54.9915 33.7295 54.9912 33.7363C54.9908 33.7431 54.9916 33.7501 54.9912 33.7568L54.9902 33.7559C54.9583 34.4376 54.7852 35.09 54.5078 35.6797L54.5088 35.6807C52.0548 40.905 46.913 45.0353 41.2969 47.5947C35.6748 50.1569 29.2156 51.3115 23.8438 50.2061L23.8242 50.2021L23.8057 50.1982C23.4815 50.125 23.1442 50.0059 22.8184 49.833V49.834C22.812 49.8307 22.8061 49.8266 22.7998 49.8232C22.7919 49.819 22.7833 49.8158 22.7754 49.8115V49.8096C22.2946 49.5528 21.9268 49.2133 21.6592 48.9092L21.6514 48.9004C19.1286 45.9999 7.25607 31.9332 2.70801 26.3828C1.94974 25.4587 1.79777 24.2248 2.26465 23.21C2.49947 22.6996 2.91297 22.2083 3.51855 21.9082C4.13476 21.6029 4.81834 21.5637 5.45117 21.7432L5.45215 21.7422C10.1298 23.0424 13.0525 24.2933 17.0625 24.9316C17.7026 25.0192 18.0341 24.95 18.1816 24.8955C18.2977 24.8525 18.3759 24.7949 18.4629 24.6641C18.7291 24.2637 18.9135 23.4574 18.999 21.9951C19.1755 18.241 18.8806 14.6031 18.749 10.6035V10.6025C18.6932 9.32411 18.6453 8.06243 18.5977 6.77441C18.5514 5.52351 19.1787 4.33351 20.3447 3.78223C21.5027 3.23485 22.8082 3.49825 23.7471 4.30566H23.748C29.8172 9.48515 31.9072 11.82 36.291 14.8369L36.6055 15.0371C37.2974 15.4528 37.6956 15.5122 37.8701 15.5098C38.0054 15.5079 38.1629 15.4725 38.4229 15.2217C38.7245 14.9306 39.0553 14.446 39.4375 13.7129C39.8187 12.9817 40.1479 12.216 40.5645 11.3184C41.4206 9.34125 42.619 6.29875 43.7227 3.68262C43.9827 3.06607 44.4553 2.52192 45.1338 2.22363Z" fill="#91CAE9" stroke="#FAF1E9" stroke-width="4"></path> </svg> </div> <div id="text" class="w-[90%] md:w-[55%] flex flex-col justify-start px-4 py-8 text-left"${addAttribute(renderTransition($$result2, "eacs74mi", "", `timeline-text-${index}`), "data-astro-transition-scope")}> <h2 class="timeline-year text-quinary text-center block md:hidden font-title text-6xl mb-2 animate-fade-in-up"${addAttribute(`animation-delay: ${index * 0.3}s`, "style")}> ${item.year} </h2> <p class="timeline-text text-quinary animate-fade-in-up"${addAttribute(`animation-delay: ${index * 0.4}s`, "style")}> ${item.text} </p> <div class="py-8 max-w-[250px] md:max-w-[500px] mx-auto animate-float"${addAttribute(`animation-delay: ${index * 0.6}s`, "style")}> ${renderComponent($$result2, "LazyImage", $$LazyImage, { "class": "timeline-image rounded-2xl transform rotate-2 w-full animate-fade-in-scale", "src": item.image, "alt": item.year, "data-astro-transition-scope": renderTransition($$result2, "3z77c7v7", "", `timeline-image-${index}`) })} </div> </div> </div>`)} </div> </div> </div> ` })} ${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/views/AboutUs/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/views/AboutUs/index.astro", "self");

const $$file = "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/views/AboutUs/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, $$url as url };
