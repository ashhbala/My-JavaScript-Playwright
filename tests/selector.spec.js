import {test , expect } from '@playwright/test'

test('Test for Selectors', async ({page}) => {
await page.goto("http://127.0.0.1:5500/clickMe.html")    

    //1. using id
await page.locator('#clickButton').click();

   //2. Using class

await page.locator('.button-style').click();  

   //3. using tag & class [super specific]
await page.locator('button.button-style').click();    

// 4. using attributes -- additional bracket needed . just = is enough no # for id or . for class
await page.locator('[data-action="increment"]').click();

await page.locator('[id = "clickButton"]').click();  
await page.locator('[class = "button-style"]').click(); 

//5. using partial attributes
await page.locator('[role*="button"]').click();

//6. using Text content , no brackets no double quotes
await page.locator('text= Click me').click();

//7. combine selctors for precision , class & text - find exact text
await page.locator('.button-style:text("Click me")').click();  

// 8. combine selctors for precision , class & text- MORE FLEXIBLE partial text match
await page.locator('.button-style:has-text("Click me")').click();  



await page.pause()

//await page.locator().click();  







})