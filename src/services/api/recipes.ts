// src/services/api/recipes.ts
import { cmsClient } from './client';
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
    people: item.people ?? 4,
    difficulty: item.difficulty ?? 'Fácil',
    ingredients: Array.isArray(item.ingredients) ? item.ingredients : [],
    instructions: Array.isArray(item.instructions) ? item.instructions : [],
    category: item.category,
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

export async function getAllRecipes(locale: string = 'es', brandSlug?: string): Promise<Recipe[]> {
  try {
    const params: Record<string, string | number | boolean> = {
      page: 1,
      pageSize: 100,
      languageCode: locale,
    };
    if (brandSlug) {
      params.brandSlug = brandSlug;
    }

    const response = await cmsClient.get<CMSRecipesResponse>('v1/recipes', params);
    if (!response?.data || !Array.isArray(response.data)) {
      return [];
    }

    return response.data.map(mapRecipe);
  } catch (error) {
    console.error('[CMS] Error al obtener recetas:', error);
    return [];
  }
}

export async function getRecipeBySlug(slug: string, locale: string = 'es'): Promise<Recipe | null> {
  try {
    const response = await cmsClient.get<{ data: CMSRecipeRaw }>(`v1/recipes/${slug}`, {
      languageCode: locale,
    });
    if (!response?.data) return null;
    return mapRecipe(response.data);
  } catch (error) {
    console.error(`Error al obtener receta ${slug}:`, error);
    return null;
  }
}