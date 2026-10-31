// src/services/api/products.ts
import { cmsClient } from './client';
import { withSiteFilter } from './config';
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
    available: item.available,
    backgroundImage: item.backgroundImage,
    nameDescription: item.nameDescription,
    secondColorButton: item.secondColorButton,
    borderColor: item.borderColor,
    sortOrder: item.sortOrder,
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


const productsByKey = new Map<string, Promise<Product[]>>();

async function fetchAllProducts(locale: string, brandSlug?: string): Promise<CMSProductRaw[]> {
  const items: CMSProductRaw[] = [];
  for (let page = 1; page < 50; page++) {
    const params: Record<string, string | number | boolean> = withSiteFilter({ page, pageSize: 100, languageCode: locale });
    if (brandSlug) params.brandSlug = brandSlug;
    const response = await cmsClient.get<CMSProductsResponse>('v1/products', params);
    const data = Array.isArray(response?.data) ? response.data : [];
    items.push(...data);
    const total = response?.pagination?.total ?? items.length;
    if (data.length === 0 || items.length >= total) break;
  }
  return items;
}

export function getAllProducts(locale: string = 'es', brandSlug?: string): Promise<Product[]> {
  const key = `${locale}:${brandSlug ?? ''}`;
  const cached = productsByKey.get(key);
  if (cached) return cached;
  const request = fetchAllProducts(locale, brandSlug)
    .then((items) => items.map(mapProduct))
    .catch((error) => {
      console.error('Error al obtener productos:', error);
      return [] as Product[];
    });
  productsByKey.set(key, request);
  return request;
}

export async function getProductBySlug(slug: string, locale: string = 'es'): Promise<Product | null> {
  const products = await getAllProducts(locale);
  return products.find((product) => product.slug === slug || product.id === slug) ?? null;
}