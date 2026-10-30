import { test } from "@playwright/test";
import HomePage from "./dataDrivenJson/POM/LoginSauce";

test("login",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    let Login = new HomePage(page)
    await Login.LoginApp()
})