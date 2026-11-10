import { defineConfig, devices } from '@playwright/test';

const port = 4391;
const gtmId = 'GTM-TESTGTM1';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    trace: 'on-first-retry',
    ...devices['Desktop Chrome'],
  },
  webServer: {
    command: `npm run dev -- --port ${port} --host 127.0.0.1`,
    url: `http://127.0.0.1:${port}/es/`,
    reuseExistingServer: false,
    timeout: 120_000,
    env: {
      ...process.env,
      PUBLIC_GTM_ID: gtmId,
    },
  },
});
