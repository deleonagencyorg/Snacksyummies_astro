import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CtWTiwmy.mjs';
import { manifest } from './manifest_Bew3wm0h.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/country.astro.mjs');
const _page2 = () => import('./pages/api/detect-locale.astro.mjs');
const _page3 = () => import('./pages/sitemap.xml.astro.mjs');
const _page4 = () => import('./pages/_lang_/about-us.astro.mjs');
const _page5 = () => import('./pages/_lang_/blog/_blogid_.astro.mjs');
const _page6 = () => import('./pages/_lang_/blog.astro.mjs');
const _page7 = () => import('./pages/_lang_/contact.astro.mjs');
const _page8 = () => import('./pages/_lang_/contacto.astro.mjs');
const _page9 = () => import('./pages/_lang_/news/_newsid_.astro.mjs');
const _page10 = () => import('./pages/_lang_/nosotros.astro.mjs');
const _page11 = () => import('./pages/_lang_/noticias/_newsid_.astro.mjs');
const _page12 = () => import('./pages/_lang_/productos/_productid_.astro.mjs');
const _page13 = () => import('./pages/_lang_/products/_productid_.astro.mjs');
const _page14 = () => import('./pages/_lang_/recetas/_recipeid_.astro.mjs');
const _page15 = () => import('./pages/_lang_/recipes/_recipeid_.astro.mjs');
const _page16 = () => import('./pages/_lang_/_pageslug_.astro.mjs');
const _page17 = () => import('./pages/_lang_.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/country.ts", _page1],
    ["src/pages/api/detect-locale.ts", _page2],
    ["src/pages/sitemap.xml.ts", _page3],
    ["src/pages/[lang]/about-us/index.astro", _page4],
    ["src/pages/[lang]/blog/[blogId].astro", _page5],
    ["src/pages/[lang]/blog/index.astro", _page6],
    ["src/pages/[lang]/contact/index.astro", _page7],
    ["src/pages/[lang]/contacto/index.astro", _page8],
    ["src/pages/[lang]/news/[newsId].astro", _page9],
    ["src/pages/[lang]/nosotros/index.astro", _page10],
    ["src/pages/[lang]/noticias/[newsId].astro", _page11],
    ["src/pages/[lang]/productos/[productId].astro", _page12],
    ["src/pages/[lang]/products/[productId].astro", _page13],
    ["src/pages/[lang]/recetas/[recipeId].astro", _page14],
    ["src/pages/[lang]/recipes/[recipeId].astro", _page15],
    ["src/pages/[lang]/[pageSlug].astro", _page16],
    ["src/pages/[lang]/index.astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "af8439a3-a34e-4c44-9e20-febcde9c493e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
