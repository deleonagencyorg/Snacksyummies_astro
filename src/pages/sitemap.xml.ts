import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import config from '../i18n/config';
import { t } from '../i18n/i18n';

const staticPages = ['/', '/menu', '/nosotros', '/contacto'];

// Menu URLs from both languages
const menuUrls = [
  '/marcas', '/brands',
  '/blog',
  '/contacto', '/contact',
  '/encontranos', '/find-us'
];

export const GET: APIRoute = async () => {
  // Blog posts (safe cast to avoid TS issues when collection is not declared)
  let posts: any[] = [];
  try {
    posts = await (getCollection as any)('blog');
  } catch (e) {
    // ignore if collection doesn't exist
    posts = [];
  }
  // Promotions data for both locales to build dynamic URLs
  const esPromotions: any[] = t('promotions', { namespace: 'promotions', locale: 'es' }) || [];
  const enPromotions: any[] = t('promotions', { namespace: 'promotions', locale: 'en' }) || [];
  
  // Generate language versions of static pages
  const staticPagesWithLang = staticPages.flatMap(page => 
    config.supportedLocales.map(lang => `/${lang}${page}`)
  );

  // Generate language versions of menu URLs
  const menuUrlsWithLang = menuUrls.flatMap(url => {
    const lang = url.startsWith('/en') ? 'en' : 'es';
    return config.supportedLocales.includes(lang) 
      ? [`/${lang}${url.replace(`/${lang}`, '')}`]
      : [url];
  });

  // Blog posts with language prefixes
  const blogPosts = Array.isArray(posts)
    ? posts.map((post: any) => `/${post.slug.split('/')[0]}/blog/${post.slug.split('/')[1]}`)
    : [];

  // Promotions list pages (same base for both langs in this project)
  const promotionsListUrls = config.supportedLocales.map((lang) => `/${lang}/promociones`);

  // Promotions detail pages
  const promotionDetailUrls = [
    ...esPromotions.map((p) => `/es/promociones/${p.slug}`),
    ...enPromotions.map((p) => `/en/promociones/${p.slug}`),
  ];

  // Winners base is localized: es => ganadores, en => winners
  const winnersBaseByLang: Record<string, string> = { es: 'ganadores', en: 'winners' };
  const winnersListUrls = config.supportedLocales.map((lang) => `/${lang}/${winnersBaseByLang[lang]}`);

  // Winners detail pages per promotion
  const winnersDetailUrls = [
    ...esPromotions.map((p) => `/es/${winnersBaseByLang.es}/${p.slug}`),
    ...enPromotions.map((p) => `/en/${winnersBaseByLang.en}/${p.slug}`),
  ];

  const allUrls = [
    ...staticPagesWithLang,
    ...menuUrlsWithLang,
    ...blogPosts,
    ...promotionsListUrls,
    ...promotionDetailUrls,
    ...winnersListUrls,
    ...winnersDetailUrls,
  ];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls.map(url => `
        <url>
          <loc>https://snacksyummies.com${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `).join('')}
    </urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  );
};
