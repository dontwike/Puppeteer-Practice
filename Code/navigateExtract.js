const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto("https://www.google.com/");
    const image = await page.$$eval('img', (elements) => elements.map((element) => ({
        src: element.src,
        alt: element.alt
    })))

    const links = await page.$$eval('a', (elements) => elements.map((element) => ({
        href: element.href
    })))

    const output = JSON.stringify({image, links})

    console.log(output);
    await browser.close();
})

();
