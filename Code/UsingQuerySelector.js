const { default: puppeteer } = require("puppeteer");

async function UsingQuerySelector(url) {
    try {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();

        await page.goto(url)

        await page.evaluate(()=>{
            const images = document.querySelectorAll('img');
            images.forEach((image) =>{
                image.style.border = '5px solid red';
            })
        })



    } catch (error) {
        console.log(error);
    }
}

UsingQuerySelector('https://www.google.com');