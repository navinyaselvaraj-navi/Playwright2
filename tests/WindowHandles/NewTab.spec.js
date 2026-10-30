import { test } from "@playwright/test";

test.only("new tab",async({browser})=>{
let context = await browser.newContext()
let page = await context.newPage()
await page.goto("https://www.amazon.com/")
await page.getByRole('searchbox',{name:"Search Amazon.in"}).first().fill("mobile")
await page.keyboard.press('Enter')
let  url = await page.url()
await page.waitForURL(url)
await page.locator("//span[contains(.,'Samsung Galaxy M47 5G Mobile')]").click()
console.log(await page.url());
let [newTab] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator(".a-size-medium.a-spacing-none.a-color-base.a-text-normal").first().click()

])
 console.lqog(await newTab.url());
 await newTab.locator("//input[@id='add-to-")
 
})


test("New Tab Handle",async({browser})=>{

let context = await browser.newContext();
let page = await context.newPage();

await page.goto("https://www.amazon.in/")
await page.locator("#twotabsearchtextbox").first().fill("shoes")
await page.keyboard.press('Enter')
await page.waitForTimeout(5000)


let [newtab] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator("//span[.='Mens Dazzler Sneaker']").click()
])

await newtab.locator("#add-to-cart-button").first().click()
await newtab.waitForTimeout(3000)

})

test("Flipkart NewTab",async({browser})=>{

let context = await browser.newContext()
let page = await context.newPage()

await page.goto("https://www.flipkart.com/")
await page.locator(".b3wTlE").click()
await page.locator(".nw1UBF.v1zwn26").first().fill("shoes")
await page.keyboard.press('Enter')

let [newtab] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator("//a[.='Zod Runner V3 IDP Sneakers For Men']").first().click()
])
await newtab.locator("//div[.='Add to cart']").first().click()
await newtab.waitForTimeout(3000)

})