//1. Blocking Media Files (Amazon)
// import {test,expect} from "@playwright/test"

// test("Validate Intercepting api calls", async({page}) => {
//   await page.route('**/*.{jpg,jpeg,avif,webp,svg,png,mp4,gif}', async(route) => { 
//     await route.abort()
//   })
//   await page.goto("https://www.amazon.in/");
//   await page.pause()
// })

// //2. Logging Network Requests (Amazon)
// import {test,expect} from "@playwright/test"

// test("Log api calls", async({page}) => {
//   await page.route('**/*', async(route) => {
//     console.log(route.request().method())
//     console.log(route.request().url())
//     await route.continue()
//   })
//   await page.goto("https://www.amazon.in/");
//   await page.waitForLoadState('networkidle'); ->(networkidle) load state in playwright
// })

// //3. Blocking Stylesheets / CSS (SauceDemo)
// //JavaScript
// import {test,expect} from "@playwright/test"

// test("Log api calls", async({page}) => {
//   await page.route('**/*.css', async(route) => {
//     await route.abort()
//   })
//   await page.goto("https://www.saucedemo.com/");
//   await page.pause()
// })

// //4. Creating Network Latency & Unrouting (Amazon)

// import {test,expect} from "@playwright/test"
// test("Creating network latency in the test", async({page}) => {
//   await page.route('**/*', async(route) => {
//     await page.waitForTimeout(4000)
//     await route.continue()
//     await page.unrouteAll({ behavior: 'ignoreErrors' })
//   })
//   await page.goto("https://www.amazon.in");
//   await page.locator('[id="twotabsearchtextbox"]').fill('mobiles')
//   await page.pause()
// })

// //5.API Mocking and Response Modification

// import {test,expect} from "@playwright/test"

// test("Creating network latency in the test", async({page})=>{
//   await page.route('**/users', async(route)=>{
//     console.log("Interception started")
//     const response = await route.fetch()
//     const body = await response.json()
//     body[2].username = "Dinesh (Modified data)"
//     await route.fulfill({
//       response,
//       body: JSON.stringify(body)
//     })
//   })
//   await page.goto('https://jsonplaceholder.typicode.com/users');
//   await page.pause()
// })