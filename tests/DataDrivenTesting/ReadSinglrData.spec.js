import { test } from "@playwright/test";
import excel from "exceljs"

test("read single  data",async({})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile('C:/Users/ELCOT/OneDrive/Desktop/Playwright/tests/TestData/DDT.xlsx')
    const Sheet = book.getWorksheet("Sheet1")
    let  url  = Sheet.getRow(2).getCell(1).toString()
    console.log(typeof(url));
    console.log(url);
    
    let  username  = Sheet.getRow(2).getCell(2).value
    console.log(typeof(username));
    console.log(username);

})

