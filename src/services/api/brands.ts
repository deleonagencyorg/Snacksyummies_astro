// src/services/api/brands.ts
import { cmsClient } from './client';

// ---------------------------------------------------------------------------
// Tipos extendidos según la respuesta real del CMS
// ---------------------------------------------------------------------------

/**
 * Forma real que devuelve el endpoint GET /v1/brands del CMS.
 * El campo de logo viene como `logoUrl` (string plano, no { url }).
 */
export interface CMSBrandItem {
  id: string;
  name: string;
  slug: string;
  /** URL directa del logo (CloudFront CDN) */
  logoUrl?: string;
  background?: string;
  brandLanguages?: Array<{
    id: string;
    name: string;
    link?: string;
    logoUrl?: string;
    caption?: string;
    brandId?: string;
    code?: string;
  }>;
  createdAt?: string;
}

export interface CMSBrandsApiResponse {
  data: CMSBrandItem[];
  pagination?: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}

// ---------------------------------------------------------------------------
// Mapeador a formato normalizado para el frontend
// ---------------------------------------------------------------------------

export interface MappedBrand {
  /** UUID del CMS (se usa para hacer match con product.brandId) */
  id: string;
  /** Slug legible (ej. 'taqueritos', 'yummi-nuts') — se usa como data-brand */
  slug: string;
  /** Nombre legible (ej. 'Taqueritos') */
  name: string;
  /** URL del logo para el círculo del filtro */
  logoUrl?: string;
  background?: string;
  link?: string;
  caption?: string;
}

function mapBrand(item: CMSBrandItem, locale: string): MappedBrand {
  const localized = item.brandLanguages?.find((language) => language.code === locale);
  return {
    id: item.id,
    slug: item.slug || item.id,
    name: localized?.name || item.name,
    logoUrl: localized?.logoUrl || item.logoUrl,
    background: item.background,
    link: localized?.link,
    caption: localized?.caption,
  };
}

// ---------------------------------------------------------------------------
// Servicio público
// ---------------------------------------------------------------------------

/**
 * Obtiene todas las marcas del CMS y las devuelve normalizadas.
 * Usado para construir el filtro de categorías con logos reales.
 */
const brandsByLocale = new Map<string, Promise<MappedBrand[]>>();

export function getAllBrands(locale: string = 'es'): Promise<MappedBrand[]> {
  const cached = brandsByLocale.get(locale);
  if (cached) return cached;

  const request = fetchAllBrands(locale);
  brandsByLocale.set(locale, request);
  return request;
}

async function fetchAllBrands(locale: string): Promise<MappedBrand[]> {
  try {
    const items: CMSBrandItem[] = [];
    for (let page = 1; page < 50; page++) {
      const response = await cmsClient.get<CMSBrandsApiResponse>('v1/brands', {
        page,
        pageSize: 100,
      });
      const data = Array.isArray(response?.data) ? response.data : [];
      items.push(...data);
      if (!data.length || items.length >= (response.pagination?.total ?? items.length)) break;
    }

    return items.map((item) => mapBrand(item, locale));
  } catch (error) {
    console.error('[CMS] Error al obtener marcas:', error);
    return [];
  }
}
