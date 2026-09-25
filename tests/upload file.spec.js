// import {test,expect} from '@playwright/test'
// test('upload',async({page})=>{
//   await page.goto('https://testautomationpractice.blogspot.com/')
//   //single upload:
//   await page.locator('#singleFileInput')
//   //"C:/Users/admin/Downloads/Gemini_Generated_Image_4luede4luede4lue.png"-> file path is copied and back work blash\ is changed to forward/ 
//   .setInputFiles('C:/Users/admin/Downloads/Gemini_Generated_Image_4luede4luede4lue.png')
//   await page.pause();  
// })

import {test,expect} from '@playwright/test'
test('upload',async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/')
  //multiple file upload:-array is been used []
  await page.locator('#multipleFilesInput')
  //"C:/Users/admin/Downloads/Gemini_Generated_Image_4luede4luede4lue.png"-> file path is copied and back work blash\ is changed to forward/ 
  .setInputFiles(['C:/Users/admin/Downloads/Gemini_Generated_Image_4luede4luede4lue.png',"C:/Users/admin/Downloads/Gemini_Generated_Image_47gd9547gd9547gd.png" ])
  await page.pause();  
})