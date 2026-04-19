import { defineConfig, devices } from '@playwright/test';
import { BASE_URL } from './config/env';


export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: BASE_URL,
    headless: true
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ],

  reporter: [
    ['list'],
    ['allure-playwright']
  ]
});