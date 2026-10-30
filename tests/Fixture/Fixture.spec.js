import {test} from "@playwright/test";

test("fixture",async({page}) =>{
    await page.goto("https://www.playwright.dev")
    // await page.waitForTimeout(5000);
})

test.only("fixture2",async({browser,browserName}) =>{
    let context = await browser.newContext({colorScheme:"dark"});
    let page = context.newPage();
    (await page).goto("https://www.playwright.dev");
    // (await page).waitForTimeout(5000);
console.log(browserName);

})


// npx playwrigtht test
// npx playwright test tests/fixture.spec.js
// npx playwright test tests/fixture.spec.js -- headed
// npx playright test tests/fixture.spec.js --headed --project=firefox -- project=chromium --project=webkit
// npx playright test tests/fixture.spec.js --headed --debug
// npx playwright show-report --post=8080
// npx playwright -g "login"
// npx playwright test --last--failed