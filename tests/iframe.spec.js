import {test,expect} from '@playwright/test';
test('Iframe',async({page,context})=>{
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  
  //main frame
  const frame=page.frameLocator('//iframe[@id="courses-iframe"]');
  
  //link inside iframe
  await frame.locator('//a[@href="mentorship"]').first().click()
  await page.pause();

})