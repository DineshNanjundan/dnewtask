// import {test,expect} from '@playwright/test';
// test('dd select' ,async ({page})=>{
// await page.goto('https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html');
// await page.locator('#course').selectOption("js");
// await page.locator('#ide').selectOption({label:'Visual Studio'});
// await page.pause();
// })

import {test,expect}from '@playwright/test';
test ('dd page',async ({page})=>{
await page.goto('https://vinothqaacademy.com/drop-down/');
await page.locator('//li[@id="select2-simpleDropdown-result-9x7t-CH"]').selectOption("Chennai");
await page.pause();
})