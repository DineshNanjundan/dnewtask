import {test,expect}from "@playwright/test";
test("validate drag and drop",async({page})=>{
  await page.goto('https://demo.automationtesting.in/Dynamic.html')
  const dragElement=page.locator('[id="angular"]')
  const droplocation=page.locator('[id="droparea"]')
  await dragElement.dragTo(droplocation)
  await page.pause()
})