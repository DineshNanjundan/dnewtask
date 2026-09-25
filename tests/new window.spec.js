import {test,expect} from '@playwright/test';
test('new window',async({page,context})=>{
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  const[newwindow] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('#openwindow').click()
  ])
await page.pause();

})
