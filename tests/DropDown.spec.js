import { test } from "@playwright/test";

test("dropdown",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    await page.locator("#select-multiple-native").selectOption({value1:'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'})
    await page.getByRole('button',{name:'Add'}).click()
    await page.locator()
})