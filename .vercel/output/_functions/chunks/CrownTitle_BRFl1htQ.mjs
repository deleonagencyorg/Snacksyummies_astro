import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, f as renderComponent, d as renderTemplate, r as renderScript } from './astro/server_XONErzoU.mjs';
import 'kleur/colors';
import { $ as $$LazyImage, b as generalAssets } from './MainLayout_C_bIfuhT.mjs';
/* empty css                              */

const $$Astro$1 = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    src,
    alt = "Chip decorativo",
    size = "md",
    position = "random",
    mobilePosition,
    animationDuration,
    class: className = ""
  } = Astro2.props;
  const uniqueId = `chip-${Math.random().toString(36).substring(2, 9)}`;
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16 md:w-20 md:h-20",
    lg: "w-20 h-20 md:w-24 md:h-24",
    xl: "w-24 h-24 md:w-28 md:h-28",
    "2xl": "w-28 h-28 md:w-32 md:h-32",
    "3xl": "w-32 h-32 md:w-36 md:h-36",
    "4xl": "w-36 h-36 md:w-40 md:h-40",
    "5xl": "w-40 h-40 md:w-44 md:h-44",
    "6xl": "w-44 h-44 md:w-48 md:h-48",
    "7xl": "w-48 h-48 md:w-52 md:h-52",
    "8xl": "w-52 h-52 md:w-56 md:h-56",
    "9xl": "w-56 h-56 md:w-60 md:h-60",
    "10xl": "w-60 h-60 md:w-64 md:h-64"
  };
  let positionStyle = "";
  if (position === "random") {
    const top = Math.floor(Math.random() * 80) + 10;
    const left = Math.floor(Math.random() * 80) + 10;
    positionStyle = `top: ${top}%; left: ${left}%;`;
  } else if (position) {
    positionStyle = position;
  }
  const duration = animationDuration || Math.floor(Math.random() * 10) + 8;
  const animationIndex = Math.floor(Math.random() * 5) + 1;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`floating-chip absolute ${sizeClasses[size]} ${className} ${uniqueId}`, "class")}${addAttribute(`${positionStyle} animation: float${animationIndex} ${duration}s infinite linear;`, "style")}> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": src, "alt": alt, "class": "w-full h-full object-contain", "decorative": alt === "Chip decorativo", "loading": "lazy" })} </div> ${mobilePosition && renderTemplate`<style is:global>
    @media (max-width: 768px) {
      .{\`\${uniqueId}\`} {
        {mobilePosition};
      }
    }
  </style>`}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/FloatingChip/index.astro", void 0);

const $$Astro = createAstro();
const $$CrownTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CrownTitle;
  const { text, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="crown-title-container"> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": generalAssets.coronaIcon, "alt": "Crown decoration", "class": "crown-icon", "width": "34", "height": "34" })} <h1${addAttribute(`text-6xl md:text-8xl font-bold mb-4 font-title text-primary ${className}`, "class")}> ${text} </h1> </div> ${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/CrownTitle/CrownTitle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/CrownTitle/CrownTitle.astro", void 0);

export { $$CrownTitle as $, $$Index as a };
