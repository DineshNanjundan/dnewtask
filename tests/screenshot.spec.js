import { test, expect } from '@playwright/test';

test('login page', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.locator('//input[@id="username"]').fill("student");
  await page.locator('//input[@id="password"]').fill("Password123");
  await page.locator('//button[@id="submit"]').click();
  // await expect(page.locator("h1")).toHaveText("Logged In Successfully");
  // await expect(page.locator('//div["@id=error"]')).toHaveText("Your password is invalid!");

  await page.screenshot({
    path:'screeshot/login.png',
    fullpage:true
  })
  })