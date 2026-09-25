/*Playwright, POM means Page Object Model.
It is a design pattern used to organize your automation code so that your tests are easier to read, maintain, and reuse.
Think of it this way:
Instead of writing all the locators and browser actions directly inside your test, you create a class for each important page and put the page's locators/actions inside that class.
*/

import {test,expect} from "@playwright/test";
import LoginPage from "../data pom/loginpage";
import InventoryPage from "../data pom/inventory page";
import data from '../POM/login.json';
test('validate sause task',async({page})=>{
  const loginpage=new LoginPage(page);

  const inventoryPage=new InventoryPage(page);

  await loginpage.navigatetoSaucedemologin()
  await loginpage.fillingUsername(data.username)
  await loginpage.fillingpassword(data.password)
  await loginpage.clickLoginButton()
  await inventoryPage.addingProducttocart(data.productstoadd)
  await page.pause()

})