import { chromium } from "@playwright/test";
async function globalAuthSetup(){
  const browser=await chromium.launch()
  const page=await browser.newPage()
  await page.goto("https://www.saucedemo.com/");
  await page.locator('#user-name').fill('standard_user')
  await page.locator('#password').fill('secret_sauce')
  await page.locator('//input[@class="submit-button btn_action"]').click();
  await page.context().storageState({path:'authsession.json'})//Take the current browser context's storage/authentication state and save it.
  //It is JSON data representing saved browser storage state, commonly including things such as cookies and local-storage data.
  await browser.close()
}
export default globalAuthSetup