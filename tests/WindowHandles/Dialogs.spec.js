import {expect, test} from "@playwright/test";

test("dialog",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole('button',{name:"Simple Alert"}).click()
    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:"Confrimation Alert"}).click()
    await expect(await page.locator("#demo")).toHaveText("You pressed Cancel")
    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:"Prompt Alert"}).click()
    await expect(await page.locator("#demo")).toHaveText("User cancelled the prompt")
    await page.waitForTimeout(2000)
})

test("using pageon",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.on('dialog',async(dialog)=>{
        await console.log("Type:"+dialog.type());
        console.log("Type:"+dialog.message());
        
        await dialog.dismiss()
        // await dialog.accept("I'm Groot")
        // await console.log(dialog.defaultValue());
        
    })
    await page.getByRole('button',{name:"Simple Alert"}).click()
    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:"Confrimation Alert"}).click()
    await expect(await page.locator("#demo")).toHaveText("You pressed Cancel")
    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:"Prompt Alert"}).click()
    await expect(await page.locator("#demo")).toHaveText("User cancelled the prompt")
    await page.waitForTimeout(2000)
})



test("customize",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    if (await dialog.type()=='alert') {
        await dialog.accept()
    }
    else if (await dialog.type()=='confrim') {
        await dialog.dismiss()
    }
    else if (await dialog.type()=='prompt') {
        await dialog.accept()
    }
    await page.getByRole('button',{name:"Simple Alert"}).click()
    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:"Confrimation Alert"}).click()
    await expect(await page.locator("#demo")).toHaveText("You pressed Cancel")
    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:"Prompt Alert"}).click()
    await expect(await page.locator("#demo")).toHaveText("User cancelled the prompt")
    await page.waitForTimeout(2000)
})

test("once",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.once('dialog',async(dialog)=>{
            console.log(dialog.type());
            console.log(dialog.message());
            await dialog.accept("Tom")     
            
    })
    await page.getByRole('button',{name:"Prompt Alert"}).click()
    await page.waitForTimeout(2000)
    await page.reload()
    await page.getByRole('button',{name:"Prompt Alert"}).click()
    await page.waitForTimeout(2000)
})
