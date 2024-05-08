const puppeteer = require('puppeteer');

async function scraping () {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/Take_Ichi_convoy");

    const title = await page.title();
    console.log(title);

    const heading = await page.$eval('h1', (ele)=>ele.textContent);
    console.log(heading);

    await browser.close();
}

scraping();