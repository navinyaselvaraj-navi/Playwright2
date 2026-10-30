import { test } from "@playwright/test";
import RegisterPage from "./TestData/dataDrivenJson/POM/RegisterPage";

test("Register",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    let register = new RegisterPage(page)
    await register.RegisterLink.click()
    await register.genderRadioBtn.click()
    await register.firstNameTxt.fill("Navinya")
    await register.lastNameTxt.fill("selvaraj")
    await register.emailTxt.fill("navinyaselvaraj@gmail.com")
    await register.passswordTxt.fill("xtxcygvhb43")
    await page.waitForTimeout(3000)

})
