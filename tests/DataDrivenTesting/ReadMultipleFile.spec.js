import { test } from "@playwright/test";
import excel from "exceljs"

test("multi",async({})=>{
 let book = new excel.Workbook()
 await book.xlsx.readFile("C:/Users/ELCOT/OneDrive/Desktop/Playwright/tests/TestData/DDT.xlsx")
 let sheet  = book.getWorksheet('Multipledata')

 for (let i = 1; i <=sheet.actualRowCount;i++) {
    for(let j = 1; j<=sheet.actualColumnCount;j++){
        let data = sheet.getRow(i).getCell(j).value
        console.log(data);
        
    }   
 }

})