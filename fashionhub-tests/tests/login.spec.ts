import { test } from '@playwright/test';
import { LoginPage } from '../pages/login/LoginPage';
import { users } from '../fixtures/testData';
 
test('User can login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await test.step('Open login page', async () => {
    await loginPage.goto();
  });

  await test.step('Login with valid credentials', async () => {
    await loginPage.login(users.validUser.username, users.validUser.password);
  });

  await test.step('Verify welcome message', async () => {
    await loginPage.assertWelcomeMessage(users.validUser.username);
  });
});