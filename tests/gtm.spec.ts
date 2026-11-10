import { expect, test } from '@playwright/test';

const GTM_ID = 'GTM-TESTGTM1';

type GtmDataLayerEvent = {
  event?: string;
  page_path?: string;
  'gtm.start'?: number;
};

declare global {
  interface Window {
    dataLayer?: GtmDataLayerEvent[];
  }
}

function isGtmRequest(url: string): boolean {
  return url.includes('googletagmanager.com/gtm.js') && url.includes(`id=${GTM_ID}`);
}

test('GTM se dispara en la carga inicial sin esperar al evento load', async ({ page }) => {
  const gtmRequest = page.waitForRequest((request) => isGtmRequest(request.url()));

  await page.goto('/es/', { waitUntil: 'commit' });

  const request = await gtmRequest;
  expect(request.url()).toContain(`id=${GTM_ID}`);

  await expect
    .poll(async () =>
      page.evaluate(() => {
        const layer = window.dataLayer ?? [];
        return layer.some((entry) => entry.event === 'gtm.js' && typeof entry['gtm.start'] === 'number');
      }),
    )
    .toBe(true);

  const scriptCount = await page.locator(`script[data-gtm="${GTM_ID}"]`).count();
  expect(scriptCount).toBe(1);
});

test('GTM se dispara en una carga completa de otra ruta', async ({ page }) => {
  const gtmRequest = page.waitForRequest((request) => isGtmRequest(request.url()));

  await page.goto('/es/contacto', { waitUntil: 'domcontentloaded' });

  await gtmRequest;
  await expect
    .poll(async () =>
      page.evaluate(() => (window.dataLayer ?? []).some((entry) => entry.event === 'gtm.js')),
    )
    .toBe(true);
});

test('GTM sigue activo y registra la página en una navegación interna', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  const gtmRequest = page.waitForRequest((request) => isGtmRequest(request.url()));
  await page.goto('/es/', { waitUntil: 'domcontentloaded' });
  await gtmRequest;

  const contactLink = page.locator('nav a[href="/es/contacto"]').first();
  await expect(contactLink).toBeVisible();
  await contactLink.click();
  await page.waitForURL(/\/es\/contacto\/?$/, { waitUntil: 'commit' });

  await expect
    .poll(async () =>
      page.evaluate(() =>
        (window.dataLayer ?? []).some(
          (entry) =>
            entry.event === 'virtual_page_view' &&
            (entry.page_path === '/es/contacto' || entry.page_path === '/es/contacto/'),
        ),
      ),
    )
    .toBe(true);

  const scriptCount = await page.locator(`script[data-gtm="${GTM_ID}"]`).count();
  expect(scriptCount).toBe(1);
});
