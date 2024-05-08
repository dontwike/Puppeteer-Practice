const { default: puppeteer } = require("puppeteer");
const fs = require("fs");

async function GenerateSourceCode (outputData) {
  try {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('https://www.kaggle.com/code/darthmanav/alzheimer-s-classification-cnn-8');
    const sourceCode = await page.content();

    fs.writeFileSync(outputData, sourceCode, "utf-8")
    
    await browser.close();

    console.log("Code generated successfully!!!");

  } catch (error) {
    console.log(error);
  }
}

const outputData = "sourceCode.html"

GenerateSourceCode(outputData);