import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderScript, d as renderTemplate } from './astro/server_XONErzoU.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getLocale, t } from './i18n_N2D6iQyo.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const {
    currentPath,
    bgColor,
    textColor = "text-gray-500",
    hoverColor = "hover:text-gray-800"
  } = Astro2.props;
  let backgroundColor = "transparent";
  if (bgColor === "bg-primary") backgroundColor = "var(--color-primary)";
  else if (bgColor === "bg-secondary") backgroundColor = "var(--color-secondary)";
  else if (bgColor === "bg-white") backgroundColor = "white";
  else if (bgColor === "bg-gray-100") backgroundColor = "#f3f4f6";
  let textColorValue = "#6b7280";
  if (textColor === "text-white") textColorValue = "white";
  else if (textColor === "text-gray-600") textColorValue = "#4b5563";
  else if (textColor === "text-gray-500") textColorValue = "#6b7280";
  const currentLocale = getLocale();
  const pathname = currentPath || Astro2.url.pathname;
  const localeMatch = pathname.match(/^\/([a-z]{2})\//);
  const pathLocale = localeMatch ? localeMatch[1] : currentLocale;
  const cleanPath = pathname.replace(new RegExp(`^/(${pathLocale})?/?`), "").replace(/\/$/, "");
  const segments = cleanPath ? cleanPath.split("/") : [];
  const section = segments.length > 0 ? segments[0] : "";
  let sectionTitle = "";
  if (section) {
    sectionTitle = t(`meta.${section}.title`, { namespace: "common", locale: pathLocale });
    if (sectionTitle === `meta.${section}.title`) {
      sectionTitle = t("title", { namespace: section, locale: pathLocale });
    }
    if (sectionTitle === "title" || sectionTitle === `meta.${section}.title`) {
      sectionTitle = section.charAt(0).toUpperCase() + section.slice(1);
    }
  }
  const homeUrl = `/`;
  return renderTemplate`${maybeRenderHead()}<nav class="breadcrumb-container pt-8 mt-[2rem]"${addAttribute(`background-color: ${backgroundColor};`, "style")} aria-label="Breadcrumb"> <div class="breadcrumb-wrapper"> <ol class="breadcrumb-list"> <!-- Home link always present --> <li class="breadcrumb-item"${addAttribute(`color: ${textColorValue};`, "style")}> <a${addAttribute(homeUrl, "href")} class="breadcrumb-link home-link"${addAttribute(`color: ${textColorValue};`, "style")}${addAttribute(t("meta.home.title", { namespace: "common" }), "aria-label")}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="breadcrumb-home-icon"> <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path> <polyline points="9 22 9 12 15 12 15 22"></polyline> </svg> </a> </li> <!-- Current section if not home --> ${section && renderTemplate`<li class="breadcrumb-item"${addAttribute(`color: ${textColorValue};`, "style")}> <span class="breadcrumb-separator" aria-hidden="true">/</span> <a${addAttribute(`/${pathLocale}/${section}`, "href")} class="breadcrumb-link"${addAttribute(`color: ${textColorValue};`, "style")}> ${(sectionTitle || section).toUpperCase()} </a> </li>`} <!-- Additional segments if present --> ${segments.slice(1).map((segment, index) => {
    const path = segments.slice(0, index + 2).join("/");
    const segmentTitle = segment.replace(/-/g, " ");
    return renderTemplate`<li class="breadcrumb-item"${addAttribute(`color: ${textColorValue};`, "style")}> <span class="breadcrumb-separator" aria-hidden="true">/</span> <a${addAttribute(`/${currentLocale}/${path}`, "href")}${addAttribute(`breadcrumb-link ${index === segments.length - 2 ? "current" : ""}`, "class")}${addAttribute(`color: ${textColorValue};`, "style")}> ${segmentTitle.toUpperCase()} </a> </li>`;
  })} </ol> </div> </nav> ${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/Breadcrumb/Breadcrumb.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/Breadcrumb/Breadcrumb.astro", void 0);

export { $$Breadcrumb as $ };
