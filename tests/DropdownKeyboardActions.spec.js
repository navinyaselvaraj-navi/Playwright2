import { test } from "@playwright/test";

test("dropdown",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    await page.locator("#select3").selectOption({index:7})
    await page.waitForTimeout(2000)
    await page.locator("#select5").selectOption({value:"Madhya Pradesh"})
    await page.waitForTimeout(2000)
    await page.getByRole("combobox").nth(4).selectOption('Jabalpur')
    await page.waitForTimeout(2000)
    await page.locator("#select3").selectOption({label:'Poland'})
})

test("multiselect",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1");
//await page.waitForTimeout(2000)
//await page.locator("#select-multiple-native").selectOption([{value1:'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'},{value2:'Mens Cotton Jacket'},{value3:'Mens Casual Slim Fit...'}])
//await page.waitForTimeout(2000)
await page.getByRole('button',{name:'Add'})
await page.waitForTimeout(2000)
})

test("custom dropdown",async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.getByRole("searchbox",{name:"Search Amazon.in"}).fill("shoes")
    await page.keyboard.press("Enter")
    await page.locator("#a-autoid-0-announce").click({force:true})
    await page.locator(".a-dropdown-link").nth(5).click()
    await page.waitForTimeout(2000)
})

test("custom dropdown 2",async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.getByRole("searchbox",{name:"Search Amazon.in"}).fill("shoes")
    await page.keyboard.press("Enter")
    await page.locator("#a-autoid-0-announce").click({force:true})
    let text = 'Price: Low to High'
    // let text = 'Best Sellers' 
    await page.locator("//a[.=`${text}`]").click()
    await page.waitForTimeout(2000)
})

test.only("custom dropdown 3",async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.getByRole("searchbox",{name:"Search Amazon.in"}).fill("shoes")
    await page.keyboard.press("Enter")
    await page.locator("#a-autoid-0-announce").click({force:true})
    let options = await page.locator(".a-dropdown-link").all()
    console.log(options);
    
    for(let loc of options){
        let text = await loc.innerText()
        console.log(text);
        if (text.includes('Best')) {
            await loc.click()
            break;
        }
       await page.waitForTimeout(3000) 
        
    }
})

test("autosuggestive dropdown",async({page})=>{

await page.goto("https://www.spicejet.com/")
await page.locator(".css-1cwyjr8.r-homxoj.r-ubezar.r-10paoce.r-13qz1uu").first().fill("De")
await page.locator(".css-1dbjc4n.r-1awozwy.r-1loqt21.r-18u37iz.r-1wtj0ep.r-b5h31w").first().waitFor() 
let From = await page.locator(".css-1dbjc4n.r-1awozwy.r-1loqt21.r-18u37iz.r-1wtj0ep.r-b5h31w").all()

for(let loc of From)
{
    let text = await loc.innerText()
    if( text.includes("Delhi"))
    { 
        await loc.click()
        break;
    }
}

await page.locator(".css-1cwyjr8.r-homxoj.r-ubezar.r-10paoce.r-13qz1uu").last().fill("Ag")
await page.locator(".css-1dbjc4n.r-1awozwy.r-1loqt21.r-18u37iz.r-1wtj0ep.r-b5h31w").first().waitFor() 
let To = await page.locator(".css-1dbjc4n.r-1awozwy.r-1loqt21.r-18u37iz.r-1wtj0ep.r-b5h31w").all()

for(let loc of To)
{
    let text = await loc.innerText()
    if( text.includes("Agra"))
    {
        await loc.click()
        break;
    }
}
})