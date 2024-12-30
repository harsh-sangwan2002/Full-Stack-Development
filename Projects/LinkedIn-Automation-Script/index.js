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
        });

        let browserPage = await browserOpen.newPage();
        await browserPage.goto(loginLink);

        // Login
        await browserPage.type('input[id="username"]', email, { delay: 60 });
        await browserPage.type('input[id="password"]', passwd, { delay: 60 });
        await browserPage.click('button[type="submit"]');
        await delay(5000);

        // Search for "Human Resource"
        await waitAndClick('input[placeholder="Search"]', browserPage);
        await browserPage.type('input[placeholder="Search"]', "Human Resource", { delay: 100 });
        await browserPage.keyboard.press('Enter');
        await delay(3000);

        // Click the first pill filter button (e.g., "People")
        const allButtons = await browserPage.$$('.artdeco-pill');
        if (allButtons.length > 0) {
            await allButtons[0].click();
            await delay(3000);
        }

        // Process the first 10 pages
        for (let i = 1; i <= 10; i++) {
            console.log(`Processing page ${i}`);
            await scrollAndConnect(browserPage);

            // Move to the next page
            const nextButton = await browserPage.$('button[aria-label="Next"]');
            if (nextButton) {
                await nextButton.click();
                await delay(5000); // Wait for the next page to load
            } else {
                console.log("No more pages available.");
                break;
            }
        }

        console.log("Finished processing all pages.");
        await browserOpen.close();
    } catch (err) {
        console.log(err);
    }
})();

async function scrollAndConnect(page) {
    let previousHeight = 0;
    while (true) {
        // Find "Connect" buttons and click them
        const connectButtons = await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            return buttons
                .filter(btn => btn.textContent.trim() === "Connect")
                .map(btn => btn.getAttribute('aria-label')); // Return unique attributes for logs
        });

        console.log(`Found ${connectButtons.length} "Connect" buttons on the page.`);
        for (const label of connectButtons) {
            try {
                await page.evaluate((label) => {
                    const button = Array.from(document.querySelectorAll('button')).find(btn => btn.getAttribute('aria-label') === label);
                    if (button)
                        button.click();
                }, label);
                console.log(`Sent connect request: ${label}`);
                await delay(1000); // Short delay between requests
            } catch (err) {
                console.error(`Failed to send connect request for ${label}:`, err);
            }
        }

        // Scroll to the bottom of the page
        previousHeight = await page.evaluate('document.body.scrollHeight');
        await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
        await delay(3000); // Wait for new content to load

        const newHeight = await page.evaluate('document.body.scrollHeight');
        if (newHeight === previousHeight) break; // Exit if no new content is loaded
    }
}

async function waitAndClick(selector, cPage) {
    await cPage.waitForSelector(selector);
    return cPage.click(selector);
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
