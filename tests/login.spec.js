import {test , expect} from '@playwright/test'

test('This is my first code @smoke @regression', async ({page}) => {
await page.goto('https://the-internet.herokuapp.com/login');
//using IDs
await page.locator('#username').click();
await page.locator('#username').fill('tomsmith');
await page.locator('#password').click();
await page.locator('#password').fill('SuperSecretPassword!')
await page.getByRole('button', { name: /login/i }).click();
await expect(page.locator('#flash')).toContainText(/You logged into a secure area!/);
///using tag and class 
await expect(page.locator('h4.subheader')).toContainText(/Welcome to the Secure Area. When you are done click logout below./);
///using tag, multiple classes & text
await page.locator('a.button.secondary.radius:has-text("Logout")').click();
await page.locator('#username').click();
await page.locator('#username').fill('11');
await expect(page.locator('#username')).toHaveValue('11')
await page.pause();





})