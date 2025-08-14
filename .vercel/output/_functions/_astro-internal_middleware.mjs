import { d as defineMiddleware, s as sequence } from './chunks/index_B7q_Zw_3.mjs';
import { f as findRouteBySlug } from './chunks/routes_CM_-Pvqa.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_B3d6bCa4.mjs';
import 'kleur/colors';
import './chunks/astro/server_XONErzoU.mjs';
import 'clsx';
import 'cookie';

const routeMappings = {
  "products": { es: "productos", en: "products" },
  "news": { es: "noticias", en: "news" },
  "recipes": { es: "recetas", en: "recipes" },
  "yummiesone": { es: "yummiesone", en: "yummiesone" }
};
const onRequest$1 = defineMiddleware(async ({ request, redirect }, next) => {
  const url = new URL(request.url);
  const pathSegments = url.pathname.split("/").filter(Boolean);
  if (pathSegments.length < 2) {
    return next();
  }
  const lang = pathSegments[0];
  const section = pathSegments[1];
  if (lang !== "es" && lang !== "en") {
    return next();
  }
  if (section === "yummiesone" && lang === "en") {
    return redirect("/en");
  }
  const routeExists = findRouteBySlug(lang, section);
  if (!routeExists) {
    return redirect(`/${lang}`);
  }
  for (const [routeId, slugs] of Object.entries(routeMappings)) {
    if (section !== slugs[lang]) {
      let matchedRoute = null;
      let matchedLang = null;
      for (const [l, s] of Object.entries(slugs)) {
        if (section === s) {
          matchedRoute = routeId;
          matchedLang = l;
          break;
        }
      }
      if (matchedRoute && matchedLang && matchedLang !== lang) {
        const correctSlug = slugs[lang];
        const newPathSegments = [...pathSegments];
        newPathSegments[1] = correctSlug;
        const newPath = "/" + newPathSegments.join("/");
        return redirect(newPath);
      }
    }
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
