import { t, type Locale } from '../i18n/i18n';

export const CANONICAL_ORIGIN = 'https://www.snacksyummies.com';

export function canonicalHref(pathname: string): string {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const url = new URL(path, CANONICAL_ORIGIN);
  url.search = '';
  url.hash = '';
  if (!url.pathname.endsWith('/')) url.pathname += '/';
  return url.href;
}

function clampMeta(text: string): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= 155) return clean;
  return `${clean.slice(0, 152).trimEnd()}...`;
}

export function recipeMetaDescription(
  recipe: { title?: string; description?: string; product?: string | string[] } | null | undefined,
  lang: Locale,
): string {
  const existing = recipe?.description?.trim() ?? '';
  if (existing.length >= 80) return clampMeta(existing);

  const name = recipe?.title?.trim() || (lang === 'es' ? 'Receta' : 'Recipe');
  const productValue = Array.isArray(recipe?.product) ? recipe?.product[0] : recipe?.product;
  const product = productValue?.trim() || (lang === 'es' ? 'snacks Yummies' : 'Yummies snacks');
  const text =
    lang === 'es'
      ? `${name}: receta fácil con ${product}. Ingredientes, pasos y tiempo de preparación en Snacks Yummies.`
      : `${name}: an easy recipe with ${product}. Ingredients, steps and prep time from Snacks Yummies.`;
  return clampMeta(text);
}

export function findCatalogProduct(locale: Locale, productId: string) {
  const brands =
    (t('brands', { namespace: 'brands', locale }) as Array<{
      id: string;
      title?: string;
      products?: Array<{ id: string; slug?: string; title: string; image?: string }>;
    }>) || [];

  for (const brand of brands) {
    const found = brand.products?.find((product) => product.id === productId || product.slug === productId);
    if (found) {
      return { product: found, brandName: brand.title || brand.id };
    }
  }

  return null;
}

export function productMetaDescription(title: string, brandName: string, lang: Locale): string {
  const text =
    lang === 'es'
      ? `${title}: snack de ${brandName}, de la familia Snacks Yummies. Encuéntralo en Centroamérica.`
      : `${title}: a ${brandName} snack from the Snacks Yummies family, sold across Central America.`;
  return clampMeta(text);
}
