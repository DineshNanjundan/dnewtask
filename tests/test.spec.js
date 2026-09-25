// Playwright is an open-source automation framework used mainly for testing web applications. It can control browsers such as Chromium, Firefox, and WebKit just like a real user would.

//DOM is the browser's tree-like representation of the HTML page.
//ID: tagname#id or #id ->An ID is an identifier assigned to an HTML element.one spefic element
//class: tagname.class or .class -> A class is an HTML attribute commonly used to group/style elements.multiple elements
//xpath: XPath is another language for finding elements in an HTML/XML document.//input[@id='username']

// 1. What is an Assertion?->	Checks the result
// An assertion is a statement that verifies whether something is true or matches what you expect.
// we commonly use expect() for assertions.

/*Assertion	What it checks

toBeVisible()->	Element is visible
toBeHidden()->	Element is hidden
toHaveText()->	Exact text
toContainText()->	Text is contained
toHaveValue()->	Input value
toBeChecked()->	Checkbox/radio is checked
toBeEnabled()->	Element is enabled
toBeDisabled()->	Element is disabled
toHaveURL()->	Current URL
toHaveTitle()->	Page title
toHaveCount()->	Number of elements
toHaveAttribute()->	HTML attribute*/

// 2. What is a Fixture?->	Gives your test something it needs

// A fixture is something that Playwright provides to your test automatically.
//({Page}) is a fixture

//  Other built-in fixtures
// page -> Represents a browser tab/page.
// browser -> Represents the browser.
// context -> A browser context is like an isolated browser session.
// request -> Used for API testing.

// //3.Action-> performs a task
/*click()
fill()
type()
press()
check()
uncheck()
selectOption()
hover()
focus()*/

//What are Locators in Playwright?
// A locator is how Playwright finds an element on a web page so that you can interact with it or check it.

/*
getByRole()
getByText()
getByLabel()
getByPlaceholder()
getByTestId()
locator()
page.locator('#username')
page.locator('.login-button')
page.locator('input[name="email"]')
page.getByRole('button', { name: 'Login' })
page.getByText('Welcome')
*/

// import { test, expect } from '@playwright/test';

// test('webpage', async ({ page }) => {
//   await page.goto('https://playwright.dev/doc/intro');
// })