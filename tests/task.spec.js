import { test, expect } from '@playwright/test';

test('set mobile price range using input fields', async ({ page }) => {
  // 1. Open the Amazon mobile search page
  await page.goto('https://www.amazon.in/s?k=mobile&crid=2YAJOCJ2Y2H0O&sprefix=%2Caps%2C281&ref=nb_sb_ss_recent_1_0_recent');

  // 2. Type '10000' into the minimum price input field
  await page.locator('#low-price').fill('10000');

  // 3. Type '20000' into the maximum price input field
  await page.locator('#high-price').fill('20000');

  // 4. Click the 'Go' button next to the price inputs to apply the filter
  await page.locator('.a-button-input[type="submit"]').first().click();

  // 5. Wait for the page to finish updating with the filtered results
  await page.waitForLoadState('networkidle');
});