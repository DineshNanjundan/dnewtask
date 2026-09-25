import { test, expect } from "../Fixtures/sauceLogin";

test('validate adding product to cart', async ({ loggedInuser }) => {
  // User is already logged in! Perform inventory page actions directly:
  await loggedInuser.locator('[id="add-to-cart-sauce-labs-backpack"]').click();
  await loggedInuser.pause();
});