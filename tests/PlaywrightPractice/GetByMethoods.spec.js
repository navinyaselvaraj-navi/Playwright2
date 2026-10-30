import { test } from "@playwright/test";

test("get by label",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
await page.getByLabel("Name").fill("navinya");
await page.getByLabel("Email Id").fill("navikutty711@gmail.com");
await page.getByLabel("Password").fill("Navi_1624");
await page.getByRole('button',{name:'Register'}).click();
})

test("get by placeholder,title",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator("#login-button").click();

    let title = await page.getByTitle("Swag Labs");
    console.log(title);
    
})

test.only("get by alttext",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await page.getByAltText("Sauce Labs Backpack").click();
    await page.getByAltText("Sauce Labs Bike Light").click();
})

