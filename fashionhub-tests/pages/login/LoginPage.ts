import { Page, expect } from '@playwright/test';
import { LoginLocators } from './LoginLocators';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('login.html');
    console.log('Current URL:', this.page.url());
  }

  async login(username: string, password: string) {
    await this.page.fill(LoginLocators.username, username);
    await this.page.fill(LoginLocators.password, password);
    await this.page.click(LoginLocators.submit);
  }

  async assertWelcomeMessage(username: string) {
    await expect(this.page.getByRole('heading', { level: 2 }))
  .toContainText(username);
  }
}