const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Book image
    const [el] = await page.$x('//*[@id="imgBlkFront"]');
    const src = await el.getProperty('src');
    const imgUrl = await src.jsonValue();

    // title
    const [el2] = await page.$x('//*[@id="productTitle"]');
    const txt = await el2.getProperty('textContent');
    const title = await src.jsonValue();

    // Pricing 
    const [el3] = await page.$x('//*[@id="a-autoid-4-announce"]');
    const text2 = await el3.getProperty('textContent');
    const price = await src.jsonValue();

    // console.log
    console.log({ imgUrl, title, price });

    browser.close();
}

scrapeProduct('https://www.amazon.com/Black-Swan-Improbable-Robustness-Fragility/dp/081297381X/ref=sr_1_2?keywords=black+swan&qid=1583848231&sr=8-2');