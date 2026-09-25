// import {test,expect} from '@playwright/test'
// test('mouse hover', async({page})=>{
// await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
// await page.locator('#mousehover').hover();
// await page.locator('//a[@href="#top"]').click();
// await page.pause();
// })

import {test,expect} from '@playwright/test'
test('mouse hover', async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
await page.locator('#mousehover').hover();
await page.getByText('Reload').click();
await page.pause();
})

