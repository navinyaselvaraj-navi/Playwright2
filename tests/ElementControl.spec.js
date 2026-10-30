import {test} from "@playwright/test";

test("Element controls", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.getByLabel("Name").type("Parushni")
    await page.getByLabel("Name").fill("Navi")
    await page.waitForTimeout(2000)

    await page.getByLabel("Email Id").type("sdfgabc@gmail.comm")
    let input =  await page.getByLabel("Email Id").inputValue();
    await page.getByLabel("Email Id").fill("sdxcyvguhfghjytabc@gmail.comm")
    console.log(input);
    await page.waitForTimeout(2000)

    await page.locator("#password").type("Parushni@11")
   // await page.getByRole('button',{name:'Register'}).click();
   // await page.getByRole('button',{name:'Register'}).innerText();
   let a =  await page.getByRole('button',{name:'Register'}).textContent();
    // let b = await page.locator("(//section[@class='poppins text-[14px]'][5]").innerText();
    let c = await page.locator("(//section[@class='poppins text-[14px]'][5]").allTextContents();
    console.log(a);
    // console.log(b);
    console.log(c);
})

test("using all", async({page})=>{
await page.goto("https://www.amazon.in");
await page.getByRole('searchbox',{name:"Search Amazon.in"}).fill("shoes");
 await page.locator('.s-suggestion-container').first().waitFor({state:'visible',timeout:5000});
// await page.locator('.s-suggestion-container').nth(9).click;
 const loc = await page.locator('.s-suggestion-container').all();
 console.log(loc);
await page.waitForTimeout(2000);
})

// test.only("Element controls 2", async({page})=>{
// await  page.goto("https://www.saucedemo.com/");
// const a = await page.getByAltText("Tricentis Demo Web Shop").isVisible();
// console.log(a);
// })

// test.only("Is disabled", async({page})=>{
// await  page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
// const a = await page.locator('#submit').isDisabled();
// console.log(a);
// })

test("Is checked", async({page})=>{
await  page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
const a = await page.locator('#domain_a');
// await a.check(); // to check the radio-button
a = await a.isChecked();
console.log(a);
})

test("click", async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0");
await page.getByText("No").click();
await page.locator("nav-search-submit nav-sprite").fill("Mobiles")
await page.locator("a-autoid-0-announce").first().click({force:true})
await page.locator("a-dropdown-link a-active").click({force:true})
await page.waitForTimeout(2000);
})

test("right click",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1")
    await page.getByRole('button',{name:"Yes"}).click({button:'right'})
    await page.waitForTimeout(2000)
})

test("force click",async({page})=>{
await page.goto("https://www.amazon.in/")
await page.getByRole('searchbox',{name:"Search Amazon.in"}).fill("shoes")
await page.locator("#nav-search-submit-button").fill("mobile")
await page.locator("#a-autoid-0-announce").first().click({force:true})
await  page.locator("//span[@class='a-button-text a-declarative'")
})

test("innertext,visibletext",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator(".button-1.search-box-button").click()
    let text = await page.locator(".product-title").innerText()
    console.log(text);    
})

test("all text content",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").first().fill("laptop");
    await page.locator(".button-1.search-box-button").click();
    let text = await page
})

test("double click",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
    await page.getByRole('button',{name:"Yes"}).click({clickCount:2})
})

test("all",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.getByRole('searchbox',{name:"Search Amazon.in"}).fill('shoes')
    // await page.keyboard.press('Enter')
    let text = await page.locator(".a-size-base-plus.a-spacing-none.a-color-base.a-test-normal")
    await  page.locator(".a-size-base-plus.a-spacing-none.a-color-base.a-test-normal").fill("mobile")
    // let loc = await page.locator(".s-suggestion-container").all()
    console.log(text);   
})

test("get attribute",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    const email = await page.getByRole('textbox',{name:'Email:'})
    let cl  = await email.getAttribute('class')
    let id = await email.getAttribute('id')
    console.log(cl);
    
})