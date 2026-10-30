import { test } from "@playwright/test";
import fs from "fs"
import { title } from "process";

let data = fs.readFileSync("C:/Users/ELCOT/OneDrive/Desktop/Playwright/tests/TestData/ValidInvalid.json")
let data1 = JSON.parse(data)

test("valid invalid",async({page})=>{

    for(let ele of data1.valid){
    await page.goto(ele.url)
    await page.locator("#username").fill(ele.username)
    await page.locator("#password").fill(ele.password)  
    await page.locator("#submit").click()
    await page.waitForTimeout(3000)
    let title = await page.title()

    if (title=="Logged In Successfully | Practice Test Automation") {
        console.log("valid credential");
        
    } 
    else{
        console.log("invalid credential");
        
    }
}
     for(let key of data1.invalid){
    await page.goto(key.url)
    await page.locator("#username").fill(key.username)
    await page.locator("#password").fill(key.password)  
    await page.locator("#submit").click()
    await  page.waitForTimeout(3000) 
    
    if (title=="Logged In Successfully | Practice Test Automation") {
        console.log("valid credential");
        
    } 
    else{
        console.log("invalid credential");  
    }
    }   
})

test.only("valid and invalid",async({page})=>{
for(let key in data1){
    // console.log(key);
for(let d of data1[key]){
        await page.goto(d.url)
    await page.locator("#username").fill(d.username)
    await page.locator("#password").fill(d.password)  
    await page.locator("#submit").click()
    await page.waitForTimeout(3000)

    let title = await page.title()
    if (title=="Logged In Successfully | Practice Test Automation") {
        console.log("valid credential");                                                                           
    } 
    else{
        console.log("invalid credential");  
    }
    }

    
}
})