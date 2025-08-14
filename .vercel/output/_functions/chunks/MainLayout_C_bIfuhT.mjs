import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderScript, d as renderTemplate, a as createAstro, f as renderComponent, j as defineScriptVars, u as unescapeHTML, J as spreadAttributes, F as Fragment, h as renderSlot, i as renderHead, e as renderTransition } from './astro/server_XONErzoU.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */
import { t, g as getLocale } from './i18n_N2D6iQyo.mjs';
/* empty css                         */
/* empty css                            */

const $$GoogleTagManager = createComponent(($$result, $$props, $$slots) => {
  const gtmId = "GTM-NSF58RQ2";
  return renderTemplate`<!-- Google Tag Manager (noscript) -->${maybeRenderHead()}<noscript><iframe${addAttribute(`https://www.googletagmanager.com/ns.html?id=${gtmId}`, "src")} height="0" width="0" style="display:none;visibility:hidden">
  </iframe></noscript><!-- Google Tag Manager -->${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/GoogleTagManager.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/GoogleTagManager.astro", void 0);

const $$Favicon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Favicon --><link rel="icon" type="image/png" href="https://snack.yummiespromociones.com/snacksyummies/favicon.png"><!-- Apple Touch Icon --><link rel="apple-touch-icon" href="https://snack.yummiespromociones.com/snacksyummies/favicon.png"><!-- Android Chrome Icons --><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#ffffff">`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/Favicon.astro", void 0);

const $$Astro$c = createAstro();
const $$LanguageSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$LanguageSwitcher;
  const { pathname } = Astro2.url;
  const currentPath = pathname;
  const { activeLocale, headerColorConfig } = Astro2.props;
  const routeTranslations = {
    "recetas": "recipes",
    "productos": "products",
    "noticias": "news",
    "contacto": "contact",
    "marcas": "brands",
    "nosotros": "about-us",
    "blog": "blog"
    // Agregar más rutas según sea necesario
  };
  const pathParts = currentPath.split("/").filter(Boolean);
  const currentLocale = pathParts[0] || "es";
  pathParts.slice(1).join("/");
  const getTranslatedPath = (targetLocale) => {
    const pathParts2 = currentPath.split("/").filter(Boolean);
    const currentRoute2 = pathParts2.slice(1).join("/");
    if (pathParts2.length <= 1) return `/${targetLocale}`;
    const translatedRoute = Object.entries(routeTranslations).reduce(
      (acc, [esRoute, enRoute]) => {
        if (currentLocale === "es" && currentRoute2.startsWith(esRoute)) {
          return currentRoute2.replace(esRoute, enRoute);
        }
        if (currentLocale === "en" && currentRoute2.startsWith(enRoute)) {
          return currentRoute2.replace(enRoute, esRoute);
        }
        return acc;
      },
      currentRoute2
    );
    return `/${targetLocale}/${translatedRoute}`;
  };
  const esUrl = activeLocale === "es" ? currentPath : getTranslatedPath("es");
  const enUrl = activeLocale === "en" ? currentPath : getTranslatedPath("en");
  const textColor = headerColorConfig?.textColor || "text-white";
  const hoverTextColor = headerColorConfig?.hoverTextColor || "hover:text-yellow-300";
  return renderTemplate`${maybeRenderHead()}<div class="language-switcher flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2" data-astro-cid-6ggxaj6s> <div class="flex items-center space-x-2" data-astro-cid-6ggxaj6s> <a${addAttribute(esUrl, "href")}${addAttribute(`language-link flex items-center ${activeLocale === "es" ? "font-bold text-yellow-500" : `${textColor} ${hoverTextColor}`}`, "class")} title="Español" data-lang="es" data-astro-cid-6ggxaj6s> <span class="flag-icon mr-1" data-astro-cid-6ggxaj6s>
🇭🇳
</span> <span${addAttribute(textColor, "class")} data-astro-cid-6ggxaj6s>ES</span> </a> <span class="divider text-gray-400" data-astro-cid-6ggxaj6s>|</span> <a${addAttribute(enUrl, "href")}${addAttribute(`language-link flex items-center ${activeLocale === "en" ? "font-bold text-yellow-500" : `${textColor} ${hoverTextColor}`}`, "class")} title="English" data-lang="en" data-astro-cid-6ggxaj6s> <span class="flag-icon mr-1" data-astro-cid-6ggxaj6s>
🇺🇸
</span> <span${addAttribute(textColor, "class")} data-astro-cid-6ggxaj6s>EN</span> </a> </div> ${activeLocale === "es" && renderTemplate`<div class="mt-2 md:mt-0 md:ml-2 md:flex md:items-center" data-astro-cid-6ggxaj6s> <span class="hidden md:inline divider text-gray-400" data-astro-cid-6ggxaj6s>|</span> <a href="/es/yummiesone"${addAttribute(`language-link flex items-center md:ml-2 ${currentPath.includes("/yummiesone") ? " text-quinary bg-secondary" : "text-primary hover:bg-secondary"}`, "class")} title="Yummies One" data-astro-cid-6ggxaj6s> <span${addAttribute(currentPath.includes("/yummiesone") ? "bg-quinary rounded-md  px-2 py-1 text-primary" : "text-primary", "class")} data-astro-cid-6ggxaj6s>Yummies One</span> </a> </div>`} </div> `;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/i18n/LanguageSwitcher.astro", void 0);

const S3_BASE_URL = "https://snack.yummiespromociones.com/snacksyummies";
const generalAssets = {
  locationIcon: `${S3_BASE_URL}/iconmap.svg`,
  phoneIcon: `${S3_BASE_URL}/iconphone.svg`,
  timeIcon: `${S3_BASE_URL}/iconsizes.svg`,
  coronaIcon: `${S3_BASE_URL}/corona.webp`
};
const logos = {
  principal: {
    url: `${S3_BASE_URL}/Logo_SnacksYummies.svg`,
    alt: "Snacks Yummies"
  }
};

const $$Astro$b = createAstro();
const $$Index$8 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index$8;
  const { currentLang, headerColorConfig } = Astro2.props;
  const { pathname } = Astro2.url;
  const currentPath = pathname;
  t("social_media", { namespace: "common", locale: currentLang });
  const menuItems = t("menu_items", { namespace: "common", locale: currentLang });
  return renderTemplate`<!-- Desktop Navigation -->${maybeRenderHead()}<nav${addAttribute(`hidden md:flex items-center justify-between w-full py-3 px-6 ${headerColorConfig.backgroundColor}`, "class")}${addAttribute(currentLang, "data-current-lang")}> <!-- Logo --> <div class="flex-shrink-0"> <a${addAttribute(`/${currentLang}/`, "href")} class="block"> <img${addAttribute(logos.principal.url, "src")}${addAttribute(logos.principal.alt, "alt")} class="h-20 w-auto"> </a> </div> <!-- Navigation Items - Center --> <div class="flex items-center justify-center flex-1 px-4 mx-auto"></div> <!-- Right Side - Language Switcher and Yummies One --> <div class="flex items-center space-x-5"> <div class="flex space-x-10" id="desktop-menu-items"> ${menuItems && menuItems.map((item) => renderTemplate`<div class="relative group"> <a${addAttribute(item.href, "href")}${addAttribute(`${headerColorConfig.textColor} font-sans text-sm uppercase font-medium transition-colors py-2 px-3 rounded-md flex items-center hover:bg-quinary ${currentPath.includes(item.href.split("/").slice(2).join("/")) ? "bg-quinary" : ""}`, "class")}> ${item.text} ${item.submenu && renderTemplate`<svg class="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>`} </a> ${item.submenu && renderTemplate`<div class="absolute left-0 mt-0 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out invisible group-hover:visible z-50 py-1"> ${item.submenu.map((subItem) => renderTemplate`<div class="relative group/submenu"> <a${addAttribute(subItem.href, "href")} class="block px-4 py-2 text-sm font-sans hover:bg-quinary flex justify-between items-center transition-colors duration-200 \${currentPath.includes(subItem.href.split('/').slice(2).join('/')) ? 'bg-quinary' : ''}"> ${subItem.text} ${subItem.submenu && renderTemplate`<svg class="w-3 h-3 ml-1 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path></svg>`} </a> ${subItem.submenu && renderTemplate`<div class="absolute left-full top-0 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover/submenu:opacity-100 transition-opacity duration-200 ease-in-out invisible group-hover/submenu:visible z-50 py-1"> ${subItem.submenu.map((thirdItem) => renderTemplate`<a${addAttribute(thirdItem.href, "href")} class="block px-4 py-2 text-sm font-sans hover:bg-quinary transition-colors duration-200 \${currentPath.includes(thirdItem.href.split('/').slice(2).join('/')) ? 'bg-quinary' : ''}">${thirdItem.text}</a>`)} </div>`} </div>`)} </div>`} </div>`)} </div> <!-- Language Switcher --> ${renderComponent($$result, "LanguageSwitcher", $$LanguageSwitcher, { "activeLocale": currentLang, "headerColorConfig": headerColorConfig })} <!-- Yummies One --> <!-- <a href="/yummies-one" class="flex items-center text-white hover:text-gray-300 uppercase text-sm font-medium">
      <span>Yummies One</span>
    </a> --> </div> </nav>`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/DesktopNavbar/index.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$a = createAstro();
const $$Index$7 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Index$7;
  const { currentLang, headerColorConfig } = Astro2.props;
  const openMenuLabel = t("menu_labels.open_main_menu", { namespace: "common", locale: currentLang }) || "Open main menu";
  const menuIconSvg = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
</svg>`;
  const closeIconSvg = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>`;
  const textColor = headerColorConfig?.textColor || "text-white";
  const hoverTextColor = headerColorConfig?.hoverTextColor || "hover:text-gray-300";
  const hoverBackgroundColor = headerColorConfig?.hoverBackgroundColor || "hover:bg-blue-800";
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Mobile Menu Button -->", '<div class="md:hidden"> <button id="mobile-menu-button" type="button"', ' aria-expanded="false"', '> <span class="sr-only">', '</span> <div id="menu-icon-container" class="w-8 h-8 flex items-center justify-center">', "</div> </button> </div> <script>(function(){", "\n// Funci\xF3n para manejar el clic en el bot\xF3n del men\xFA m\xF3vil\nfunction handleMobileMenuButtonClick(event) {\n  const menuButton = event.currentTarget;\n  const menuIconContainer = document.getElementById('menu-icon-container');\n  const mobileMenu = document.getElementById('mobile-menu');\n  \n  if (mobileMenu && menuIconContainer) {\n    mobileMenu.classList.toggle('hidden');\n    if (!mobileMenu.classList.contains('hidden')) {\n      document.body.style.overflow = 'hidden';\n    } else {\n      document.body.style.overflow = '';\n    }\n    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';\n    menuButton.setAttribute('aria-expanded', (!isExpanded).toString());\n    menuIconContainer.innerHTML = isExpanded ? astroMenuIconSvg : astroCloseIconSvg;\n  }\n}\n\n// Funci\xF3n para inicializar el bot\xF3n del men\xFA m\xF3vil\nfunction initMobileMenuButton() {\n  const menuButton = document.getElementById('mobile-menu-button');\n  \n  if (menuButton) {\n    // Eliminar cualquier event listener existente para evitar duplicados\n    menuButton.removeEventListener('click', handleMobileMenuButtonClick);\n    menuButton.removeEventListener('touchstart', handleMobileMenuButtonClick);\n    \n    // Agregar event listeners para clic y toque\n    menuButton.addEventListener('click', handleMobileMenuButtonClick);\n    menuButton.addEventListener('touchstart', handleMobileMenuButtonClick, { passive: true });\n  }\n}\n\n// Inicializar cuando el DOM est\xE9 listo\ndocument.addEventListener('DOMContentLoaded', initMobileMenuButton);\n\n// Volver a inicializar cuando cambie el contenido de la p\xE1gina (navegaci\xF3n entre secciones)\ndocument.addEventListener('astro:page-load', initMobileMenuButton);\ndocument.addEventListener('astro:after-swap', initMobileMenuButton);\n\n// Asegurarse de que el bot\xF3n funcione incluso si se carga din\xE1micamente\nif (document.readyState === 'complete' || document.readyState === 'interactive') {\n  setTimeout(initMobileMenuButton, 100);\n}\n})();<\/script>"])), maybeRenderHead(), addAttribute(`inline-flex items-center justify-center p-2 rounded-md ${textColor} ${hoverTextColor} ${hoverBackgroundColor} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`, "class"), addAttribute(openMenuLabel, "aria-label"), openMenuLabel, unescapeHTML(menuIconSvg), defineScriptVars({ astroMenuIconSvg: menuIconSvg, astroCloseIconSvg: closeIconSvg }));
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/MobileMenuButton/index.astro", void 0);

function getOptimalSizes(context = "default") {
  switch (context) {
    case "hero":
      return "(max-width: 768px) 100vw, 100vw";
    case "banner":
      return "(max-width: 768px) 100vw, 100vw";
    case "thumbnail":
      return "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw";
    case "gallery":
      return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
    case "logo":
      return "(max-width: 640px) 50vw, 150px";
    case "icon":
      return "(max-width: 640px) 24px, 32px";
    default:
      return "(max-width: 768px) 100vw, 50vw";
  }
}
function shouldPrioritize(src, context = "default") {
  if (!src) return false;
  if (context === "hero" || context === "banner") {
    return true;
  }
  const criticalImages = [
    "mobilebanner.webp",
    "imagen-magiamicrobioma.webp",
    "imagen-postbioticos.webp"
  ];
  return criticalImages.some((img) => src.includes(img));
}

const $$Astro$9 = createAstro();
const $$LazyImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$LazyImage;
  function isSvgUrl(url) {
    if (!url) return false;
    return url.toLowerCase().endsWith(".svg");
  }
  const {
    src,
    alt,
    width,
    height,
    class: className,
    color,
    context = "default",
    priority: explicitPriority,
    sizes: explicitSizes,
    decorative = false,
    ...rest
  } = Astro2.props;
  if (!src) return null;
  let optimizedAlt = alt;
  if (decorative) {
    optimizedAlt = "";
  } else if (alt) {
    optimizedAlt = alt.replace(/^imagen de\s+/i, "").replace(/^foto de\s+/i, "").replace(/^icono de\s+/i, "").replace(/^imagen\s+/i, "").replace(/^foto\s+/i, "").replace(/^icono\s+/i, "");
  }
  const priority = explicitPriority !== void 0 ? explicitPriority : shouldPrioritize(src, context);
  const sizes = explicitSizes || getOptimalSizes(context);
  const isWebP = src.toLowerCase().endsWith(".webp");
  function getHueRotate(color2) {
    if (!color2) return "0deg";
    const hueValues = {
      "red": "0deg",
      "orange": "35deg",
      "yellow": "60deg",
      "green": "120deg",
      "blue": "240deg",
      "purple": "270deg",
      "pink": "330deg",
      "white": "0deg",
      "black": "0deg",
      "primary": "0deg",
      "secondary": "0deg",
      "tertiary": "0deg",
      "quaternary": "0deg",
      "quinary": "0deg",
      "senary": "0deg",
      "septenary": "0deg",
      "octonary": "0deg",
      "nonary": "0deg",
      "decenary": "0deg"
    };
    const namedColor = color2.toLowerCase();
    if (hueValues[namedColor]) {
      return hueValues[namedColor];
    }
    if (color2.startsWith("#")) {
      let hex = color2.substring(1);
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
        return "0deg";
      }
      const r = parseInt(hex.substring(0, 2), 16) / 255;
      const g = parseInt(hex.substring(2, 4), 16) / 255;
      const b = parseInt(hex.substring(4, 6), 16) / 255;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h = 0;
      if (max === min) {
        h = 0;
      } else {
        const d = max - min;
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h = h * 60;
      }
      return `${h}deg`;
    }
    return "0deg";
  }
  const isExternal = src.startsWith("http");
  let srcset = "";
  if (isWebP) {
    if (isExternal && src.includes("assets.doguiygatibienestar.com")) {
      srcset = [
        `${src}?w=640 640w`,
        `${src}?w=768 768w`,
        `${src}?w=1024 1024w`,
        `${src}?w=1280 1280w`
      ].join(", ");
    } else if (!isExternal) {
      const baseUrl = src.substring(0, src.lastIndexOf(".webp"));
      srcset = [
        `${baseUrl}-640w.webp 640w`,
        `${baseUrl}-768w.webp 768w`,
        `${baseUrl}-1024w.webp 1024w`,
        `${baseUrl}-1280w.webp 1280w`
      ].join(", ");
    }
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(src, "src")}${addAttribute(optimizedAlt, "alt")}${addAttribute(className, "class")}${addAttribute({
    ...color === "white" ? { filter: "brightness(0) invert(1)" } : color === "black" ? { filter: "brightness(0) invert(0)" } : color && color.startsWith("#") && isSvgUrl(src) ? {
      filter: `
            brightness(0) 
            drop-shadow(0 0 0 ${color}) 
            drop-shadow(0 0 0 ${color}) 
            drop-shadow(0 0 0 ${color})
          `
    } : color ? { filter: `brightness(0) saturate(100%) invert(0.5) sepia(1) saturate(3000%) hue-rotate(${getHueRotate(color)})` } : {}
  }, "style")}${addAttribute(decorative ? "true" : void 0, "aria-hidden")}${addAttribute(decorative ? "presentation" : void 0, "role")}${addAttribute(priority ? void 0 : "lazy", "loading")} decoding="async"${addAttribute(priority ? "high" : "auto", "fetchpriority")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(srcset || void 0, "srcset")}${addAttribute(sizes || void 0, "sizes")}${spreadAttributes(rest)}>`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/LazyImage.astro", void 0);

const $$Astro$8 = createAstro();
const $$Index$6 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index$6;
  const { currentLang } = Astro2.props;
  const messages = t("messagetop", { namespace: "common", locale: currentLang }) || [];
  return renderTemplate`${maybeRenderHead()}<div id="message-carousel" class="w-full bg-tertiary text-white py-8 md:py-4  relative overflow-hidden z-10"> <div class="container mx-auto px-4"> <div class="message-slider flex items-center justify-center min-h-[1.5rem] md:min-h-[2rem] relative"> ${messages.map((message, index) => renderTemplate`<div class="message-slide absolute w-full text-center transition-all duration-700 transform"${addAttribute(index, "data-index")}${addAttribute(index === 0 ? "opacity: 1; transform: translateY(0)" : "opacity: 0; transform: translateY(20px)", "style")}> ${message.link ? renderTemplate`<a${addAttribute(message.link, "href")} class="text-white hover:underline text-sm md:text-lg font-medium"> ${message.title} </a>` : renderTemplate`<span class="text-sm md:text-lg font-medium">${message.title}</span>`} </div>`)} </div> </div> <div class="absolute top-0 bottom-0 left-4 flex items-center"> <button id="prev-message" class="text-white p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300" aria-label="Mensaje anterior"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> </div> <div class="absolute top-0 bottom-0 right-4 flex items-center"> <button id="next-message" class="text-white p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300" aria-label="Siguiente mensaje"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </div> ${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/MessageCarousel/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/MessageCarousel/index.astro", void 0);

const headerColors = {
  // Configuración por defecto (se aplica a todas las páginas)
  default: {
    textColor: "text-white",
    backgroundColor: "bg-blue-900",
    hoverTextColor: "hover:text-gray-300",
    hoverBackgroundColor: "hover:bg-blue-800",
    showMessageCarousel: true
  },
  yummiesone: {
    textColor: "text-primary",
    backgroundColor: "bg-brown",
    hoverTextColor: "hover:text-secondary",
    hoverBackgroundColor: "hover:bg-primary",
    showMessageCarousel: false
  },
  // Configuración para la página de brands
  brands: {
    textColor: "text-primary",
    backgroundColor: "bg-transparent",
    hoverTextColor: "hover:text-primary",
    hoverBackgroundColor: "hover:bg-blue-800",
    showMessageCarousel: false
  },
  // Configuración para la página de blog
  blog: {
    textColor: "text-white",
    backgroundColor: "bg-transparent",
    hoverTextColor: "hover:text-primary",
    hoverBackgroundColor: "hover:bg-gray-100",
    showMessageCarousel: false
  },
  // Configuración para la página de productos
  products: {
    textColor: "text-white",
    backgroundColor: "bg-blue-900",
    hoverTextColor: "hover:text-gray-300",
    hoverBackgroundColor: "hover:bg-blue-800",
    showMessageCarousel: true
  },
  // Configuración para la página de recetas
  recipes: {
    textColor: "text-primary",
    backgroundColor: "bg-white",
    hoverTextColor: "hover:text-primary",
    hoverBackgroundColor: "hover:bg-primary",
    showMessageCarousel: false
  },
  // Configuración para la página de contacto
  contact: {
    textColor: "text-primary",
    backgroundColor: "bg-white",
    hoverTextColor: "hover:text-primary",
    hoverBackgroundColor: "hover:bg-primary",
    showMessageCarousel: false
  },
  // Configuración para la página de noticias
  news: {
    textColor: "text-white",
    backgroundColor: "bg-purple-800",
    hoverTextColor: "hover:text-purple-200",
    hoverBackgroundColor: "hover:bg-purple-700",
    showMessageCarousel: false
  },
  // Configuración para la página de inicio
  home: {
    textColor: "text-white",
    backgroundColor: "bg-blue-900",
    hoverTextColor: "hover:text-gray-300",
    hoverBackgroundColor: "hover:bg-blue-800",
    showMessageCarousel: true
  },
  // Configuración para la página de nosotros
  about: {
    textColor: "text-primary",
    backgroundColor: "bg-brown",
    hoverTextColor: "hover:text-white",
    hoverBackgroundColor: "hover:bg-secondary",
    showMessageCarousel: false
  }
};
function getHeaderColors(pathname) {
  const path = pathname.toLowerCase();
  if (path.includes("/brands") || path.includes("/marcas")) {
    return headerColors.brands;
  }
  if (path.includes("/blog") || path.includes("/noticias")) {
    return headerColors.blog;
  }
  if (path.includes("/products") || path.includes("/productos")) {
    return headerColors.products;
  }
  if (path.includes("/recipes") || path.includes("/recetas")) {
    return headerColors.recipes;
  }
  if (path.includes("/contact")) {
    return headerColors.contact;
  }
  if (path.includes("/news")) {
    return headerColors.news;
  }
  if (path.includes("/yummiesone")) {
    return headerColors.yummiesone;
  }
  if (path.includes("/about") || path.includes("/nosotros")) {
    return headerColors.about;
  }
  if (path === "/" || path === "/es" || path === "/en" || path.endsWith("/index")) {
    return headerColors.home;
  }
  return headerColors.default;
}

const $$Astro$7 = createAstro();
const $$Index$5 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$5;
  const { currentLang } = Astro2.props;
  const logosData = logos;
  const { pathname } = Astro2.url;
  const headerColorConfig = getHeaderColors(pathname);
  return renderTemplate`${maybeRenderHead()}<header id="site-header"${addAttribute(`relative w-full transition-all duration-300 font-sans flex flex-col ${headerColorConfig.textColor}`, "class")}${addAttribute(JSON.stringify(headerColorConfig), "data-header-config")}> <!-- Banner superior azul claro con mensaje --> ${headerColorConfig.showMessageCarousel && renderTemplate`${renderComponent($$result, "MessageCarousel", $$Index$6, { "currentLang": currentLang })}`} <!-- Navbar principal - ocupa el 100% del ancho --> <div${addAttribute(`w-full ${headerColorConfig.backgroundColor}`, "class")}> <!-- Navbar de Desktop --> <div class="hidden md:block"> ${renderComponent($$result, "DesktopNavbar", $$Index$8, { "currentLang": currentLang, "headerColorConfig": headerColorConfig })} </div> <!-- Navegación Móvil --> <nav${addAttribute(`mobile-nav md:hidden w-full py-2 px-4 flex justify-between items-center ${headerColorConfig.backgroundColor}`, "class")}> <!-- Logo para Móvil --> <div class="logo-container"> <a${addAttribute(`/${currentLang}/`, "href")} class="flex-shrink-0"> ${renderComponent($$result, "LocalizedImage", $$LazyImage, { "src": logosData.principal.url, "alt": logosData.principal.alt, "class": "h-12 w-auto object-contain", "loading": "eager", "width": "120", "height": "48", "priority": true })} </a> </div> <!-- Mobile Menu Button --> <div class="menu-button-container"> ${renderComponent($$result, "MobileMenuButton", $$Index$7, { "currentLang": currentLang, "headerColorConfig": headerColorConfig })} </div> </nav> </div> </header> ${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/Header/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/Header/index.astro", void 0);

const $$Skeleton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-100 animate-pulse"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> ${Array.from({ length: 4 }).map(() => renderTemplate`<div> <div class="h-6 w-24 bg-gray-300 rounded mb-4"></div> <div class="space-y-2"> ${Array.from({ length: 4 }).map(() => renderTemplate`<div class="h-4 w-3/4 bg-gray-300 rounded"></div>`)} </div> </div>`)} </div> <div class="mt-12 pt-8 border-t border-gray-200"> <div class="flex flex-col md:flex-row justify-between items-center"> <div class="h-6 w-32 bg-gray-300 rounded mb-4 md:mb-0"></div> <div class="flex space-x-6"> ${Array.from({ length: 4 }).map(() => renderTemplate`<div class="h-6 w-6 bg-gray-300 rounded-full"></div>`)} </div> </div> </div> </div> </footer>`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/Footer/Skeleton.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$4;
  const {
    currentLang,
    variant = "footer",
    customTitle,
    customPlaceholder,
    customButtonText,
    centered = false,
    class: className = ""
  } = Astro2.props;
  const title = customTitle || (variant === "home" ? t("socialmedia.newsletter", { namespace: "home", locale: currentLang }) : t("footer.newsletter_title", { namespace: "common", locale: currentLang }));
  const placeholder = customPlaceholder || (variant === "home" ? t("newsletter.placeholder", { namespace: "home", locale: currentLang }) : t("footer.newsletter_placeholder", { namespace: "common", locale: currentLang }));
  const buttonText = customButtonText || (variant === "home" ? t("newsletter.buttonText", { namespace: "home", locale: currentLang }) : t("footer.newsletter_button", { namespace: "common", locale: currentLang }));
  const requiredMessage = t("form_validation.required", { namespace: "common", locale: currentLang });
  const invalidEmailMessage = t("form_validation.invalid_email", { namespace: "common", locale: currentLang });
  const successMessage = t("subscribe.success", { namespace: "common", locale: currentLang});
  const apiHost = "https://api-crm.yummiespromociones.com/api";
  const subscribePath = "/v1/auth/email/custom";
  const alignmentClasses = centered ? "mx-auto text-center items-center" : "md:mx-0 md:text-left md:items-start";
  const variantClasses = variant === "home" ? "bg-white text-primary shadow-md rounded-lg p-6" : "";
  const formId = `subscribe-form-${Math.random().toString(36).substring(2, 9)}`;
  return renderTemplate(_a || (_a = __template(["", "<div", "", "> ", ' <form class="flex flex-col w-full" method="post" data-subscribe-form> <div class="mb-2 relative w-full"> <input type="email" name="email"', "", "", ' required> <div class="text-red-500 text-xs mt-1 hidden error-message" data-error-type="required"> ', ' </div> <div class="text-red-500 text-xs mt-1 hidden error-message" data-error-type="invalid-email"> ', ' </div> </div> <button type="submit"', "", "> ", ' </button> <div class="text-green-500 text-sm mt-2 hidden success-message"> ', " </div> </form> </div> <script>(function(){", `
  // Importar el servicio de suscripción dinámicamente para uso en el navegador
  import('/src/services/SubscribeService.js').then(({ submitSubscription }) => {
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById(formId)?.querySelector('form[data-subscribe-form]');
      
      if (!form) return;
      
      const emailInput = form.querySelector('input[name="email"]');
      const requiredError = form.querySelector('[data-error-type="required"]');
      const invalidEmailError = form.querySelector('[data-error-type="invalid-email"]');
      const successMessage = form.querySelector('.success-message');
      
      // Ocultar todos los mensajes de error
      const hideAllErrors = () => {
        if (requiredError) requiredError.classList.add('hidden');
        if (invalidEmailError) invalidEmailError.classList.add('hidden');
      };
      
      // Validar email
      const validateEmail = (email) => {
        return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
      };
      
      // Manejar envío del formulario
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideAllErrors();
        
        // Validar que exista valor
        if (!emailInput || !emailInput.value.trim()) {
          if (requiredError) requiredError.classList.remove('hidden');
          return;
        }
        
        // Validar formato de email
        if (!validateEmail(emailInput.value)) {
          if (invalidEmailError) invalidEmailError.classList.remove('hidden');
          return;
        }
        
        try {
          // Usar el servicio para enviar la suscripción
          const response = await submitSubscription(emailInput.value);
          
          // Mostrar mensaje de éxito o error según respuesta
          if (response.success) {
            if (successMessage) {
              successMessage.classList.remove('hidden');
              emailInput.value = '';
              
              // Ocultar mensaje de éxito después de 5 segundos
              setTimeout(() => {
                successMessage.classList.add('hidden');
              }, 5000);
            }
          } else {
            throw new Error(response.message || 'Error al procesar la suscripción');
          }
        } catch (error) {
          console.error('Error al procesar la suscripción:', error);
          // Se podría mostrar un mensaje de error específico aquí
        }
      });
      
      // Limpiar mensajes de error al escribir
      if (emailInput) {
        emailInput.addEventListener('input', () => {
          hideAllErrors();
          if (successMessage) successMessage.classList.add('hidden');
        });
      }
    });
  }).catch(err => {
    console.error('Error al cargar el servicio de suscripción:', err);
  });
})();</script>`], ["", "<div", "", "> ", ' <form class="flex flex-col w-full" method="post" data-subscribe-form> <div class="mb-2 relative w-full"> <input type="email" name="email"', "", "", ' required> <div class="text-red-500 text-xs mt-1 hidden error-message" data-error-type="required"> ', ' </div> <div class="text-red-500 text-xs mt-1 hidden error-message" data-error-type="invalid-email"> ', ' </div> </div> <button type="submit"', "", "> ", ' </button> <div class="text-green-500 text-sm mt-2 hidden success-message"> ', " </div> </form> </div> <script>(function(){", `
  // Importar el servicio de suscripción dinámicamente para uso en el navegador
  import('/src/services/SubscribeService.js').then(({ submitSubscription }) => {
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById(formId)?.querySelector('form[data-subscribe-form]');
      
      if (!form) return;
      
      const emailInput = form.querySelector('input[name="email"]');
      const requiredError = form.querySelector('[data-error-type="required"]');
      const invalidEmailError = form.querySelector('[data-error-type="invalid-email"]');
      const successMessage = form.querySelector('.success-message');
      
      // Ocultar todos los mensajes de error
      const hideAllErrors = () => {
        if (requiredError) requiredError.classList.add('hidden');
        if (invalidEmailError) invalidEmailError.classList.add('hidden');
      };
      
      // Validar email
      const validateEmail = (email) => {
        return /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/.test(email);
      };
      
      // Manejar envío del formulario
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideAllErrors();
        
        // Validar que exista valor
        if (!emailInput || !emailInput.value.trim()) {
          if (requiredError) requiredError.classList.remove('hidden');
          return;
        }
        
        // Validar formato de email
        if (!validateEmail(emailInput.value)) {
          if (invalidEmailError) invalidEmailError.classList.remove('hidden');
          return;
        }
        
        try {
          // Usar el servicio para enviar la suscripción
          const response = await submitSubscription(emailInput.value);
          
          // Mostrar mensaje de éxito o error según respuesta
          if (response.success) {
            if (successMessage) {
              successMessage.classList.remove('hidden');
              emailInput.value = '';
              
              // Ocultar mensaje de éxito después de 5 segundos
              setTimeout(() => {
                successMessage.classList.add('hidden');
              }, 5000);
            }
          } else {
            throw new Error(response.message || 'Error al procesar la suscripción');
          }
        } catch (error) {
          console.error('Error al procesar la suscripción:', error);
          // Se podría mostrar un mensaje de error específico aquí
        }
      });
      
      // Limpiar mensajes de error al escribir
      if (emailInput) {
        emailInput.addEventListener('input', () => {
          hideAllErrors();
          if (successMessage) successMessage.classList.add('hidden');
        });
      }
    });
  }).catch(err => {
    console.error('Error al cargar el servicio de suscripción:', err);
  });
})();</script>`])), maybeRenderHead(), addAttribute(`subscribe-component w-full flex flex-col ${alignmentClasses} ${variantClasses} ${className}`, "class"), addAttribute(formId, "id"), title && renderTemplate`<h3${addAttribute(`font-title text-lg font-medium mb-3 ${variant === "home" ? "text-primary" : "text-white"}`, "class")}> ${title} </h3>`, addAttribute(placeholder, "placeholder"), addAttribute(`w-full max-w-xs px-4 py-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-primary 
          ${centered ? "mx-auto" : "mx-auto md:mx-0"}`, "class"), addAttribute(placeholder, "aria-label"), requiredMessage, invalidEmailMessage, addAttribute(`w-full max-w-xs bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 
        rounded-full transition-colors ${centered ? "mx-auto" : "mx-auto md:mx-0"}`, "class"), addAttribute(buttonText, "aria-label"), buttonText, successMessage, defineScriptVars({ formId, requiredMessage, invalidEmailMessage, successMessage, apiHost, subscribePath }));
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/Subscribe/index.astro", void 0);

const $$Astro$5 = createAstro();
const $$Index$3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$3;
  const { placeholder, buttonText, title, centered = false, class: className = "" } = Astro2.props;
  const currentLang = getLocale(Astro2.url.pathname) || "es";
  return renderTemplate`<!-- Wrapper que mantiene la estructura anterior para compatibilidad -->${maybeRenderHead()}<div${addAttribute(`newsletter-component w-full flex flex-col ${className}`, "class")}> <!-- Utilizamos el componente Subscribe pero mantenemos la misma API externa --> ${renderComponent($$result, "Subscribe", $$Index$4, { "currentLang": currentLang, "customTitle": title, "customPlaceholder": placeholder, "customButtonText": buttonText, "centered": centered, "class": "w-full" })} </div> <!-- Mantenemos este script para compatibilidad con código antiguo que pueda estar accediendo a estos elementos --> ${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/Newsletter/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/Newsletter/index.astro", void 0);

const $$Astro$4 = createAstro();
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$2;
  const { currentLang, iconColor = "white", iconSize = 24, centered = false, class: className = "" } = Astro2.props;
  const alignmentClasses = centered ? "mx-auto justify-center" : "md:mx-0 md:justify-start";
  const socialMediaObj = t("social_media", { namespace: "common", locale: currentLang });
  const socialMedia = socialMediaObj ? Object.values(socialMediaObj) : [];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-row space-x-4 ${alignmentClasses} ${className}`, "class")}> ${socialMedia.map((sm) => renderTemplate`<a${addAttribute(sm.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(sm.name, "title")}${addAttribute(`hover:text-gray-300 transition-colors`, "class")}> <span class="sr-only">${sm.name}</span> ${sm.iconUrl && renderTemplate`${renderComponent($$result, "LazyImage", $$LazyImage, { "src": sm.iconUrl, "alt": sm.alt || sm.name, "style": `height: ${iconSize}px; width: ${iconSize}px;`, "color": iconColor, "width": iconSize, "height": iconSize, "loading": "lazy" })}`} </a>`)} </div>`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/SocialMediaIcons/index.astro", void 0);

const $$Astro$3 = createAstro();
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { currentLang, loading = false } = Astro2.props;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const privacyPolicyText = t("footer.privacy_policy_text", { namespace: "common", locale: currentLang });
  const privacyPolicyUrl = t("footer.privacy_policy_url", { namespace: "common", locale: currentLang });
  const copyrightText = t("footer.copyright", { namespace: "common", locale: currentLang }).replace("{year}", currentYear.toString());
  const address = t("footer.address", { namespace: "common", locale: currentLang });
  const phone = t("footer.phone", { namespace: "common", locale: currentLang });
  const hours = t("footer.hours", { namespace: "common", locale: currentLang });
  const newsletterTitle = t("footer.newsletter_title", { namespace: "common", locale: currentLang });
  const newsletterPlaceholder = t("footer.newsletter_placeholder", { namespace: "common", locale: currentLang });
  const newsletterButton = t("footer.newsletter_button", { namespace: "common", locale: currentLang });
  return renderTemplate`${loading ? renderTemplate`${renderComponent($$result, "Skeleton", $$Skeleton, {})}` : renderTemplate`${maybeRenderHead()}<footer class="bg-cuaternary text-white py-8 px-4 sm:px-6 lg:px-8 font-sans"><div class="container mx-auto"><div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"><!-- Orden de columnas en mobile controlado con order-* --><!-- Columna 1: Información de contacto (segundo en mobile) --><div class="flex flex-col items-start md:items-start items-center space-y-4 order-2 md:order-1"><div class="flex items-center md:items-start space-x-2 justify-center md:justify-start">${renderComponent($$result, "LazyImage", $$LazyImage, { "src": generalAssets.locationIcon, "alt": "Ubicaci\xF3n", "class": "h-5 w-5 flex-shrink-0 mt-0.5", "color": "white", "width": 20, "height": 20 })}<span>${address}</span></div><div class="flex items-center space-x-2 justify-center md:justify-start">${renderComponent($$result, "LazyImage", $$LazyImage, { "src": generalAssets.phoneIcon, "alt": "Tel\xE9fono", "class": "h-5 w-5 flex-shrink-0", "color": "white", "width": 20, "height": 20 })}<span>${phone}</span></div><div class="flex items-center space-x-2 justify-center md:justify-start">${renderComponent($$result, "LazyImage", $$LazyImage, { "src": generalAssets.timeIcon, "alt": "Horario", "class": "h-5 w-5 flex-shrink-0", "color": "white", "width": 20, "height": 20 })}<span>${hours}</span></div></div><!-- Columna 2: Logo, política de privacidad y copyright (tercero en mobile) --><div class="flex flex-col items-center space-y-4 order-3 md:order-2"><a${addAttribute(`/${currentLang}/`, "href")} class="mb-2"><img${addAttribute(logos.principal.url, "src")}${addAttribute(logos.principal.alt, "alt")} class="h-16 w-auto mx-auto"></a><div><a${addAttribute(privacyPolicyUrl, "href")} class="text-sm hover:underline">${privacyPolicyText}</a></div><div class="text-xs opacity-80">${copyrightText}</div></div><!-- Columna 3: Newsletter y redes sociales (primero en mobile) --><div class="flex flex-col items-center md:items-start w-full order-1 md:order-3"><!-- Redes Sociales --><div class="mb-4">${renderComponent($$result, "SocialMediaIcons", $$Index$2, { "currentLang": currentLang, "iconColor": "white", "centered": false })}</div><!-- Newsletter -->${renderComponent($$result, "Newsletter", $$Index$3, { "title": newsletterTitle, "placeholder": newsletterPlaceholder, "buttonText": newsletterButton, "centered": false })}</div></div><!-- Sección inferior: Política de privacidad (mobile) y copyright --><div class="flex flex-col items-center text-center text-sm pt-4  border-opacity-20"><!-- Política de privacidad (solo visible en mobile) --><div class="md:hidden mb-2"><a${addAttribute(privacyPolicyUrl, "href")} class="hover:underline">${privacyPolicyText}</a></div></div><!-- Separador para la sección de contacto DINANT --><div class="w-full border-t border-primary border-opacity-20 mt-6 pt-6"><div class="container mx-auto"><div class="text-center mb-4"><h3 class="text-white  font-sans text-xl font-medium">DINANT - Contacto</h3></div><div class="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center"><!-- Guatemala --><div class="flex items-center space-x-2"><span class="text-2xl" role="img" aria-label="Guatemala">🇬🇹</span><span>(+502) 2502-7050</span></div><!-- El Salvador --><div class="flex items-center space-x-2"><span class="text-2xl" role="img" aria-label="El Salvador">🇸🇻</span><span>(+503) 2510-8300</span></div><!-- Costa Rica --><div class="flex items-center space-x-2"><span class="text-2xl" role="img" aria-label="Costa Rica">🇨🇷</span><span>(+506) 2234-7259</span></div><!-- República Dominicana --><div class="flex items-center space-x-2"><span class="text-2xl" role="img" aria-label="República Dominicana">🇩🇴</span><span>01 809-273 1042</span></div><!-- Nicaragua --><div class="flex items-center space-x-2"><span class="text-2xl" role="img" aria-label="Nicaragua">🇳🇮</span><span>2275-3370</span></div><!-- Honduras --><div class="flex items-center space-x-2"><span class="text-2xl" role="img" aria-label="Honduras">🇭🇳</span><span>(+505) 2255-7480</span></div></div></div></div></div></footer>`}${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/Footer/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/Footer/index.astro", void 0);

const $$Astro$2 = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  const { currentLang, headerColorConfig } = Astro2.props;
  const socialMedia = t("social_media", { namespace: "common", locale: currentLang });
  const menuItems = t("menu_items", { namespace: "common", locale: currentLang });
  t("menu_labels.open_main_menu", { namespace: "common", locale: currentLang }) || "Open main menu";
  const closeMenuLabel = t("menu_labels.close_main_menu", { namespace: "common", locale: currentLang }) || "Close main menu";
  return renderTemplate`<!-- Menú Móvil Global -->${maybeRenderHead()}<div id="mobile-menu" class="hidden md:hidden fixed inset-0 w-screen h-screen z-[2147483647] bg-primary bg-opacity-80 overflow-y-auto"${addAttribute(currentLang, "data-current-lang")}> <div class="container mx-auto px-4 py-8"> <div class="flex justify-between items-center mb-8"> <a${addAttribute(`/${currentLang}/`, "href")} class="block"> <img${addAttribute(logos.principal.url, "src")}${addAttribute(logos.principal.alt, "alt")} class="h-10 w-auto"> </a> <button id="mobile-menu-close" type="button" class="text-white"> <span class="sr-only">${closeMenuLabel}</span> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <nav class="flex flex-col items-center space-y-3 text-center w-full text-white" id="mobile-menu-items"> ${menuItems && menuItems.map((item) => renderTemplate`<div class="w-full"> <div class="flex items-center justify-center text-white"> ${item.submenu ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="#" class="menu-parent block text-xl font-sans font-medium hover:text-gray-300 transition-colors py-2"> ${item.text} </a> <button class="menu-toggle px-2 py-1 text-white hover:text-gray-300 ml-1"> <svg class="w-5 h-5 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> ` })}` : renderTemplate`<a${addAttribute(item.href, "href")} class="block text-xl font-sans font-medium hover:text-gray-300 transition-colors py-2"> ${item.text} </a>`} </div> ${item.submenu && renderTemplate`<div class="submenu-container hidden mt-1 space-y-1 pl-4 text-center"> ${item.submenu.map((subItem) => renderTemplate`<div> <div class="flex items-center justify-center"> ${subItem.submenu ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="#" class="submenu-parent block text-lg font-sans font-normal text-gray-400 hover:text-gray-200 transition-colors py-1">${subItem.text}</a> <button class="submenu-toggle px-2 py-1 text-gray-400 hover:text-gray-200 ml-1"> <svg class="w-4 h-4 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> ` })}` : renderTemplate`<a${addAttribute(subItem.href, "href")} class="block text-lg font-sans font-normal text-gray-400 hover:text-gray-200 transition-colors py-1">${subItem.text}</a>`} </div> ${subItem.submenu && renderTemplate`<div class="third-level-submenu hidden mt-1 space-y-1 pl-4 text-center"> ${subItem.submenu.map((thirdItem) => renderTemplate`<a${addAttribute(thirdItem.href, "href")} class="block text-md font-sans font-normal text-gray-500 hover:text-gray-300 transition-colors py-1 text-center">${thirdItem.text}</a>`)} </div>`} </div>`)} </div>`} </div>`)} </nav> <!-- Selector de Idioma Móvil --> <div class="mt-6 mb-6 flex justify-center"> ${renderComponent($$result, "LanguageSwitcher", $$LanguageSwitcher, { "activeLocale": currentLang, "headerColorConfig": headerColorConfig })} </div> <div class="mt-auto flex space-x-4"> ${socialMedia && Object.entries(socialMedia).map(([key, social]) => {
    const sm = social;
    return renderTemplate`<a${addAttribute(sm.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(sm.name, "title")} class="text-white hover:text-gray-300"> <span class="sr-only">${sm.name}</span> ${sm.iconUrl && renderTemplate`${renderComponent($$result, "LocalizedImage", $$LazyImage, { "assetKey": sm.iconUrl, "alt": sm.alt || sm.name, "class": "h-6 w-6 filter invert", "width": 24, "height": 24, "loading": "lazy" })}`} </a>`;
  })} </div> </div> </div> ${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/MobileMenu/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/MobileMenu/index.astro", void 0);

const $$I18NProvider = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderSlot($$result, $$slots["default"])} ${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/i18n/I18nProvider.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/i18n/I18nProvider.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description, class: className } = Astro2.props;
  const pathSegments = Astro2.url.pathname.split("/");
  const langFromUrl = pathSegments[1];
  const validLocales = ["es", "en"];
  const currentLang = validLocales.includes(langFromUrl) ? langFromUrl : "es";
  const { pathname } = Astro2.url;
  const headerColorConfig = getHeaderColors(pathname);
  return renderTemplate`<html${addAttribute(currentLang, "lang")}> <head>${renderComponent($$result, "GoogleTagManager", $$GoogleTagManager, {})}${renderComponent($$result, "Favicon", $$Favicon, {})}<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${title && renderTemplate`<title> Snacks Yummies -  ${title}</title>`}${description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`}${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body${addAttribute(`font-sans ${className || ""}`, "class")}>  ${renderComponent($$result, "I18nProvider", $$I18NProvider, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Index$5, { "currentLang": currentLang })} <main${addAttribute(renderTransition($$result2, "kzjqlc6g", "slide", ""), "data-astro-transition-scope")}> ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "Footer", $$Index$1, { "currentLang": currentLang })} ` })} <!-- Menú móvil al final del body para máximo z-index --> ${renderComponent($$result, "MobileMenu", $$Index, { "currentLang": currentLang, "headerColorConfig": headerColorConfig })} </body></html>`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/layouts/MainLayout.astro", "self");

export { $$LazyImage as $, $$MainLayout as a, generalAssets as b, $$Index$3 as c, $$Index$2 as d, getHeaderColors as g };
