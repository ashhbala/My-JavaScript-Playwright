import {test,expect} from '@playwright/test'

//group test with call back fucntion 
test.describe('My assertion automation testing @assertions_group', () => 
{

    
  // 1. to have URL
   test("My assertion test case 1 @smoke", async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/')

    await expect(page).toHaveURL('https://the-internet.herokuapp.com/')
 
      // 2. to have  Title 
      
      await page.pause()
      await expect(page).toHaveTitle('The Internet')

   } )

   test("My assertion test case 2", async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/')
     
    await page.pause()

    // 3. assert visibility
    await expect(page.locator('h1')).toBeVisible('Welcome to the-internet')

    await page.pause()

    // 4. assert text to have exact match
    await expect(page.locator('a[href="http://elementalselenium.com/"]')).toHaveText('Elemental Selenium')
    await page.pause()


    //for images user toHaveAttribute
      //await expect(page.locator('img[src="/img/forkme_right_green_007200.png"]')).toHaveText('Fork me on GitHub')
      await expect(page.locator('a[href="https://github.com/tourdedave/the-internet"] img')).toHaveAttribute('alt','Fork me on GitHub');

    await page.pause()

    
    
   } )


   test("My assertion test case 3", async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/disappearing_elements')
     
    await page.pause()

 // 5. assert contains text

   await expect(page.locator('a[href="/about/"]')).toContainText('About')
   await page.pause()

   } )

   
   test("My assertion test case 4", async({page}) =>{
    

// 6. assert  have count
    await page.goto('https://the-internet.herokuapp.com')
    await expect(page.locator('a')).toHaveCount(46)
    await page.pause()

    //7. elements to be checked 
    // 8. have value


   } )

   test("My assertion test case 5", async({page}) =>{
    

    // 6. assert  have count
        await page.goto('https://the-internet.herokuapp.com/login')
        
        await page.pause()
    
        //7. elements to be checked 


        // 8. have value
        await page.locator('#username').fill('tomsmith')

        await expect(page.locator('#username')).toHaveValue('tomsmith')
        await page.pause()
        
    
       } )

       test("My assertion test case 6", async({page}) =>{
    
      
        // 9. element is enabled

        await page.goto('https://the-internet.herokuapp.com/login')
        await page.pause();

        await expect(page.locator('button.radius')).toBeEnabled()
        await page.pause();


        // 10. verify text stored in variable
        
        await page.goto('https://the-internet.herokuapp.com/inputs')
        await page.pause();
        const  uiText =   await page.locator('p').textContent();
        await page.pause();
        expect (uiText).toBe('Number');
        await page.pause();


    } )

    test("My assertion test case 10", async({page}) =>{


        await page.goto('https://the-internet.herokuapp.com/inputs')
        await page.pause();
        //simulate user action
        await page.locator('input[type="number"]').fill('12');
        await expect (page.locator('input[type="number"]')).toHaveValue('12')
        await page.pause();

           })






})




// 8. have value
// 9. element is enabled
// 10. verify text stored in variable 