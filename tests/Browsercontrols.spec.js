import {chromium, test} from "@playwright/test"
import { log } from "node:console"

// test("Browser controls", async({browser})=>{  //test()-> test runner. ->inside: title,async arraow function
//     await page.goto("https://demowebshop.tricentis.com/");
//     let viewportsize = await page.viewportSize();
//     console.log(viewportsize);
//     await page.setViewportSize({width:2340, height:1000})
//     await page.waitForTimeout(6000)
//     await page.locator(".ico-register").click();
//     let  registerUrl = await page.url();
//     let title = await page.title();
//     console.log(registerUrl,title);
// })


test.only("Browser Controls 1", async({browser})=>{
    // let browser = await chromium.launch();
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://www.google.com");
    await  page.screenshot({path:'./Screenshot/Google.png'});

    let gmail = await page.locator(".gb_6").first();
    await gmail.screenshot({path:'./Screenshot/gmail.png'});

// const view  = await page.viewportSize();
// await page.waitForTimeout(2000);
// console.log(view);
//  await page.setViewportSize({width:300,heigth:400});
// await page.waitForTimeout(2000);
// const  title = await page.title();
// console.log(title);
// const url = await page.url();
// console.log(url);

// const browser = await chromium.launch();  // to open the browser
// const context = await browser.newContext();  //to  open the context 
// const page = await context.newPage(); //to open new page inside the browser & control will be within
// await page.goto("https://www.saucedemo.com/");

// const cookies = await Context.cookies();
// console.log(cookies);

})
