const { default: puppeteer } = require("puppeteer");

async function checkBrokenLinks(url) {
    try {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();

        await page.goto(url)

        const links = await page.$$eval('a', (anchor) => {
            anchor.map(a=>a.href)
        })

        const brokenLinks = [];

        for (const link of links){
            const res = await page.goto(link, {
                waitUntil: "networkidle0", timeout: 5000
            })

            if(res.status() >= 400){
                brokenLinks.push({link, staus: res.status()})
            }
        }

        console.log(brokenLinks);

        await browser.close();
    } catch (error) {
        console.log(error);
    }
}

checkBrokenLinks('https://www.google.com');