const { default: puppeteer } = require("puppeteer");

async function httpInterception() {
    try {
        const browser = await puppeteer.launch({
            headless: true
        });
    
        const page = await browser.newPage();
    
        await page.setRequestInterception(true);
    
        page.on('request', (interceptedRequest) => {
            if(interceptedRequest.url().endsWith('.png')){
                interceptedRequest.abort();
                console.log("Request Aborted");
            } else {
                interceptedRequest.headers({
                    'secretKey': "pranjal@123"
                });
                interceptedRequest.continue();
                console.log("Request Continued with Headers");
            }
        })
    
        await page.goto('https://www.yahoo.com/');
        await browser.close();
    
        console.log('Request Intercepted Success');
    } catch (error) {
        console.log('Request Intercepted Failed', error);
    }
}

httpInterception();