import { test as base, expect } from "@playwright/test";

const test = base.extend({
  loggedInuser: async ({ page }, use) => { //->'use' "Give the prepared fixture to the test."
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('//input[@class="submit-button btn_action"]').click();
    
    // Provide the logged-in page instance to the test
    await use(page);
  }
});

export { test, expect };