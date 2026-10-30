import { test } from "@playwright/test";

test("waitForEvent",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?subl")
    await page.locator("#writeArea").fill("")

    const [downloadfile]=await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
    ])
    console.log(await downloadfile.path());
    
})