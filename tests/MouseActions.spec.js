import { expect, test } from "@playwright/test";
test("default click",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    await page.getByRole('button',{name:'No'}).click()
    // await page.waitForTimeout(2000)
    await expect(page.locator('.text-green-600.p-1.px-2.ms-2.rounded-md')).toHaveText('You selected "No"')
})

test("right click",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1")
    await page.getByRole('button',{name:'Right Click'}).click({button:'right'})
    await page.getByText('Yes').click()
    await expect(page.locator('.text-green-600.p-1.px-2.ms-2.rounded-md')).toBeVisible()
})

test("double click",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
   // await page.getByRole('button',{name:'Yes'}).click({clickCount:2})
await page.getByRole('button',{name:'Yes'}).dblclick()
await page.waitForTimeout(5000)

})

test("dispatch event",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/")
    // await page.locator('#submit').click({force:true})
    await page.locator('#submit').dispatchEvent('click')
})

test("hover and move and modifiers",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
    await page.locator(".w-5.h-5").hover()
    await page.waitForTimeout(5000)
    await page.mouse.move(700,500)
    await page.waitForTimeout(5000)

    // await page.locator(".w-5.h-5").click({modifiers:['Shift',"Alt",'Control']})
    // await page.locator(".w-5.h-5").click({x:200,y:300})

})

test("down and up",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
await page.locator("#circle").click()
await page.mouse.down()
await page.waitForTimeout(5000)
await page.mouse.up()
await page.waitForTimeout(5000)
})

