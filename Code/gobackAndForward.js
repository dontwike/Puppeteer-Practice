const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto("https://www.google.com/");
    await page.goto("https://www.yahoo.com/");
    await page.goBack();
    await page.goForward();
    await page.goto("https://www.gmail.com/");
    await browser.close();
})

();
