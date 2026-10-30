import { expect, test } from "@playwright/test";

test("Radiobutton and checkbox",async({page})=>{
// await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
// await page.locator('#mode_a')
// await expect(page.locator('#mode_a')).toBeChecked()
// await page.waitForTimeout(3000)

await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0')
await page.locator('#attended_c').check()
await expect(page.locator('#attended_c')).toBeChecked()
await page.waitForTimeout(3000)
})

test("Vertical and horizontal scrolling",async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    // await page.waitForTimeout(2000)
    // await page.mouse.wheel(0,800)
    // await page.waitForTimeout(2000)
    // await page.mouse.wheel(0,-800)
    // await page.waitForTimeout(2000)

    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")
    await page.waitForTimeout(2000)
    await page.mouse.wheel(2000,0)
    await page.waitForTimeout(2000)
    await page.mouse.wheel(-2000,0)
    await page.waitForTimeout(2000)

})

test("scroll till desired element",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    let checkbox = await page.locator('//input[@type="checkbox"]')
    // await checkbox.scrollIntoViewIfNeeded()
    await checkbox.click()
    await expect(checkbox).toBeChecked()
    await page.waitForTimeout(2000)
})

// Drag and drop

test("drag and drop",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
    await page.waitForTimeout(2000)
    await page.locator("//div[text()='Drag Me']").click()
    await page.waitForTimeout(2000)
    await page.mouse.down()
    await page.waitForTimeout(2000)
    await page.mouse.move(500,600)
    await page.waitForTimeout(2000)
    await page.mouse.up()
    await page.waitForTimeout(2000)
})

// drag and drop 2nd approach using mouse action

test("drag and drop 2",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.locator("//div[text()='Mobile Charger']").hover()
    await page.waitForTimeout(2000)
    await page.mouse.down()
    await page.waitForTimeout(2000)
    await page.locator(".drop-column").first().hover()
    await page.waitForTimeout(2000)
    await page.mouse.up()
    await page.waitForTimeout(2000)
})

test.only("drag and drop 3",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.waitForTimeout(2000)
    await page.locator("//div[text()='Mobile Charger']").hover()
    await page.waitForTimeout(2000)
    await page.mouse.down()
    await page.waitForTimeout(2000)
    let box = await page.locator(".drop-column").first().boundingBox()
    await page.waitForTimeout(2000)
    console.log(box);
    await page.mouse.move(box.x,box.y)
    await page.waitForTimeout(2000)
})

test.only("dragto method",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.waitForTimeout(2000)
   let source =  await page.locator("//div[text()='Mobile Charger']")
    await page.waitForTimeout(2000)
    let container = await page.locator(".drop-column").first()
    await source.dragTo(container)
    await page.waitForTimeout(2000)
})