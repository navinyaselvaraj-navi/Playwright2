import { test } from "@playwright/test";
import fs from "fs"
let data = fs.readFileSync("C:/Users/ELCOT/OneDrive/Desktop/Playwright/tests/testData/Singledata.json");
data = JSON.parse(data)
let Url = data.url;
let username = data.Username;
let pass = data.Password
test("single data from json",async({page})=>
{

    await page.goto(Url)
    await page.locator("#username").fill(username)
    await page.locator("#password").fill(pass)  
    await page.locator("#submit").click()
    await  page.waitForTimeout(3000)  
})