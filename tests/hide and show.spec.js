// import {test,expect} from '@playwright/test'
// test('hide and show', async({page})=>{
// await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
// await page.locator('#displayed-text').fill('dinesh')
// await page.locator('#show-textbox').click();
// await expect(page.locator('#displayed-text')).toBeVisible();
// await page.pause();
// })

import {test,expect} from '@playwright/test'
test('hide and show', async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
await page.locator('#displayed-text').fill('dinesh')
await page.locator('#hide-textbox').click();
await expect(page.locator('#displayed-text')).toBeHidden();
await page.pause();
})