import { test } from "@playwright/test";

test("uploading file",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
const uploadSinglefile = await page.locator("#singleFileInput")
await uploadSinglefile.waitFor();
await uploadSinglefile.setInputFiles("")
await page.getByRole('button',{name:"Upload Single File"}).click()
await page.waitForTimeout(5000)
})

test("uploading multiple file",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const uploadMultifile = await page.locator("#multipleFilesInput");
    await uploadMultifile.waitFor();
    await uploadMultifile.setInputFiles("")
    await page.getByRole('button',{name:"Upload Multiple Files"}).click()
    await page.waitForTimeout(5000)
    await uploadMultifile.setInputFiles([])
    await page.getByRole('button',{name:"Upload Multiple Files"}).click()
    await page.waitForTimeout(5000)
})

test("uploading file by dir",async({page})=>{
    
})