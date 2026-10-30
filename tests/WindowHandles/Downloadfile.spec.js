import { test } from "@playwright/test";
test("download file",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
await page.getByPlaceholder("Enter text here").fill("My first file download")
const [downloadfile] = await Promise.all()([
    page.waitForEvent('download'),
    page.getByRole('button',{name:"Download"}).click()
])

console.log(await downloadfile.path());
await downloadfile.saveAs("C:/Users/ELCOT/OneDrive/Desktop/Playwright/Screenshot")
console.log(await downloadfile.path());


})