import { expect, test } from "@playwright/test";

test("non retrying",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator("#small-searchterms").first().fill("laptop")
    await page.locator(".button-1.search-box-button").click()
    let priceoflap = await page.locator(".price.actual-price").innerText()
    console.log(typeof(priceoflap));
    await expect(priceoflap).toBe("1590.00") 

    // let price = 1590; 
    let str = "Hello! world"
    // let p = undefined; let b = null:
    // console.log(p);
    
    // await expect(str).toBe(Hello! world)
    // await expect(price).toEqual(1590)
    // await expect(price).toBeLessThanEqual(1591)
    // await expect(price).toBeGreaterThanOrEqual(100)
    // await expect(price).toBeLessThan(2000)
    // await expect(p).toBeUndefined()
     // await expect(b).toBeUndefined()
    // await expect(p).toBeDefined()
    // await expect(b).toBeNull()

    let arr = [1,5,3]
    let a = true;

    await expect(arr).toHaveLength(3)
    await expect(str).toHaveLength(12)
    await expect(str).toContain("hel")
    await expect(arr).toContain("5")
    await expect(a).toBeTruthy() // opposite of falsy
    await expect(a).toBeFalsy() // false,0,' ',null,undefined,NaN

    //  let l= new Login();
// await expect(p).toBeInstanceOf(Login)
})


