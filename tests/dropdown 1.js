//Check box

// import {test,expect} from '@playwright/test';
// test('page setup', async({page})=>{
// await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
// await page.locator('//input[@value="radio1"]').check();
// await page.locator('//input[@value="radio2"]').check();
// await page.locator('//input[@value="radio3"]').check();
// await page.pause();
// })

//dropdown
// //Method	Example	Selects based on 
// Value	selectOption('option1')	HTML value
// Label	selectOption({label: 'Option 2'})	Visible text
// Index	selectOption({index: 3})	Position 

//locator() finds the dropdown → selectOption() selects an item from that dropdown.

import {test,expect} from '@playwright/test';
test('dd page',async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
// await page.locator('#dropdown-class-example').selectOption('option1');
await page.locator('#dropdown-class-example').selectOption({label:'Option2'});
// await page.locator('#dropdown-class-example').selectOption({index:3});
await page.pause();
})