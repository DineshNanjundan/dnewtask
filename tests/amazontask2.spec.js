import { test, expect } from '@playwright/test';

test('price increase and decrease should be visible', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  await page.locator('[id="twotabsearchtextbox"]').fill('mobile')
  await page.locator('[id="nav-search-submit-button"]').click();

  // Example locators — replace these with the actual selectors
  // from your price component.
  const lowerwheel = page.locator('[id="p_36/range-slider_slider-item_lower-bound-slider"]');
  const higherwheel = page.locator('[id="p_36/range-slider_slider-item_upper-bound-slider"]');
  const lowerlable=page.locator('[for="p_36/range-slider_slider-item_lower-bound-slider"]');
  const higherlable=page.locator('[for="p_36/range-slider_slider-item_upper-bound-slider"]');
  let lowerPrice= await lowerlable.innerText();
  while(!lowerPrice.includes("₹10,")){
    await lowerwheel.press('ArrowRight')
    lowerPrice=await lowerlable.innerText();
    if(lowerPrice.includes("₹11,")){
      break;

    }
  }
  let higherPrice=await higherlable.innerText()
  while(!higherPrice.includes("₹30,")){
    await higherwheel.press('ArrowLeft')
    higherPrice=await higherlable.innerText()
    if(higherPrice.includes("₹29,")){
      break;
    }
  }
await page.pause()


});
