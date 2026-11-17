import { expect, test, type Page } from '@playwright/test';

const ORIGIN = 'http://127.0.0.1:4391';
const DESKTOP_BANNER = 'operacion-sonrisa-hn-desktop.webp';
const MOBILE_BANNER = 'operacion-sonrisa-hn-mobile.webp';

declare global {
  interface Window {
    mainCarouselInstance?: {
      autoplay?: { stop: () => void };
    };
  }
}

async function setCountry(page: Page, code: string) {
  await page.context().addCookies([{ name: 'yummies_geo_v2', value: code, url: ORIGIN }]);
}

async function mockGeo(page: Page, countryCode: string | null) {
  await page.route('**/api/geo-headers', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ country: null, success: false }),
    }),
  );
  await page.route('https://ipapi.co/**', (route) => {
    if (!countryCode) return route.abort();
    return route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ country_code: countryCode }),
    });
  });
  await page.route('https://api.country.is/**', (route) => route.abort());
}

async function openHome(page: Page, path = '/es/') {
  await page.goto(path, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.mainCarouselInstance);
  await page.evaluate(() => window.mainCarouselInstance?.autoplay?.stop());
  const active = page.locator('.swiper-container.main-carousel .swiper-slide-active');
  await expect(active).toBeVisible();
  return active;
}

function bannerImages(page: Page) {
  return page.locator(
    `.swiper-container.main-carousel img[src*="${MOBILE_BANNER}"], .swiper-container.main-carousel source[srcset*="${DESKTOP_BANNER}"]`,
  );
}

test('el banner de Operación Sonrisa se ve completo en desktop para Honduras', async ({ page }) => {
  await setCountry(page, 'HN');
  await page.setViewportSize({ width: 1440, height: 900 });
  const active = await openHome(page);
  const img = active.locator('img');
  await expect.poll(async () => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
  await expect.poll(async () => img.evaluate((el: HTMLImageElement) => el.currentSrc)).toContain(DESKTOP_BANNER);

  const metrics = await img.evaluate((el: HTMLImageElement) => {
    const box = el.getBoundingClientRect();
    return {
      naturalRatio: el.naturalWidth / el.naturalHeight,
      renderedRatio: box.width / box.height,
      width: box.width,
      height: box.height,
      viewportWidth: window.innerWidth,
    };
  });

  expect(metrics.naturalRatio).toBeCloseTo(16 / 9, 1);
  expect(Math.abs(metrics.renderedRatio - metrics.naturalRatio)).toBeLessThan(0.04);
  expect(metrics.width).toBeGreaterThan(metrics.viewportWidth * 0.95);
  expect(metrics.height).toBeGreaterThan(400);
  await expect(active.locator('a')).toHaveAttribute('href', '/productosconcausa/');
  await active.screenshot({ path: 'test-results/banner-hn-desktop.png' });
});

test('el banner de Operación Sonrisa se ve completo en mobile para Honduras', async ({ page }) => {
  await setCountry(page, 'HN');
  await page.setViewportSize({ width: 390, height: 844 });
  const active = await openHome(page);
  const img = active.locator('img');
  await expect.poll(async () => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
  await expect.poll(async () => img.evaluate((el: HTMLImageElement) => el.currentSrc)).toContain(MOBILE_BANNER);

  const metrics = await img.evaluate((el: HTMLImageElement) => {
    const box = el.getBoundingClientRect();
    return {
      naturalRatio: el.naturalWidth / el.naturalHeight,
      renderedRatio: box.width / box.height,
      width: box.width,
      viewportWidth: window.innerWidth,
    };
  });

  expect(metrics.naturalRatio).toBeCloseTo(1, 1);
  expect(Math.abs(metrics.renderedRatio - metrics.naturalRatio)).toBeLessThan(0.04);
  expect(metrics.width).toBeGreaterThan(metrics.viewportWidth * 0.95);
  await active.screenshot({ path: 'test-results/banner-hn-mobile.png' });
});

test('el banner enlaza a Productos con Causa', async ({ page }) => {
  await setCountry(page, 'HN');
  await page.setViewportSize({ width: 1280, height: 800 });
  const active = await openHome(page);
  await active.locator('a').click();
  await page.waitForURL('**/productosconcausa/');
  await expect(page).toHaveURL(/\/productosconcausa\/$/);
});

test('fuera de Honduras el banner no aparece y el carrusel sigue en la primera promo pública', async ({ page }) => {
  await setCountry(page, 'GT');
  await page.setViewportSize({ width: 1440, height: 900 });
  const active = await openHome(page);
  await expect(bannerImages(page)).toHaveCount(0);
  await expect.poll(async () => active.locator('img').evaluate((el: HTMLImageElement) => el.currentSrc)).toContain(
    'YPOPS-NACHO-PIZZA_BANNER-DESKTOP.webp',
  );
});

test('la cookie legacy de país también limita el banner a Honduras', async ({ page }) => {
  await page.context().addCookies([{ name: 'yummies_country_code', value: 'SV', url: ORIGIN }]);
  await page.setViewportSize({ width: 1280, height: 800 });
  await openHome(page, '/en/');
  await expect(bannerImages(page)).toHaveCount(0);
});

test('sin cookie, una IP de Guatemala no muestra el banner', async ({ page }) => {
  await mockGeo(page, 'GT');
  await page.setViewportSize({ width: 1280, height: 800 });
  await openHome(page);
  await page.waitForFunction(() => document.cookie.includes('yummies_geo_v2=GT'));
  await expect(bannerImages(page)).toHaveCount(0);
});

test('si la detección de IP falla, el respaldo del sitio trata al visitante como Honduras', async ({ page }) => {
  await mockGeo(page, null);
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/es/', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.cookie.includes('yummies_geo_v2=HN'));
  await expect.poll(async () => bannerImages(page).count()).toBeGreaterThan(0);
  const active = page.locator('.swiper-container.main-carousel .swiper-slide-active img');
  await expect.poll(async () => active.evaluate((el: HTMLImageElement) => el.currentSrc)).toContain(DESKTOP_BANNER);
});
