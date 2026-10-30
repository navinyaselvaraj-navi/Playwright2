import {test} from "@playwright/test";

test("Something1",async() =>{
test.setTimeout(3000)
console.log("I am 1st test");
})

test("Something2",async() =>{
console.log("I am 2st test");

})

test("Something3",async() =>{
console.log("I am 3st test");

})
test("Something4",async() =>{
console.log("I am 4st test");

})

// test.only("login",async({page})=>{
//     test.slow
//     await page.goto("https://www.saucedemo.com/");
//     await page.locator("#user-name").fill("standard_user");
//     await page.locator("#password").fill("secret_sauce");
//     await page.locator("#login-button").click();
// })

// test.describe("2 test",async()=>{
//     test("login",async({page})=>{
// await page.goto("https://www.saucedemo.com/")
//     await page.locator("#user-name").fill("standard_user");
//     await page.locator("#password").fill("secret_sauce");
//     await page.locator("#login-button").click();

//     })
// })

test.fixme("login",async({page})=>{
    test.slow
    await page.goto("https://www.saucedemo.com/")
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
})

// test.fail("login",async({page})=>{
//     test.slow
//     await page.goto("https://www.saucedemo.com/")
//     await page.locator("#user-name").fill("standard_user");
//     await page.locator("#password").fill("secret_sauce");
//     await page.locator("#login-button").click();
// })


