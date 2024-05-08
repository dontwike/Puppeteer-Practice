const { default: puppeteer } = require("puppeteer");

async function data_web(url){
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(url);

        const data = await page.evaluate(()=>{
            const title = document.getElementById('firstHeading').textContent.trim();
            // const price = document.getElementById('a-price-whole');

            return title;
        })

        console.log(data);
        browser.close();
    } catch (error) {
        console.log(error);
    }
}

data_web('https://en.wikipedia.org/wiki/Take_Ichi_convoy')