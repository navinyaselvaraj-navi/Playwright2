import {test} from "@playwright/test"

test.only("login",async({page})=>{
    test.slow
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
})

test("login2",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
})