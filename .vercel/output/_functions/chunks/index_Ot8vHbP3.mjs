import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, f as renderComponent, d as renderTemplate, F as Fragment, e as renderTransition, j as defineScriptVars, r as renderScript } from './astro/server_XONErzoU.mjs';
import 'kleur/colors';
import { $ as $$LazyImage, c as $$Index$7, d as $$Index$8 } from './MainLayout_C_bIfuhT.mjs';
import { t, g as getLocale } from './i18n_N2D6iQyo.mjs';
import 'clsx';
/* empty css                         */
/* empty css                            */
import { $ as $$CrownTitle, a as $$Index$9 } from './CrownTitle_BRFl1htQ.mjs';

const $$Astro$8 = createAstro();
const $$CarouselSlide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CarouselSlide;
  const { slide, priority = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="swiper-slide relative h-full"> ${slide.link ? renderTemplate`<a${addAttribute(slide.link, "href")} class="block w-full h-full"> <div class="w-full h-full overflow-hidden"> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": slide.mobile, "alt": slide.alt, "class": "w-full h-full object-cover object-center md:hidden", "priority": priority })} ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": slide.desktop, "alt": slide.alt, "class": "w-full h-full object-cover object-center hidden md:block", "priority": priority })} </div> <div class="absolute inset-x-0 bottom-8 flex flex-col items-center justify-center text-center text-white px-4"> <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg">${slide.title}</h2> <p class="text-lg md:text-xl max-w-2xl drop-shadow">${slide.subtitle}</p> </div> </a>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="w-full h-full overflow-hidden"> ${renderComponent($$result2, "LazyImage", $$LazyImage, { "src": slide.mobile, "alt": slide.alt, "class": "w-full h-full object-cover object-center md:hidden", "priority": priority })} ${renderComponent($$result2, "LazyImage", $$LazyImage, { "src": slide.desktop, "alt": slide.alt, "class": "w-full h-full object-cover object-center hidden md:block", "priority": priority })} </div> <div class="absolute inset-x-0 bottom-8 flex flex-col items-center justify-center text-center text-white px-4"> <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg">${slide.title}</h2> <p class="text-lg md:text-xl max-w-2xl drop-shadow">${slide.subtitle}</p> </div> ` })}`} </div>`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/CarouselSlide.astro", void 0);

const $$Astro$7 = createAstro();
const $$Skeleton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Skeleton;
  const { items = 1 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden h-[300px] md:h-[90vh] min-h-[300px] bg-gray-100 animate-pulse"> <div class="swiper-container h-full"> <div class="swiper-wrapper"> ${Array.from({ length: items }).map(() => renderTemplate`<div class="swiper-slide h-full bg-gray-200"> <div class="absolute inset-x-0 bottom-8 flex flex-col items-center justify-center text-center px-4"> <div class="h-8 w-3/4 bg-gray-300 rounded mb-2"></div> <div class="h-6 w-1/2 bg-gray-300 rounded"></div> </div> </div>`)} </div> </div> </div>`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/Carousel/Skeleton.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$6 = createAstro();
const $$Index$6 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$6;
  const { slides = [], loading = false } = Astro2.props;
  const firstSlide = slides[0] || {};
  const preloadFirstImage = firstSlide.mobile && firstSlide.desktop;
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<!-- Importar Swiper desde CDN para garantizar disponibilidad --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"><script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"><\/script><!-- Cargar scripts del carrusel solo en el cliente --><script>(function(){', "\n  document.addEventListener('DOMContentLoaded', () => {\n    setTimeout(() => {\n      try {\n        const swiper = new Swiper(carouselSelector, {\n          loop: true,\n          autoplay: {\n            delay: 5000,\n            disableOnInteraction: false,\n          },\n          navigation: {\n            nextEl: '.swiper-button-next',\n            prevEl: '.swiper-button-prev',\n          },\n          pagination: {\n            el: '.swiper-pagination',\n            clickable: true,\n          },\n          // Mejorar la respuesta t\xE1ctil en m\xF3viles\n          touchRatio: 1.5,\n          touchAngle: 45,\n          touchMoveStopPropagation: true,\n          touchStartPreventDefault: false,\n          touchStartForcePreventDefault: false,\n          threshold: 5, // Umbral m\xE1s bajo para detectar deslizamientos\n          on: {\n            init: function() {\n              console.log('Swiper inicializado correctamente');\n            }\n          }\n        });\n        \n        // Eliminar los event listeners adicionales para evitar conflictos\n        // y dejar que Swiper maneje directamente los eventos t\xE1ctiles\n        \n        window.addEventListener('load', () => swiper.update());\n        \n        // Asegurar que el swiper se actualice cuando cambie la orientaci\xF3n del dispositivo\n        window.addEventListener('orientationchange', () => {\n          setTimeout(() => swiper.update(), 200);\n        });\n      } catch (error) {\n        console.error('Error al inicializar Swiper:', error);\n      }\n    }, 500);\n  });\n})();<\/script>", ""])), defineScriptVars({ carouselSelector: ".swiper-container.main-carousel" }), loading ? renderTemplate`${renderComponent($$result, "Skeleton", $$Skeleton, { "items": 3 })}` : renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden w-screen"${addAttribute(renderTransition($$result, "7r4jo6il", "fade", ""), "data-astro-transition-scope")}>${preloadFirstImage && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<link rel="preload"${addAttribute(firstSlide.mobile, "href")} as="image" media="(max-width: 767px)"><link rel="preload"${addAttribute(firstSlide.desktop, "href")} as="image" media="(min-width: 768px)">` })}`}<!-- Swiper container --><div class="swiper-container main-carousel"><div class="swiper-wrapper">${slides.map((slide, index) => renderTemplate`${renderComponent($$result, "CarouselSlide", $$CarouselSlide, { "slide": {
    desktop: slide.desktop,
    mobile: slide.mobile,
    alt: slide.alt || "Snacks Yummies",
    title: slide.title || "",
    subtitle: slide.subtitle || "",
    link: slide.link || ""
  }, "priority": index === 0 })}`)}</div><!-- Controles de navegación --><div class="swiper-button-next"></div><div class="swiper-button-prev"></div><div class="swiper-pagination"></div></div></div>`);
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/Carousel/index.astro", "self");

const $$Astro$5 = createAstro();
const $$Index$5 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$5;
  const {
    products,
    class: className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> ${renderComponent($$result, "SimpleProductCarouselReact", null, { "client:only": "react", "products": products, "client:component-hydration": "only", "client:component-path": "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/SimpleProductCarousel/index.jsx", "client:component-export": "default" })} </div> <!-- Font Awesome CSS for carousel arrows --> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/SimpleProductCarousel/index.astro", void 0);

const $$Astro$4 = createAstro();
const $$Index$4 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$4;
  const {
    count = 8,
    // Reduced default count for better performance
    duration = 6,
    // Increased duration for smoother appearance
    minSize = 10,
    maxSize = 40,
    containerClass = ""
  } = Astro2.props;
  const hearts = Array.from({ length: count }).map((_, i) => {
    const delay = i / count * duration;
    const left = 10 + Math.random() * 80;
    const size = minSize + Math.floor(Math.random() * 8);
    const horizontalMovement = -5 + Math.random() * 10;
    return { delay, left, size, horizontalMovement };
  });
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`anim-heart-container relative overflow-hidden ${containerClass}`, "class")} data-astro-cid-2yeehujy> ${hearts.map((heart) => renderTemplate`<div class="anim-heart absolute bottom-0 pointer-events-none will-change-transform"${addAttribute(`
        left: ${heart.left}%; 
        width: ${heart.size}px; 
        height: ${heart.size}px;
        animation-delay: ${heart.delay}s;
        animation-duration: ${duration}s;
        transform: translateX(${heart.horizontalMovement}px);
      `, "style")} data-astro-cid-2yeehujy> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": "https://snack.yummiespromociones.com/snacksyummies/heart-icon.webp", "alt": "Heart", "width": "${heart.size}", "height": "${heart.size}", "loading": "lazy", "class": "w-full h-full object-contain", "data-astro-cid-2yeehujy": true })} </div>`)} </div>  ${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/AnimHeart/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/AnimHeart/index.astro", void 0);

const $$Astro$3 = createAstro();
const $$Index$3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  const {
    imageUrl,
    count = 10,
    baseSize = 50,
    sizeVariation = 30,
    containerWidth = "100%",
    containerHeight = "100%",
    alt = "Chip animado",
    burstOnHover = true,
    burstCount = 5,
    mobileCount,
    mobileBaseSize,
    mobileContainerWidth,
    mobileContainerHeight
  } = Astro2.props;
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  const desktopCount = count;
  const desktopBaseSize = baseSize;
  const chips = Array.from({ length: desktopCount }).map((_, i) => {
    const size = desktopBaseSize * (1 - sizeVariation / 100 * random(0, 1));
    const xPos = random(10, 90);
    const delay = random(0, 3);
    const duration = random(2, 5);
    const rotation = random(-30, 30);
    return {
      id: `chip-${i}`,
      size,
      xPos,
      delay,
      duration,
      rotation
    };
  });
  const burstChips = Array.from({ length: burstCount }).map((_, i) => {
    const size = desktopBaseSize * (1 - sizeVariation / 100 * random(0, 1));
    const xPos = random(10, 90);
    const delay = random(0, 1);
    const duration = random(1.5, 3);
    const rotation = random(-45, 45);
    return {
      id: `burst-chip-${i}`,
      size,
      xPos,
      delay,
      duration,
      rotation
    };
  });
  return renderTemplate`${maybeRenderHead()}<div class="chips-container"${addAttribute(`width: ${containerWidth}; height: ${containerHeight};`, "style")} data-astro-cid-i477dwof> <!-- Chips iniciales --> ${chips.map((chip) => renderTemplate`<div class="chip"${addAttribute(`
        --size: ${chip.size}px;
        --x-pos: ${chip.xPos}%;
        --delay: ${chip.delay}s;
        --duration: ${chip.duration}s;
        --rotation: ${chip.rotation}deg;
      `, "style")} data-astro-cid-i477dwof> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": imageUrl, "alt": alt, "width": chip.size, "height": chip.size, "loading": "lazy", "data-astro-cid-i477dwof": true })} </div>`)} <!-- Chips que aparecen al pasar el mouse (ocultos inicialmente) --> ${burstOnHover && burstChips.map((chip) => renderTemplate`<div class="chip burst-chip"${addAttribute(`
        --size: ${chip.size}px;
        --x-pos: ${chip.xPos}%;
        --delay: ${chip.delay}s;
        --duration: ${chip.duration}s;
        --rotation: ${chip.rotation}deg;
      `, "style")} data-astro-cid-i477dwof> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": imageUrl, "alt": alt, "width": chip.size, "height": chip.size, "loading": "lazy", "data-astro-cid-i477dwof": true })} </div>`)} </div> ${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/ChipsFromBag/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/ChipsFromBag/index.astro", void 0);

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const { postUrl, width = "100%", height = "600px", className = "" } = Astro2.props;
  function extractInstagramId(url) {
    const patterns = [
      /instagram\.com\/p\/([\w-]+)/i,
      // Posts normales
      /instagram\.com\/reel\/([\w-]+)/i,
      // Reels
      /instagram\.com\/tv\/([\w-]+)/i
      // IGTV
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1].split(/\?|\//)[0];
      }
    }
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 1].split("?")[0];
  }
  const postId = extractInstagramId(postUrl);
  const embedUrl = `https://www.instagram.com/p/${postId}/embed/`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`instagram-embed ${className}`, "class")}${addAttribute({ width, height, maxWidth: "100%", margin: "0 auto" }, "style")} data-astro-cid-lynb2xik> <iframe${addAttribute(embedUrl, "src")} width="100%" height="100%" frameborder="0" scrolling="no" allowtransparency="true" loading="lazy" title="Instagram Post" data-astro-cid-lynb2xik></iframe> </div> `;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/InstagramEmbed/index.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { deliveryTitle, deliverySubTitle, deliveryApps } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section id="delivery" class="w-full py-12 flex flex-col items-center justify-center relative overflow-hidden" style="background-color: #008ddd;" data-astro-cid-ndfz56iy> <!-- Ondas de sonar --> <div class="sonar-wave sonar-wave-1" data-astro-cid-ndfz56iy></div> <div class="sonar-wave sonar-wave-2" data-astro-cid-ndfz56iy></div> <div class="sonar-wave sonar-wave-3" data-astro-cid-ndfz56iy></div> <div class="container mx-auto px-4 relative z-10" data-astro-cid-ndfz56iy> <!-- Icono de geolocalizaci\xF3n flotante --> <div class="flex justify-center mb-6" data-astro-cid-ndfz56iy> <div class="animate-float-gentle" data-astro-cid-ndfz56iy> <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-700" data-astro-cid-ndfz56iy> <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" data-astro-cid-ndfz56iy></path> </svg> </div> </div> <!-- T\xEDtulo de la secci\xF3n --> <div class="text-center mb-8" data-astro-cid-ndfz56iy> <h2 class="text-white font-sans uppercase font-bold text-xl md:text-4xl mb-2" data-astro-cid-ndfz56iy> ', ' </h2> <h3 class="text-white font-title uppercase font-bold text-3xl md:text-6xl" data-astro-cid-ndfz56iy> ', ' </h3> </div> <!-- Contenedor para las apps de delivery --> <div id="delivery-app-container" class="flex justify-center items-center" data-astro-cid-ndfz56iy> <div id="delivery-loading" class="text-center p-8 max-w-sm animate-pulse" data-astro-cid-ndfz56iy> <div class="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4" data-astro-cid-ndfz56iy></div> <div class="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2" data-astro-cid-ndfz56iy></div> <div class="h-8 bg-gray-300 rounded w-full" data-astro-cid-ndfz56iy></div> <p class="text-white mt-2" data-astro-cid-ndfz56iy>Detectando tu ubicaci\xF3n...</p> </div> <div id="delivery-content" class="hidden" data-astro-cid-ndfz56iy> <!-- Las apps se cargar\xE1n din\xE1micamente aqu\xED --> </div> </div> </div> </section> <script>(function(){', "\n  // Funci\xF3n para mostrar apps de delivery seg\xFAn el pa\xEDs detectado\n  function showDeliveryApps(detectedCountry) {\n    const loadingElement = document.getElementById('delivery-loading');\n    const contentElement = document.getElementById('delivery-content');\n    \n    // Verificar que los elementos existen\n    if (!loadingElement || !contentElement) {\n      console.error('Elementos del DOM no encontrados');\n      return;\n    }\n\n    // Limpiar contenido anterior\n    contentElement.innerHTML = '';\n\n    // Buscar si hay app para el pa\xEDs detectado\n    const userCountryApp = detectedCountry ? \n      deliveryApps.find(app => app.country.toLowerCase() === detectedCountry.toLowerCase()) : \n      null;\n\n    let appsToShow = [];\n    let showCountryIndicator = true;\n\n    if (userCountryApp) {\n      // Si hay app para el pa\xEDs del usuario, solo mostrar esa\n      appsToShow = [userCountryApp];\n      showCountryIndicator = false;\n      console.log(`Mostrando solo la app de tu pa\xEDs: ${userCountryApp.app_name} (${detectedCountry})`);\n    } else {\n      // Si no hay app para el pa\xEDs o no se detect\xF3 pa\xEDs, mostrar todas\n      appsToShow = deliveryApps;\n      showCountryIndicator = true;\n      console.log(`No hay app espec\xEDfica para ${detectedCountry || 'pa\xEDs no detectado'}, mostrando todas las apps`);\n    }\n\n    // Crear una tarjeta para cada app a mostrar\n    appsToShow.forEach(app => {\n      const appCard = document.createElement('div');\n      appCard.className = `text-center transition-all duration-300 hover:scale-105`;\n      \n      appCard.innerHTML = `\n        <div class=\"relative\">\n          <a href=\"${app.app_url}\" target=\"_blank\" rel=\"noopener noreferrer\" >\n          <img src=\"${app.app_icon}\" alt=\"Logo de ${app.app_name}\" class=\"w-40 h-40 bg-white mx-auto mb-4 rounded-full object-cover shadow-lg p-4\">\n          ${showCountryIndicator ? `<p class=\"text-sm text-gray-600 mb-4\">Disponible en <span class=\"font-semibold text-secondary\">${app.country}</span></p>` : ''}\n          </a>\n         \n        </div>\n      `;\n      \n      contentElement.appendChild(appCard);\n    });\n\n    // Ajustar el grid seg\xFAn la cantidad de apps\n    if (appsToShow.length === 1) {\n      contentElement.className = 'flex justify-center max-w-sm mx-auto';\n    } else {\n      contentElement.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl';\n    }\n\n    // Ocultar loading y mostrar contenido\n    loadingElement.classList.add('hidden');\n    contentElement.classList.remove('hidden');\n    \n    console.log(`Mostrando ${appsToShow.length} app(s) de delivery. Pa\xEDs detectado: ${detectedCountry || 'No detectado'}`);\n  }\n\n  // Funci\xF3n para detectar pa\xEDs del usuario\n  async function detectUserCountry() {\n    try {\n      console.log('Iniciando detecci\xF3n de pa\xEDs...');\n      \n      // Intentar usar nuestra API primero\n      const response = await fetch('/api/country');\n      if (response.ok) {\n        const data = await response.json();\n        console.log(`Pa\xEDs detectado: ${data.country} ${data.countryCode} (${data.source?.toUpperCase()})`);\n        return data.country;\n      }\n      \n      // Fallback a APIs externas si nuestra API falla\n      console.log('API local fall\xF3, intentando con APIs externas...');\n      \n      // Intentar con ipapi.co\n      try {\n        const ipapiResponse = await fetch('https://ipapi.co/json/');\n        if (ipapiResponse.ok) {\n          const ipapiData = await ipapiResponse.json();\n          console.log(`Pa\xEDs detectado via ipapi.co: ${ipapiData.country_name} (${ipapiData.country_code})`);\n          return ipapiData.country_name;\n        }\n      } catch (error) {\n        console.log('ipapi.co fall\xF3:', error);\n      }\n      \n      // Intentar con api.country.is\n      try {\n        const countryResponse = await fetch('https://api.country.is/');\n        if (countryResponse.ok) {\n          const countryData = await countryResponse.json();\n          console.log(`Pa\xEDs detectado via api.country.is: ${countryData.country}`);\n          return countryData.country;\n        }\n      } catch (error) {\n        console.log('api.country.is fall\xF3:', error);\n      }\n      \n      console.log('Todas las APIs de detecci\xF3n fallaron');\n      return null;\n      \n    } catch (error) {\n      console.error('Error detectando pa\xEDs:', error);\n      return null;\n    }\n  }\n\n  // Inicializar detecci\xF3n cuando se carga el DOM\n  document.addEventListener('DOMContentLoaded', async () => {\n    console.log('DOM cargado, iniciando detecci\xF3n de pa\xEDs para delivery...');\n    const detectedCountry = await detectUserCountry();\n    showDeliveryApps(detectedCountry);\n  });\n})();<\/script> "], ["", '<section id="delivery" class="w-full py-12 flex flex-col items-center justify-center relative overflow-hidden" style="background-color: #008ddd;" data-astro-cid-ndfz56iy> <!-- Ondas de sonar --> <div class="sonar-wave sonar-wave-1" data-astro-cid-ndfz56iy></div> <div class="sonar-wave sonar-wave-2" data-astro-cid-ndfz56iy></div> <div class="sonar-wave sonar-wave-3" data-astro-cid-ndfz56iy></div> <div class="container mx-auto px-4 relative z-10" data-astro-cid-ndfz56iy> <!-- Icono de geolocalizaci\xF3n flotante --> <div class="flex justify-center mb-6" data-astro-cid-ndfz56iy> <div class="animate-float-gentle" data-astro-cid-ndfz56iy> <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-700" data-astro-cid-ndfz56iy> <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" data-astro-cid-ndfz56iy></path> </svg> </div> </div> <!-- T\xEDtulo de la secci\xF3n --> <div class="text-center mb-8" data-astro-cid-ndfz56iy> <h2 class="text-white font-sans uppercase font-bold text-xl md:text-4xl mb-2" data-astro-cid-ndfz56iy> ', ' </h2> <h3 class="text-white font-title uppercase font-bold text-3xl md:text-6xl" data-astro-cid-ndfz56iy> ', ' </h3> </div> <!-- Contenedor para las apps de delivery --> <div id="delivery-app-container" class="flex justify-center items-center" data-astro-cid-ndfz56iy> <div id="delivery-loading" class="text-center p-8 max-w-sm animate-pulse" data-astro-cid-ndfz56iy> <div class="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4" data-astro-cid-ndfz56iy></div> <div class="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2" data-astro-cid-ndfz56iy></div> <div class="h-8 bg-gray-300 rounded w-full" data-astro-cid-ndfz56iy></div> <p class="text-white mt-2" data-astro-cid-ndfz56iy>Detectando tu ubicaci\xF3n...</p> </div> <div id="delivery-content" class="hidden" data-astro-cid-ndfz56iy> <!-- Las apps se cargar\xE1n din\xE1micamente aqu\xED --> </div> </div> </div> </section> <script>(function(){', "\n  // Funci\xF3n para mostrar apps de delivery seg\xFAn el pa\xEDs detectado\n  function showDeliveryApps(detectedCountry) {\n    const loadingElement = document.getElementById('delivery-loading');\n    const contentElement = document.getElementById('delivery-content');\n    \n    // Verificar que los elementos existen\n    if (!loadingElement || !contentElement) {\n      console.error('Elementos del DOM no encontrados');\n      return;\n    }\n\n    // Limpiar contenido anterior\n    contentElement.innerHTML = '';\n\n    // Buscar si hay app para el pa\xEDs detectado\n    const userCountryApp = detectedCountry ? \n      deliveryApps.find(app => app.country.toLowerCase() === detectedCountry.toLowerCase()) : \n      null;\n\n    let appsToShow = [];\n    let showCountryIndicator = true;\n\n    if (userCountryApp) {\n      // Si hay app para el pa\xEDs del usuario, solo mostrar esa\n      appsToShow = [userCountryApp];\n      showCountryIndicator = false;\n      console.log(\\`Mostrando solo la app de tu pa\xEDs: \\${userCountryApp.app_name} (\\${detectedCountry})\\`);\n    } else {\n      // Si no hay app para el pa\xEDs o no se detect\xF3 pa\xEDs, mostrar todas\n      appsToShow = deliveryApps;\n      showCountryIndicator = true;\n      console.log(\\`No hay app espec\xEDfica para \\${detectedCountry || 'pa\xEDs no detectado'}, mostrando todas las apps\\`);\n    }\n\n    // Crear una tarjeta para cada app a mostrar\n    appsToShow.forEach(app => {\n      const appCard = document.createElement('div');\n      appCard.className = \\`text-center transition-all duration-300 hover:scale-105\\`;\n      \n      appCard.innerHTML = \\`\n        <div class=\"relative\">\n          <a href=\"\\${app.app_url}\" target=\"_blank\" rel=\"noopener noreferrer\" >\n          <img src=\"\\${app.app_icon}\" alt=\"Logo de \\${app.app_name}\" class=\"w-40 h-40 bg-white mx-auto mb-4 rounded-full object-cover shadow-lg p-4\">\n          \\${showCountryIndicator ? \\`<p class=\"text-sm text-gray-600 mb-4\">Disponible en <span class=\"font-semibold text-secondary\">\\${app.country}</span></p>\\` : ''}\n          </a>\n         \n        </div>\n      \\`;\n      \n      contentElement.appendChild(appCard);\n    });\n\n    // Ajustar el grid seg\xFAn la cantidad de apps\n    if (appsToShow.length === 1) {\n      contentElement.className = 'flex justify-center max-w-sm mx-auto';\n    } else {\n      contentElement.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl';\n    }\n\n    // Ocultar loading y mostrar contenido\n    loadingElement.classList.add('hidden');\n    contentElement.classList.remove('hidden');\n    \n    console.log(\\`Mostrando \\${appsToShow.length} app(s) de delivery. Pa\xEDs detectado: \\${detectedCountry || 'No detectado'}\\`);\n  }\n\n  // Funci\xF3n para detectar pa\xEDs del usuario\n  async function detectUserCountry() {\n    try {\n      console.log('Iniciando detecci\xF3n de pa\xEDs...');\n      \n      // Intentar usar nuestra API primero\n      const response = await fetch('/api/country');\n      if (response.ok) {\n        const data = await response.json();\n        console.log(\\`Pa\xEDs detectado: \\${data.country} \\${data.countryCode} (\\${data.source?.toUpperCase()})\\`);\n        return data.country;\n      }\n      \n      // Fallback a APIs externas si nuestra API falla\n      console.log('API local fall\xF3, intentando con APIs externas...');\n      \n      // Intentar con ipapi.co\n      try {\n        const ipapiResponse = await fetch('https://ipapi.co/json/');\n        if (ipapiResponse.ok) {\n          const ipapiData = await ipapiResponse.json();\n          console.log(\\`Pa\xEDs detectado via ipapi.co: \\${ipapiData.country_name} (\\${ipapiData.country_code})\\`);\n          return ipapiData.country_name;\n        }\n      } catch (error) {\n        console.log('ipapi.co fall\xF3:', error);\n      }\n      \n      // Intentar con api.country.is\n      try {\n        const countryResponse = await fetch('https://api.country.is/');\n        if (countryResponse.ok) {\n          const countryData = await countryResponse.json();\n          console.log(\\`Pa\xEDs detectado via api.country.is: \\${countryData.country}\\`);\n          return countryData.country;\n        }\n      } catch (error) {\n        console.log('api.country.is fall\xF3:', error);\n      }\n      \n      console.log('Todas las APIs de detecci\xF3n fallaron');\n      return null;\n      \n    } catch (error) {\n      console.error('Error detectando pa\xEDs:', error);\n      return null;\n    }\n  }\n\n  // Inicializar detecci\xF3n cuando se carga el DOM\n  document.addEventListener('DOMContentLoaded', async () => {\n    console.log('DOM cargado, iniciando detecci\xF3n de pa\xEDs para delivery...');\n    const detectedCountry = await detectUserCountry();\n    showDeliveryApps(detectedCountry);\n  });\n})();<\/script> "])), maybeRenderHead(), deliveryTitle, deliverySubTitle, defineScriptVars({ deliveryApps }));
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/sections/Delivery/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { loading = false } = Astro2.props;
  const currentLang = getLocale();
  t("common", { locale: currentLang }) || {};
  t("recipes", { locale: currentLang }) || {};
  t("news", { locale: currentLang }) || {};
  t("products", { locale: currentLang }) || {};
  t("newproducts", { locale: currentLang }) || {};
  t("brands", { locale: currentLang }) || {};
  t("contentN", { locale: currentLang }) || {};
  t("chips", { locale: currentLang }) || {};
  const newProducts = t("products", { namespace: "newproducts", locale: currentLang }) || [];
  const validProducts = Array.isArray(newProducts) ? newProducts : [];
  const chips = t("chips", { namespace: "newproducts", locale: currentLang }) || [];
  const brands = t("brands", { namespace: "brands", locale: currentLang }) || [];
  const homeAssets = t("home", { namespace: "common", locale: currentLang }) || {};
  t("home", { namespace: "recipes", locale: currentLang }) || {};
  t("items", { namespace: "recipes", locale: currentLang }) || [];
  t("assets.slidermask", { namespace: "common", locale: currentLang }) || "https://snack.yummiespromociones.com/snacksyummies/bg-front.webp";
  t("assets.slidermaskmobile", { namespace: "common", locale: currentLang }) || "https://snack.yummiespromociones.com/snacksyummies/bg-front-mobile_1_.webp";
  const deliveryData = t("home.delivery", { namespace: "common", locale: currentLang }) || {};
  const deliveryApps = deliveryData.delivery_apps || [];
  const commonAssets = t("assets.slider", { namespace: "common", locale: currentLang }) || [];
  const slides = Array.isArray(commonAssets) ? commonAssets.filter((asset) => asset && typeof asset === "object" && asset.desktop && asset.mobile).map((asset) => ({
    desktop: asset.desktop,
    mobile: asset.mobile,
    alt: asset.alt || "Snacks Yummies",
    title: asset.title || "",
    subtitle: asset.description || "",
    link: asset.url || asset.link || ""
  })) : [];
  return renderTemplate(_a || (_a = __template(["<!-- src/views/Home/index.astro -->", '<main class="w-full flex flex-col items-center justify-center mt-0"> <!-- Slider Section con m\xE1scara --> <div class="relative w-full overflow-hidden max-w-[100vw] h-auto aspect-[1/1] md:aspect-[21/9] lg:h-[66vh]"> <!-- T\xEDtulo superpuesto posicionado a la izquierda y centrado verticalmente --> <!-- div class="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">\n        <LazyImage \n          src="https://snack.yummiespromociones.com/snacksyummies/Header-Title.webp" \n          alt="T\xEDtulo decorativo" \n          class="md:w-40 lg:w-80 object-cover object-center" \n        />\n      </div>\n      \n      <!-- M\xE1scara PNG superpuesta (cambia seg\xFAn el idioma y dispositivo) --> <!-- <div class="absolute inset-0 z-10 pointer-events-none w-screen left-0 right-0">\n        <img src={sliderMask} alt="M\xE1scara decorativa" class="hidden md:block w-full h-full object-cover object-center" />\n        <img src={sliderMaskMobile} alt="M\xE1scara decorativa" class="md:hidden w-full h-full object-cover object-center" />\n      </div> --> <!-- Slider posicionado m\xE1s a la derecha en desktop, full width en m\xF3vil \n      <div class="relative z-0 w-full md:w-[80%] md:ml-auto">\n        <Carousel slides={slides} />\n       \n      </div>--> <div class="relative z-0 w-full md:w-[100%] md:ml-auto md:h-full h-[72vh] md:flex md:items-center md:justify-center"> ', ' </div> </div> <!-- Secci\xF3n de Carrusel Orbital de Productos --> <section id="new-products" class="w-full  bg-gradient-to-b from-secondary to-blue-700 relative pb-8 "> <div class="container mx-auto px-4"> ', " ", " ", " ", " ", " ", ' <!-- Top floating chips --> <div class="mb-8 p-4 relative"> <div class="flex flex-col items-center"> <div class="relative"> <span class="inline-block md:text-[3rem] text-[2rem] rotate-[-12deg] font-title uppercase font-semibold text-white bg-red py-1 px-6 rounded-full z-10 absolute top-0 left-0 transform -translate-x-[3rem] md:-translate-x-[4rem] translate-y-[-1rem] md:translate-y-[-1rem]"> ', '</span> <h2 class="md:text-[8rem] text-[4rem] font-title uppercase text-white font-bold text-center mt-[1rem] md:mt-0">', '</h2> </div> </div> </div> <!-- Base image positioned behind carousel --> <!-- Original Carousel --> <!-- <NewProductsCarousel products={validProducts} className="z-1" /> --> <!-- Simple Product Carousel --> ', ' <!-- Bottom floating chips --> <div id="base" class="w-full flex items-center justify-center absolute z-0 md:ml-[-6rem]"> <div class="md:w-[60%] w-full mx-auto"> ', ' </div> </div> </div> </section> <!-- Secci\xF3n de recetas con carrusel --> <!-- <section id="recipes" class="w-full py-12" transition:animate="slide">\n     <div class="container mx-auto px-4">\n        <h2 class="text-6xl  font-sans font-semibold text-center md:text-left text-white mb-8">{recipesAssets.title}</h2>\n        <div class=" mx-auto md:w-[70%]">\n          <RecipesCarousel recipes={recipeItems} textButton={recipesAssets.view_more} />\n        </div>\n      </div>\n    </section> --> <div class="w-full  bg-blue-700"> <svg width="100vw" height="57" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"> <path d="M1442 57H0C99.3333 38 380 0 708 0C1036 0 1334 38 1442 57Z"></path> </svg> </div> <section id="brands" class="w-full mt-[-2rem] "> <div class="container mx-auto my-8 px-6 md:mx-0 uppercase "> ', ' </div> <div class="md:flex md:items-center md:justify-between mt-[2rem]md:mt-[0rem] "> <div id="logosbrands" class="md:w-1/2 flex flex-col px-4 md:px-0 items-center justify-center md:order-2 "> <div class="grid grid-cols-4 md:grid-cols-4 gap-6"> ', ' </div> </div> <div id="previewbrand" class="mt-6 md:mt-0 md:w-1/2 flex items-center justify-center md:order-1 relative md:mt-[2rem]"> <div id="floating-images-container" class="absolute inset-0 z-10 pointer-events-none overflow-visible md:mt-[-4rem]"> ', " </div> ", " ", " </div> </div> <script>(function(){", "\n      // Exponer los datos de las marcas para JavaScript\n      window.brandsData = brands.map(brand => ({\n        title: brand.title,\n        image: brand.image,\n        imageMobile: brand.imageMobile,\n        imageChip1: brand.imageChip1,\n        imageChip2: brand.imageChip2,\n        imageChip3: brand.imageChip3,\n        imageChip4: brand.imageChip4\n      }));\n\n      // Funci\xF3n global para actualizar la imagen de preview y los chips\n      function updateBrandPreview(imageUrl, mobileImageUrl, title) {\n        const previewImg = document.getElementById('brand-preview-img');\n        const previewImgMobile = document.getElementById('brand-preview-img-mobile');\n        \n        // Obtener la marca seleccionada por su imagen\n        const selectedBrand = Array.from(document.querySelectorAll('.logo-brand')).find(logo => {\n          return logo.getAttribute('data-image') === imageUrl;\n        });\n        \n        if (previewImg) {\n          previewImg.src = imageUrl;\n          previewImg.alt = title || '';\n        }\n        \n        if (previewImgMobile) {\n          previewImgMobile.src = mobileImageUrl;\n          previewImgMobile.alt = title || '';\n        }\n        \n        // Actualizar la imagen de los chips\n        if (selectedBrand) {\n          // Encontrar el \xEDndice de la marca seleccionada\n          const brandIndex = Array.from(document.querySelectorAll('.logo-brand')).indexOf(selectedBrand);\n          \n          // Actualizar el componente ChipsFromBag con la nueva imagen\n          const chipsContainer = document.getElementById('floating-images-container');\n          if (chipsContainer && brandIndex !== -1 && window.brandsData && window.brandsData[brandIndex]) {\n            const brandData = window.brandsData[brandIndex];\n            if (brandData && brandData.imageChip1) {\n              // Actualizar todas las im\xE1genes de chips\n              const chipImages = chipsContainer.querySelectorAll('.chip img');\n              chipImages.forEach(img => {\n                img.src = brandData.imageChip1;\n                img.alt = brandData.title || 'Chip flotante';\n              });\n            }\n          }\n        }\n      }\n      \n      // Function to highlight the selected brand logo\n      function highlightSelectedBrand(element, bgColor) {\n        // Remove highlight from all logos\n        const allLogos = document.querySelectorAll('.logo-brand');\n        allLogos.forEach(logo => {\n          logo.style.borderColor = 'transparent';\n          logo.style.transform = 'scale(1)';\n          logo.classList.remove('active-brand');\n        });\n        \n        // Add highlight to the selected logo\n        element.style.borderColor = bgColor;\n        element.style.borderOpacity = '0.3';\n        element.style.transform = 'scale(1.1)';\n        element.classList.add('active-brand');\n      }\n      \n      // Initialize the first brand as selected when the page loads\n      document.addEventListener('DOMContentLoaded', function() {\n        const firstBrand = document.querySelector('.logo-brand');\n        if (firstBrand) {\n          const bgColor = firstBrand.style.backgroundColor;\n          highlightSelectedBrand(firstBrand, bgColor);\n        }\n      });\n      \n      // Asegurarse de que la funci\xF3n est\xE9 disponible globalmente\n      window.updateBrandPreview = updateBrandPreview;\n      window.highlightSelectedBrand = highlightSelectedBrand;\n    })();<\/script> </section> </main>  <!-- Secci\xF3n de Delivery usando componente at\xF3mico --> ", " <!-- Script para detecci\xF3n de pa\xEDs y mostrar app correspondiente --> <script>(function(){", `
      // Funci\xF3n para detectar pa\xEDs usando nuestra API con geoip-lite
      async function detectCountry() {
        try {
          // Verificar si hay un par\xE1metro en la URL para forzar un pa\xEDs (para testing)
          const urlParams = new URLSearchParams(window.location.search);
          const forceCountry = urlParams.get('country');
          
          let apiUrl = '/api/country';
          if (forceCountry) {
            apiUrl += \`?force=\${forceCountry}\`;
            console.log('Forzando pa\xEDs desde URL:', forceCountry);
          }
          
          // Usar nuestro endpoint API que utiliza geoip-lite
          const response = await fetch(apiUrl);
          const data = await response.json();
          
          if (data.country) {
            console.log('Pa\xEDs detectado:', data.country, data.countryCode, data.forced ? '(FORZADO)' : '(DETECTADO)');
            return data.country;
          } else {
            console.log('geoip-lite no pudo detectar el pa\xEDs, intentando fallback');
            throw new Error('No country detected by geoip-lite');
          }
        } catch (error) {
          console.log('Error con API local, usando fallback externo:', error);
          
          // Fallback 1: ipapi.co
          try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            console.log('Pa\xEDs detectado con ipapi.co:', data.country_name);
            return data.country_name;
          } catch (fallbackError1) {
            console.log('Error con ipapi.co, intentando api.country.is:', fallbackError1);
            
            // Fallback 2: api.country.is
            try {
              const response = await fetch('https://api.country.is/');
              const data = await response.json();
              const countryMap = {
                'HN': 'Honduras',
                'GT': 'Guatemala',
                'SV': 'El Salvador',
                'NI': 'Nicaragua',
                'CR': 'Costa Rica',
                'DO': 'Dominican Republic'
              };
              const countryName = countryMap[data.country] || data.country;
              console.log('Pa\xEDs detectado con api.country.is:', countryName);
              return countryName;
            } catch (fallbackError2) {
              console.log('Todos los m\xE9todos de detecci\xF3n fallaron:', fallbackError2);
              return null;
            }
          }
        }
      }

      // Funci\xF3n para mostrar apps de delivery seg\xFAn el pa\xEDs detectado
      function showDeliveryApps(detectedCountry) {
        const loadingElement = document.getElementById('delivery-loading');
        const contentElement = document.getElementById('delivery-content');
        
        // Verificar que los elementos existan
        if (!loadingElement || !contentElement) {
          console.error('Elementos del DOM no encontrados');
          return;
        }

        // Limpiar contenido anterior
        contentElement.innerHTML = '';

        // Buscar si hay app para el pa\xEDs detectado
        const userCountryApp = detectedCountry ? 
          deliveryApps.find(app => app.country.toLowerCase() === detectedCountry.toLowerCase()) : 
          null;

        let appsToShow = [];
        let showCountryIndicator = true;

        if (userCountryApp) {
          // Si hay app para el pa\xEDs del usuario, solo mostrar esa
          appsToShow = [userCountryApp];
          showCountryIndicator = false;
          console.log(\`Mostrando solo la app de tu pa\xEDs: \${userCountryApp.app_name} (\${detectedCountry})\`);
        } else {
          // Si no hay app para el pa\xEDs o no se detect\xF3 pa\xEDs, mostrar todas
          appsToShow = deliveryApps;
          showCountryIndicator = true;
          console.log(\`No hay app espec\xEDfica para \${detectedCountry || 'pa\xEDs no detectado'}, mostrando todas las apps\`);
        }

        // Crear una tarjeta para cada app a mostrar
        appsToShow.forEach(app => {
          const appCard = document.createElement('div');
          appCard.className = \`text-center transition-all duration-300 hover:scale-105\`;
          
          appCard.innerHTML = \`
            <div class="relative">
              <a href="\${app.app_url}" target="_blank" rel="noopener noreferrer" >
              <img src="\${app.app_icon}" alt="Logo de \${app.app_name}" class="w-40 h-40 bg-white mx-auto mb-4 rounded-full object-cover shadow-lg p-4">
              \${showCountryIndicator ? \`<p class="text-sm text-gray-600 mb-4 bg-white">Disponible en <span class="font-semibold text-secondary">\${app.country}</span></p>\` : ''}
              </a>
             
            </div>
          \`;
          
          contentElement.appendChild(appCard);
        });

        // Ajustar el grid seg\xFAn la cantidad de apps
        if (appsToShow.length === 1) {
          contentElement.className = 'flex justify-center max-w-sm mx-auto';
        } else {
          contentElement.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl';
        }

        // Ocultar loading y mostrar contenido
        loadingElement.classList.add('hidden');
        contentElement.classList.remove('hidden');
        
        console.log(\`Mostrando \${appsToShow.length} app(s) de delivery. Pa\xEDs detectado: \${detectedCountry || 'No detectado'}\`);
      }

      // Ejecutar detecci\xF3n al cargar la p\xE1gina
      document.addEventListener('DOMContentLoaded', async () => {
        const country = await detectCountry();
        console.log('Pa\xEDs detectado:', country);
        showDeliveryApps(country);
      });
    })();<\/script>  <section id="socialmedia" class="bg-quinary w-full py-12 flex flex-col items-center justify-center"> <div class="container mx-auto px-4"> <div class="flex flex-col md:flex-row items-center justify-center"> <div id="instagram1" class="hidden lg:flex flex-col items-center justify-center "> `, " ", ' </div> <div id="socialmedia-title" class="flex flex-col items-center justify-center relative w-full mx-auto"> <div class="absolute inset-0 z-0 mt-[-16rem] md:mt-[-2rem]"> ', ' </div> <p class="text-primary text-center pt-4 font-title  uppercase font-bold md:text-[4rem] lg:text-[8rem] text-[4rem] z-10 mb-4">', '</p> <p class="text-white text-center font-title uppercase font-bold text-[3rem] md:mt-[-3rem] mt-[-2rem] bg-red  px-6 rounded-full z-10">', "</p> ", ' <p class="text-primary text-center pt-4 z-10">', "</p> ", ' </div> <div id="instagram2" class="hidden lg:flex flex-col items-center justify-center "> ', " ", ` </div> </div> </div> </section> <!-- <div class=" bg-tertiary">
    <svg width="100vw" height="150" viewBox="0 0 100vw 150" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1442 0H0C99.3333 16.6667 380 50 708 50C1036 50 1334 16.6667 1442 0Z" fill="#91CAE9"/>
    </svg>
  </div> --> <!-- <section id="quiz" class="mt-[-100px] w-full h-auto flex flex-col items-center justify-center bg-tertiary py-12" transition:animate="slide">
      <div class="container mx-auto px-4">
        
        
        <div class="flex flex-col md:flex-row w-full gap-4 md:gap-8">
          <div class="w-full md:w-1/2  p-8 flex items-center justify-center md:min-h-[300px]">
            <div class="text-center">
              <LazyImage src="https://snack.yummiespromociones.com/snacksyummies/quizilustration.webp" alt='Quiz' class="w-full h-full object-cover object-center"/>
            </div>
          </div>
          
          <div class="w-full md:w-1/2 md:p-8 p-0 flex items-center justify-center md:min-h-[300px] ">
            <div class="text-center">
              <LazyImage src={homeAssets.quiz.title} alt='Quiz' class="w-full h-full object-cover object-center"/>
              <p class="text-white  text-xl py-4 mb-6">{homeAssets.quiz.description}</p>
             
              <p>  <a href={homeAssets.quiz.urlButton} class="bg-white text-primary font-bold py-2 px-8 rounded-full">{homeAssets.quiz.button}</a></p>
            </div>
          
          </div>
        </div>
      </div>
    </section> --> <!-- <section id="recipes" class="w-full py-12 flex flex-col items-center justify-center" transition:animate="slide">
    <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-8 py-8 w-full">
      <div class="w-full md:w-1/2 flex flex-col justify-center items-center gap-4">
        <div class="flex flex-row items-center gap-8">
          <LazyImage src="https://snack.yummiespromociones.com/taqueritos/Sal.webp" alt="Sal" class="w-12 object-cover object-center"/>
          <h2 class="text-5xl font-normal text-center text-white">TAQUE</h2>
          <LazyImage src="https://snack.yummiespromociones.com/taqueritos/pimienta.webp" alt="Pimienta" class="w-12 object-cover object-center"/>
        </div>
        <h2 class="text-5xl font-normal text-center text-white">RECETAS</h2>
        <p>
          <LazyImage src="https://snack.yummiespromociones.com/taqueritos/sarten.webp" alt="Recetas" class="w-80 object-cover object-center"/>
        </p>
      </div>
      <div class="w-full md:w-1/2 flex flex-col justify-center items-center gap-8">
        <a href={recipesAssets.explore_more.link} target="_blank" rel="noopener noreferrer" class="px-6 py-2 border border-white text-white font-medium rounded-full shadow-md hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center">
          <span class="mr-2">{recipesAssets.explore_more.title}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
        <div id="allrecipes" class="grid grid-cols-2 md:grid-cols-2 gap-6 w-full px-4">
          {recipeItems.slice(0, 2).map((recipe: {
            id: string;
            title: string;
            image: string;
            preparation_time: number;
          }) => (
            <RecipeCard
              image={recipe.image}
              title={recipe.title}
              time={\`\${recipe.preparation_time}MIN\`}
              id={recipe.id}
              textColor="text-white"
              iconColor="text-white"
            />
          ))}
        </div>
      </div>
    </div>
    <div class="md:w-full w-[80%] flex flex-wrap items-center justify-center gap-2 px-4 py-8 text-white font-bold text-md md:text-4xl font-sans font-weight-bold">
      <span>{recipesAssets.visit_text_1.title}</span>
      <a href={recipesAssets.visit_1.link} target="_blank" rel="noopener noreferrer" class="text-red">{recipesAssets.visit_1.title}</a>
      <span>{recipesAssets.visit_text_2.title}</span>
      <a href={recipesAssets.visit_2.link} target="_blank" rel="noopener noreferrer" class="text-red">{recipesAssets.visit_2.title}</a>
   
   
        <span>{recipesAssets.visit_text_3.title}</span>
        <a href={recipesAssets.visit_3.link} target="_blank" rel="noopener noreferrer" class="text-red">{recipesAssets.visit_3.title}</a>
        
    
    </div>
  </section> --> `], ["<!-- src/views/Home/index.astro -->", '<main class="w-full flex flex-col items-center justify-center mt-0"> <!-- Slider Section con m\xE1scara --> <div class="relative w-full overflow-hidden max-w-[100vw] h-auto aspect-[1/1] md:aspect-[21/9] lg:h-[66vh]"> <!-- T\xEDtulo superpuesto posicionado a la izquierda y centrado verticalmente --> <!-- div class="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">\n        <LazyImage \n          src="https://snack.yummiespromociones.com/snacksyummies/Header-Title.webp" \n          alt="T\xEDtulo decorativo" \n          class="md:w-40 lg:w-80 object-cover object-center" \n        />\n      </div>\n      \n      <!-- M\xE1scara PNG superpuesta (cambia seg\xFAn el idioma y dispositivo) --> <!-- <div class="absolute inset-0 z-10 pointer-events-none w-screen left-0 right-0">\n        <img src={sliderMask} alt="M\xE1scara decorativa" class="hidden md:block w-full h-full object-cover object-center" />\n        <img src={sliderMaskMobile} alt="M\xE1scara decorativa" class="md:hidden w-full h-full object-cover object-center" />\n      </div> --> <!-- Slider posicionado m\xE1s a la derecha en desktop, full width en m\xF3vil \n      <div class="relative z-0 w-full md:w-[80%] md:ml-auto">\n        <Carousel slides={slides} />\n       \n      </div>--> <div class="relative z-0 w-full md:w-[100%] md:ml-auto md:h-full h-[72vh] md:flex md:items-center md:justify-center"> ', ' </div> </div> <!-- Secci\xF3n de Carrusel Orbital de Productos --> <section id="new-products" class="w-full  bg-gradient-to-b from-secondary to-blue-700 relative pb-8 "> <div class="container mx-auto px-4"> ', " ", " ", " ", " ", " ", ' <!-- Top floating chips --> <div class="mb-8 p-4 relative"> <div class="flex flex-col items-center"> <div class="relative"> <span class="inline-block md:text-[3rem] text-[2rem] rotate-[-12deg] font-title uppercase font-semibold text-white bg-red py-1 px-6 rounded-full z-10 absolute top-0 left-0 transform -translate-x-[3rem] md:-translate-x-[4rem] translate-y-[-1rem] md:translate-y-[-1rem]"> ', '</span> <h2 class="md:text-[8rem] text-[4rem] font-title uppercase text-white font-bold text-center mt-[1rem] md:mt-0">', '</h2> </div> </div> </div> <!-- Base image positioned behind carousel --> <!-- Original Carousel --> <!-- <NewProductsCarousel products={validProducts} className="z-1" /> --> <!-- Simple Product Carousel --> ', ' <!-- Bottom floating chips --> <div id="base" class="w-full flex items-center justify-center absolute z-0 md:ml-[-6rem]"> <div class="md:w-[60%] w-full mx-auto"> ', ' </div> </div> </div> </section> <!-- Secci\xF3n de recetas con carrusel --> <!-- <section id="recipes" class="w-full py-12" transition:animate="slide">\n     <div class="container mx-auto px-4">\n        <h2 class="text-6xl  font-sans font-semibold text-center md:text-left text-white mb-8">{recipesAssets.title}</h2>\n        <div class=" mx-auto md:w-[70%]">\n          <RecipesCarousel recipes={recipeItems} textButton={recipesAssets.view_more} />\n        </div>\n      </div>\n    </section> --> <div class="w-full  bg-blue-700"> <svg width="100vw" height="57" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"> <path d="M1442 57H0C99.3333 38 380 0 708 0C1036 0 1334 38 1442 57Z"></path> </svg> </div> <section id="brands" class="w-full mt-[-2rem] "> <div class="container mx-auto my-8 px-6 md:mx-0 uppercase "> ', ' </div> <div class="md:flex md:items-center md:justify-between mt-[2rem]md:mt-[0rem] "> <div id="logosbrands" class="md:w-1/2 flex flex-col px-4 md:px-0 items-center justify-center md:order-2 "> <div class="grid grid-cols-4 md:grid-cols-4 gap-6"> ', ' </div> </div> <div id="previewbrand" class="mt-6 md:mt-0 md:w-1/2 flex items-center justify-center md:order-1 relative md:mt-[2rem]"> <div id="floating-images-container" class="absolute inset-0 z-10 pointer-events-none overflow-visible md:mt-[-4rem]"> ', " </div> ", " ", " </div> </div> <script>(function(){", "\n      // Exponer los datos de las marcas para JavaScript\n      window.brandsData = brands.map(brand => ({\n        title: brand.title,\n        image: brand.image,\n        imageMobile: brand.imageMobile,\n        imageChip1: brand.imageChip1,\n        imageChip2: brand.imageChip2,\n        imageChip3: brand.imageChip3,\n        imageChip4: brand.imageChip4\n      }));\n\n      // Funci\xF3n global para actualizar la imagen de preview y los chips\n      function updateBrandPreview(imageUrl, mobileImageUrl, title) {\n        const previewImg = document.getElementById('brand-preview-img');\n        const previewImgMobile = document.getElementById('brand-preview-img-mobile');\n        \n        // Obtener la marca seleccionada por su imagen\n        const selectedBrand = Array.from(document.querySelectorAll('.logo-brand')).find(logo => {\n          return logo.getAttribute('data-image') === imageUrl;\n        });\n        \n        if (previewImg) {\n          previewImg.src = imageUrl;\n          previewImg.alt = title || '';\n        }\n        \n        if (previewImgMobile) {\n          previewImgMobile.src = mobileImageUrl;\n          previewImgMobile.alt = title || '';\n        }\n        \n        // Actualizar la imagen de los chips\n        if (selectedBrand) {\n          // Encontrar el \xEDndice de la marca seleccionada\n          const brandIndex = Array.from(document.querySelectorAll('.logo-brand')).indexOf(selectedBrand);\n          \n          // Actualizar el componente ChipsFromBag con la nueva imagen\n          const chipsContainer = document.getElementById('floating-images-container');\n          if (chipsContainer && brandIndex !== -1 && window.brandsData && window.brandsData[brandIndex]) {\n            const brandData = window.brandsData[brandIndex];\n            if (brandData && brandData.imageChip1) {\n              // Actualizar todas las im\xE1genes de chips\n              const chipImages = chipsContainer.querySelectorAll('.chip img');\n              chipImages.forEach(img => {\n                img.src = brandData.imageChip1;\n                img.alt = brandData.title || 'Chip flotante';\n              });\n            }\n          }\n        }\n      }\n      \n      // Function to highlight the selected brand logo\n      function highlightSelectedBrand(element, bgColor) {\n        // Remove highlight from all logos\n        const allLogos = document.querySelectorAll('.logo-brand');\n        allLogos.forEach(logo => {\n          logo.style.borderColor = 'transparent';\n          logo.style.transform = 'scale(1)';\n          logo.classList.remove('active-brand');\n        });\n        \n        // Add highlight to the selected logo\n        element.style.borderColor = bgColor;\n        element.style.borderOpacity = '0.3';\n        element.style.transform = 'scale(1.1)';\n        element.classList.add('active-brand');\n      }\n      \n      // Initialize the first brand as selected when the page loads\n      document.addEventListener('DOMContentLoaded', function() {\n        const firstBrand = document.querySelector('.logo-brand');\n        if (firstBrand) {\n          const bgColor = firstBrand.style.backgroundColor;\n          highlightSelectedBrand(firstBrand, bgColor);\n        }\n      });\n      \n      // Asegurarse de que la funci\xF3n est\xE9 disponible globalmente\n      window.updateBrandPreview = updateBrandPreview;\n      window.highlightSelectedBrand = highlightSelectedBrand;\n    })();<\/script> </section> </main>  <!-- Secci\xF3n de Delivery usando componente at\xF3mico --> ", " <!-- Script para detecci\xF3n de pa\xEDs y mostrar app correspondiente --> <script>(function(){", `
      // Funci\xF3n para detectar pa\xEDs usando nuestra API con geoip-lite
      async function detectCountry() {
        try {
          // Verificar si hay un par\xE1metro en la URL para forzar un pa\xEDs (para testing)
          const urlParams = new URLSearchParams(window.location.search);
          const forceCountry = urlParams.get('country');
          
          let apiUrl = '/api/country';
          if (forceCountry) {
            apiUrl += \\\`?force=\\\${forceCountry}\\\`;
            console.log('Forzando pa\xEDs desde URL:', forceCountry);
          }
          
          // Usar nuestro endpoint API que utiliza geoip-lite
          const response = await fetch(apiUrl);
          const data = await response.json();
          
          if (data.country) {
            console.log('Pa\xEDs detectado:', data.country, data.countryCode, data.forced ? '(FORZADO)' : '(DETECTADO)');
            return data.country;
          } else {
            console.log('geoip-lite no pudo detectar el pa\xEDs, intentando fallback');
            throw new Error('No country detected by geoip-lite');
          }
        } catch (error) {
          console.log('Error con API local, usando fallback externo:', error);
          
          // Fallback 1: ipapi.co
          try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            console.log('Pa\xEDs detectado con ipapi.co:', data.country_name);
            return data.country_name;
          } catch (fallbackError1) {
            console.log('Error con ipapi.co, intentando api.country.is:', fallbackError1);
            
            // Fallback 2: api.country.is
            try {
              const response = await fetch('https://api.country.is/');
              const data = await response.json();
              const countryMap = {
                'HN': 'Honduras',
                'GT': 'Guatemala',
                'SV': 'El Salvador',
                'NI': 'Nicaragua',
                'CR': 'Costa Rica',
                'DO': 'Dominican Republic'
              };
              const countryName = countryMap[data.country] || data.country;
              console.log('Pa\xEDs detectado con api.country.is:', countryName);
              return countryName;
            } catch (fallbackError2) {
              console.log('Todos los m\xE9todos de detecci\xF3n fallaron:', fallbackError2);
              return null;
            }
          }
        }
      }

      // Funci\xF3n para mostrar apps de delivery seg\xFAn el pa\xEDs detectado
      function showDeliveryApps(detectedCountry) {
        const loadingElement = document.getElementById('delivery-loading');
        const contentElement = document.getElementById('delivery-content');
        
        // Verificar que los elementos existan
        if (!loadingElement || !contentElement) {
          console.error('Elementos del DOM no encontrados');
          return;
        }

        // Limpiar contenido anterior
        contentElement.innerHTML = '';

        // Buscar si hay app para el pa\xEDs detectado
        const userCountryApp = detectedCountry ? 
          deliveryApps.find(app => app.country.toLowerCase() === detectedCountry.toLowerCase()) : 
          null;

        let appsToShow = [];
        let showCountryIndicator = true;

        if (userCountryApp) {
          // Si hay app para el pa\xEDs del usuario, solo mostrar esa
          appsToShow = [userCountryApp];
          showCountryIndicator = false;
          console.log(\\\`Mostrando solo la app de tu pa\xEDs: \\\${userCountryApp.app_name} (\\\${detectedCountry})\\\`);
        } else {
          // Si no hay app para el pa\xEDs o no se detect\xF3 pa\xEDs, mostrar todas
          appsToShow = deliveryApps;
          showCountryIndicator = true;
          console.log(\\\`No hay app espec\xEDfica para \\\${detectedCountry || 'pa\xEDs no detectado'}, mostrando todas las apps\\\`);
        }

        // Crear una tarjeta para cada app a mostrar
        appsToShow.forEach(app => {
          const appCard = document.createElement('div');
          appCard.className = \\\`text-center transition-all duration-300 hover:scale-105\\\`;
          
          appCard.innerHTML = \\\`
            <div class="relative">
              <a href="\\\${app.app_url}" target="_blank" rel="noopener noreferrer" >
              <img src="\\\${app.app_icon}" alt="Logo de \\\${app.app_name}" class="w-40 h-40 bg-white mx-auto mb-4 rounded-full object-cover shadow-lg p-4">
              \\\${showCountryIndicator ? \\\`<p class="text-sm text-gray-600 mb-4 bg-white">Disponible en <span class="font-semibold text-secondary">\\\${app.country}</span></p>\\\` : ''}
              </a>
             
            </div>
          \\\`;
          
          contentElement.appendChild(appCard);
        });

        // Ajustar el grid seg\xFAn la cantidad de apps
        if (appsToShow.length === 1) {
          contentElement.className = 'flex justify-center max-w-sm mx-auto';
        } else {
          contentElement.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl';
        }

        // Ocultar loading y mostrar contenido
        loadingElement.classList.add('hidden');
        contentElement.classList.remove('hidden');
        
        console.log(\\\`Mostrando \\\${appsToShow.length} app(s) de delivery. Pa\xEDs detectado: \\\${detectedCountry || 'No detectado'}\\\`);
      }

      // Ejecutar detecci\xF3n al cargar la p\xE1gina
      document.addEventListener('DOMContentLoaded', async () => {
        const country = await detectCountry();
        console.log('Pa\xEDs detectado:', country);
        showDeliveryApps(country);
      });
    })();<\/script>  <section id="socialmedia" class="bg-quinary w-full py-12 flex flex-col items-center justify-center"> <div class="container mx-auto px-4"> <div class="flex flex-col md:flex-row items-center justify-center"> <div id="instagram1" class="hidden lg:flex flex-col items-center justify-center "> `, " ", ' </div> <div id="socialmedia-title" class="flex flex-col items-center justify-center relative w-full mx-auto"> <div class="absolute inset-0 z-0 mt-[-16rem] md:mt-[-2rem]"> ', ' </div> <p class="text-primary text-center pt-4 font-title  uppercase font-bold md:text-[4rem] lg:text-[8rem] text-[4rem] z-10 mb-4">', '</p> <p class="text-white text-center font-title uppercase font-bold text-[3rem] md:mt-[-3rem] mt-[-2rem] bg-red  px-6 rounded-full z-10">', "</p> ", ' <p class="text-primary text-center pt-4 z-10">', "</p> ", ' </div> <div id="instagram2" class="hidden lg:flex flex-col items-center justify-center "> ', " ", ` </div> </div> </div> </section> <!-- <div class=" bg-tertiary">
    <svg width="100vw" height="150" viewBox="0 0 100vw 150" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1442 0H0C99.3333 16.6667 380 50 708 50C1036 50 1334 16.6667 1442 0Z" fill="#91CAE9"/>
    </svg>
  </div> --> <!-- <section id="quiz" class="mt-[-100px] w-full h-auto flex flex-col items-center justify-center bg-tertiary py-12" transition:animate="slide">
      <div class="container mx-auto px-4">
        
        
        <div class="flex flex-col md:flex-row w-full gap-4 md:gap-8">
          <div class="w-full md:w-1/2  p-8 flex items-center justify-center md:min-h-[300px]">
            <div class="text-center">
              <LazyImage src="https://snack.yummiespromociones.com/snacksyummies/quizilustration.webp" alt='Quiz' class="w-full h-full object-cover object-center"/>
            </div>
          </div>
          
          <div class="w-full md:w-1/2 md:p-8 p-0 flex items-center justify-center md:min-h-[300px] ">
            <div class="text-center">
              <LazyImage src={homeAssets.quiz.title} alt='Quiz' class="w-full h-full object-cover object-center"/>
              <p class="text-white  text-xl py-4 mb-6">{homeAssets.quiz.description}</p>
             
              <p>  <a href={homeAssets.quiz.urlButton} class="bg-white text-primary font-bold py-2 px-8 rounded-full">{homeAssets.quiz.button}</a></p>
            </div>
          
          </div>
        </div>
      </div>
    </section> --> <!-- <section id="recipes" class="w-full py-12 flex flex-col items-center justify-center" transition:animate="slide">
    <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-8 py-8 w-full">
      <div class="w-full md:w-1/2 flex flex-col justify-center items-center gap-4">
        <div class="flex flex-row items-center gap-8">
          <LazyImage src="https://snack.yummiespromociones.com/taqueritos/Sal.webp" alt="Sal" class="w-12 object-cover object-center"/>
          <h2 class="text-5xl font-normal text-center text-white">TAQUE</h2>
          <LazyImage src="https://snack.yummiespromociones.com/taqueritos/pimienta.webp" alt="Pimienta" class="w-12 object-cover object-center"/>
        </div>
        <h2 class="text-5xl font-normal text-center text-white">RECETAS</h2>
        <p>
          <LazyImage src="https://snack.yummiespromociones.com/taqueritos/sarten.webp" alt="Recetas" class="w-80 object-cover object-center"/>
        </p>
      </div>
      <div class="w-full md:w-1/2 flex flex-col justify-center items-center gap-8">
        <a href={recipesAssets.explore_more.link} target="_blank" rel="noopener noreferrer" class="px-6 py-2 border border-white text-white font-medium rounded-full shadow-md hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center">
          <span class="mr-2">{recipesAssets.explore_more.title}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
        <div id="allrecipes" class="grid grid-cols-2 md:grid-cols-2 gap-6 w-full px-4">
          {recipeItems.slice(0, 2).map((recipe: {
            id: string;
            title: string;
            image: string;
            preparation_time: number;
          }) => (
            <RecipeCard
              image={recipe.image}
              title={recipe.title}
              time={\\\`\\\${recipe.preparation_time}MIN\\\`}
              id={recipe.id}
              textColor="text-white"
              iconColor="text-white"
            />
          ))}
        </div>
      </div>
    </div>
    <div class="md:w-full w-[80%] flex flex-wrap items-center justify-center gap-2 px-4 py-8 text-white font-bold text-md md:text-4xl font-sans font-weight-bold">
      <span>{recipesAssets.visit_text_1.title}</span>
      <a href={recipesAssets.visit_1.link} target="_blank" rel="noopener noreferrer" class="text-red">{recipesAssets.visit_1.title}</a>
      <span>{recipesAssets.visit_text_2.title}</span>
      <a href={recipesAssets.visit_2.link} target="_blank" rel="noopener noreferrer" class="text-red">{recipesAssets.visit_2.title}</a>
   
   
        <span>{recipesAssets.visit_text_3.title}</span>
        <a href={recipesAssets.visit_3.link} target="_blank" rel="noopener noreferrer" class="text-red">{recipesAssets.visit_3.title}</a>
        
    
    </div>
  </section> --> `])), maybeRenderHead(), renderComponent($$result, "Carousel", $$Index$6, { "slides": slides }), renderComponent($$result, "FloatingChip", $$Index$9, { "src": chips[0], "alt": "Chip", "size": "2xl", "position": "top: 25%; left: 15%;", "mobilePosition": "top: 25%; left: 15%;", "animationDuration": 15 }), renderComponent($$result, "FloatingChip", $$Index$9, { "src": chips[1], "alt": "Chip", "size": "2xl", "position": "top: 25%; left: 25%;", "animationDuration": 15 }), renderComponent($$result, "FloatingChip", $$Index$9, { "src": chips[2], "alt": "Chip", "size": "2xl", "position": "top: 25%; left: 60%;", "animationDuration": 15 }), renderComponent($$result, "FloatingChip", $$Index$9, { "src": chips[3], "alt": "Chip", "size": "4xl", "position": "top: 75%; right: 15%;", "mobilePosition": "top: 75%; right: 7%;", "animationDuration": 15 }), renderComponent($$result, "FloatingChip", $$Index$9, { "src": chips[4], "alt": "Chip", "size": "2xl", "position": "top: 75%; right: 50%;", "mobilePosition": "top: 95%; right: 75%;", "animationDuration": 15 }), renderComponent($$result, "FloatingChip", $$Index$9, { "src": chips[5], "alt": "Chip", "size": "xl", "position": "top: 65%; right: 75%;", "mobilePosition": "top: 95%; right: 75%;", "animationDuration": 15 }), homeAssets.new_products.tagtitle, homeAssets.new_products.title, renderComponent($$result, "SimpleProductCarousel", $$Index$5, { "products": validProducts, "class": "z-10 w-full max-w-5xl mx-auto my-8 relative md:mt-[-4rem]" }), renderComponent($$result, "LazyImage", $$LazyImage, { "src": "https://snack.yummiespromociones.com/snacksyummies/basenewproducts.webp", "alt": "Base de productos nuevos", "class": "w-full translate-y-[-12rem] md:translate-y-[-18rem]" }), renderComponent($$result, "CrownTitle", $$CrownTitle, { "text": homeAssets.brands.title, "data-astro-transition-scope": renderTransition($$result, "ktn7dzpd", "", "brands-title") }), brands.map((brand, index) => renderTemplate`<div class="logo-brand flex items-center justify-center cursor-pointer hover:scale-130 transition-all border-4 border-transparent hover:border-opacity-50 focus:border-opacity-50 shadow-sm shadow-md hover:shadow-xl"${addAttribute({ backgroundColor: brand.bgColor }, "style")}${addAttribute(brand.image, "data-image")}${addAttribute(brand.imageMobile, "data-image-mobile")}${addAttribute(brand.title, "data-title")}${addAttribute(`updateBrandPreview('${brand.image}', '${brand.imageMobile}', '${brand.title}'); highlightSelectedBrand(this, '${brand.bgColor}')`, "onclick")}${addAttribute(`updateBrandPreview('${brand.image}', '${brand.imageMobile}', '${brand.title}'); highlightSelectedBrand(this, '${brand.bgColor}')`, "ontouchstart")}> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": brand.logo, "alt": brand.title })} </div>`), renderComponent($$result, "ChipsFromBag", $$Index$3, { "imageUrl": brands[0].imageChip1, "count": 20, "baseSize": 100, "sizeVariation": 40, "containerWidth": "80%", "containerHeight": "60%", "alt": "Chip flotante", "burstOnHover": true, "burstCount": 8, "mobileCount": 10, "mobileBaseSize": 3, "mobileContainerWidth": "90vw", "mobileContainerHeight": "50vh" }), renderComponent($$result, "LazyImage", $$LazyImage, { "id": "brand-preview-img", "src": brands[0].image, "alt": brands[0].title, "class": "hidden md:block w-full h-auto object-contain transition-opacity duration-300 md:mt-[2rem]" }), renderComponent($$result, "LazyImage", $$LazyImage, { "id": "brand-preview-img-mobile", "src": brands[0].imageMobile, "alt": brands[0].title, "class": "md:hidden w-full h-auto object-contain transition-opacity duration-300" }), defineScriptVars({ brands }), renderComponent($$result, "Delivery", $$Index$1, { "deliveryTitle": t("home.delivery.delivery_title", { namespace: "common", locale: currentLang }), "deliverySubTitle": t("home.delivery.delivery_sub_title", { namespace: "common", locale: currentLang }), "deliveryApps": deliveryApps }), defineScriptVars({ deliveryApps }), renderComponent($$result, "InstagramEmbed", $$Index$2, { "postUrl": homeAssets.socialmedia.instagramLinks[0].url, "width": "250px", "height": "250px", "className": "z-0 mb-4" }), renderComponent($$result, "InstagramEmbed", $$Index$2, { "postUrl": homeAssets.socialmedia.instagramLinks[1].url, "width": "250px", "height": "250px", "className": "z-10 mt-4 translate-y-[-6rem] translate-x-[2rem]" }), renderComponent($$result, "AnimHeart", $$Index$4, { "count": 20, "containerClass": "h-[50vh] w-full " }), homeAssets.socialmedia.title, homeAssets.socialmedia.tagtitle, renderComponent($$result, "SocialMediaIcons", $$Index$8, { "currentLang": currentLang, "iconColor": "#0A3D7E", "iconSize": 42, "centered": true, "class": "mt-4 w-full z-10" }), homeAssets.socialmedia.newsletter, renderComponent($$result, "Newsletter", $$Index$7, { "placeholder": homeAssets.newsletter.placeholder, "buttonText": homeAssets.newsletter.buttonText, "centered": true, "class": "mt-4 w-full mb-4 z-10" }), renderComponent($$result, "InstagramEmbed", $$Index$2, { "postUrl": homeAssets.socialmedia.instagramLinks[2].url, "width": "250px", "height": "250px", "className": "z-0 mb-4" }), renderComponent($$result, "InstagramEmbed", $$Index$2, { "postUrl": homeAssets.socialmedia.instagramLinks[3].url, "width": "250px", "height": "250px", "className": "z-10 mt-4 translate-y-[-6rem] translate-x-[-2rem]" }));
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/views/Home/index.astro", "self");

const $$file = "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/views/Home/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, $$url as url };
