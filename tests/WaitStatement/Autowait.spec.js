import { test } from "@playwright/test";
test("autowait",async({page})=>{
    test.setTimeout(3000)
    await page.goto("https://demowebshop.tricentis.com/");
    await page.getByRole('link',{name:"Log in"}).click();
   
})

test("autowait1",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.getByRole('link',{name:"Log in"}).click();
   
})

// test("autowait2",async({page})=>{
//     await page.goto("https://demowebshop.tricentis.com/");
//     await page.getByRole('link',{name:"cfgvhj"}).click({timeout:3000});
   
// })