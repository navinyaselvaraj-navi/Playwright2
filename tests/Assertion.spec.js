import { expect, test } from "@playwright/test";
test("login",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await expect(page).toHaveURL("https://www.saucedemo.com/")
    await expect(page).toHaveTitle("Swag Labs")
    await expect(page.locator(".login_logo")).toBeVisible()
    await page.locator("#user-name").fill("standard_user")
    await page.locator("password").fill("secret_sauce")
    await page.locator("#login-button").click()
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})

// When to use -> url,title,any unique element is visible on page

test("assert",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    const nametext = await page.locator("#name")
    await expect(nametext).toBeEditable()
    await expect(nametext).toBeEmpty()
    await nametext.fill("Navii")
    // await expect(nametext).toBeEmpty()
})

test("assert1",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
let emailcheckbox = await page.locator("#domain_a")
await emailcheckbox.check()
await expect(emailcheckbox).toBeChecked()
})

test("assertion2",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.getByRole('searchbox',{name:"Search Amazon.in"}).fill("shoes")
   // await page.locator('.suggestion-container').first().waitFor({timeout:5000})
    await page.waitForSelector('.suggestion-container',{state:'visible'})
    const loc = await page.locator(".suggestion-container").allInnerTexts()
    await expect(loc.length).toHaveLength(9)
})
