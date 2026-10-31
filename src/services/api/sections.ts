import { cmsClient } from './client';
import { withSiteFilter } from './config';
import { mediaUrl, type CmsMultimedia } from './multimedia';

interface SectionResponse<T> {
  data: T[];
}

interface CmsFooterPhone {
  country: string;
  flag: string;
  number: string;
  order?: number;
  flagImageUrl?: string;
  flagImage?: CmsMultimedia | null;
}

export interface FooterPhoneView {
  id?: string;
  country: string;
  flag: string;
  flagImageUrl: string;
  number: string;
  telHref: string;
  order: number;
}

async function loadSection<T, R>(endpoint: string, locale: string, map: (item: T) => R): Promise<R[]> {
  try {
    const response = await cmsClient.get<SectionResponse<T>>(endpoint, withSiteFilter({ languageCode: locale }));
    return (response.data ?? []).map(map);
  } catch (error) {
    console.error(`[CMS] Error al obtener ${endpoint}:`, error);
    return [];
  }
}

export function getFooterPhones(locale: string = 'es'): Promise<FooterPhoneView[]> {
  return loadSection<CmsFooterPhone & { id?: string }, FooterPhoneView>('v1/footer-phones', locale, (item) => ({
    id: item.id,
    country: item.country || '',
    flag: item.flag || '',
    flagImageUrl: item.flagImageUrl || mediaUrl(item.flagImage),
    number: item.number || '',
    telHref: `tel:+${(item.number || '').replace(/\D/g, '').replace(/^00?1(?=809)/, '1')}`,
    order: item.order ?? 0,
  })).then((items) => items.sort((a, b) => a.order - b.order));
}

interface CmsFooterLink {
  id: string;
  label: string;
  url: string;
  order: number;
}

export interface FooterLinkView {
  id: string;
  label: string;
  url: string;
  order: number;
}

export function getFooterLinks(locale: string = 'es'): Promise<FooterLinkView[]> {
  return loadSection<CmsFooterLink, FooterLinkView>('v1/footer-links', locale, (item) => ({
    id: item.id,
    label: item.label || '',
    url: item.url || '',
    order: item.order ?? 0,
  })).then((items) => items.sort((a, b) => a.order - b.order));
}

interface CmsAboutTimelineItem {
  year: string;
  title: string;
  text: string;
  image?: CmsMultimedia | null;
  mobileImage?: CmsMultimedia | null;
  imageUrl?: string;
  mobileImageUrl?: string;
  order?: number;
}

export interface AboutTimelineItemView {
  year: string;
  title: string;
  text: string;
  imageUrl: string;
  mobileImageUrl: string;
  order: number;
}

export function getAboutTimeline(locale: string = 'es'): Promise<AboutTimelineItemView[]> {
  return loadSection<CmsAboutTimelineItem, AboutTimelineItemView>('v1/about-timeline', locale, (item) => ({
    year: item.year || '',
    title: item.title || '',
    text: item.text || '',
    imageUrl: item.imageUrl || mediaUrl(item.image),
    mobileImageUrl: item.mobileImageUrl || mediaUrl(item.mobileImage) || item.imageUrl || mediaUrl(item.image),
    order: item.order ?? 0,
  })).then((items) => items.sort((a, b) => a.order - b.order));
}

interface CmsDeliveryApp {
  name: string;
  url: string;
  iconUrl?: string;
  order?: number;
  icon?: CmsMultimedia | null;
}

export interface DeliveryAppView {
  app_name: string;
  app_url: string;
  app_icon: string;
  order: number;
}

export function getDeliveryApps(locale: string = 'es'): Promise<DeliveryAppView[]> {
  return loadSection<CmsDeliveryApp, DeliveryAppView>('v1/delivery-apps', locale, (item) => ({
    app_name: item.name || '',
    app_url: item.url || '',
    app_icon: item.iconUrl || mediaUrl(item.icon),
    order: item.order ?? 0,
  })).then((items) => items.sort((a, b) => a.order - b.order));
}
