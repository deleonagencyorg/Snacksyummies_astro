import { cmsClient } from './client';
import { cmsConfig } from './config';

export interface SiteInfo {
  name: string;
  defaultMetaTitle: string;
  defaultMetaDescription: string;
}

const emptySite: SiteInfo = { name: '', defaultMetaTitle: '', defaultMetaDescription: '' };

export async function getSiteInfo(): Promise<SiteInfo> {
  if (!cmsConfig.siteId) return emptySite;
  try {
    const site = await cmsClient.get<Partial<SiteInfo>>(`v1/sites/${cmsConfig.siteId}`);
    return {
      name: site.name || '',
      defaultMetaTitle: site.defaultMetaTitle || '',
      defaultMetaDescription: site.defaultMetaDescription || '',
    };
  } catch (error) {
    console.error('[CMS] Error al obtener el sitio:', error);
    return emptySite;
  }
}
