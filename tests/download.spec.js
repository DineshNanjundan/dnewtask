import {test,expect} from '@playwright/test'
test('upload',async({page})=>{
  await page.goto('https://demoqa.com/upload-download');
  //download file
  const downloadpromise = page.waitForEvent('download');
  await page.locator('#downloadButton').click();
  const download = await downloadpromise;


//get download filename
const filename=download.suggestedFilename();
console.log('Download file:', filename);
await page.pause();
})