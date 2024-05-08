const puppeteer = require("puppeteer");
const devices = puppeteer.KnownDevices["iPhone 13 Pro Max"];

async function setupMobileDevices() {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.emulate(devices);
    await page.goto('https://www.google.com/');
    await page.screenshot({ path: 'google.png' });
    browser.close();
  } catch (error) {
    console.log(error);
  }
}

setupMobileDevices();
