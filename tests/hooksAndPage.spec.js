import { test, expect } from '@playwright/test'
import { beforeEach } from 'node:test';
import { chromium } from 'playwright'

//open browser =>context(setting) => multile tabs[page]

let browser;
let context;
let page;




test.describe('Describe block for running hooks test ', async () => {
  //beforeAll Hook
  test.beforeAll(async () => {
    //launch chrome browser before all test
    browser = await chromium.launch({ headless: true });
    console.log("'BEFORE ALL HOOK'LAUNCHED CHROMIUM BROWSER")
  })

  //beforeEach Hook
  test.beforeEach(async () => {
    //create context for a browser
    context = await browser.newContext()
    //create a new page, since we are not using the page fixture async({page}) => {}
    page = await context.newPage()
    //navigate to test url
    await page.goto("https://the-internet.herokuapp.com")
    //await page.goto("https://the-internet.herokuapp.com/abtest?test=control")
    console.log("'BEFORE EACH 'HOOK LAUNCHED NEW PAGE")
    //pause excecution
    //await page.pause()
  })

  test.afterEach(async () => {
    //close page & context
    await page.close()
    await context.close()
    console.log("'AFTER EACH' HOOK CLOSED PAGE & CONTEXT")
  })

  test.afterAll(async () => {
    await browser.close()
    console.log("AFTER ALL 'HOOK CLOSED BROWSER")
  })

  test('A/B Test', async () => {
    //click on unique text
    await page.click('text="A/B Testing"')
    //storing the vlaue in header
    const header = await page.textContent('h3')
    expect(header).toBe('A/B Test Control')
  })

  test('Checkbox verification', async () => {
    //verify checkbox is checked or not
    await page.click('text="Checkboxes"')
    const checkbox = await page.isChecked('input[type="checkbox"]:first-child') //('input [type="checkbox"]:firstChild')
    expect(checkbox).toBe(false)
    const checkbox1 = await page.isChecked('input[type="checkbox"]:nth-of-type(2)')
    expect(checkbox1).toBe(true)
  })

  test('Gelolocation new setting in context & verification', async () => {
    //new context for the browser
    context = await browser.newContext({
      permissions: ['geolocation'],
      geolocation: { latitude: 52.520007, longitude: 13.404954 },
      viewport: { width: 1280, height: 720 }
    })
    //new page for the new context
    page = await context.newPage()
    console.log("NEW CONTEXT & PAGE CREATED WITHIN GEOLOCATION TEST AND NOT WITHIN HOOKS ")
    //await page.pause()
    await page.goto("https://the-internet.herokuapp.com/geolocation")
    await page.click('button')
    const latitude = await page.textContent('#lat-value')
    const longitude = await page.textContent('#long-value')
    //changing string to a float [number]
    expect(parseFloat(latitude)).toBeCloseTo(52.520007)
    expect(parseFloat(longitude)).toBeCloseTo(13.40495)
  })



})
