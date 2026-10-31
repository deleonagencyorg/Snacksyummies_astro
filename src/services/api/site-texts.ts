import { cmsClient } from './client';
import { cmsConfig, withSiteFilter } from './config';

interface CmsSiteText {
  id: string;
  key: string;
  value: string;
}

interface SiteTextListResponse {
  data: CmsSiteText[];
  pagination?: { page: number; pageSize: number; total: number };
}

export type SiteTextMap = Record<string, string>;

const SITE_TEXTS_CACHE_TTL_MS = 60_000;
const siteTextsByLocale = new Map<string, { request: Promise<SiteTextMap>; expiresAt: number }>();

export function getSiteTexts(locale: string = 'es'): Promise<SiteTextMap> {
  if (!cmsConfig.siteId) throw new Error('PUBLIC_CMS_SITE_ID must be configured to load CMS common texts');
  const cached = siteTextsByLocale.get(locale);
  if (cached && cached.expiresAt > Date.now()) return cached.request;
  const request = loadSiteTexts(locale).catch((error: unknown) => {
    if (siteTextsByLocale.get(locale)?.request === request) siteTextsByLocale.delete(locale);
    throw error;
  });
  siteTextsByLocale.set(locale, { request, expiresAt: Date.now() + SITE_TEXTS_CACHE_TTL_MS });
  return request;
}

async function loadSiteTexts(locale: string): Promise<SiteTextMap> {
  const items: CmsSiteText[] = [];
  for (let page = 1; page <= 50; page++) {
    const response = await cmsClient.get<SiteTextListResponse>(
      'v1/site-texts',
      withSiteFilter({ page, pageSize: 100, languageCode: locale })
    );
    if (!Array.isArray(response.data)) {
      throw new Error(`CMS returned an invalid site-texts response for locale '${locale}'`);
    }
    items.push(...response.data);
    if (!response.data.length || items.length >= (response.pagination?.total ?? items.length)) break;
  }

  if (items.length === 5000) {
    throw new Error(`CMS returned more than 5000 site texts for locale '${locale}'`);
  }

  console.log(`[CMS] Site texts recibidos: ${items.length} (${locale})`);
  return Object.fromEntries(items.filter((item) => item.key).map((item) => [item.key, item.value ?? '']));
}

export function text(map: SiteTextMap, key: string, fallback: string = ''): string {
  return map[key] ?? fallback;
}
