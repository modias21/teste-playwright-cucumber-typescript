import { Before, After, BeforeAll, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { Page, Browser, BrowserContext, chromium } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let page: Page;

setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
    browser = await chromium.launch({
        headless: false,
        slowMo: 50,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    })
});

Before(async () => {

    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://playwright.dev/');
});

After(async function (scenario) {
    if (scenario.result && scenario.result.status === Status.FAILED) {
        const screenshot = await page.screenshot({
            path: './screenshot/' + scenario.pickle.name + '.png',
            fullPage: true,
        });
        this.attach(screenshot, 'image/png');
    }

    await page.waitForTimeout(2000);
    await page.close();
    await context.close();
    await browser.close();
});

export { browser, context, page };