const puppeteer = require('puppeteer');

const loginLink = "https://www.linkedin.com/login";
const email = "Your_Email";
const passwd = "Your_Password";

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

        await waitAndClick('span[title="My Network"]', page);
        await waitAndClick('footer.mt2', page);

        await scrollToBottom(page);
        console.log('Finished scrolling through the page.');

        // Select all buttons inside the footer after scrolling
        const buttons = await page.$$(
            'footer.mt2 button'
        ); // Query all buttons inside the footer
        console.log(`Found ${buttons.length} buttons inside the footer.`);

        // Loop through each button and click
        for (let i = 0; i < buttons.length; i++) {
            try {
                await buttons[i].click();
                console.log(`Clicked button ${i + 1} inside the footer.`);

                // Optional delay to mimic human behavior
                await delay(1000);
            } catch (err) {
                console.error(`Error clicking button ${i + 1}:`, err);
            }
        }

        console.log('Finished clicking buttons inside the footer.');
        await browserOpen.close();

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