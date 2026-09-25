// import {test,expect} from '@playwright/test';
// test('alert handle',async({page})=>{
// await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

// //alert handle
// page.on('dialog',async d1=>{
//   await page.waitForTimeout(2000);
//   await d1.accept();
//  })

//  await page.locator('#name').fill("Dinesh");
//  await page.locator('#alertbtn').click();
//  await page.pause();

// })

// import {test,expect} from '@playwright/test'
// test('alert pageXOffset', async({page})=>{
// await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

// //alert handel 
// page.on('dialog',async d2=>{
//   await page.waitForTimeout(1000);
//   await d2.dismiss();
// })
// await page.locator('#name').fill("Dinesh");
// await page.locator('#confirmbtn').click();
// await page.pause();
// })