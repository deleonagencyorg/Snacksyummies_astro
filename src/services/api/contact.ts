import { cmsClient } from './client';
import { withSiteFilter } from './config';

interface ContactListResponse {
  data: ContactConfig[];
}

export interface ContactConfig {
  id: string;
  languageCode: string;
  title: string;
  subtitle: string;
  description: string;
  email: string;
  phone: string;
  form: {
    title: string;
    contactReason: { label: string; placeholder: string; required: boolean; options: string[] };
    fullName: { label: string; placeholder: string; required: boolean };
    email: { label: string; placeholder: string; required: boolean };
    phone: { label: string; placeholder: string; required: boolean };
    message: { label: string; placeholder: string; required: boolean };
    submit: string;
  };
  offices: {
    title: string;
    locations: Array<{
      countryCode: string;
      tab: string;
      name: string;
      address: string;
      phones: string[];
      email: string;
      mapEmbed: string;
      order: number;
    }>;
  };
  map: { title: string; description: string };
}

const contactByLocale = new Map<string, Promise<ContactConfig | null>>();

export function getContactConfig(locale: string = 'es'): Promise<ContactConfig | null> {
  const cached = contactByLocale.get(locale);
  if (cached) return cached;

  const request = cmsClient
    .get<ContactListResponse>(
      `v1/contact/language/${encodeURIComponent(locale)}`,
      withSiteFilter({ page: 1, pageSize: 20 })
    )
    .then((response) => response.data?.[0] ?? null)
    .catch((error) => {
      console.error('[CMS] Error al obtener la configuración de contacto:', error);
      return null;
    });
  contactByLocale.set(locale, request);
  return request;
}
