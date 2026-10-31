import { cmsClient } from './client';
import { withSiteFilter } from './config';
import { mediaUrl, type CmsMultimedia } from './multimedia';

interface CmsGalleryImage {
  id: string;
  alt: string;
  caption: string;
  order: number;
  imageUrl?: string;
  image?: CmsMultimedia | null;
}

interface GalleryListResponse {
  data: CmsGalleryImage[];
  pagination?: { page: number; pageSize: number; total: number };
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption: string;
  order: number;
}

const galleryByLocale = new Map<string, Promise<GalleryImage[]>>();

export function getGalleryImages(locale: string = 'es'): Promise<GalleryImage[]> {
  const cached = galleryByLocale.get(locale);
  if (cached) return cached;

  const request = fetchAllGalleryImages(locale)
    .then((images) =>
      images
        .map((item) => ({
          id: item.id,
          url: item.imageUrl || mediaUrl(item.image),
          alt: item.alt || item.caption || '',
          caption: item.caption || '',
          order: item.order ?? 0,
        }))
        .filter((item) => item.url)
        .sort((a, b) => a.order - b.order)
    )
    .catch((error) => {
      console.error('[CMS] Error al obtener la galería:', error);
      return [] as GalleryImage[];
    });
  galleryByLocale.set(locale, request);
  return request;
}

async function fetchAllGalleryImages(locale: string): Promise<CmsGalleryImage[]> {
  const items: CmsGalleryImage[] = [];
  for (let page = 1; page < 50; page++) {
    const response = await cmsClient.get<GalleryListResponse>(
      'v1/gallery',
      withSiteFilter({ page, pageSize: 100, languageCode: locale })
    );
    const data = response.data ?? [];
    items.push(...data);
    if (!data.length || items.length >= (response.pagination?.total ?? items.length)) break;
  }
  return items;
}
