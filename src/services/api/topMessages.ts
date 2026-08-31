import { cmsClient } from './client';
import { getAllBrands } from './brands';
import type { TopMessage, CMSTopMessagesResponse, CMSTopMessageRaw } from './types';

/**
 * Convierte una respuesta raw del CMS al formato TopMessage estandarizado.
 * Mapea la propiedad `title` (oficial del backend) o `text` como fallback, y la propiedad `order`.
 */
function mapTopMessage(item: CMSTopMessageRaw): TopMessage {
  const messageText = item.title || item.text || '';

  return {
    id: item.id || '',
    text: messageText,
    link: item.link || '',
    order: item.order ?? 0,
    isActive: item.is_active ?? true,
    backgroundColor: item.background_color || '#000000',
    textColor: item.text_color || '#ffffff',
  };
}

/**
 * Obtiene los cintillos (top-messages) activos filtrados por idioma y marca,
 * ordenados ascendentemente por la propiedad `order` asignada en el CMS.
 *
 * @param locale Código de idioma ('es', 'en', etc.)
 * @param brandSlug Opcional. Slug de la marca ('taqueritos', 'snacksyummies'). Si no se provee, usa PUBLIC_CMS_BRAND_SLUG de .env
 */
export async function getActiveTopMessages(locale: string = 'es', brandSlug?: string): Promise<TopMessage[]> {
  try {
    const targetBrandSlug = brandSlug ?? import.meta.env.PUBLIC_CMS_BRAND_SLUG;
    const params: Record<string, string | number | boolean> = {
      languageCode: locale,
    };

    if (targetBrandSlug) {
      try {
        // Resolver slug de la marca al UUID correspondiente registrado en el CMS
        const brands = await getAllBrands(locale);
        const matchedBrand = brands.find(
          (b) => b.slug?.toLowerCase() === targetBrandSlug.toLowerCase() || b.id === targetBrandSlug
        );

        if (matchedBrand) {
          params.brandId = matchedBrand.id;
        }
      } catch (brandError) {
        console.warn('[CMS] No se pudo resolver la marca a partir del slug (consultando cintillos sin filtro de brandId):', brandError);
      }
    }

    const response = await cmsClient.get<CMSTopMessagesResponse>('v1/top-messages', params);

    if (!response?.data || !Array.isArray(response.data)) {
      return [];
    }

    return response.data
      .map(mapTopMessage)
      .filter((message) => message.isActive && message.text)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  } catch (error) {
    console.error('[CMS] Error al obtener los cintillos (top-messages):', error);
    return [];
  }
}