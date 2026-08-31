// src/services/api/brands.ts
import { cmsClient } from './client';
import type { CMSBrandsResponse, CMSBrandRaw } from './types';

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
}

function mapBrand(item: CMSBrandItem): MappedBrand {
  return {
    id: item.id,
    slug: item.slug || item.id,
    name: item.name,
    logoUrl: item.logoUrl,
  };
}

// ---------------------------------------------------------------------------
// Servicio público
// ---------------------------------------------------------------------------

/**
 * Obtiene todas las marcas del CMS y las devuelve normalizadas.
 * Usado para construir el filtro de categorías con logos reales.
 */
export async function getAllBrands(locale: string = 'es'): Promise<MappedBrand[]> {
  console.log('[getAllBrands] ▶ Obteniendo marcas del CMS para locale:', locale);
  try {
    const response = await cmsClient.get<CMSBrandsApiResponse>('v1/brands', {
      languageCode: locale,
    });

    if (!response?.data || !Array.isArray(response.data)) {
      console.warn('[getAllBrands] ⚠️  El CMS no devolvió data[] de marcas');
      return [];
    }

    const mapped = response.data.map(mapBrand);
    console.log('[getAllBrands] ✅ Marcas obtenidas:', mapped.map((b) => `${b.slug}(${b.id.slice(0, 8)})`).join(', '));
    return mapped;
  } catch (error) {
    console.error('[getAllBrands] ❌ Error al obtener marcas:', error);
    return [];
  }
}
