import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Authentication & Login Flow', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/.*inventory.html/);
  });

  test('should display error message for locked out user', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.assertErrorMessage('Sorry, this user has been locked out.');
  });

  test('should display validation error when credentials are invalid', async () => {
    await loginPage.login('invalid_user', 'wrong_password');
    await loginPage.assertErrorMessage('Username and password do not match');
  });
});
