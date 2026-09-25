import {test,expect} from '@playwright/test';

import data from '../data driven.json/logindata.json' //../ used to get the json file in js
//test.describe.configure({mode:"parallel"})
// ->describe is used to group related tests together.
// ->configure() allows you to change the configuration/settings for that describe group.


test("validate sign in and verifiy sucess and home",async({page})=>{
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.locator('[id="username"]').fill(data.username)
  await page.locator('[id="password"]').fill(data.password)
  await page.locator('[id="submit"]').click()
  await page.pause();
})