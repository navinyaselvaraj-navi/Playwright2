import { test } from "@playwright/test";
import fs from "fs"

let data = fs.readFileSync("C:/Users/ELCOT/OneDrive/Desktop/Playwright/tests/TestData/ArrayOfMultiObject.json");
let data1 = JSON.parse(data)

test("array of multi",async({page})=>{
    for(let ele of data1){

    await page.goto(ele.url)
    await page.locator("#username").fill(ele.username)
    await page.locator("#password").fill(ele.password)  
    await page.locator("#submit").click()
    await  page.waitForTimeout(3000)  
        
    }
})

