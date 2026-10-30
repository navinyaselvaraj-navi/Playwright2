import {test} from "@playwright/test"
import { log } from "node:console";
test  ("login",async({page}) => {
    await page.goto("https://www.saucedemo.com");

    await page.locator("//input[@id='user-name']").fill("standard_user");

await page.locator("//input[@id='password']").fill("secret_sauce");

await page.locator("//input[@id='login-button']").click();

console.log("execution completed");

}
)
// class Login{

// }
// export 