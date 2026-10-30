import {test} from "@playwright/test";

test("label",async({page})=>{
    await page.goto("https://www.shoppersstack.com/user-signin");
    await page.getByLabel("Email").fill("navikutty711@gmail.com");
    await page.getByLabel("Password").fill("ertyhgt");
    await page.getByLabel("Login").click();
    await page.waitForTimeout(2000)
})

test.only("Label 2",async({page})=>{
await page.goto("https://demowebshop.tricentis.com/login/");
await page.getByLabel("Email:").fill("navinyaselvaraj@gmail.com");
await page.getByLabel("Password:").fill("Navi_1624");
await page.locator(".button")
})

// test.only("placeholder",async({page})=>{
//     await page.goto("https://www.saucedemo.com/");
//     await page.getByPlaceholder("Username").fill("Standard_user");
//     await page.getByPlaceholder("Password").fill("secret_sauce");
//     await page.waitForTimeout(2000);  
// })

// test.only("getbytext",async({page})=>{
//      await page.goto("https://www.shoppersstack.com/");   
    //  await page.getByLabel("Email").fill("navinyaselvaraj@gmail.com");
    //  await page.locator("#Password").fill("dfghjk9d");
    //  await page.getbyText("Login").click();
    //  await page.waitForTimeout(2000);
// }) 

// test.only("getbyrole",async({page})=>{
//     await page.goto("https://demowebshop.tricentis.com/");
//     await page.getByRole('link',{name:"Log in"}).click();
//     await page.getByRole('textbox',{name:'Email'}).fill("navinyaselvaraj@gmail.com");
// })

// scenarios: 1. shopperstack - add to cart 2. add to cart and increase the quantity

test("getbyText",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("Standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    
    await page.waitForTimeout(2000);
})

test("getbyTitle",async({page})=>{
    await  page.goto("https://www.w3schools.com/Html/");
   // await page.getByTitle()
    // await page.getByRole('link',{name:'JAVA'}).click();
    // await page.getByRole('link',{name:"JAVA",description:'Java tutorial'}).click();
    await page.waitForTimeout(2000);
})







