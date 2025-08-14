const routesConfig = [
  {
    id: "home",
    slugs: { es: "", en: "" },
    // Slug vacío para la página de inicio base del idioma
    contentComponent: "@/views/Home/index.astro",
    metaTitleKey: "meta.home.title",
    metaDescriptionKey: "meta.home.description"
  },
  {
    id: "contact",
    slugs: { es: "contacto", en: "contact" },
    contentComponent: "@/views/Contact/index.astro",
    metaTitleKey: "meta.contact.title",
    metaDescriptionKey: "meta.contact.description"
  },
  {
    id: "recipes",
    slugs: { es: "recetas", en: "recipes" },
    contentComponent: "@/views/Recipes/index.astro",
    metaTitleKey: "meta.recipes.title",
    metaDescriptionKey: "meta.recipes.description"
  },
  {
    id: "news",
    slugs: { es: "blog", en: "blog" },
    contentComponent: "@/views/News/index.astro",
    metaTitleKey: "meta.news.title",
    metaDescriptionKey: "meta.news.description"
  },
  {
    id: "products",
    slugs: { es: "productos", en: "products" },
    contentComponent: "@/views/Products/index.astro",
    metaTitleKey: "meta.products.title",
    metaDescriptionKey: "meta.products.description"
  },
  {
    id: "brands",
    slugs: { es: "marcas", en: "brands" },
    contentComponent: "@/views/Brands/index.astro",
    metaTitleKey: "meta.brands.title",
    metaDescriptionKey: "meta.brands.description"
  },
  {
    id: "yummiesone",
    slugs: { es: "yummiesone", en: "yummiesone" },
    contentComponent: "@/views/YummiesOne/index.astro",
    metaTitleKey: "meta.yummiesone.title",
    metaDescriptionKey: "meta.yummiesone.description"
  },
  {
    id: "about_us",
    slugs: { es: "nosotros", en: "about-us" },
    contentComponent: "@/views/AboutUs/index.astro",
    metaTitleKey: "meta.about_us.title",
    metaDescriptionKey: "meta.about_us.description"
  }
  // ... Agrega más rutas aquí
];
function getRouteById(id) {
  return routesConfig.find((route) => route.id === id);
}
function findRouteBySlug(lang, slug) {
  return routesConfig.find((route) => route.slugs[lang] === slug);
}

export { findRouteBySlug as f, getRouteById as g, routesConfig as r };
