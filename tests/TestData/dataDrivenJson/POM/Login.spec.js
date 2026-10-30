import { test } from "@playwright/test";
import LoginPage from "./LoginPage";

test("Login",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    let Login = new LoginPage(page)
    await Login.LoginToApp();
})

