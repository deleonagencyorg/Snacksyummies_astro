import { cmsClient } from './client';
import { withSiteFilter } from './config';
import { mediaUrl, type CmsMultimedia } from './multimedia';

interface CmsSocialMediaLink {
  id: string;
  platform: string;
  name: string;
  url: string;
  alt: string;
  order: number;
  icon?: CmsMultimedia | null;
}

interface SocialMediaListResponse {
  data: CmsSocialMediaLink[];
  pagination?: { page: number; pageSize: number; total: number };
}

export interface SocialMediaLink {
  platform: string;
  name: string;
  url: string;
  alt: string;
  iconUrl: string;
}

export async function getSocialMediaLinks(locale: string = 'es'): Promise<SocialMediaLink[]> {
  try {
    const rawItems: CmsSocialMediaLink[] = [];
    for (let page = 1; page < 50; page++) {
      const response = await cmsClient.get<SocialMediaListResponse>(
        'v1/social-media',
        withSiteFilter({ page, pageSize: 100, languageCode: locale })
      );
      const data = response.data ?? [];
      rawItems.push(...data);
      if (!data.length || rawItems.length >= (response.pagination?.total ?? rawItems.length)) break;
    }

    const items = rawItems
      .slice()
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map((item) => ({
        platform: item.platform,
        name: item.name || item.platform,
        url: item.url || '',
        alt: item.alt || item.name || item.platform,
        iconUrl: mediaUrl(item.icon),
      }));

    console.log(`[CMS] Redes sociales recibidas: ${items.length} (${locale})`);
    return items;
  } catch (error) {
    console.error('[CMS] Error al obtener redes sociales:', error);
    return [];
  }
}

export function socialMediaByPlatform(links: SocialMediaLink[]): Record<string, SocialMediaLink> {
  return Object.fromEntries(links.map((link) => [link.platform.toLowerCase(), link]));
}
