import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('login.html');
    console.log('Current URL:', this.page.url());
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('input[type="submit"]');
  }

  async assertWelcomeMessage(username: string) {
    await expect(this.page.getByRole('heading', { level: 2 }))
  .toContainText(username);
  }
}