const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
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
        await page.type('input[placeholder="Search"]', "Software Engineer", { delay: 60 });
        await page.keyboard.press('Enter');

        await delay(3000);


        const filterList = await page.$$('li.search-reusables__primary-filter');
        await filterList[0].click();
        await delay(5000);

        await waitAndClick('button[aria-label="Show all filters. Clicking this button displays all available filter options."]', page);

        const easyApplyButton = await page.$$('div.artdeco-toggle.artdeco-toggle--32dp.artdeco-toggle--default.ember-view');
        await delay(5000);
        await scrollToBottom(page);
        easyApplyButton[0].click();

        await delay(2000);
        const loactions = await page.$$('input[name="location-filter-value"]');
        await delay(2000);
        loactions[9].click();

        await delay(2000);
        await waitAndClick('button.reusable-search-filters-buttons', page);

        await delay(3000);
        await scrollToBottom(page);
        await applyToJobs(page);

    } catch (err) {
        console.log(err);
    }
})();

const applyToJobs = async (page) => {
    try {
        console.log("Extracting job cards...");
        const jobsArr = await page.$$('div[data-job-id]'); // Select all job cards with data-job-id attribute

        console.log(`Found ${jobsArr.length} job cards.`);

        for (let i = 0; i < jobsArr.length; i++) {
            console.log(`Processing job card ${i + 1}...`);

            // Scroll the current job card into view
            await page.evaluate((job) => {
                job.scrollIntoView();
            }, jobsArr[i]);

            const applyButton = await page.$$('button.jobs-apply-button');
            applyButton[0].click();

            await waitAndClick('button[aria-label="Continue to next step"]',page);

            console.log("Moving to the next job card...");
        }

        console.log("Finished processing all job cards.");
    } catch (err) {
        console.error("Error while applying to jobs:", err);
    }
};

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