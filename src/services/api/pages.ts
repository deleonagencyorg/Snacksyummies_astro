import { cmsClient } from './client';
import { withSiteFilter } from './config';
import { mediaUrl, videoPlaybackUrl, type CmsMultimedia } from './multimedia';

export const CMS_HOME_SLUGS = ['inicio', 'home', 'index'];

export interface BannerSlide {
  id?: string;
  type: 'image' | 'video';
  desktop: string;
  mobile: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

interface CmsPageBanner {
  id?: string;
  type?: string;
  desktop?: CmsMultimedia | null;
  mobile?: CmsMultimedia | null;
  alt?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  link?: string;
  order?: number;
}

interface CmsMediaRef {
  url?: string;
  originalUrl?: string;
  optimizedUrl?: string;
  seoUrl?: string;
  thumbnailUrl?: string;
  externalUrl?: string;
}

export interface CMSPage {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  languageCode?: string;
  isHomepage?: boolean;
  featuredImage?: CmsMediaRef;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: CmsMediaRef;
  canonicalUrl?: string;
  banners?: CmsPageBanner[];
}

interface CMSPagesResponse {
  data: CMSPage[];
  pagination?: { page: number; pageSize: number; total: number };
}

function mapBanner(banner: CmsPageBanner): BannerSlide | null {
  if (banner.type === 'video') {
    const desktopVideo = videoPlaybackUrl(banner.desktop);
    const mobileVideo = videoPlaybackUrl(banner.mobile);
    if (desktopVideo || mobileVideo) {
      return {
        id: banner.id,
        type: 'video',
        desktop: desktopVideo || mobileVideo,
        mobile: mobileVideo || desktopVideo,
        alt: banner.alt || banner.title || '',
        title: banner.title || '',
        subtitle: banner.subtitle || '',
        description: banner.description || '',
        link: banner.link || '',
      };
    }
  }

  const desktop = mediaUrl(banner.desktop);
  const mobile = mediaUrl(banner.mobile);
  if (!desktop && !mobile) return null;

  return {
    id: banner.id,
    type: 'image',
    desktop: desktop || mobile,
    mobile: mobile || desktop,
    alt: banner.alt || banner.title || '',
    title: banner.title || '',
    subtitle: banner.subtitle || '',
    description: banner.description || '',
    link: banner.link || '',
  };
}

const pagesByLocale = new Map<string, Promise<CMSPage[]>>();

export function getAllPages(locale: string = 'es'): Promise<CMSPage[]> {
  const cached = pagesByLocale.get(locale);
  if (cached) return cached;
  const request = fetchAllPages(locale)
    .catch((error) => {
      console.error('[CMS] Error al obtener páginas:', error);
      return [] as CMSPage[];
    });
  pagesByLocale.set(locale, request);
  return request;
}

async function fetchAllPages(locale: string): Promise<CMSPage[]> {
  const items: CMSPage[] = [];
  for (let page = 1; page < 50; page++) {
    const response = await cmsClient.get<CMSPagesResponse>(
      'v1/pages',
      withSiteFilter({ page, pageSize: 100, languageCode: locale, status: 'published' })
    );
    const data = Array.isArray(response.data) ? response.data : [];
    items.push(...data);
    if (!data.length || items.length >= (response.pagination?.total ?? items.length)) break;
  }
  return items;
}

export function isHomePage(page: CMSPage): boolean {
  return page.isHomepage === true || CMS_HOME_SLUGS.includes((page.slug || '').toLowerCase());
}

export async function getPageBySlug(slug: string, locale: string = 'es'): Promise<CMSPage | null> {
  const pages = await getAllPages(locale);
  return pages.find((page) => page.slug === slug) ?? null;
}

export async function getHomePage(locale: string = 'es'): Promise<CMSPage | null> {
  const pages = await getAllPages(locale);
  return pages.find(isHomePage) ?? null;
}

export function getPageBanners(page: CMSPage | null): BannerSlide[] {
  return (page?.banners ?? [])
    .slice()
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map(mapBanner)
    .filter((banner): banner is BannerSlide => banner !== null);
}
