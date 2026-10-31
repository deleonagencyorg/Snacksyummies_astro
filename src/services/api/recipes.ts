// src/services/api/recipes.ts
import { cmsClient } from './client';
import { withSiteFilter } from './config';
import type { Recipe, CMSRecipesResponse, CMSRecipeRaw } from './types';

function extractImageUrl(img?: string | { url: string }): string {
  if (!img) return '';
  if (typeof img === 'string') return img;
  return img.url || '';
}

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function mapRecipe(item: CMSRecipeRaw): Recipe {
  const imageUrl = extractImageUrl(item.image);
  const brandSlugs = Array.isArray(item.brands) ? item.brands.map((b) => b.slug).filter(Boolean) : [];
  const prepTime = item.preparation_time ?? item.preparationTime ?? 0;

  const recipeSlug = slugify(item.slug || item.title || item.id);

  return {
    id: item.id,
    slug: recipeSlug,
    title: item.title,
    image: imageUrl || 'https://snack.yummiespromociones.com/SnacksyummiesAssets/placeholder.webp',
    preparation_time: prepTime,
    people: item.people,
    difficulty: item.difficulty,
    ingredients: Array.isArray(item.ingredients) ? item.ingredients : [],
    instructions: Array.isArray(item.instructions) ? item.instructions : [],
    category: item.category,
    type: item.type,
    isNew: item.isNew,
    description: item.description,
    gallery: Array.isArray(item.gallery) ? item.gallery : [],
    brands: item.brands ?? [],
    products: item.products ?? [],
    brandSlugs,
    brand: brandSlugs.length > 0 ? brandSlugs : undefined,
    tags: item.tags,
    video: item.video,
    date: item.date,
    metaTitle: item.metaTitle,
    metaDescription: item.metaDescription,
    metaKeywords: item.metaKeywords,
    ogTitle: item.ogTitle,
    ogDescription: item.ogDescription,
    ogImage: item.ogImage,
  };
}


const recipesByKey = new Map<string, Promise<Recipe[]>>();

async function fetchAllRecipes(locale: string, brandSlug?: string): Promise<CMSRecipeRaw[]> {
  const items: CMSRecipeRaw[] = [];
  for (let page = 1; page < 50; page++) {
    const params: Record<string, string | number | boolean> = withSiteFilter({ page, pageSize: 100, languageCode: locale });
    if (brandSlug) params.brandSlug = brandSlug;
    const response = await cmsClient.get<CMSRecipesResponse>('v1/recipes', params);
    const data = Array.isArray(response?.data) ? response.data : [];
    items.push(...data);
    const total = response?.pagination?.total ?? items.length;
    if (data.length === 0 || items.length >= total) break;
  }
  return items;
}

export function getAllRecipes(locale: string = 'es', brandSlug?: string): Promise<Recipe[]> {
  const key = `${locale}:${brandSlug ?? ''}`;
  const cached = recipesByKey.get(key);
  if (cached) return cached;
  const request = fetchAllRecipes(locale, brandSlug)
    .then((items) => items.map(mapRecipe))
    .catch((error) => {
      console.error('[CMS] Error al obtener recetas:', error);
      return [] as Recipe[];
    });
  recipesByKey.set(key, request);
  return request;
}

export async function getRecipeBySlug(slug: string, locale: string = 'es'): Promise<Recipe | null> {
  const recipes = await getAllRecipes(locale);
  return recipes.find((recipe) => recipe.slug === slug || recipe.id === slug) ?? null;
}