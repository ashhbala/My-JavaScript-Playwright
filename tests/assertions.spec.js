import {test , expect} from '@playwright/test';
import { text } from 'stream/consumers';

test.describe("Learn Assertions",() =>{
 test('Verify web page behavious',async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/')

    //1. to have URL
   //await expect(page).toHaveURL('https://the-internet.herokuapp.com/')

    //await page.pause();

    //2. to have  Title 
    await expect(page).toHaveTitle('The Internet')
    //await page.pause();

 })
 test('Conitnues with assertions part 2', async({page}) => {

    await page.goto('https://the-internet.herokuapp.com/')

    //await page.pause();

    //3. assert visibility
    await expect(page.locator('h1')).toBeVisible('Welcome to the-internet')
    //await page.pause();

    //4. assert text
    await expect(page.locator('h2')).toHaveText("Available Examples")
    //await page.pause();

    //5. assert contains text
    await expect (page.locator('body')).toContainText('WYSIWYG')
    //await page.pause();

    //6. assert  have count
    await expect(page.locator('a')).toHaveCount(46)
    //await page.pause();

    //7. elements to be checked 
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    //await page.pause();

    //await page.waitForTimeout(3000);
    //await page.waitForLoadState('networkidle')
   
    
    //let checkbox = await page.getByRole('checkbox').nth(0)
    //await checkbox.waitFor()

    await page.getByRole('checkbox').nth(0).check();
    await page.getByRole('checkbox').nth(1).uncheck();   
    //await page.pause(); 

    await expect (page.getByRole('checkbox').nth(0)).toBeChecked();
    await expect (page.getByRole('checkbox').nth(1)).not.toBeChecked();

    //await page.pause(); 

 })

 test('Conitnues with assertions part 3', async({page}) => {

   await page.goto('https://the-internet.herokuapp.com/login')

  //8. have value
   
   await page.locator('#username').fill('tomsmith')
   //await page.pause();
   
   await expect(page.locator('#username')).toHaveValue('tomsmith')

   // 9. element is enabled
   //await expect(page.locator('button[type="submit"]')).toBeEnabled()
   await expect(page.locator('button.radius')).toBeEnabled();


})

test('Conitnues with assertions part 4', async({page}) => {

   await page.goto('https://the-internet.herokuapp.com')

   //10. verify text stored in variable 
    //await page.pause();
    
   const pageHeader = await page.locator('h1').textContent()
   expect(pageHeader).toBe('Welcome to the-internet')

})
});
