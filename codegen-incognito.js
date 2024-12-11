const { chromium } = require('playwright');

(async () => {
    // Launch browser
    const browser = await chromium.launch({ headless: false });

    // Create incognito context
    const context = await browser.newContext();

    // Open a new page in the incognito context
    const page = await context.newPage();

    // Navigate to the URL
    await page.goto('https://ashtest.hs.azdhs.gov/ASHAdmissionPortal/Login/Index');

    console.log('Browser launched in incognito mode. You can now interact with the page.');

    // Keep the browser open for interactive testing
    await page.pause();

    // Close the browser when done
    await browser.close();
})();
