import { test } from "@playwright/test";
import excel from "exceljs"

test("write back data",async({page})=>{
    let path ="C:/Users/ELCOT/OneDrive/Desktop/Playwright/tests/TestData/DDT.xlsx"
    let book = new excel.Workbook()
    await book.xlsx.readFile(path)
    let sheet = book.getWorksheet("Sheet2")
    if (!sheet) {
        sheet = book.addWorksheet("Sheet2")
    }
    await page.goto("https://www.amazon.in/")
    await page.getByRole('searchbox',{name:"Search Amazon.in"}).fill("shoes")
    await page.locator("s-suggestion.s-suggestion-ellipsis-direction").first().waitFor()
    let  products = await page.locator("s-suggestion.s-suggestion-ellipsis-direction").allInnerTexts()
    console.log(products);
    for(let data of products){
        const index = products.indexOf(data)
        sheet.getRow(index+1).getCell(1).value = data;
        sheet.getRow(1).getCell(index+1).value = data;

        // let count = 1
        // sheet.getRow(count).getCell(1).value = data;
        // count++
    }

    book.xlsx.writeFile(path)
    
})