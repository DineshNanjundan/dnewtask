import { test, expect } from '@playwright/test';
import AmazonPage from '../data pom/amazon';
import data from '../POM/amazon.json';

test('validate amazon mobile search, price filter, pagination and cart quantity', async ({ page }) => {
  const amazonPage = new AmazonPage(page);

  await amazonPage.navigateToAmazon();
  await amazonPage.searchForProduct(data.searchKeyword);
  
  // Sets the price range cleanly, avoiding layout-breaking slider drags
  await amazonPage.setPriceRange(data.lowPrice, data.highPrice);

  await amazonPage.validateAndNavigatePages(data.targetPages);
  await amazonPage.returnToFirstPage(data.targetPages);
  await amazonPage.selectProductAndQuantity(data.productName, data.quantity);

  await page.pause();
});