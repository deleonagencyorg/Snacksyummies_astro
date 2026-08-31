// src/services/api/products.ts
import { cmsClient } from './client';
import type { Product, CMSProductsResponse, CMSProductRaw } from './types';

function extractImageUrl(img?: string | { url: string }): string {
  if (!img) return '';
  if (typeof img === 'string') return img;
  return img.url || '';
}

function mapProduct(item: CMSProductRaw): Product {
  const imageUrl = extractImageUrl(item.image);
  const imageMobileUrl = item.imageMobile || imageUrl;

  return {
    id: item.id,
    slug: item.slug || item.id,
    name: item.name,
    title: item.name,
    category: item.category,
    image: imageUrl,
    imageMobile: imageMobileUrl,
    description: item.description,
    backgroundColor: item.backgroundColor || item.background_color,
    headerTextColor: item.headerTextColor || item.header_color,
    textColor: item.textColor || item.text_color,
    colorButton: item.colorButton || item.color_button,
    weight: item.weight,
    sizes: item.sizes,
    nutrition: item.nutrition,
    brandId: item.brandId,
    isNew: item.isNew,
    metaTitle: item.metaTitle,
    metaDescription: item.metaDescription,
    metaKeywords: item.metaKeywords,
    ogTitle: item.ogTitle,
    ogDescription: item.ogDescription,
    ogImage: item.ogImage,
  };
}

export async function getAllProducts(locale: string = 'es', brandSlug?: string): Promise<Product[]> {
  try {
    const params: Record<string, string | number | boolean> = {
      page: 1,
      pageSize: 100,
      languageCode: locale,
    };
    if (brandSlug) {
      params.brandSlug = brandSlug;
    }

    const response = await cmsClient.get<CMSProductsResponse>('v1/products', params);
    if (!response?.data || !Array.isArray(response.data)) {
      return [];
    }
    return response.data.map(mapProduct);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return [];
  }
}

export async function getProductBySlug(slug: string, locale: string = 'es'): Promise<Product | null> {
  try {
    const response = await cmsClient.get<{ data: CMSProductRaw }>(`v1/products/${slug}`, {
      languageCode: locale,
    });
    if (!response?.data) return null;
    return mapProduct(response.data);
  } catch (error) {
    console.error(`Error al obtener producto ${slug}:`, error);
    return null;
  }
}