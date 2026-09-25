import {test,expect} from '@playwright/test';
test('demo prorject',async({page})=>{
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user')
  await page.locator('#password').fill('secret_sauce')
  await page.locator('//input[@class="submit-button btn_action"]').click();
  await page.waitForTimeout(2000);
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('#add-to-cart-sauce-labs-bike-light').click();
  await page.waitForTimeout(2000);
  await page.locator('//a[@class="shopping_cart_link"]').click();
  await page.waitForTimeout(2000);
  await page.locator('#checkout').click();
  await page.waitForTimeout(2000);
  await page.locator('#first-name').fill('Dinesh');
  await page.locator('#last-name').fill('N');
  await page.locator('#postal-code').fill('1234');
  await page.waitForTimeout(2000);
  await page.locator('#continue').click();
  await page.locator('#finish').click();
  await page.waitForTimeout(2000);
  await page.locator('#generate-pdf-order').click();
  await expect(page.locator('//h2[@class="complete-header"]')).toHaveText("Thank you for your order!");
  
  await page.pause();
  
})