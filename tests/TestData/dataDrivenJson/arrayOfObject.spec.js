import { test } from "@playwright/test";
import { log } from "console";
import fs from "fs"
let  data = fs.readFileSync("C:/Users/ELCOT/OneDrive/Desktop/Playwright/tests/TestData/ArrayofObject.json")
 let data1 = JSON.parse(data)

test("array",async({page})=>{
    for(let ele of data1){
        console.log(ele.Greet);
        
    }
})
