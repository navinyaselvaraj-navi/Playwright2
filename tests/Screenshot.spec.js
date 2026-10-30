import {test} from "@playwright/test";
import { log } from "node:console";

test("Browser controls", async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
let timestamp=Date.now();
console.log(timestamp);

await page.screenshot({path:`./Screenshot/scr${timestamp}.png`});
// await page.waitforTimeout(300)

let viewportSize=await page.viewportSize();
console.log(viewportSize); //able to see

   // await page.setViewportSize({width:2340, height:1000});
   // await page.waitForTimeout(6000);
    await page.locator(".ico-register").click();
    let  registerUrl = await page.url(); //to fetch the current window url
    let title = await page.title() //to get current window title
    console.log(registerUrl,title);
    await page.screenshot({path:`./Screenshot/scr${timestamp}.png`});
    
})

// chromium.launch()
// page.screen