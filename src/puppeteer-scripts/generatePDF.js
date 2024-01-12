const puppeteer = require('puppeteer');
const fs = require('fs');
const util = require('util');

async function generatePDF() {
  console.log('starting puppeteer');
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();

  await page.setContent(await generateHTML(), { waitUntil: 'networkidle0' });

  const pdf = await page.pdf({ format: 'A4' });

  await browser.close();

  console.log('returning pdf');

  return pdf;
}

const readFileAsync = util.promisify(fs.readFile);

async function generateHTML() {
  try {
    const html = await readFileAsync('./src/public/test.html', 'utf8');
    return html;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = generatePDF;