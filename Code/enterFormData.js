const { default: puppeteer } = require("puppeteer");

async function enterFormData () {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("https://www.google.com/");

        await page.focus('textarea[name="q"]');

        await page.keyboard.type("What is JS");
        await page.keyboard.press("Enter");
        await page.waitForNavigation({waitUntil: 'networkidle2'});
        await page.screenshot({path: 'google.png'});

        await browser.close();
    } catch (error) {
        console.log(error);
    }
}

enterFormData();