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
        await scrollToBottom(page);


        const filterList = await page.$$('li.search-reusables__primary-filter');
        await filterList[0].click();
        await delay(5000);
        // await filterList[5].click();

        const jobsArr = await page.$$('li[data-occludable-job-id]');

        jobsArr.forEach(async (job, i) => {

            const jobHTML = await page.evaluate(el => el.innerHTML, job);
            const $ = cheerio.load(jobHTML);

            // Find the 'jobs-apply-button' within the job
            console.log($('button[data-job-id]'));
        })


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