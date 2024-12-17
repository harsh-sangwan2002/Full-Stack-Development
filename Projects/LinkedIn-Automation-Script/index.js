const puppeteer = require('puppeteer');
const dotenv = require('dotenv');
dotenv.config();

const loginLink = "https://www.linkedin.com/login";
const email = process.env.User_Email;
const passwd = process.env.User_Password;

(async function () {
    try {
        let browserOpen = await puppeteer.launch({
            headless: false,
            args: ['--start-maximized'],
            defaultViewport: null,
        })

        let page = await browserOpen.newPage();
        await page.goto(loginLink);

        await page.type('input[id="username"]', email, { delay: 60 });
        await page.type('input[id="password"]', passwd, { delay: 60 });
        await page.click('button[type="submit"]');

        await waitAndClick('input[placeholder="Search"]', page);
        await waitAndClick('span[title="My Network"]', page);
        await delay(5000);

        await scrollToBottom(page);
        console.log('Finished scrolling through the page.');

        // Select all buttons inside the footer after scrolling
        const buttons = await page.$$(
            'button.artdeco-button artdeco-button--2 artdeco-button--secondary ember-view'
        ); // Query all buttons inside the footer
        console.log(`Found ${buttons.length} buttons inside the footer.`);

        for (let i = 0; i < buttons.length; i++) {
            try {
                await buttons[i].click();
                console.log(`Clicked button ${i + 1} inside the footer.`);

                await delay(1000);
            } catch (err) {
                console.error(`Error clicking button ${i + 1}:`, err);
            }
        }

        console.log('Finished clicking buttons inside the footer.');

    } catch (err) {
        console.log(err);
    }
})();


const scrollToBottom = async (page) => {
    let previousHeight = await page.evaluate('document.body.scrollHeight');
    while (true) {
        await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
        await delay(2000); // Wait for new content to load

        const newHeight = await page.evaluate('document.body.scrollHeight');
        if (newHeight === previousHeight) break; // Exit if no new content is loaded
        previousHeight = newHeight;
    }
};

async function waitAndClick(selector, cPage) {
    await cPage.waitForSelector(selector);
    let selectorClicked = cPage.click(selector);
    return selectorClicked;
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}