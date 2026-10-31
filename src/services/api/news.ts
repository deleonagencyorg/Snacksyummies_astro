import { cmsClient } from './client';
import { withSiteFilter } from './config';

interface CmsNewsBrand {
  id: string;
  name: string;
  slug: string;
}

interface CmsNewsRaw {
  id: string;
  title: string;
  slug: string;
  subtitle?: string;
  image?: string;
  imageMobile?: string;
  gallery?: string[];
  content?: string;
  excerpt?: string;
  category?: string;
  tags?: string[];
  author?: string;
  publishedAt?: string | null;
  isPublished: boolean;
  isFeatured: boolean;
  languageCode: string;
  brands?: CmsNewsBrand[];
  createdAt: string;
}

interface NewsListResponse {
  data: CmsNewsRaw[];
  pagination?: { page: number; pageSize: number; total: number };
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  imageMobile: string;
  gallery: string[];
  subtitle: string;
  category: string;
  tags: string[];
  brands: CmsNewsBrand[];
  author: string;
  published_date: string;
  isFeatured: boolean;
}

function mapNews(item: CmsNewsRaw): NewsItem {
  return {
    id: item.id,
    slug: item.slug || item.id,
    title: item.title,
    content: item.content || '',
    excerpt: item.excerpt || '',
    image: item.image || '',
    imageMobile: item.imageMobile || item.image || '',
    gallery: item.gallery ?? [],
    subtitle: item.subtitle || '',
    category: item.category || '',
    tags: item.tags ?? [],
    brands: item.brands ?? [],
    author: item.author || '',
    published_date: item.publishedAt || item.createdAt,
    isFeatured: item.isFeatured,
  };
}

async function fetchAllNews(locale: string): Promise<CmsNewsRaw[]> {
  const items: CmsNewsRaw[] = [];
  for (let page = 1; page < 50; page++) {
    const response = await cmsClient.get<NewsListResponse>(
      'v1/news',
      withSiteFilter({ page, pageSize: 100, languageCode: locale, isPublished: true })
    );
    const data = response.data ?? [];
    items.push(...data);
    if (!data.length || items.length >= (response.pagination?.total ?? items.length)) break;
  }
  return items;
}

const newsByLocale = new Map<string, Promise<NewsItem[]>>();

export async function getAllNews(locale: string = 'es'): Promise<NewsItem[]> {
  const cached = newsByLocale.get(locale);
  if (cached) return cached;

  const request = fetchAllNews(locale).then((items) => items.map(mapNews)).catch((error) => {
    console.error('[CMS] Error al obtener noticias:', error);
    return [] as NewsItem[];
  });
  newsByLocale.set(locale, request);
  return request;
}

export async function getNewsBySlug(slug: string, locale: string = 'es'): Promise<NewsItem | null> {
  const news = await getAllNews(locale);
  return news.find((item) => item.slug === slug) ?? null;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  imagemobile: string;
  gallery: string[];
  published_date: string;
  author: string;
  tags: string[];
}

const blogPostsByLocale = new Map<string, Promise<BlogPost[]>>();

export function getBlogPosts(locale: string = 'es'): Promise<BlogPost[]> {
  const cached = blogPostsByLocale.get(locale);
  if (cached) return cached;
  const request = fetchAllNews(locale)
    .then((items) => items.map((item) => ({
      id: item.slug || item.id,
      slug: item.slug || item.id,
      title: item.title,
      summary: item.excerpt || item.subtitle || '',
      content: item.content || '',
      image: item.image || '',
      imagemobile: item.imageMobile || item.image || '',
      gallery: item.gallery ?? [],
      published_date: item.publishedAt || item.createdAt,
      author: item.author || '',
      tags: item.tags ?? [],
    })))
    .catch((error) => {
      console.error('[CMS] Error al obtener noticias:', error);
      return [] as BlogPost[];
    });
  blogPostsByLocale.set(locale, request);
  return request;
}
