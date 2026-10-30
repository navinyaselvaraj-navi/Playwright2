import { test } from "@playwright/test";

test("Frames", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    const frame = await page.frames()
    console.log(frame.length);
    await page.frame("")  // url or name of the frame
    await  page.locator('//input[@name="mytext1"]').fill("hellooo")
    
})