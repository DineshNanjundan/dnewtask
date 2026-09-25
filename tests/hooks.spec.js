// What is hooks?
//In Playwright, hooks are special functions provided by the test runner (similar to Jest or Mocha) that allow you to run setup and teardown code at different stages of your test suite execution.

//They help organize your code, maintain a clean state, and avoid code duplication by letting you share common setup actions across multiple tests.

//beforeall()
//afterall()
//before each()
//after each()

// import { test, expect } from '@playwright/test';

// // This runs before EACH test in this file
// test.beforeEach(async ({ page }) => {
//   console.log('--- Setting up: Navigating to the homepage ---');
//   // Every test will automatically start by navigating here
//   await page.goto('https://example.com');
// });

// // This runs after EACH test in this file
// test.afterEach(async ({ page }) => {
//   console.log('--- Teardown: Test completed successfully ---');
//   // You could clear cookies or local storage here if needed
//   await page.context().clearCookies();
// });

// test('should have the correct page title', async ({ page }) => {
//   // We don't need to write page.goto() here because beforeEach handled it!
//   await expect(page).toHaveTitle('Example Domain');
// });

// test('should display the main heading', async ({ page }) => {
//   // This test also benefits from the beforeEach navigation
//   const heading = page.locator('h1');
//   await expect(heading).toHaveText('Example Domain');
// });