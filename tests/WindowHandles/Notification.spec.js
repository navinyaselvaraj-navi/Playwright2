import { test } from "@playwright/test";
test("notification",async({browser})=>{
    const context = await browser.newContext({permissions:['notifications','microphone','geolaction','camera']})
    const page = await context.newPage()
await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
await page.getByRole('button',{name:"Notification"}).click()
let status = await page.evaluate(()=>{ return Notification.requestPermission()})
console.log("Permissions: "+status);
await context.clearPermissions()
let status1 = await page.evaluate(()=>{ return Notification.requestPermission()})
console.log("Permissions: "+status1);

})