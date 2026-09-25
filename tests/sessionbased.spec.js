import {test,expect} from '@playwright/test';
test("validate sauce task",async({page})=>{
  await page.goto('/inventory.html')
  await page.locator('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
  await page.pause()
}) 