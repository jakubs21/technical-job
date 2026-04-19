import { defineConfig } from '@playwright/test';
import { BASE_URL } from './config/env';


export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: BASE_URL,
    headless: true
  },
   
  reporter: [
    ['list'],
    ['allure-playwright']
  ]
});